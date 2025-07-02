import * as jdenticon from 'jdenticon'
import React from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { jdenticonConfig } from '../utils/constants'

interface NavbarProps {
  appId: bigint
  activeAddress: string | undefined
  currentPlayerAddress: string | undefined
  isPlaying: boolean
  toggleAudio: () => void
  openWalletModal: () => void
}

const Navbar: React.FC<NavbarProps> = ({ appId, activeAddress, currentPlayerAddress, isPlaying, toggleAudio, openWalletModal }) => {
  const iconSize = 40

  const iconSvg = currentPlayerAddress ? jdenticon.toSvg(currentPlayerAddress, iconSize, jdenticonConfig) : null

  return (
    <div className="absolute top-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Infiltrated</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm">{appId === BigInt(0) ? 'Not joined' : `Game ID: ${appId.toString()}`}</span>
        {currentPlayerAddress && <div className="jdenticon" dangerouslySetInnerHTML={{ __html: iconSvg! }}></div>}
        <button className="btn btn-primary" onClick={openWalletModal}>
          {activeAddress || 'Connect Wallet'}
        </button>
        <button className="btn btn-secondary" onClick={toggleAudio}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  )
}

export default Navbar
