import { AlgorandClient } from '@algorandfoundation/algokit-utils'
import { useCallback, useEffect, useState } from 'react'
import { getAlgodConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs'

import { Address } from 'algosdk'
interface UseBalanceQueryResult {
  data: number | null
  isLoading: boolean
  error: Error | null
  refetch: () => void
}

export const useBalanceQuery = (addr: string | Address, enabled: boolean = true): UseBalanceQueryResult => {
  const [data, setData] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const algodConfig = getAlgodConfigFromViteEnvironment()

  const algorand = AlgorandClient.fromConfig({ algodConfig })
  const getBalance = async (address: string | Address) => {
    return (await algorand.client.algod.accountInformation(address).do()).amount
  }

  const fetchBalance = useCallback(async () => {
    if (!addr || !enabled) return

    setIsLoading(true)
    setError(null)

    try {
      const balance = await getBalance(addr)
      setData(Number(balance))
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch balance'))
    } finally {
      setIsLoading(false)
    }
  }, [addr, enabled])

  const refetch = useCallback(() => {
    fetchBalance()
  }, [fetchBalance])

  useEffect(() => {
    if (!enabled || !addr) return

    fetchBalance()

    const interval = setInterval(() => {
      fetchBalance()
    }, 2800)

    return () => clearInterval(interval)
  }, [fetchBalance, enabled, addr])

  return {
    data,
    isLoading,
    error,
    refetch,
  }
}
