import { Contract } from '@algorandfoundation/tealscript';
import {
  BLS12381_CURVE_ORDER_HEX,
  BLS12381_FIELD_MODULUS_HEX,
  BLS12381G1_BASEPOINT_BYTES,
  BLS12381G1_LENGTH,
  LSIG_FUND_AMOUNT,
  SLASH_DEPOSIT_AMOUNT,
  stateSetLSIGFunderAddress,
  stateAssignRole,
  stateDawnStageDeadOrSaved,
  stateDawnStageDoctorReveal,
  stateDawnStageMafiaReveal,
  stateDawnStageUnmasking,
  stateDayStageEliminate,
  stateDayStageUnmasking,
  stateDayStageVote,
  stateGameOver,
  stateJoinGameLobby,
  stateNightStageDoctorCommit,
  stateNightStageMafiaCommit,
} from './Constants';
import { RingLinkLSig0 } from './RingLinkLSig0.algo';
import { RingLinkLSig1 } from './RingLinkLSig1.algo';
import { RingLinkLSig2 } from './RingLinkLSig2.algo';
import { RingLinkLSig3 } from './RingLinkLSig3.algo';
import { RingLinkLSig4 } from './RingLinkLSig4.algo';
import { RingLinkLSig5 } from './RingLinkLSig5.algo';

type PlayerRecord = { address: Address; eliminated: uint64 };
// Would ideally be an ENUM but they are not supported at this point

export class TownHall extends Contract {
  creatorAddress = GlobalStateKey<Address>();
  // Players:

  player1AlgoAddr = GlobalStateKey<PlayerRecord>();

  player2AlgoAddr = GlobalStateKey<PlayerRecord>();

  player3AlgoAddr = GlobalStateKey<PlayerRecord>();

  player4AlgoAddr = GlobalStateKey<PlayerRecord>();

  player5AlgoAddr = GlobalStateKey<PlayerRecord>();

  player6AlgoAddr = GlobalStateKey<PlayerRecord>();

  // Roles:
  mafia = GlobalStateKey<Address>();

  mafiaKeyImage = GlobalStateKey<bytes>();

  doctor = GlobalStateKey<Address>();

  doctorKeyImage = GlobalStateKey<bytes>();

  farmer = GlobalStateKey<Address>();

  farmerKeyImage = GlobalStateKey<bytes>();

  butcher = GlobalStateKey<Address>();

  butcherKeyImage = GlobalStateKey<bytes>();

  innkeep = GlobalStateKey<Address>();

  innkeepKeyImage = GlobalStateKey<bytes>();

  grocer = GlobalStateKey<Address>();

  grocerKeyImage = GlobalStateKey<bytes>();

  // Ring Signature State:
  lsigFunderAddress = GlobalStateKey<Address>(); // The address of the FunderLSig, which is used to fund the night algo address

  // PK BOXES
  // We want to store the ephemeral PKs in a way that allows for easy access for when they are included in a ring signature.
  quickAccessPKBoxes = BoxMap<uint64, bytes>(); // Boxes containing PK bytes, accessible by [boxId][offsetIndex].

  // HashFilter BOXES
  // We want a simple way to ensure that an ephemeral PK or a key image (KI) is not submitted twice.
  hashFilter = BoxMap<bytes, bytes>(); // HashFilter with box titles = Hash(public key) or Hash/(key image)

  // Day States

  player1HasVoted = GlobalStateKey<uint64>();

  player1ReceivedVotes = GlobalStateKey<uint64>();

  player2HasVoted = GlobalStateKey<uint64>();

  player2ReceivedVotes = GlobalStateKey<uint64>();

  player3HasVoted = GlobalStateKey<uint64>();

  player3ReceivedVotes = GlobalStateKey<uint64>();

  player4HasVoted = GlobalStateKey<uint64>();

  player4ReceivedVotes = GlobalStateKey<uint64>();

  player5HasVoted = GlobalStateKey<uint64>();

  player5ReceivedVotes = GlobalStateKey<uint64>();

  player6HasVoted = GlobalStateKey<uint64>();

  player6ReceivedVotes = GlobalStateKey<uint64>();

  playersVoted = GlobalStateKey<uint64>();

  playersAlive = GlobalStateKey<uint64>();

  justEliminatedPlayer = GlobalStateKey<Address>();

  // Night States

  mafiaCommitment = GlobalStateKey<bytes>();

  doctorCommitment = GlobalStateKey<bytes>();

  mafiaVictim = GlobalStateKey<Address>();

  doctorPatient = GlobalStateKey<Address>();

  // Game States:

  playersJoined = GlobalStateKey<uint64>();

  gameState = GlobalStateKey<uint64>();

  createApplication(): void {
    this.creatorAddress.value = this.txn.sender;

    this.lsigFunderAddress.value = globals.zeroAddress;

    this.player1AlgoAddr.value = { address: globals.zeroAddress, eliminated: 0 };
    this.player2AlgoAddr.value = { address: globals.zeroAddress, eliminated: 0 };
    this.player3AlgoAddr.value = { address: globals.zeroAddress, eliminated: 0 };
    this.player4AlgoAddr.value = { address: globals.zeroAddress, eliminated: 0 };
    this.player5AlgoAddr.value = { address: globals.zeroAddress, eliminated: 0 };
    this.player6AlgoAddr.value = { address: globals.zeroAddress, eliminated: 0 };

    this.mafia.value = globals.zeroAddress;
    this.doctor.value = globals.zeroAddress;
    this.farmer.value = globals.zeroAddress;
    this.butcher.value = globals.zeroAddress;
    this.innkeep.value = globals.zeroAddress;
    this.grocer.value = globals.zeroAddress;

    this.player1HasVoted.value = 0;
    this.player2HasVoted.value = 0;
    this.player3HasVoted.value = 0;
    this.player4HasVoted.value = 0;
    this.player5HasVoted.value = 0;
    this.player6HasVoted.value = 0;
    this.playersVoted.value = 0;

    this.player1ReceivedVotes.value = 0;
    this.player2ReceivedVotes.value = 0;
    this.player3ReceivedVotes.value = 0;
    this.player4ReceivedVotes.value = 0;
    this.player5ReceivedVotes.value = 0;
    this.player6ReceivedVotes.value = 0;
    this.playersVoted.value = 0;

    this.playersJoined.value = 0;
    this.playersAlive.value = 6;

    this.justEliminatedPlayer.value = globals.zeroAddress;
    this.mafiaVictim.value = globals.zeroAddress;
    this.doctorPatient.value = globals.zeroAddress;

    this.gameState.value = 0;
  }

  /** Dummy Op Up
   * Dummy operation to get more opcode budget
   * @i - The number to return, necssary to deduplicate the name
   * @returns the number (but we do nothing with it)
   */
  dummyOpUp(i: uint64): uint64 {
    return i;
  }

  /* Cryptography Utils Functions Start Here */

  /*
    Non-Interactive Zero - Knowledge Proof of Discrete Logarithm Knowledge(DLOG)

    Given x = g ^ a, prove knowledge of a without revealing it.

    1: Prover samples a random r < - Z_q and computes v = g ^ r.
    2: Challenge is calculated as hash(g, x, v).
    3: Prover computes z = r - c * a.
    4: Verifier accepts iff v == g ^ z * x ^ c.

    Normally step 2 involves the verifier sampling c and sending it to the prover.
    However, we use the Fiat - Shamir heuristic to turn this protocol NON - INTERACTIVE.

    Since v = g ^ r, z = r - c * a and x = g ^ a, step 4 is
    --> g ^ r == g ^ (r - c * a) * (g ^ a) ^ c == g ^ r * g ^ -ca * g ^ ac == g ^ r
  */
  dlog(g: bytes, x: bytes, v: bytes, z: bytes): boolean {
    // Compute the challenge c
    const hash = keccak256(concat(g, concat(x, v)));
    const challenge = btobigint(hash) % btobigint(hex(BLS12381_CURVE_ORDER_HEX));

    return (
      v === ecAdd('BLS12_381g1', ecScalarMul('BLS12_381g1', g, z), ecScalarMul('BLS12_381g1', x, rawBytes(challenge)))
    );
  }

  hashPointToPoint(point: bytes): bytes {
    const hash = keccak256(point);
    const fpElement = btobigint(hash) % btobigint(hex(BLS12381_FIELD_MODULUS_HEX)); // 4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559787;
    // ^This field modulus is so much larger than 2^256 that it will never be required to reduce modulo it
    // This needs to be looked over and converted the ExpandMsgXmd method to properly implement EncodeToG1
    const result = ecMapTo('BLS12_381g1', rawBytes(fpElement));
    return result;
  }

  /* Game Functions Start Here */

  getGameState(): uint64 {
    return this.gameState.value;
  }

  setLSIGFunderAddress(funderLSigAddress: Address): void {
    assert(
      this.gameState.value === stateSetLSIGFunderAddress,
      'Invalid method call: Contract is not in Set LSig Funder Address state.'
    );

    assert(
      this.txn.sender === this.creatorAddress.value,
      'Error state: Only the creator can set the LSig Funder Address!'
    );

    assert(this.lsigFunderAddress.value === globals.zeroAddress, 'Error state: LSig Funder Address already set!');

    assert(funderLSigAddress !== globals.zeroAddress, 'Error state: LSig Funder Address cannot be the zero address.');

    // Set the LSig Funder Address
    this.lsigFunderAddress.value = funderLSigAddress;

    this.gameState.value = stateJoinGameLobby; // Go to next stage
  }

  joinGameLobby(depositTxn: PayTxn, NIZK_DLOG: bytes): void {
    assert(this.gameState.value === stateJoinGameLobby, 'Invalid method call: Game is not in Join Game Lobby state.');

    assert(
      this.playersJoined.value < 6,
      'Max players already joined! Error, game should have moved to the next stage already.'
    );

    if (
      this.player1AlgoAddr.value.address === this.txn.sender ||
      this.player2AlgoAddr.value.address === this.txn.sender ||
      this.player3AlgoAddr.value.address === this.txn.sender ||
      this.player4AlgoAddr.value.address === this.txn.sender ||
      this.player5AlgoAddr.value.address === this.txn.sender ||
      this.player6AlgoAddr.value.address === this.txn.sender
    ) {
      throw Error('Error state: Player already joined the game!');
    }

    // Check that the caller is depositing the slash amount + the LSig fund amount
    // The LSig fund amount is the amount that will be used to fund the night algo address
    assert(depositTxn.amount >= LSIG_FUND_AMOUNT + SLASH_DEPOSIT_AMOUNT, 'Invalid FunderLSig amount!');

    const g = extract3(NIZK_DLOG, 0, BLS12381G1_LENGTH);
    const RingPK = extract3(NIZK_DLOG, BLS12381G1_LENGTH, BLS12381G1_LENGTH); // This is the BLS12_381 Ephemeral PK of the player
    const v = extract3(NIZK_DLOG, BLS12381G1_LENGTH * 2, BLS12381G1_LENGTH);
    const z = extract3(NIZK_DLOG, BLS12381G1_LENGTH * 3, 32);

    // Assert that the hash of the public key does not exist in the hash filter

    // Verify ephemeralPK and NIZK_DLOG proof
    assert(this.dlog(g, RingPK, v, z), 'DLOG NIZK Proof failed!');

    if (!this.quickAccessPKBoxes(0).exists) {
      this.quickAccessPKBoxes(0).create(BLS12381G1_LENGTH);
    } else {
      this.quickAccessPKBoxes(0).resize(this.quickAccessPKBoxes(0).size + BLS12381G1_LENGTH);
    }

    // Verify that the box exists
    assert(this.quickAccessPKBoxes(0).exists, 'PK Box failed to be created.');

    this.quickAccessPKBoxes(0).replace(this.playersJoined.value * BLS12381G1_LENGTH, RingPK);
    this.playersJoined.value += 1;

    assert(this.lsigFunderAddress.value !== globals.zeroAddress, 'Error state: LSig Funder Address not set!');

    // Fund the LSIG
    sendPayment({
      amount: LSIG_FUND_AMOUNT,
      receiver: this.lsigFunderAddress.value,
    });

    if (this.player1AlgoAddr.value.address === globals.zeroAddress) {
      this.player1AlgoAddr.value.address = this.txn.sender;
      return;
    }
    if (this.player2AlgoAddr.value.address === globals.zeroAddress) {
      this.player2AlgoAddr.value.address = this.txn.sender;
      return;
    }
    if (this.player3AlgoAddr.value.address === globals.zeroAddress) {
      this.player3AlgoAddr.value.address = this.txn.sender;
      return;
    }
    if (this.player4AlgoAddr.value.address === globals.zeroAddress) {
      this.player4AlgoAddr.value.address = this.txn.sender;
      return;
    }
    if (this.player5AlgoAddr.value.address === globals.zeroAddress) {
      this.player5AlgoAddr.value.address = this.txn.sender;
      return;
    }
    if (this.player6AlgoAddr.value.address === globals.zeroAddress) {
      this.player6AlgoAddr.value.address = this.txn.sender;
      this.gameState.value = stateAssignRole; // Go to next stage.
      return;
    }

    throw Error('Invalid state! Error, game should have moved to the next stage already.');
  }

  assignRole(
    msg: bytes,
    pkAll: bytes,
    keyImage: bytes,
    sig: bytes, // Sig and challenges need to be included for the logic sigs to access
    challenges: bytes,
    funderLSigTxn: PayTxn,
    ringLSigTxn0: PayTxn,
    ringLSigTxn1: PayTxn,
    ringLSigTxn2: PayTxn,
    ringLSigTxn3: PayTxn,
    ringLSigTxn4: PayTxn,
    ringLSigTxn5: PayTxn
  ): void {
    assert(this.gameState.value === stateAssignRole, 'Invalid method call: Game is not in Assign Role state.');

    // To verify a RingSig you need:
    // 1. The key image of the signer in question, to prevent duplicate calling/"double spending"
    // 2. The message that was signed
    // 3. The public keys of the n participants
    // 4. The signature itself

    // Regarding 1:
    assert(
      !this.hashFilter(rawBytes(sha256(keyImage))).exists,
      'KeyImage already in store. Are you trying to double-dip with your ring signature?'
    ); // Has Key Image been used before?
    this.hashFilter(rawBytes(sha256(keyImage))).create(0); // This Key Image can no longer be used

    // Regarding 2: The message is a concatenation of the calling address and this contract's address
    // (Prevents replay attacks.)
    assert(msg === concat(rawBytes(this.txn.sender), rawBytes(this.app.address)));

    // Regarding 3: Verify PKs are correct:
    assert(
      this.quickAccessPKBoxes(0).extract(0, 6 * BLS12381G1_LENGTH) === pkAll,
      'Invalid PKs! Are you trying to pass in a different ring of PKs?'
    );

    // Regarding 4: Verify Correct RingSig Links Calculation

    verifyTxn(ringLSigTxn0, { sender: Address.fromBytes(RingLinkLSig0.address()) });
    verifyTxn(ringLSigTxn1, { sender: Address.fromBytes(RingLinkLSig1.address()) });
    verifyTxn(ringLSigTxn2, { sender: Address.fromBytes(RingLinkLSig2.address()) });
    verifyTxn(ringLSigTxn3, { sender: Address.fromBytes(RingLinkLSig3.address()) });
    verifyTxn(ringLSigTxn4, { sender: Address.fromBytes(RingLinkLSig4.address()) });
    verifyTxn(ringLSigTxn5, { sender: Address.fromBytes(RingLinkLSig5.address()) });

    // Verify that the nightAlgoAddress is being funded with the LSIG
    verifyTxn(funderLSigTxn, {
      sender: Address.fromBytes(this.lsigFunderAddress.value),
      receiver: this.txn.sender,
      amount: LSIG_FUND_AMOUNT,
    });

    // TODO: introduce some type of randomness here, so that it is more difficult for someone
    // to be able to influence which role they will get. Currently it is just whichever player
    // was able to get their transaction in first, and if they happen to be the block proposer
    // they will be able to control the order of transactions.

    if (this.mafia.value === globals.zeroAddress) {
      this.mafia.value = this.txn.sender;
      this.mafiaKeyImage.value = keyImage;
      return;
    }
    if (this.doctor.value === globals.zeroAddress) {
      this.doctor.value = this.txn.sender;
      this.doctorKeyImage.value = keyImage;
      return;
    }
    if (this.farmer.value === globals.zeroAddress) {
      this.farmer.value = this.txn.sender;
      this.farmerKeyImage.value = keyImage;
      return;
    }
    if (this.butcher.value === globals.zeroAddress) {
      this.butcher.value = this.txn.sender;
      this.butcherKeyImage.value = keyImage;
      return;
    }
    if (this.innkeep.value === globals.zeroAddress) {
      this.innkeep.value = this.txn.sender;
      this.innkeepKeyImage.value = keyImage;
      return;
    }
    if (this.grocer.value === globals.zeroAddress) {
      this.grocer.value = this.txn.sender;
      this.grocerKeyImage.value = keyImage;
      this.gameState.value = stateDayStageVote; // Go to day
      return;
    }

    throw Error('Invalid state! Error, game should have moved to the next stage already.');
  }

  dayStageVote(vote: uint64): void {
    assert(this.gameState.value === stateDayStageVote, 'Invalid method call: Game is not in Day Stage Vote state.');

    assert(vote > 0 && vote < 7, 'Invalid vote: Vote must be int 1 <= n <= 6.');

    if (
      !(
        this.txn.sender === this.player1AlgoAddr.value.address ||
        this.txn.sender === this.player2AlgoAddr.value.address ||
        this.txn.sender === this.player3AlgoAddr.value.address ||
        this.txn.sender === this.player4AlgoAddr.value.address ||
        this.txn.sender === this.player5AlgoAddr.value.address ||
        this.txn.sender === this.player6AlgoAddr.value.address
      )
    ) {
      throw Error('Illegal call: Address sender not allowed to vote.');
    }

    if (vote === 1 && this.player1AlgoAddr.value.address !== globals.zeroAddress) {
      this.player1ReceivedVotes.value += 1;
    } else if (vote === 2 && this.player2AlgoAddr.value.address !== globals.zeroAddress) {
      this.player2ReceivedVotes.value += 1;
    } else if (vote === 3 && this.player3AlgoAddr.value.address !== globals.zeroAddress) {
      this.player3ReceivedVotes.value += 1;
    } else if (vote === 4 && this.player4AlgoAddr.value.address !== globals.zeroAddress) {
      this.player4ReceivedVotes.value += 1;
    } else if (vote === 5 && this.player5AlgoAddr.value.address !== globals.zeroAddress) {
      this.player5ReceivedVotes.value += 1;
    } else if (vote === 6 && this.player6AlgoAddr.value.address !== globals.zeroAddress) {
      this.player6ReceivedVotes.value += 1;
    } else {
      throw Error('Invalid vote: Is player still alive?');
    }

    if (this.txn.sender === this.player1AlgoAddr.value.address && this.player1HasVoted.value === 0) {
      this.player1HasVoted.value = 1;
    } else if (this.txn.sender === this.player2AlgoAddr.value.address && this.player2HasVoted.value === 0) {
      this.player2HasVoted.value = 1;
    } else if (this.txn.sender === this.player3AlgoAddr.value.address && this.player3HasVoted.value === 0) {
      this.player3HasVoted.value = 1;
    } else if (this.txn.sender === this.player4AlgoAddr.value.address && this.player4HasVoted.value === 0) {
      this.player4HasVoted.value = 1;
    } else if (this.txn.sender === this.player5AlgoAddr.value.address && this.player5HasVoted.value === 0) {
      this.player5HasVoted.value = 1;
    } else if (this.txn.sender === this.player6AlgoAddr.value.address && this.player6HasVoted.value === 0) {
      this.player6HasVoted.value = 1;
    } else {
      throw Error('Address not allowed to vote.'); // Error state, player has already voted, or not actually player voting
    }

    this.playersVoted.value += 1;

    if (this.playersVoted.value === this.playersAlive.value) {
      // All players have voted
      this.gameState.value = stateDayStageEliminate; // Go to next stage

      // Reset all votes
      this.playersVoted.value = 0;
      this.player1HasVoted.value = 0;
      this.player2HasVoted.value = 0;
      this.player3HasVoted.value = 0;
      this.player4HasVoted.value = 0;
      this.player5HasVoted.value = 0;
      this.player6HasVoted.value = 0;
    }

    // TODO: Implement timer as well, to force a decision to be made in time and prevent the game from stalling
  }

  dayStageEliminate(): void {
    assert(
      this.gameState.value === stateDayStageEliminate,
      'Invalid method call: Game is not in Day Stage Eliminate state.'
    );

    this.justEliminatedPlayer.value = globals.zeroAddress;
    let topVotes = 0;

    // Sometimes we get a draw, in which case we need to have a tiebreaker
    // We check if the global round is even or odd and use that as our tiebreaker
    // Definitely NOT the best way to do this, but it's a simple way to do it

    const even = globals.round % 2 === 0;

    if (this.player1ReceivedVotes.value > topVotes || (this.player1ReceivedVotes.value === topVotes && even)) {
      this.justEliminatedPlayer.value = this.player1AlgoAddr.value.address;
      topVotes = this.player1ReceivedVotes.value;
    }

    if (this.player2ReceivedVotes.value > topVotes || (this.player2ReceivedVotes.value === topVotes && even)) {
      this.justEliminatedPlayer.value = this.player2AlgoAddr.value.address;
      topVotes = this.player2ReceivedVotes.value;
    }

    if (this.player3ReceivedVotes.value > topVotes || (this.player3ReceivedVotes.value === topVotes && even)) {
      this.justEliminatedPlayer.value = this.player3AlgoAddr.value.address;
      topVotes = this.player3ReceivedVotes.value;
    }

    if (this.player4ReceivedVotes.value > topVotes || (this.player4ReceivedVotes.value === topVotes && even)) {
      this.justEliminatedPlayer.value = this.player4AlgoAddr.value.address;
      topVotes = this.player4ReceivedVotes.value;
    }

    if (this.player5ReceivedVotes.value > topVotes || (this.player5ReceivedVotes.value === topVotes && even)) {
      this.justEliminatedPlayer.value = this.player5AlgoAddr.value.address;
      topVotes = this.player5ReceivedVotes.value;
    }

    if (this.player6ReceivedVotes.value > topVotes || (this.player6ReceivedVotes.value === topVotes && even)) {
      this.justEliminatedPlayer.value = this.player6AlgoAddr.value.address;
      topVotes = this.player6ReceivedVotes.value;
    }

    assert(this.justEliminatedPlayer.value !== globals.zeroAddress, 'Error state: Zero Address won vote!');
    assert(topVotes !== 0, 'Error state: No votes were cast!');

    // justEliminatedPlayer should now be the player with the most votes
    // The player with the most votes is Eliminateed; they are removed from the game

    if (this.justEliminatedPlayer.value === this.player1AlgoAddr.value.address) {
      this.player1AlgoAddr.value.eliminated = 1;
    }

    if (this.justEliminatedPlayer.value === this.player2AlgoAddr.value.address) {
      this.player2AlgoAddr.value.eliminated = 1;
    }

    if (this.justEliminatedPlayer.value === this.player3AlgoAddr.value.address) {
      this.player3AlgoAddr.value.eliminated = 1;
    }

    if (this.justEliminatedPlayer.value === this.player4AlgoAddr.value.address) {
      this.player4AlgoAddr.value.eliminated = 1;
    }

    if (this.justEliminatedPlayer.value === this.player5AlgoAddr.value.address) {
      this.player5AlgoAddr.value.eliminated = 1;
    }

    if (this.justEliminatedPlayer.value === this.player6AlgoAddr.value.address) {
      this.player6AlgoAddr.value.eliminated = 1;
    }

    this.playersAlive.value -= 1;

    // Reset all votes

    this.player1ReceivedVotes.value = 0;
    this.player2ReceivedVotes.value = 0;
    this.player3ReceivedVotes.value = 0;
    this.player4ReceivedVotes.value = 0;
    this.player5ReceivedVotes.value = 0;
    this.player6ReceivedVotes.value = 0;

    this.gameState.value = stateDayStageUnmasking; // Go to next stage
  }

  dayStageUnmasking(blsSk: bytes): void {
    assert(
      this.gameState.value === stateDayStageUnmasking,
      'Invalid method call: Game is not in Day Stage Reveal state.'
    );

    assert(this.justEliminatedPlayer.value === this.txn.sender, 'Error state: Other player called method.');
    // TODO: Implement timer, to avoid everyone waiting indefinitely on a reluctant eliminated player.

    const BLS_PK = ecScalarMul('BLS12_381g1', hex(BLS12381G1_BASEPOINT_BYTES), blsSk);
    const hashToPoint = this.hashPointToPoint(BLS_PK);
    const genKeyImage = ecScalarMul('BLS12_381g1', hashToPoint, blsSk);

    if (genKeyImage === this.mafiaKeyImage.value) {
      // The village eliminated the mafia!
      // The townsfolk have won!
      this.mafia.value = globals.zeroAddress;
      this.gameState.value = stateGameOver;
      return;
    }

    if (genKeyImage === this.doctorKeyImage.value) {
      // The village eliminated the doctor! Uh oh.
      this.doctor.value = globals.zeroAddress;
    }

    this.justEliminatedPlayer.value = globals.zeroAddress;

    if (this.playersAlive.value <= 2) {
      // The mafia has won!
      // This assumes that the mafia is 1 of the remaining plays.
      this.gameState.value = stateGameOver;
      return;
    }

    this.gameState.value = stateNightStageMafiaCommit; // Go to next stage
  }

  nightStageMafiaCommit(commitment: bytes): void {
    assert(
      this.gameState.value === stateNightStageMafiaCommit,
      'Invalid method call: Game is not in Night Stage Maffia Commit state.'
    );

    assert(this.txn.sender === this.mafia.value, 'Error state: Non-mafia player called method.');

    this.mafiaCommitment.value = commitment;

    if (this.doctor.value === globals.zeroAddress) {
      // If doctor is dead, no point in waiting for them to commit
      this.gameState.value = stateDawnStageMafiaReveal;
    } else {
      this.gameState.value = stateNightStageDoctorCommit;
    }
  }

  nightStageDoctorCommit(commitment: bytes): void {
    assert(
      this.gameState.value === stateNightStageDoctorCommit,
      'Invalid method call: Game is not in Night Stage Doctor Commit state.'
    );

    assert(this.txn.sender === this.doctor.value, 'Error state: Non-doctor player called method.');
    assert(
      this.doctor.value !== globals.zeroAddress,
      'Error state: Doctor is dead, should not have entered this state.'
    );

    this.doctorCommitment.value = commitment;

    this.gameState.value = stateDawnStageMafiaReveal;
  }

  dawnStageMafiaReveal(victimAim: Address, blinder: bytes32): void {
    assert(
      this.gameState.value === stateDawnStageMafiaReveal,
      'Invalid method call: Game is not in Dawn Stage Maffia Reveal state.'
    );

    assert(this.txn.sender === this.mafia.value, 'Error state: Non-mafia player called method.');

    assert(victimAim !== globals.zeroAddress, 'Error state: Victim must be a valid address.');

    // TODO: Implement timer logic that handles the case where the mafia doesn't call this method (successfully) in time

    const reveal = sha256(concat(victimAim, blinder));

    assert(
      rawBytes(reveal) === this.mafiaCommitment.value,
      'Error state: Provided address + blinder does NOT match commitment.'
    );

    if (victimAim === this.player1AlgoAddr.value.address) {
      this.mafiaVictim.value = this.player1AlgoAddr.value.address;
    } else if (victimAim === this.player2AlgoAddr.value.address) {
      this.mafiaVictim.value = this.player2AlgoAddr.value.address;
    } else if (victimAim === this.player3AlgoAddr.value.address) {
      this.mafiaVictim.value = this.player3AlgoAddr.value.address;
    } else if (victimAim === this.player4AlgoAddr.value.address) {
      this.mafiaVictim.value = this.player4AlgoAddr.value.address;
    } else if (victimAim === this.player5AlgoAddr.value.address) {
      this.mafiaVictim.value = this.player5AlgoAddr.value.address;
    } else if (victimAim === this.player6AlgoAddr.value.address) {
      this.mafiaVictim.value = this.player6AlgoAddr.value.address;
    } else {
      this.mafiaVictim.value = globals.zeroAddress; // The mafia failed to provide a valid player!
    }

    // Reset commitment
    // TODO: this.mafiaCommitment.value = hex('0');

    if (this.doctor.value === globals.zeroAddress) {
      // If doctor is dead, no point in waiting for them to reveal
      this.gameState.value = stateDawnStageDeadOrSaved;
    } else {
      // If doctor is alive, wait for them to reveal
      this.gameState.value = stateDawnStageDoctorReveal;
    }
  }

  dawnStageDoctorReveal(patientAim: Address, blinder: bytes32): void {
    assert(
      this.gameState.value === stateDawnStageDoctorReveal,
      'Invalid method call: Game is not in Dawn Stage Doctor Reveal state.'
    );

    assert(this.txn.sender === this.doctor.value, 'Error state: Non-doctor player called method.');

    assert(this.doctorPatient.value === globals.zeroAddress, 'Error state: Doctor has already committed to a patient.');

    assert(patientAim !== globals.zeroAddress, 'Error state: Patient must be a valid address.');

    // TODO: Implement timer logic that handles the case where the mafia doesn't call this method (successfully) in time

    const reveal = sha256(concat(patientAim, blinder));

    assert(
      rawBytes(reveal) === this.doctorCommitment.value,
      'Error state: Provided address + blinder does NOT match commitment.'
    );

    if (patientAim === this.player1AlgoAddr.value.address) {
      this.doctorPatient.value = this.player1AlgoAddr.value.address;
    } else if (patientAim === this.player2AlgoAddr.value.address) {
      this.doctorPatient.value = this.player2AlgoAddr.value.address;
    } else if (patientAim === this.player3AlgoAddr.value.address) {
      this.doctorPatient.value = this.player3AlgoAddr.value.address;
    } else if (patientAim === this.player4AlgoAddr.value.address) {
      this.doctorPatient.value = this.player4AlgoAddr.value.address;
    } else if (patientAim === this.player5AlgoAddr.value.address) {
      this.doctorPatient.value = this.player5AlgoAddr.value.address;
    } else if (patientAim === this.player6AlgoAddr.value.address) {
      this.doctorPatient.value = this.player6AlgoAddr.value.address;
    } else {
      this.doctorPatient.value = globals.zeroAddress; // The doctor failed to provide a valid player!
    }

    // Reset commitment
    // TODO: this.doctorCommitment.value = hex('0'); ? Is it necessary?

    this.gameState.value = stateDawnStageDeadOrSaved;
  }

  dawnStageDeadOrSaved() {
    assert(
      this.gameState.value === stateDawnStageDeadOrSaved,
      'Invalid method call: Game is not in Dawn Stage DeadOrSaved? state.'
    );

    if (this.mafiaVictim.value === globals.zeroAddress || this.mafiaVictim.value === this.doctorPatient.value) {
      // Nothing happened!
      // Either the Mafia failed to provide a valid address, or the Doctor managed to save the  victim.
      // (Or, neither of them providede a valid address...)
      // The game continues.
      this.mafiaVictim.value = globals.zeroAddress; // Reset the mafia victim
      this.doctorPatient.value = globals.zeroAddress; // Reset the doctor patient
      this.gameState.value = stateDayStageVote;
      return;
    }

    // TODO: look into the possibility preventing the doctor saving the same person twice in a row

    if (this.mafiaVictim.value === this.player1AlgoAddr.value.address) {
      this.justEliminatedPlayer.value = this.player1AlgoAddr.value.address;
      this.player1AlgoAddr.value.eliminated = 1;
    } else if (this.mafiaVictim.value === this.player2AlgoAddr.value.address) {
      this.justEliminatedPlayer.value = this.player2AlgoAddr.value.address;
      this.player2AlgoAddr.value.eliminated = 1;
    } else if (this.mafiaVictim.value === this.player3AlgoAddr.value.address) {
      this.justEliminatedPlayer.value = this.player3AlgoAddr.value.address;
      this.player3AlgoAddr.value.eliminated = 1;
    } else if (this.mafiaVictim.value === this.player4AlgoAddr.value.address) {
      this.justEliminatedPlayer.value = this.player4AlgoAddr.value.address;
      this.player4AlgoAddr.value.eliminated = 1;
    } else if (this.mafiaVictim.value === this.player5AlgoAddr.value.address) {
      this.justEliminatedPlayer.value = this.player5AlgoAddr.value.address;
      this.player5AlgoAddr.value.eliminated = 1;
    } else if (this.mafiaVictim.value === this.player6AlgoAddr.value.address) {
      this.justEliminatedPlayer.value = this.player6AlgoAddr.value.address;
      this.player6AlgoAddr.value.eliminated = 1;
    } else {
      throw Error('Error state: Victim must be a player! Should not have entered this state.');
    }

    this.playersAlive.value -= 1;

    this.mafiaVictim.value = globals.zeroAddress; // Reset the mafia victim
    this.doctorPatient.value = globals.zeroAddress; // Reset the doctor patient

    if (this.playersAlive.value <= 2) {
      // The mafia has won!
      // This assumes that the mafia is 1 of the remaining plays.
      this.gameState.value = stateGameOver;
      return;
    }

    this.gameState.value = stateDawnStageUnmasking; // Go to next stage
  }

  dawnStageUnmasking(blsSk: bytes): void {
    // This stage is a little unnecessary since it is illogical for he mafia to kill themselves
    // It would be simpler to assume that the mafia would never kill themselves and just check instead
    // if the number of non-mafia players alive is enough to continue the game or if the mafia won
    // But we'll keep this stage. At the very least, it reveals if the doctor is alive or not

    assert(
      this.gameState.value === stateDawnStageUnmasking,
      'Invalid method call: Game is not in Dawn Stage Unmasking state.'
    );

    assert(this.justEliminatedPlayer.value === this.txn.sender, 'Error state: Other player called method.');
    // TODO: Implement timer, to avoid everyone waiting indefinitely on a reluctant eliminated player.

    const BLS_PK = ecScalarMul('BLS12_381g1', hex(BLS12381G1_BASEPOINT_BYTES), blsSk);
    const hashToPoint = this.hashPointToPoint(BLS_PK);
    const genKeyImage = ecScalarMul('BLS12_381g1', hashToPoint, blsSk);

    if (genKeyImage === this.mafiaKeyImage.value) {
      // The mafia somehow eliminated the mafia!?
      // Impossible scenario in this one with only 1 mafia?
      // The townsfolk have won!
      this.gameState.value = stateGameOver;
      this.mafia.value = globals.zeroAddress;
      return;
    }

    if (genKeyImage === this.doctorKeyImage.value) {
      // The village eliminated the doctor! Uh oh.
      this.doctor.value = globals.zeroAddress;
    }

    // Reset the justEliminatedPlayer
    this.justEliminatedPlayer.value = globals.zeroAddress;

    this.gameState.value = stateDayStageVote;
  }

  // @allow.call('DeleteApplication')
  gameOver(): void {
    assert(this.gameState.value === stateGameOver, 'Invalid method call: Game is not in Game Over state.');
    this.quickAccessPKBoxes(0).delete(); // Delete the PK Box
    this.hashFilter(rawBytes(sha256(this.mafiaKeyImage.value))).delete(); // Delete the Key Image from the hash filter
    this.hashFilter(rawBytes(sha256(this.doctorKeyImage.value))).delete(); // Delete the Key Image from the hash filter
    this.hashFilter(rawBytes(sha256(this.farmerKeyImage.value))).delete(); // Delete the Key Image from the hash filter
    this.hashFilter(rawBytes(sha256(this.butcherKeyImage.value))).delete(); // Delete the Key Image from the hash filter
    this.hashFilter(rawBytes(sha256(this.innkeepKeyImage.value))).delete(); // Delete the Key Image from the hash filter
    this.hashFilter(rawBytes(sha256(this.grocerKeyImage.value))).delete(); // Delete the Key Image from the hash filter

    const returnAmount = SLASH_DEPOSIT_AMOUNT - globals.minTxnFee; // Return the slash deposit amount minus the minimum transaction fee

    sendPayment({
      amount: returnAmount,
      receiver: this.player1AlgoAddr.value.address,
      fee: globals.minTxnFee,
    });

    sendPayment({
      amount: returnAmount,
      receiver: this.player2AlgoAddr.value.address,
      fee: globals.minTxnFee,
    });
    sendPayment({
      amount: returnAmount,
      receiver: this.player3AlgoAddr.value.address,
      fee: globals.minTxnFee,
    });

    sendPayment({
      amount: returnAmount,
      receiver: this.player4AlgoAddr.value.address,
      fee: globals.minTxnFee,
    });

    sendPayment({
      amount: returnAmount,
      receiver: this.player5AlgoAddr.value.address,
      fee: globals.minTxnFee,
    });

    sendPayment({
      amount: returnAmount,
      receiver: this.player6AlgoAddr.value.address,
      fee: globals.minTxnFee,
    });
  }

  deleteApplication(): void {
    assert(this.gameState.value === stateGameOver, 'Invalid method call: Game is not in Game Over state.');
    sendPayment({ closeRemainderTo: this.creatorAddress.value });
  }
}
