import algosdk from 'algosdk'
import { openDB } from 'idb'
import { IDBPlayer, StorageKey, WalletDB } from './types'

// Database constants
export const DB_NAME = 'inflitratorGameDB'
export const STORE_NAME = 'playerStore'
export const DB_VERSION = 1

/**
 * Initialize the IndexedDB database
 * @returns Promise with the database instance
 */
export const initDB = async () => {
  return openDB<WalletDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME)
      }
    },
  })
}

/**
 * Create a storage key from address and appId
 * @param address Wallet address
 * @param appId Application ID
 * @returns Storage key string
 */
export const createStorageKey = (address: string, appId: bigint): StorageKey => {
  return `${address}-${appId}`
}

/**
 * Save player data to IndexedDB
 * @param playerId Storage key
 * @param playerData Player data to store
 */
export const savePlayerData = async (playerId: StorageKey, playerData: IDBPlayer) => {
  const db = await initDB()
  const players = (await getPlayersData(playerId)) ?? []

  if (
    //player.day_algo_address.addr.toString() returns [object, object] for IDB players
    players.filter(
      (player) => algosdk.encodeAddress(player.day_algo_address.addr.publicKey) === playerData.day_algo_address.addr.toString(),
    ).length > 0
  )
    return // Don't save the same player twice
  if (players!.length === 6) {
    console.warn('Unable to join: Game has reached maximum capacity of 6 players')
    return
  }

  await db.put(STORE_NAME, [...players!, playerData], playerId)
}

export const saveNightStageCommit = async (playerId: StorageKey, playerData: IDBPlayer, globalStateAddr: string) => {
  const db = await initDB()
  const players = (await getPlayersData(playerId)) ?? []
  const updatedPlayers = players.map((player) =>
    algosdk.encodeAddress(player.night_algo_address.addr.publicKey) === globalStateAddr ? playerData : player,
  )
  await db.put(STORE_NAME, updatedPlayers, playerId)
}

/**
 * Get player data from IndexedDB
 * @param playerId Storage key
 * @returns Player data or null if not found
 */
export const getPlayersData = async (playerId: StorageKey): Promise<IDBPlayer[] | null> => {
  const db = await initDB()
  const result = await db.get(STORE_NAME, playerId)
  return result || null
}

/**
 * Get all player data from IndexedDB across all keys
 * @returns Array of all IDBPlayer objects in the store
 */
export const getAllPlayersData = async (): Promise<IDBPlayer[]> => {
  const db = await initDB()
  const allEntries = await db.getAll(STORE_NAME)

  return allEntries.flat()
}
