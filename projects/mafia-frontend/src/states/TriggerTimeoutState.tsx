import React from 'react'
import { Player } from '../interfaces/player'

interface TriggerTimeoutStateProps {
  playerObject: Player
}

const TriggerTimeoutState: React.FC<TriggerTimeoutStateProps> = ({ playerObject }) => {
  const [loading, setLoading] = React.useState(false)

  const triggerTimeoutState = async () => {
    setLoading(true)
    try {
      await playerObject.day_client.send.triggerTimeoutState({
        args: {},
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-lg p-6 mb-8 flex flex-col items-center">
      <p className="mb-4 text-center text-lg font-semibold text-red-600">
        A timeout violation has occurred. Someone must click the button below to continue the game.
      </p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        onClick={triggerTimeoutState}
        disabled={loading}
      >
        {loading ? 'Continuing...' : 'Continue'}
      </button>
    </div>
  )
}

export default TriggerTimeoutState
