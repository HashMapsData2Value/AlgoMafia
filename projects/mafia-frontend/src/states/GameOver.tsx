import { AlgorandClient } from '@algorandfoundation/algokit-utils'
import { useBalanceQuery } from '../hooks/useBalanceQuery'
import { getAlgodConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs'

import { useEffect, useState } from 'react'
import { Player } from '../interfaces/player'

interface GameOverProps {
  playerObject: Player
}

const GameOver: React.FC<GameOverProps> = ({ playerObject }) => {
  const [deleteApplication, setDeleteApplication] = useState(false)
  const algodConfig = getAlgodConfigFromViteEnvironment()

  const { data: nightAlgoBalance } = useBalanceQuery(playerObject.night_algo_address.addr)
  const { data: appAlgoBalance } = useBalanceQuery(playerObject.day_client.appAddress)

  const algorand = AlgorandClient.fromConfig({ algodConfig })

  const endGame = async () => {
    await playerObject.day_client
      .newGroup()
      .gameOver({ args: {}, signer: playerObject.day_algo_address.signer })
      .dummyOpUp({
        args: { i: 1 },
        signer: playerObject.day_algo_address.signer,
      })
      .send()
  }

  const deleteApp = async () => {
    await playerObject.day_client.send.delete.deleteApplication({
      args: {},
      signer: playerObject.day_algo_address.signer,
      extraFee: (1_000).microAlgos(),
    })
  }

  useEffect(() => {
    if (nightAlgoBalance! > 0) {
      algorand.send.payment({
        sender: playerObject.night_algo_address.addr,
        amount: (0).algo(),
        receiver: playerObject.day_algo_address.addr,
        closeRemainderTo: playerObject.day_algo_address.addr,
        signer: playerObject.night_algo_address.signer,
      })
    }

    if (appAlgoBalance === 0) {
      setDeleteApplication(true)
    }
  }, [nightAlgoBalance, appAlgoBalance])

  return (
    <div className="rounded-lg p-6 mb-8">
      <h1 className="text-xl font-bold mb-4">The game is over!</h1>

      {/* Fixed End Game Button */}
      <button
        disabled={deleteApplication}
        className={`btn mr-4 mb-2 px-4 py-2 rounded font-medium transition-all ${
          deleteApplication ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        onClick={() => endGame()}
      >
        End Game
      </button>

      {/* Fixed Delete Application Button */}
      <button
        disabled={!deleteApplication}
        className={`btn mb-2 px-4 py-2 rounded font-medium transition-all ${
          !deleteApplication ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-red-500 text-white hover:bg-red-600'
        }`}
        onClick={() => deleteApp()}
      >
        Delete Application
      </button>
    </div>
  )
}

export default GameOver
