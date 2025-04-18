import React from 'react'
import { Player } from '../interfaces/player'

interface DawnStageDeadOrSaveProps {
  playerObject: Player
}

const DawnStageDeadOrSave: React.FC<DawnStageDeadOrSaveProps> = ({ playerObject }) => {
  const handleDeadOrSave = async () => {
    const eliminateResults = await playerObject.day_client.send.dawnStageDeadOrSaved()

    // eslint-disable-next-line no-console
    console.log(eliminateResults)
  }
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Dawn Stage: Dead Or Saved?</h1>

      <p>.</p>

      <button className="btn btn-primary" onClick={() => handleDeadOrSave()}>
        <p>Someone must press the button to proceed.</p>
      </button>
    </div>
  )
}

export default DawnStageDeadOrSave
