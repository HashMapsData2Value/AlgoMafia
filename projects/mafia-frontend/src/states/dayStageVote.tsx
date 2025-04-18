import React from 'react'
import PlayerPickPanel from '../components/PlayerPickPanel'
import usePlayersState from '../hooks/usePlayerState'
import { Player } from '../interfaces/player'

interface DayStageVoteProps {
  playerObject: Player
}

const DayStageVote: React.FC<DayStageVoteProps> = ({ playerObject }) => {
  console.log('DayStageVote component rendered')
  const { playerHasVoted, players, playerIsDead, allPlayers } = usePlayersState(playerObject)

  const handleVote = async (playerNumber: number) => {
    console.log(`Voted for player ${playerNumber}`)

    const voteResult = await playerObject.day_client.send.dayStageVote({
      args: {
        vote: playerNumber, // Pass the correct player number (1 to 6)
      },
    })

    console.log('Vote result:', voteResult)
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Day Stage: Vote</h1>
      {playerIsDead && <p className="py-4"> You are out. You cannot vote.</p>}
      {playerHasVoted && (
        <>
          <p className="py-4">You have already voted. Please wait.</p>
        </>
      )}
      {!playerHasVoted && !playerIsDead && (
        <>
          <p className="py-4">Who do you want to vote for?</p>
          {players.length > 0 ? (
            <PlayerPickPanel
              players={players}
              currentPlayerAddress={playerObject.day_algo_address.addr.toString()}
              onSelect={(player: string) => {
                // Map the selected player back to their original number (1 to 6)
                const playerNumber = allPlayers.findIndex((p) => p === player) + 1
                if (playerNumber > 0) {
                  console.log(`Selected player: ${player}, Player number: ${playerNumber}`)
                  handleVote(playerNumber)
                } else {
                  console.error(`Player ${player} not found in allPlayers`)
                }
              }}
            />
          ) : (
            <p>No players available to vote for.</p>
          )}
        </>
      )}
    </div>
  )
}

export default DayStageVote
