import { TransactionSignerAccount } from '@algorandfoundation/algokit-utils/types/account'
import { useWallet } from '@txnlab/use-wallet-react'
import { Account } from 'algosdk'
import { useEffect, useMemo, useState } from 'react'
import { getAllPlayersData } from '../db/playerStore'
import { useAlgorand } from '../hooks/useAlgorand'
import { getStoredIDBAccount } from '../interfaces/player'
export type RestoredPlayer = {
  dayAddress: string
  nightAddress: string
  dayBalance?: number
  nightBalance?: number
  night?: TransactionSignerAccount & { account: Account }
  day?: TransactionSignerAccount & { account: Account }
}

const Recover = () => {
  const [restoredPlayers, setRestoredPlayers] = useState<RestoredPlayer[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [originalOrder, setOriginalOrder] = useState<string[]>([]) // Track original order by addresses
  const algorand = useAlgorand()
  const { activeAddress } = useWallet()

  const closeOutAccount = async (account: TransactionSignerAccount & { account: Account }) => {
    await algorand.send.payment({
      sender: account.account.addr,
      amount: (0).algo(),
      receiver: activeAddress!,
      closeRemainderTo: activeAddress!,
      signer: account.signer,
    })
  }

  // Helper to refresh balances after close out
  const refreshPlayers = async () => {
    const allPlayers = await getAllPlayersData()
    const restored = await Promise.all(
      allPlayers.map(async (player) => {
        try {
          const day = await getStoredIDBAccount(player, 'day')
          const night = await getStoredIDBAccount(player, 'night')
          const dayAlgoBalance = Number((await algorand.client.algod.accountInformation(day.account.addr).do()).amount)
          const nightAlgoBalance = Number((await algorand.client.algod.accountInformation(night.account.addr).do()).amount)

          return {
            dayAddress: day.account.addr?.toString?.() ?? 'N/A',
            dayBalance: dayAlgoBalance,
            nightAddress: night.account.addr?.toString?.() ?? 'N/A',
            nightBalance: nightAlgoBalance,
            day,
            night,
          }
        } catch (e) {
          return { dayAddress: 'Error', nightAddress: 'Error', day: undefined, night: undefined }
        }
      }),
    )

    // Set original order on first load, sorted by balance
    if (originalOrder.length === 0) {
      const sortedByBalance = [...restored].sort((a, b) => {
        const aTotal = (a.dayBalance || 0) + (a.nightBalance || 0)
        const bTotal = (b.dayBalance || 0) + (b.nightBalance || 0)

        // If both have zero balance, maintain original order
        if (aTotal === 0 && bTotal === 0) return 0

        // If one has zero and other doesn't, prioritize non-zero
        if (aTotal === 0 && bTotal > 0) return 1
        if (bTotal === 0 && aTotal > 0) return -1

        // Both have non-zero balances, sort by amount (highest first)
        return bTotal - aTotal
      })

      const addresses = sortedByBalance.map((p) => `${p.dayAddress}-${p.nightAddress}`)
      setOriginalOrder(addresses)
    }

    setRestoredPlayers(restored)
  }

  useEffect(() => {
    refreshPlayers()
  }, [])

  // Filter and sort players
  const filteredAndSortedPlayers = useMemo(() => {
    let filtered = restoredPlayers

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (player) =>
          player.dayAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
          player.nightAddress.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Only sort if there's a search term, otherwise maintain original order
    if (searchTerm) {
      return filtered.sort((a, b) => {
        const aTotal = (a.dayBalance || 0) + (a.nightBalance || 0)
        const bTotal = (b.dayBalance || 0) + (b.nightBalance || 0)

        // If both have zero balance, maintain original order
        if (aTotal === 0 && bTotal === 0) return 0

        // If one has zero and other doesn't, prioritize non-zero
        if (aTotal === 0 && bTotal > 0) return 1
        if (bTotal === 0 && aTotal > 0) return -1

        // Both have non-zero balances, sort by amount (highest first)
        return bTotal - aTotal
      })
    } else {
      // Maintain original order when no search term
      return filtered.sort((a, b) => {
        const aKey = `${a.dayAddress}-${a.nightAddress}`
        const bKey = `${b.dayAddress}-${b.nightAddress}`
        const aIndex = originalOrder.indexOf(aKey)
        const bIndex = originalOrder.indexOf(bKey)
        return aIndex - bIndex
      })
    }
  }, [restoredPlayers, searchTerm, originalOrder])

  return (
    <div>
      <h1 className="text-white">Account Recovery</h1>
      <div className="text-black hero-content text-center rounded-lg bg-white p-8 max-w-7xl bg-opacity-90 mx-auto relative z-10 flex flex-col">
        {restoredPlayers.length === 0 ? (
          <p>No players found in storage.</p>
        ) : (
          <>
            {/* Search Box */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search by address..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full min-w-[600px] px-4 py-2 border border-gray-300 rounded-md center focus:ring-2 focus:ring-blue-500 focus:border-transparent "
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Results Summary */}
              <div className="text-sm text-gray-600 mt-2">
                Showing {filteredAndSortedPlayers.length} of {restoredPlayers.length} players
                {searchTerm && ` matching "${searchTerm}"`}
              </div>
            </div>

            {/* Players List */}
            <div className="grid gap-4 max-h-96 overflow-y-auto">
              {filteredAndSortedPlayers.map((player, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">Player #{idx + 1}</h3>
                    <div className="flex space-x-2">
                      {player.dayBalance !== undefined && player.dayBalance > 0 && player.day && (
                        <button
                          className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors"
                          onClick={async () => {
                            if (player.day) {
                              await closeOutAccount(player.day)
                              await refreshPlayers()
                            }
                          }}
                        >
                          Close Day
                        </button>
                      )}
                      {player.nightBalance !== undefined && player.nightBalance > 0 && player.night && (
                        <button
                          className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors"
                          onClick={async () => {
                            if (player.night) {
                              await closeOutAccount(player.night)
                              await refreshPlayers()
                            }
                          }}
                        >
                          Close Night
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Day Account Card */}
                    <div className="bg-white rounded-md p-3 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <span className="font-medium text-gray-700">Day Account</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2 break-all">{player.dayAddress}</div>
                      {player.dayBalance !== undefined && (
                        <div className="text-sm">
                          <span className="text-gray-500">Balance:</span>
                          <span className={`ml-1 font-medium ${player.dayBalance > 0 ? 'text-green-600' : 'text-gray-400'}`}>
                            {player.dayBalance} μALGO
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Night Account Card */}
                    <div className="bg-white rounded-md p-3 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                        <span className="font-medium text-gray-700">Night Account</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2 break-all">{player.nightAddress}</div>
                      {player.nightBalance !== undefined && (
                        <div className="text-sm">
                          <span className="text-gray-500">Balance:</span>
                          <span className={`ml-1 font-medium ${player.nightBalance > 0 ? 'text-green-600' : 'text-gray-400'}`}>
                            {player.nightBalance} μALGO
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredAndSortedPlayers.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                {searchTerm ? 'No players found matching your search.' : 'No players found.'}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Recover
