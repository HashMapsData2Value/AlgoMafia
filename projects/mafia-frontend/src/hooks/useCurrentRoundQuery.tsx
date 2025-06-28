import { AlgorandClient } from '@algorandfoundation/algokit-utils'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import algosdk from 'algosdk'
import { TownHallClient } from '../contracts/TownHall'
import { useAlgorand } from './useAlgorand'

export async function advanceRounds(
  algorand: AlgorandClient,
  activeAddress: string,
  signer: (txnGroup: algosdk.Transaction[], indexesToSign: number[]) => Promise<Uint8Array[]>,
  numRounds: number,
  amount: number = 1000,
) {
  for (let i = 0; i < numRounds; i += 1) {
    console.log(`waiting round ${i + 1} of ${numRounds}`)

    await algorand.send.payment({
      sender: activeAddress,
      receiver: activeAddress,
      amount: amount.microAlgo(),
      signer: signer,
      note: `Round advancement ${i + 1}/${numRounds}`,
    })
  }
}

export const useCurrentRoundQuery = () => {
  const algorand = useAlgorand()
  const queryClient = useQueryClient()

  const { data, isLoading, error, refetch } = useQuery<number, Error>({
    queryKey: ['currentRound'],
    queryFn: async () => {
      const status = await algorand.client.algod.status().do()
      return Number(status['lastRound'])
    },
    refetchInterval: 2800,
  })

  // Optionally, you can use useMutation for advanceRounds if you want to trigger it and then refetch
  const advanceRoundsMutation = useMutation({
    mutationFn: async ({
      activeAddress,
      signer,
      numRounds,
      amount,
    }: {
      activeAddress: string
      signer: (txnGroup: algosdk.Transaction[], indexesToSign: number[]) => Promise<Uint8Array[]>
      numRounds: number
      amount?: number
    }) => {
      await advanceRounds(algorand, activeAddress, signer, numRounds, amount)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentRound'] })
    },
  })

  return {
    data,
    isLoading,
    error,
    refetch,
    advanceRounds: advanceRoundsMutation.mutateAsync,
    advanceRoundsStatus: advanceRoundsMutation.status,
  }
}

export const useLastCommittedRoundQuery = (appId: bigint) => {
  const queryClient = useQueryClient()

  const appClient = AlgorandClient.defaultLocalNet().client.getTypedAppClientById(TownHallClient, {
    appId,
  })

  const { data, isLoading, error, refetch } = useQuery<number, Error>({
    queryKey: ['lastCommittedRound', appId.toString()],
    queryFn: async () => {
      const round = await appClient.state.global.lastCommitedRound()
      return Number(round)
    },
    refetchInterval: 2800,
  })

  // Optionally, you can use useMutation for advanceRounds here as well if needed
  const advanceRoundsMutation = useMutation({
    mutationFn: async ({
      algorand,
      activeAddress,
      signer,
      numRounds,
      amount,
    }: {
      algorand: AlgorandClient
      activeAddress: string
      signer: (txnGroup: algosdk.Transaction[], indexesToSign: number[]) => Promise<Uint8Array[]>
      numRounds: number
      amount?: number
    }) => {
      await advanceRounds(algorand, activeAddress, signer, numRounds, amount)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lastCommittedRound', appId.toString()] })
    },
  })

  return {
    data,
    isLoading,
    error,
    refetch,
    advanceRounds: advanceRoundsMutation.mutateAsync,
    advanceRoundsStatus: advanceRoundsMutation.status,
  }
}
