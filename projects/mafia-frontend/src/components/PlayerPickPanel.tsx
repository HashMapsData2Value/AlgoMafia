import * as jdenticon from 'jdenticon'
import React from 'react'
import { jdenticonConfig } from '../utils/constants'
import { ellipseAddress } from '../utils/ellipseAddress'

interface PlayerPickPanelProps {
  players: string[] // Array of player addresses
  currentPlayerAddress: string // Address of the current player
  allowSelfSelect?: boolean // Whether the current player can select themselves
  onSelect?: (player: string) => void // Callback when a player is selected
}

const PlayerPickPanel: React.FC<PlayerPickPanelProps> = ({ players, currentPlayerAddress, onSelect, allowSelfSelect = false }) => {
  const iconSize = 40

  return (
    <div className="flex flex-col gap-4 py-4">
      {players.map((player, index) => {
        const iconSvg = jdenticon.toSvg(player, iconSize, jdenticonConfig)

        return (
          <div
            key={index}
            className="flex items-center gap-4"
            onClick={() => onSelect && (allowSelfSelect || player !== currentPlayerAddress) && onSelect(player)}
          >
            <div
              className={`cursor-pointer ${!allowSelfSelect && player === currentPlayerAddress ? 'opacity-50 pointer-events-none' : ''}`}
              dangerouslySetInnerHTML={{ __html: iconSvg }}
            ></div>

            <span className="text-sm">{player === currentPlayerAddress ? 'You' : ellipseAddress(player)}</span>
          </div>
        )
      })}
    </div>
  )
}

export default PlayerPickPanel
