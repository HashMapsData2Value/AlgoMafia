/* eslint-disable no-await-in-loop */
import { describe, test, expect, beforeAll, beforeEach } from '@jest/globals';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import { Config } from '@algorandfoundation/algokit-utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as algoring from 'algoring-ts';
import algosdk from 'algosdk';

import { TownHallClient, TownHallFactory } from '../contracts/clients/TownHallClient';
import {
  BLS12381G1_LENGTH,
  RING_SIG_CHALL_LENGTH,
  RING_SIG_NONCE_LENGTH,
  stateSetLSIGFunderAddress,
  stateAssignRole,
  stateJoinGameLobby,
  stateAssignRoleTimeout,
  ROUNDS_TO_TIMEOUT,
} from '../contracts/Constants';
import {
  joinGameLobby,
  Player,
  prepareLSigRingLink,
  assignRole,
  prepareFunderLSig,
  advanceRounds,
  getFunderLSig,
} from '../contracts/Utils';

const fixture = algorandFixture();
Config.configure({ populateAppCallResources: true });

let appClient: TownHallClient;

const fundAmount = (10).algo();

let players: Player[];

describe('TownHall', () => {
  beforeEach(fixture.beforeEach);

  beforeAll(async () => {
    await fixture.beforeEach();
    const { testAccount } = fixture.context;
    const { algorand } = fixture;

    const factory = new TownHallFactory({
      algorand,
      defaultSender: testAccount.addr,
    });

    const createResult = await factory.send.create.createApplication();

    appClient = createResult.appClient;

    players = Array.from({ length: 6 }, () => new Player(appClient.appId));
    players.forEach(async (player) => {
      algorand.account.ensureFundedFromEnvironment(player.day_algo_address.account.addr, fundAmount);
    });
  });

  test('3 honest players join', async () => {
    expect(Number((await appClient.send.getGameState()).return)).toEqual(stateSetLSIGFunderAddress);
    /// <----------- ENTERED SetLSIGFunderAddress Stage ----------->

    // Set the LSIG funder address
    const funderLSig = await getFunderLSig(appClient);
    const funderLSigAddress = funderLSig.address();

    await appClient.send.setLsigFunderAddress({
      args: { funderLSigAddress },
    });

    expect(Number((await appClient.send.getGameState()).return)).toEqual(stateJoinGameLobby);
    /// <----------- ENTERED JoinGameLobby Stage ----------->

    // eslint-disable-next-line no-restricted-syntax
    for (const player of players) {
      await joinGameLobby(player.day_client, player.day_algo_address.addr, player.bls_private_key);
    }
    expect((await appClient.state.global.player1AlgoAddr())![0]).toBe(players[0].day_algo_address.addr);
    expect((await appClient.state.global.player1AlgoAddr())![1]).toBe(BigInt(0));

    expect((await appClient.state.global.player2AlgoAddr())![0]).toBe(players[1].day_algo_address.addr);
    expect((await appClient.state.global.player2AlgoAddr())![1]).toBe(BigInt(0));

    expect((await appClient.state.global.player3AlgoAddr())![0]).toBe(players[2].day_algo_address.addr);
    expect((await appClient.state.global.player3AlgoAddr())![1]).toBe(BigInt(0));

    expect((await appClient.state.global.player4AlgoAddr())![0]).toBe(players[3].day_algo_address.addr);
    expect((await appClient.state.global.player4AlgoAddr())![1]).toBe(BigInt(0));

    expect((await appClient.state.global.player5AlgoAddr())![0]).toBe(players[4].day_algo_address.addr);
    expect((await appClient.state.global.player5AlgoAddr())![1]).toBe(BigInt(0));

    expect((await appClient.state.global.player6AlgoAddr())![0]).toBe(players[5].day_algo_address.addr);
    expect((await appClient.state.global.player6AlgoAddr())![1]).toBe(BigInt(0));
    const ring = await appClient.state.box.quickAccessPkBoxes.value(0);
    if (!ring) {
      throw new Error('ring is undefined');
    }
    expect(ring.length).toBe(BLS12381G1_LENGTH * 6);
    // TODO: Refactor and make sure that the same player can't join twice lol

    expect(Number((await appClient.send.getGameState()).return)).toEqual(stateAssignRole); // Advanced to the AssignRoles stage
    /// <----------- ENTERED AssignRole Stage ----------->

    const ringOfPKs = [
      algoring.from_pxpy(ring.slice(0 * BLS12381G1_LENGTH, 1 * BLS12381G1_LENGTH)),
      algoring.from_pxpy(ring.slice(1 * BLS12381G1_LENGTH, 2 * BLS12381G1_LENGTH)),
      algoring.from_pxpy(ring.slice(2 * BLS12381G1_LENGTH, 3 * BLS12381G1_LENGTH)),
      algoring.from_pxpy(ring.slice(3 * BLS12381G1_LENGTH, 4 * BLS12381G1_LENGTH)),
      algoring.from_pxpy(ring.slice(4 * BLS12381G1_LENGTH, 5 * BLS12381G1_LENGTH)),
      algoring.from_pxpy(ring.slice(5 * BLS12381G1_LENGTH, 6 * BLS12381G1_LENGTH)),
    ];

    const honestPlayers = players.slice(0, 3);

    // eslint-disable-next-line no-restricted-syntax
    for (const player of honestPlayers) {
      const msg = Buffer.concat([
        algosdk.decodeAddress(player.night_algo_address.addr).publicKey,
        algosdk.decodeAddress(player.night_client.appClient.appAddress).publicKey,
      ]);

      // ALGORING-TS TODO: Remove genKeyImage's PK input, it should be directly generated from SK.
      const keyImage = algoring.genKeyImage(player.bls_private_key, player.bls_public_key);

      // ALGORING-TS TODO: Remove KeyImage return since it is superfluous OR KeyImage input
      const { signature } = algoring.generate_ring_signature(msg, player.bls_private_key, ringOfPKs, keyImage);

      expect(algoring.verify_ring_signature(msg, signature, ringOfPKs, keyImage)).toBe(true);

      // ALGORING-TS TODO: remove msg return
      const { signatureConcat, intermediateValues } = algoring.construct_avm_ring_signature(
        msg,
        signature,
        ringOfPKs,
        keyImage
      );

      // BEGIN LSIG

      const pts = [];
      const signers = [];

      const length = intermediateValues.length / RING_SIG_CHALL_LENGTH;

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < length; i++) {
        const { lSigRingSigPayTxn, lSigRingSigSigner } = await prepareLSigRingLink(
          i,
          player.night_client,
          msg,
          ring.slice(i * BLS12381G1_LENGTH, (i + 1) * BLS12381G1_LENGTH),
          keyImage,
          signatureConcat.slice((i + 1) * RING_SIG_NONCE_LENGTH, (i + 2) * RING_SIG_NONCE_LENGTH),
          intermediateValues.slice(i * RING_SIG_CHALL_LENGTH, (i + 1) * RING_SIG_CHALL_LENGTH),
          i === length - 1
            ? intermediateValues.slice(0 * RING_SIG_CHALL_LENGTH, 1 * RING_SIG_CHALL_LENGTH)
            : intermediateValues.slice((i + 1) * RING_SIG_CHALL_LENGTH, (i + 2) * RING_SIG_CHALL_LENGTH)
        );
        pts.push(lSigRingSigPayTxn);
        signers.push(lSigRingSigSigner);
      }

      // Prepare the funder LSIG transaction, to funder Night Address
      const { funderLSigPayTxn, funderLSigSigner } = await prepareFunderLSig(
        player.night_client,
        player.night_algo_address.addr
      );

      await assignRole(
        player.night_client,
        msg,
        ring,
        keyImage,
        signatureConcat,
        intermediateValues,
        funderLSigPayTxn,
        funderLSigSigner,
        pts,
        signers,
        length
      );
    }

    await advanceRounds(fixture.algorand, players[0].day_algo_address, ROUNDS_TO_TIMEOUT + 1);

    await players[0].day_client.send.triggerTimeoutState({
      args: {},
    });

    // Log the game state return value
    const gameStateReturn = Number((await appClient.send.getGameState()).return);
    console.log('[Timeout Test] GameState after triggerTimeoutState:', gameStateReturn);

    expect(gameStateReturn).toEqual(stateAssignRoleTimeout);

    await players[0].day_client
      .newGroup()
      .handleAssignRolesTimeout({
        args: {},
      })
      .dummyOpUp({
        args: { i: 1 },
      })
      .send();

    /// <----------- ENTERED AssignRoleTimeout Stage ----------->
  });
});
