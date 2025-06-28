import { useWallet } from '@txnlab/use-wallet-react'
import { useEffect, useState } from 'react'
import { useAlgorand } from '../hooks/useAlgorand'
import { useBalanceQuery } from '../hooks/useBalanceQuery'
import { Player } from '../interfaces/player'

interface AssignRoleTimeoutProps {
  playerObject: Player
}

const AssignRoleTimeout: React.FC<AssignRoleTimeoutProps> = ({ playerObject }) => {
  const [deleteApplication, setDeleteApplication] = useState(false)

  const { activeAddress } = useWallet()
  const { data: nightAlgoBalance } = useBalanceQuery(playerObject.night_algo_address.addr)

  const { data: appAlgoBalance } = useBalanceQuery(playerObject.day_client.appAddress)
  const algorand = useAlgorand()

  const distributeRewards = async () => {
    await playerObject.day_client
      .newGroup()
      .handleAssignRolesTimeout({ args: {}, signer: playerObject.day_algo_address.signer })
      .dummyOpUp({
        args: { i: 1 },
        signer: playerObject.day_algo_address.signer,
      })
      .send()
  }

  const deleteApp = async () => {
    try {
      await playerObject.day_client.send.delete.deleteApplication({
        args: {},
        signer: playerObject.day_algo_address.signer,
        extraFee: (1_000).microAlgos(),
      })

      await algorand.send.payment({
        sender: playerObject.day_algo_address.addr,
        amount: (0).algo(),
        receiver: activeAddress!,
        closeRemainderTo: activeAddress!,
        signer: playerObject.day_algo_address.signer,
      })
      window.location.href = '/'
    } catch (e) {
      if (e instanceof Error && e.message.split(':')[2].trim().startsWith('only ClearState')) {
        // error occurs when trying to delete an already deleted application
        window.location.href = '/'
      } else {
        console.log(e)
      }
    }
  }
  useEffect(() => {
    const handleBalanceCleanup = async () => {
      if (nightAlgoBalance! > 0) {
        try {
          await algorand.send.payment({
            sender: playerObject.night_algo_address.addr,
            amount: (0).algo(),
            receiver: activeAddress!,
            closeRemainderTo: activeAddress!,
            signer: playerObject.night_algo_address.signer,
          })
          console.log('Night algo balance successfully returned to active address')
        } catch (error) {
          console.error('Failed to return night algo balance:', error)
        }
      }

      if (appAlgoBalance === 0) {
        setDeleteApplication(true)
      }
    }

    handleBalanceCleanup()
  }, [nightAlgoBalance, appAlgoBalance])
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 mb-8 flex flex-col items-center border border-gray-200 dark:border-gray-700">
      <h1 className="text-2xl font-extrabold mb-3 text-center text-gray-900 dark:text-gray-100">Game Over</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300 text-center">
        The game has ended because some players failed to assign a role in time.
        <br />
        <span className="font-semibold">Honest players</span> will receive their share of the griefer(s) deposit as a reward for honest
        behavior!
      </p>

      <div className="w-full flex flex-col gap-4">
        {/* End Game Button */}
        <button
          disabled={deleteApplication}
          className={`w-full px-4 py-2 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-400
            ${
              deleteApplication
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                : 'bg-blue-600 text-white hover:bg-blue-700 border border-blue-700 shadow'
            }
          `}
          onClick={() => distributeRewards()}
          title="End the game and distribute rewards"
        >
          End Game & Distribute Rewards
        </button>

        {/* Delete Application Button */}
        <button
          disabled={!deleteApplication}
          className={`w-full px-4 py-2 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-red-400
            ${
              !deleteApplication
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                : 'bg-red-600 text-white hover:bg-red-700 border border-red-700 shadow'
            }
          `}
          onClick={() => deleteApp()}
          title="Delete the application and close out remaining funds"
        >
          Delete Application & Close Out
        </button>
      </div>
    </div>
  )
}

export default AssignRoleTimeout
