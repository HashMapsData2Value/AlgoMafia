/* eslint-disable no-console */
import React from 'react'
import { Player } from '../interfaces/player'

interface DayStageEliminateProps {
  playerObject: Player
}

const DayStageEliminate: React.FC<DayStageEliminateProps> = ({ playerObject }) => {
  const handleEliminate = async () => {
    const eliminateResults = await playerObject.day_client.send.dayStageEliminate()

    console.log(eliminateResults)
  }
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Day Stage: Call Eliminate</h1>

      <p>You have finished voting.</p>

      <button className="btn btn-primary" onClick={() => handleEliminate()}>
        <p>Someone must press the button to proceed.</p>
      </button>
    </div>
  )
}

export default DayStageEliminate
