import { AlgorandClient } from '@algorandfoundation/algokit-utils';
import { TransactionSignerAccount } from '@algorandfoundation/algokit-utils/types/account';
import algosdk from 'algosdk';
import { readFileSync } from 'fs';
import * as algoring from 'algoring-ts';
import { TownHallClient } from './clients/TownHallClient';
import { LSIG_FUND_AMOUNT, SLASH_DEPOSIT_AMOUNT } from './Constants';

export class Player {
  day_algo_address: TransactionSignerAccount & { account: algosdk.Account };

  night_algo_address: TransactionSignerAccount & { account: algosdk.Account };

  bls_private_key: Uint8Array;

  bls_public_key: Uint8Array;

  day_client: TownHallClient;

  night_client: TownHallClient;

  constructor(appId: bigint) {
    this.bls_private_key = algoring.generate_fe();
    this.bls_public_key = algoring.generate_ge(this.bls_private_key);
    this.day_algo_address = AlgorandClient.defaultLocalNet().account.random();
    this.night_algo_address = AlgorandClient.defaultLocalNet().account.random();
    this.day_client = AlgorandClient.defaultLocalNet()
      .setDefaultSigner(this.day_algo_address.signer)
      .client.getTypedAppClientById(TownHallClient, {
        appId,
        defaultSender: this.day_algo_address.addr,
        defaultSigner: this.day_algo_address.signer,
      }); // Client set with their signers, so we can have the player can sign
    this.night_client = AlgorandClient.defaultLocalNet()
      .setDefaultSigner(this.night_algo_address.signer)
      .client.getTypedAppClientById(TownHallClient, {
        appId,
        defaultSender: this.night_algo_address.addr,
        defaultSigner: this.night_algo_address.signer,
      }); // Client set with their signers, so we can have the player can sign
  }
}

export async function prepareLSigRingLink(
  i: number,
  playerClient: TownHallClient,
  msg: Uint8Array,
  pk: Uint8Array,
  keyImage: Uint8Array,
  signatureNonce: Uint8Array,
  inputC: Uint8Array,
  expectedCNext: Uint8Array
) {
  const abiBytes = algosdk.ABIType.from('byte[]');

  const lsigRingLinkLSigTeal = readFileSync(`./contracts/artifacts/RingLinkLSig${i.toString()}.lsig.teal`).toString(
    'utf-8'
  );

  const compileResult = await playerClient.algorand.app.compileTeal(lsigRingLinkLSigTeal);

  const lsigRingLinkLSig = new algosdk.LogicSigAccount(compileResult.compiledBase64ToBytes, [
    abiBytes.encode(msg),
    abiBytes.encode(pk),
    abiBytes.encode(algoring.to_pxpy(keyImage)),
    abiBytes.encode(signatureNonce),
    abiBytes.encode(inputC),
    abiBytes.encode(expectedCNext),
  ]);

  const sp = await AlgorandClient.defaultLocalNet().getSuggestedParams();

  const lSigRingSigPayTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    suggestedParams: { ...sp, flatFee: true, fee: 0 },
    from: lsigRingLinkLSig.address(),
    to: lsigRingLinkLSig.address(),
    amount: 0,
  });

  const lSigRingSigSigner = algosdk.makeLogicSigAccountTransactionSigner(lsigRingLinkLSig);
  return { lSigRingSigPayTxn, lSigRingSigSigner };
}

export async function getFunderLSig(playerClient: TownHallClient) {
  let funderLSigTEAL = readFileSync(`./contracts/artifacts/FunderLSig.lsig.teal`).toString('utf-8');

  funderLSigTEAL = funderLSigTEAL.replace('TMPL_APP_ID', playerClient.appId.toString());
  const compileResult = await playerClient.algorand.app.compileTeal(funderLSigTEAL);

  const funderLSig = new algosdk.LogicSigAccount(compileResult.compiledBase64ToBytes, []);

  return funderLSig;
}

export async function prepareFunderLSig(playerClient: TownHallClient, nightAddress: string) {
  const funderLSig = await getFunderLSig(playerClient);

  const sp = await AlgorandClient.defaultLocalNet().getSuggestedParams();

  const funderLSigPayTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    suggestedParams: { ...sp, flatFee: true, fee: 0 },
    from: funderLSig.address(),
    to: nightAddress,
    amount: LSIG_FUND_AMOUNT,
  });

  const funderLSigSigner = algosdk.makeLogicSigAccountTransactionSigner(funderLSig);
  return { funderLSigPayTxn, funderLSigSigner };
}

export async function unMaskDayStage(client: TownHallClient, blsSK: Uint8Array) {
  return client
    .newGroup()
    .dayStageUnmasking({ args: { blsSk: blsSK } })
    .dummyOpUp({
      args: { i: 1 },
    })
    .dummyOpUp({
      args: { i: 2 },
    })
    .dummyOpUp({
      args: { i: 3 },
    })
    .dummyOpUp({
      args: { i: 4 },
    })
    .dummyOpUp({
      args: { i: 5 },
    })
    .dummyOpUp({
      args: { i: 6 },
    })
    .dummyOpUp({
      args: { i: 7 },
    })
    .dummyOpUp({
      args: { i: 8 },
    })
    .dummyOpUp({
      args: { i: 9 },
    })
    .dummyOpUp({
      args: { i: 10 },
    })
    .dummyOpUp({
      args: { i: 11 },
    })
    .dummyOpUp({
      args: { i: 12 },
    })
    .send();
}

export async function unMaskDawnStage(client: TownHallClient, blsSK: Uint8Array) {
  return client
    .newGroup()
    .dawnStageUnmasking({ args: { blsSk: blsSK } })
    .dummyOpUp({
      args: { i: 1 },
    })
    .dummyOpUp({
      args: { i: 2 },
    })
    .dummyOpUp({
      args: { i: 3 },
    })
    .dummyOpUp({
      args: { i: 4 },
    })
    .dummyOpUp({
      args: { i: 5 },
    })
    .dummyOpUp({
      args: { i: 6 },
    })
    .dummyOpUp({
      args: { i: 7 },
    })
    .dummyOpUp({
      args: { i: 8 },
    })
    .dummyOpUp({
      args: { i: 9 },
    })
    .dummyOpUp({
      args: { i: 10 },
    })
    .dummyOpUp({
      args: { i: 11 },
    })
    .dummyOpUp({
      args: { i: 12 },
    })
    .send();
}

export async function joinGameLobby(client: TownHallClient, dayAddress: string, blsSK: Uint8Array) {
  // Fund the application as part of the joinGameLobby call.
  const depositPayment = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: dayAddress,
    to: client.appAddress,
    amount: LSIG_FUND_AMOUNT + SLASH_DEPOSIT_AMOUNT,
    suggestedParams: await AlgorandClient.defaultLocalNet().getSuggestedParams(),
  });

  const proof = algoring.NIZK_DLOG_generate_proof(blsSK);

  // Concatenate the proof into a single byte array
  const NIZK_DLOG = new Uint8Array(96 + 96 + 96 + 32);
  NIZK_DLOG.set(proof[0]);
  NIZK_DLOG.set(proof[1], 96);
  NIZK_DLOG.set(proof[2], 96 + 96);
  NIZK_DLOG.set(proof[3], 96 + 96 + 96);

  // eslint-disable-next-line no-await-in-loop
  return client
    .newGroup()
    .joinGameLobby({
      args: {
        depositTxn: depositPayment,
        nizkDlog: NIZK_DLOG,
      },
      extraFee: (1000).microAlgos(),
    })
    .dummyOpUp({
      args: { i: 1 },
    })
    .dummyOpUp({
      args: { i: 2 },
    })
    .dummyOpUp({
      args: { i: 3 },
    })
    .dummyOpUp({
      args: { i: 4 },
    })
    .dummyOpUp({
      args: { i: 5 },
    })
    .dummyOpUp({
      args: { i: 6 },
    })
    .dummyOpUp({
      args: { i: 7 },
    })
    .dummyOpUp({
      args: { i: 8 },
    })
    .dummyOpUp({
      args: { i: 9 },
    })
    .send();
}

export async function assignRole(
  client: TownHallClient,
  msg: Uint8Array,
  ring: Uint8Array,
  keyImage: Uint8Array,
  signatureConcat: Uint8Array,
  intermediateValues: Uint8Array,
  funderLSigTxn: algosdk.Transaction,
  funderLSigTxnSigner: algosdk.TransactionSigner,
  pts: algosdk.Transaction[],
  signers: algosdk.TransactionSigner[],
  length: number
) {
  return client
    .newGroup()
    .assignRole({
      args: {
        msg,
        pkAll: ring,
        keyImage: algoring.to_pxpy(keyImage),
        sig: signatureConcat,
        challenges: intermediateValues,
        funderLSigTxn: {
          txn: funderLSigTxn,
          signer: funderLSigTxnSigner,
        },
        ringLSigTxn0: {
          txn: pts[0],
          signer: signers[0],
        },
        ringLSigTxn1: {
          txn: pts[1],
          signer: signers[1],
        },
        ringLSigTxn2: {
          txn: pts[2],
          signer: signers[2],
        },
        ringLSigTxn3: {
          txn: pts[3],
          signer: signers[3],
        },
        ringLSigTxn4: {
          txn: pts[4],
          signer: signers[4],
        },
        ringLSigTxn5: {
          txn: pts[5],
          signer: signers[5],
        },
      },
      extraFee: (1000 * (length + 1)).microAlgos(),
    })
    .send();
}
