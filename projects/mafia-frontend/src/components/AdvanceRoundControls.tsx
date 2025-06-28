import { AlgorandClient } from '@algorandfoundation/algokit-utils'
import { TransactionSigner } from 'algosdk'
import React, { useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { advanceRounds } from '../hooks/useCurrentRoundQuery'

interface AdvanceRoundControlsProps {
  algorand: AlgorandClient
  activeAddress: string | undefined
  transactionSigner: TransactionSigner | undefined
}

const AdvanceRoundControls: React.FC<AdvanceRoundControlsProps> = ({ algorand, activeAddress, transactionSigner }) => {
  const [showModal, setShowModal] = useState(false)
  const [roundsToSkip, setRoundsToSkip] = useState(1)
  const [isAdvancing, setIsAdvancing] = useState(false)
  const [hasSetDefaultRounds, setHasSetDefaultRounds] = useState(false)

  const handleAdvanceRounds = async (rounds: number) => {
    if (!algorand || !activeAddress) return
    setIsAdvancing(true)
    try {
      await advanceRounds(algorand, activeAddress, transactionSigner!, rounds)
      alert('Round advanced!')
    } catch (e) {
      alert(`Failed to advance round: ${e}`)
    } finally {
      setIsAdvancing(false)
      setShowModal(false)
    }
  }

  const handleAdvanceButtonClick = () => {
    if (!hasSetDefaultRounds) {
      setShowModal(true)
    } else {
      handleAdvanceRounds(roundsToSkip)
    }
  }

  const handleConfirmRounds = () => {
    setHasSetDefaultRounds(true)
    handleAdvanceRounds(roundsToSkip)
  }

  return (
    <>
      <button className="btn btn-accent" onClick={handleAdvanceButtonClick} disabled={isAdvancing}>
        Advance Round
      </button>
      <button
        className="ml-1 p-2 rounded hover:bg-gray-700"
        title="Edit rounds to skip"
        onClick={() => setShowModal(true)}
        style={{ lineHeight: 0 }}
      >
        <FaPencilAlt />
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded shadow-lg flex flex-col gap-4 min-w-[300px]">
            <h2 className="text-lg font-bold">Advance Rounds</h2>
            <label>
              How many rounds to skip?
              <input
                type="number"
                min={1}
                value={roundsToSkip}
                onChange={(e) => setRoundsToSkip(Number(e.target.value))}
                className="border p-1 ml-2 w-16"
              />
            </label>
            <div className="flex gap-2 justify-end">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)} disabled={isAdvancing}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleConfirmRounds} disabled={isAdvancing || roundsToSkip < 1}>
                {isAdvancing ? 'Advancing...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AdvanceRoundControls
