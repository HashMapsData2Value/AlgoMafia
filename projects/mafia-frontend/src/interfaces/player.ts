import { AlgorandClient, Config } from '@algorandfoundation/algokit-utils'
import { TransactionSignerAccount } from '@algorandfoundation/algokit-utils/types/account'
import * as algoring from 'algoring-ts'
import algosdk from 'algosdk'
import { TownHallClient } from '../contracts/TownHall'
import { IDBPlayer } from '../db/types'

const algorand = AlgorandClient.defaultLocalNet() // only using the client to import mnemonic so network is irrelevant
export class Player {
  day_algo_address: TransactionSignerAccount & { account: algosdk.Account }

  night_algo_address: TransactionSignerAccount & { account: algosdk.Account }

  bls_private_key: Uint8Array

  bls_public_key: Uint8Array

  day_client: TownHallClient

  night_client: TownHallClient

  commitment: Uint8Array | undefined

  blinder: Uint8Array | undefined

  target: string | undefined

  constructor(appId: bigint) {
    // Avoid having to pass boxreferences etc every time
    Config.configure({ populateAppCallResources: true })

    this.bls_private_key = algoring.generate_fe()
    this.bls_public_key = algoring.generate_ge(this.bls_private_key)
    this.day_algo_address = AlgorandClient.defaultLocalNet().account.random()
    this.night_algo_address = AlgorandClient.defaultLocalNet().account.random()
    this.day_client = AlgorandClient.defaultLocalNet()
      .setDefaultSigner(this.day_algo_address.signer)
      .client.getTypedAppClientById(TownHallClient, {
        appId,
        defaultSender: this.day_algo_address.addr,
        defaultSigner: this.day_algo_address.signer,
      }) // Client set with their signers, so we can have the player can sign
    this.night_client = AlgorandClient.defaultLocalNet()
      .setDefaultSigner(this.night_algo_address.signer)
      .client.getTypedAppClientById(TownHallClient, {
        appId,
        defaultSender: this.night_algo_address.addr,
        defaultSigner: this.night_algo_address.signer,
      }) // Client set with their signers, so we can have the player can sign
  }

  public async toIDB(): Promise<IDBPlayer> {
    const salt = crypto.getRandomValues(new Uint8Array(12))
    const iv = crypto.getRandomValues(new Uint8Array(12))
    const token = await deriveTokenFromPassSalt('test', salt)
    const dayKeyData = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, token, this.day_algo_address.account.sk)
    const nightKeyData = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, token, this.night_algo_address.account.sk)

    return {
      day_algo_address: {
        addr: this.day_algo_address.addr,
        keyData: dayKeyData,
      },
      night_algo_address: {
        addr: this.night_algo_address.addr,
        keyData: nightKeyData,
      },
      commitment: this.commitment,
      blinder: this.blinder,
      bls_private_key: this.bls_private_key,
      bls_public_key: this.bls_public_key,
      target: this.target,
      salt,
      iv,
    }
  }

  static async fromIDB(idbPlayer: IDBPlayer, appId: bigint): Promise<Player> {
    const token = await deriveTokenFromPassSalt('test', idbPlayer.salt)

    const decryptedDayKey = Buffer.from(
      await crypto.subtle.decrypt({ name: 'AES-GCM', iv: idbPlayer.iv }, token, idbPlayer.day_algo_address.keyData),
    )

    const decryptedNightKey = Buffer.from(
      await crypto.subtle.decrypt({ name: 'AES-GCM', iv: idbPlayer.iv }, token, idbPlayer.night_algo_address.keyData),
    )

    const player = new Player(appId)
    player.day_algo_address = algorand.account.fromMnemonic(algosdk.mnemonicFromSeed(decryptedDayKey.subarray(0, 32)))
    player.night_algo_address = algorand.account.fromMnemonic(algosdk.mnemonicFromSeed(decryptedNightKey.subarray(0, 32)))
    player.bls_private_key = idbPlayer.bls_private_key
    player.bls_public_key = idbPlayer.bls_public_key
    player.target

    if (idbPlayer.commitment) {
      player.commitment = idbPlayer.commitment
    }
    if (idbPlayer.blinder) {
      player.blinder = idbPlayer.blinder
    }

    if (idbPlayer.target) {
      player.target = idbPlayer.target
    }
    // set the default signer to use the information loaded from IDB
    player.day_client = AlgorandClient.defaultLocalNet()
      .setDefaultSigner(player.day_algo_address.signer)
      .client.getTypedAppClientById(TownHallClient, {
        appId,
        defaultSender: player.day_algo_address.addr,
        defaultSigner: player.day_algo_address.signer,
      })
    player.night_client = AlgorandClient.defaultLocalNet()
      .setDefaultSigner(player.night_algo_address.signer)
      .client.getTypedAppClientById(TownHallClient, {
        appId,
        defaultSender: player.night_algo_address.addr,
        defaultSigner: player.night_algo_address.signer,
      })

    return player
  }
}

// This function and most of the encryption process was made possible by https://github.com/Algorand-Developer-Retreat/embedded-wallet-demo
async function deriveTokenFromPassSalt(pass: string, salt: Uint8Array) {
  const keyMaterial = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey'])
  return await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt'],
  )
}
