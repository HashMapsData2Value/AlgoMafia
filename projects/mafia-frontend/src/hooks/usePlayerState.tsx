import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Player } from '../interfaces/player'
import { ZERO_ADDRESS } from '../utils/constants'

const usePlayersState = (playerObject: Player) => {
  const [players, setPlayers] = useState<string[]>([])
  const [playerHasVoted, setPlayerHasVoted] = useState<boolean>(false)
  const [playerIsDead, setPlayerIsDead] = useState<boolean>(false)
  const [iAmMafia, setIAmMafia] = useState<boolean>(false)
  const [iAmDoctor, setIAmDoctor] = useState<boolean>(false)
  const [iAmEliminated, setIAmEliminated] = useState<boolean>(false)

  // Query 1: Basic player addresses with a shorter refresh interval
  const playersQuery = useQuery({
    queryKey: ['players'],
    queryFn: async () => {
      const playerPromises = [
        playerObject.day_client.state.global.player1AlgoAddr()!,
        playerObject.day_client.state.global.player2AlgoAddr()!,
        playerObject.day_client.state.global.player3AlgoAddr()!,
        playerObject.day_client.state.global.player4AlgoAddr()!,
        playerObject.day_client.state.global.player5AlgoAddr()!,
        playerObject.day_client.state.global.player6AlgoAddr()!,
      ]
      const fetchedPlayers = (await Promise.all(playerPromises)).filter((p): p is [string, bigint] => p !== undefined)

      // Zero Address for unassigned players and status of 0 to signify eliminated status
      const validPlayers = fetchedPlayers
        .filter((playerRecord) => playerRecord[0] !== ZERO_ADDRESS && Number(playerRecord[1]) === 0)
        .map((playerRecord) => playerRecord[0])

      return {
        validPlayers,
        allPlayers: fetchedPlayers,
      }
    },
    refetchInterval: 2800, // Shorter interval for basic game state
  })

  const votingQuery = useQuery({
    queryKey: ['votingStatus'],
    queryFn: async () => {
      const hasVotedPromises = [
        playerObject.day_client.state.global.player1HasVoted()!,
        playerObject.day_client.state.global.player2HasVoted()!,
        playerObject.day_client.state.global.player3HasVoted()!,
        playerObject.day_client.state.global.player4HasVoted()!,
        playerObject.day_client.state.global.player5HasVoted()!,
        playerObject.day_client.state.global.player6HasVoted()!,
      ]
      const playerHasVoted = (await Promise.all(hasVotedPromises)).filter((res) => typeof res === 'bigint')
      return playerHasVoted
    },
    refetchInterval: 2800,
    enabled: playersQuery.data !== undefined, // Only run once players are loaded
  })

  // Query 3: Player's role and elimination status - least frequent updates
  const playerRoleQuery = useQuery({
    queryKey: ['playerRole'],
    queryFn: async () => {
      const mafia = await playerObject.night_client.state.global.mafia()
      const doctor = await playerObject.night_client.state.global.doctor()
      const eliminatedPlayer = await playerObject.day_client.state.global.justEliminatedPlayer()

      return {
        mafia: mafia?.toString(),
        doctor: doctor?.toString(),
        eliminatedPlayer: eliminatedPlayer?.toString(),
      }
    },
    refetchInterval: 2800, // Even longer interval for roles
    enabled: playersQuery.data !== undefined, // Only run once players are loaded
  })

  // Update state based on query results
  useEffect(() => {
    if (playersQuery.data) {
      setPlayers(playersQuery.data.validPlayers)

      const myDayAddress = playerObject.day_algo_address.addr.toString()
      const activePlayerIndex = playersQuery.data.allPlayers
        .filter((playerRecord) => Number(playerRecord[1]) === 0)
        .findIndex((player) => player[0] === myDayAddress)

      setPlayerIsDead(activePlayerIndex === -1)
    }
  }, [playersQuery.data, playerObject.day_algo_address.addr])

  // Update voting status
  useEffect(() => {
    if (votingQuery.data && playersQuery.data) {
      const myDayAddress = playerObject.day_algo_address.addr.toString()
      const activePlayerIndex = playersQuery.data.allPlayers.findIndex((player) => player[0] === myDayAddress)

      if (activePlayerIndex !== -1 && votingQuery.data[activePlayerIndex]) {
        setPlayerHasVoted(Number(votingQuery.data[activePlayerIndex]) !== 0)
      }
    }
  }, [votingQuery.data, playersQuery.data, playerObject.day_algo_address.addr])

  // Update role and elimination status
  useEffect(() => {
    if (playerRoleQuery.data) {
      const myNightAddress = playerObject.night_algo_address.addr.toString()
      const myDayAddress = playerObject.day_algo_address.addr.toString()

      setIAmMafia(myNightAddress === playerRoleQuery.data.mafia)
      setIAmDoctor(myNightAddress === playerRoleQuery.data.doctor)
      setIAmEliminated(myDayAddress === playerRoleQuery.data.eliminatedPlayer)
    }
  }, [playerRoleQuery.data, playerObject.night_algo_address.addr, playerObject.day_algo_address.addr])

  return {
    players,
    allPlayers: playersQuery.data?.allPlayers || [],
    playerHasVoted,
    playerIsDead,
    iAmMafia,
    iAmDoctor,
    iAmEliminated,
    // Return loading states for consumers of this hook
    isLoading: playersQuery.isLoading || votingQuery.isLoading || playerRoleQuery.isLoading,
    isError: playersQuery.isError || votingQuery.isError || playerRoleQuery.isError,
  }
}

export default usePlayersState
