import React, { useEffect } from 'react'
import { useLastCommittedRoundQuery } from '../hooks/useCurrentRoundQuery'
import { GameState } from '../interfaces/gameState'
import { Player } from '../interfaces/player'
import TriggerTimeoutState from '../states/TriggerTimeoutState'
import { ROUNDS_TO_TIMEOUT } from '../utils/constants'

interface LastCommittedRoundProps {
  appId: number
  currentRound: number
  playerObject: Player | undefined
  gameState: GameState
  setLastCommittedRound: React.Dispatch<React.SetStateAction<number>>
  children: React.ReactNode
}

const LastCommittedRoundWrapper: React.FC<LastCommittedRoundProps> = ({
  appId,
  currentRound,
  playerObject,
  setLastCommittedRound,
  gameState,
  children,
}) => {
  const { data: lastCommittedRound } = useLastCommittedRoundQuery(BigInt(appId))

  useEffect(() => {
    lastCommittedRound && setLastCommittedRound(lastCommittedRound)
  }, [lastCommittedRound])

  if (
    currentRound &&
    lastCommittedRound &&
    lastCommittedRound !== 0 &&
    lastCommittedRound + ROUNDS_TO_TIMEOUT < currentRound &&
    gameState < GameState.GameOver
  ) {
    // Currently do not have a good way to check the lastCommittedRound
    return playerObject && <TriggerTimeoutState playerObject={playerObject} />
  }

  return <>{children}</>
}

export default LastCommittedRoundWrapper
