import { LogicSig } from '@algorandfoundation/tealscript';
import {
  BLS12381G1_BASEPOINT_BYTES,
  BLS12381G1_LENGTH,
  BLS12381_CURVE_ORDER_HEX,
  BLS12381_FIELD_MODULUS_HEX,
  RING_SIG_CHALL_LENGTH,
  RING_SIG_LINKS_AMNT,
  RING_SIG_NONCE_LENGTH,
} from './Constants';

const i = 2;

export class RingLinkLSig2 extends LogicSig {
  /** logic: challenge
   * Produce the challenge, i.e. an individual link in the ring sig verification.
   * We mod by order of fr https://github.com/Consensys/gnark-crypto/blob/master/ecc/bn254/fr/element.go#L42
   * c_{i+1} = Hs(m || r_{i} * G + c_{i} * K_{i} || r_{i}*Hp(K_{i}) + c_{i} * I) mod |fr|
   * @param msg - The message to be signed
   * @param pk - The public key relevant to this link.
   * @param keyImage - The key image of the signer, required for linkabiltiy to prevent double spending
   * @param nonce - The ring sig nonces, in 1 large byte array. The core of the ring sig itself.
   * @param cPrev - The input "challenge", or previous challenge in the ring sig verification flow.
   * @param cExpected - The expected challenge, to be compared against the calculated challenge.
   */
  logic(msg: bytes, pk: bytes, keyImage: bytes, nonce: bytes, cPrev: bytes, cExpected: bytes): void {
    /* CALCULATE LEFT-HAND SIDE OF EQUATION (AFTER MSG BYTES)
     ** r_{i} * G + c_{i} * K_{i}
     ** G = 0x00...0100...02 (basepoint)
     */
    const left = ecAdd(
      'BLS12_381g1',
      ecScalarMul('BLS12_381g1', hex(BLS12381G1_BASEPOINT_BYTES), nonce),
      ecScalarMul('BLS12_381g1', pk, cPrev)
    );

    // Added because the hashPointToPoint function could not be imported
    // HashPointToPoint section
    // Implementation of expand_msg_xmd in AVM START:
    const zPad = hex(
      '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    ); // 64 bytes of zeros for SHA-256
    const lIbStr = hex('0030'); // 2 bytes: 0x00, 0x30 for 48
    const dstPrime = hex('424c53313233383147315f584d443a5348412d3235365f535357555f524f5f1f'); // 'BLS12381G1_XMD:SHA-256_SSWU_RO_' '32'
    const msgPrime = concat(concat(concat(concat(zPad, pk), lIbStr), hex('00')), dstPrime);

    // First block
    const b0 = sha256(msgPrime);
    // Second block (counter = 1)
    const b1 = sha256(concat(concat(b0, hex('01')), dstPrime));
    // Third block (counter = 2), RFC-compliant: XOR b0 and b1
    const b2 = sha256(concat(concat(bitwiseXor(b0, b1), hex('02')), dstPrime));

    // Concatenate b1 and b2 to get 64 bytes, then slice to 48 bytes
    const uniformBytes = concat(extract3(b1, 0, 32), extract3(b2, 0, 16));
    // Implementation of ExpandMsgXmd in AVM END.

    const fpElement = btobigint(uniformBytes) % btobigint(hex(BLS12381_FIELD_MODULUS_HEX));
    // ^This field modulus is so much larger than 2^256 that it will never be required to reduce modulo it
    // This needs to be looked over and converted the ExpandMsgXmd method to properly implement EncodeToG1
    const hp2p = ecMapTo('BLS12_381g1', rawBytes(fpElement));

    /* CALCULATE RIGHT-HAND SIDE OF EQUATION (AFTER MSG BYTES)
     ** r_{i}*Hp(K_{i}) + c_{i} * I
     ** where Hp is a hash function that maps a point to a point on the curve
     */
    const right = ecAdd(
      'BLS12_381g1',
      ecScalarMul('BLS12_381g1', hp2p, nonce),
      ecScalarMul('BLS12_381g1', keyImage, cPrev)
    );

    /* COMBINE MSG BYTES WITH LEFT AND RIGHT BYTES
     ** Take hash of the concatenated bytes and then mod |fr|
     ** Then return the results.
     */
    const h = rawBytes(btobigint(sha256(concat(concat(msg, left), right))) % btobigint(hex(BLS12381_CURVE_ORDER_HEX)));

    assert(btobigint(h) === btobigint(cExpected));

    assert(this.txnGroup[this.txn.groupIndex + RING_SIG_LINKS_AMNT - i].applicationArgs[1] === rawBytes(msg));
    assert(
      extract3(
        this.txnGroup[this.txn.groupIndex + RING_SIG_LINKS_AMNT - i].applicationArgs[2],
        2 + i * BLS12381G1_LENGTH,
        BLS12381G1_LENGTH
      ) === pk
    );
    assert(this.txnGroup[this.txn.groupIndex + RING_SIG_LINKS_AMNT - i].applicationArgs[3] === rawBytes(keyImage));
    assert(
      extract3(
        this.txnGroup[this.txn.groupIndex + RING_SIG_LINKS_AMNT - i].applicationArgs[4],
        2 + (i + 1) * RING_SIG_NONCE_LENGTH,
        RING_SIG_NONCE_LENGTH
      ) === nonce
    );
    assert(
      extract3(
        this.txnGroup[this.txn.groupIndex + RING_SIG_LINKS_AMNT - i].applicationArgs[5],
        2 + i * RING_SIG_CHALL_LENGTH,
        RING_SIG_CHALL_LENGTH
      ) === cPrev
    );
    assert(
      extract3(
        this.txnGroup[this.txn.groupIndex + RING_SIG_LINKS_AMNT - i].applicationArgs[5],
        2 + ((i + 1) % 6) * RING_SIG_CHALL_LENGTH,
        RING_SIG_CHALL_LENGTH
      ) === cExpected
    );
  }
}
