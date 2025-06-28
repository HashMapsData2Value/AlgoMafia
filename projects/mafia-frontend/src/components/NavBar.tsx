import { TransactionSigner } from 'algosdk'
import * as jdenticon from 'jdenticon'
import React from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { useAlgorand } from '../hooks/useAlgorand'
import { jdenticonConfig } from '../utils/constants'
import AdvanceRoundControls from './AdvanceRoundControls'

interface NavbarProps {
  appId: bigint
  activeAddress: string | undefined
  transactionSigner: TransactionSigner | undefined
  currentPlayerAddress: string | undefined
  isPlaying: boolean
  toggleAudio: () => void
  openWalletModal: () => void
  currentRound: number | undefined
  lastCommittedRound: number | undefined
}

const Navbar: React.FC<NavbarProps> = ({
  appId,
  activeAddress,
  currentPlayerAddress,
  isPlaying,
  toggleAudio,
  openWalletModal,
  transactionSigner,
  currentRound,
  lastCommittedRound,
}) => {
  const iconSize = 40

  const iconSvg = currentPlayerAddress ? jdenticon.toSvg(currentPlayerAddress, iconSize, jdenticonConfig) : null

  const algorand = useAlgorand()

  return (
    <div className="absolute top-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">Infiltrated</h1>
        <span className="text-sm">{appId === BigInt(0) ? 'Not joined' : `Game ID: ${appId.toString()}`}</span>
        {currentRound !== undefined && <span className="text-sm">Round: {currentRound}</span>}
        {lastCommittedRound !== undefined && lastCommittedRound !== null && (
          <span className="text-sm">Last Committed: {lastCommittedRound}</span>
        )}
      </div>
      <div className="flex items-center gap-4">
        {currentPlayerAddress && <div className="jdenticon" dangerouslySetInnerHTML={{ __html: iconSvg! }}></div>}
        <button className="btn btn-primary" onClick={openWalletModal}>
          {activeAddress || 'Connect Wallet'}
        </button>
        <button className="btn btn-secondary" onClick={toggleAudio}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <AdvanceRoundControls algorand={algorand} activeAddress={activeAddress} transactionSigner={transactionSigner} />
      </div>
    </div>
  )
}

export default Navbar
