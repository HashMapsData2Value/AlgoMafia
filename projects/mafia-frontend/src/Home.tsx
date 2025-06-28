import { useWallet } from '@txnlab/use-wallet-react'
import React, { useEffect, useState } from 'react'
import ConnectWallet from './components/ConnectWallet'
import { GameState } from './interfaces/gameState'

// Import components for each game state
import { Player } from './interfaces/player'
import AssignRole from './states/AssignRole'
import AssignRoleTimeout from './states/AssignRoleTimeout'
import DawnStageDeadOrSaved from './states/DawnStageDeadOrSaved'
import DawnStageDoctorReveal from './states/DawnStageDoctorReveal'
import DawnStageMafiaReveal from './states/DawnStageMafiaReveal'
import DawnStageUnmasking from './states/DawnStageUnmasking'
import DayStageEliminate from './states/DayStageEliminate'
import DayStageUnmasking from './states/DayStageUnmasking'
import DayStageVote from './states/DayStageVote'
import GameOver from './states/GameOver'
import Intro from './states/Intro'
import JoinGameLobby from './states/JoinGameLobby'
import NightStageDoctorCommit from './states/NightStageDoctorCommit'
import NightStageMafiaCommit from './states/NightStageMafiaCommit'

import { useQuery } from '@tanstack/react-query'
import LastCommittedRoundWrapper from './components/LastCommittedRoundWrapper'
import Navbar from './components/NavBar'
import { createStorageKey, getPlayersData, savePlayerData } from './db/playerStore'
import { useAlgorand } from './hooks/useAlgorand'
import { useCurrentRoundQuery } from './hooks/useCurrentRoundQuery'

// Import the PlayerSelectionModal component
import IDBPlayerSelectionModal from './components/IDBPlayerSelectionModal'
import { IDBPlayer } from './db/types'

const Home: React.FC = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [appId, setAppId] = useState<bigint>(BigInt(0))
  const [playerObject, setPlayerObject] = useState<Player | undefined>(undefined)
  const [gameState, setGameState] = useState<GameState>(GameState.JoinGameLobby)
  const [isPlaying, setIsPlaying] = useState<boolean>(false) // State to track audio playback
  const { activeAddress, transactionSigner } = useWallet()
  const algorand = useAlgorand()
  const { data: currentRound } = useCurrentRoundQuery()

  // Add state for player selection
  const [showPlayerSelection, setShowPlayerSelection] = useState<boolean>(false)
  const [storedPlayers, setStoredPlayers] = useState<IDBPlayer[]>([])
  const [lastCommittedRound, setLastCommittedRound] = useState(0)

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal)
  }

  // Initialize/restore Player Object from IndexedDB
  useEffect(() => {
    const initializePlayer = async () => {
      if (activeAddress && appId !== BigInt(0)) {
        const storageKey = createStorageKey(activeAddress, appId)

        try {
          // Try to get player data from IndexedDB
          const storedPlayersData = await getPlayersData(storageKey)
          if (storedPlayersData && storedPlayersData.length > 0) {
            // Store players data and show selection modal
            setStoredPlayers(storedPlayersData)
            setShowPlayerSelection(true)
          } else {
            createNewPlayer()
          }
        } catch (error) {
          console.error('Error initializing player from IndexedDB:', error)
          // Still create a player in case of error
          createNewPlayer()
        }
      }
    }

    initializePlayer()
  }, [activeAddress, appId])

  // Helper function to create a new player
  const createNewPlayer = () => {
    const player = new Player(appId)
    setPlayerObject(player)
  }

  // Handler for player selection
  const handleSelectPlayer = async (playerData: IDBPlayer) => {
    try {
      const loadedPlayer = await Player.fromIDB(playerData, appId)
      setPlayerObject(loadedPlayer)
      setShowPlayerSelection(false)
    } catch (error) {
      console.error('Error loading selected player:', error)
      // Fallback to creating a new player if load fails
      createNewPlayer()
    }
  }

  // Handler for creating a new player
  const handleCreateNewPlayer = () => {
    createNewPlayer()
    setShowPlayerSelection(false)
  }

  // Save Player Object to IndexedDB when it changes
  useEffect(() => {
    const savePlayer = async () => {
      if (activeAddress && appId !== BigInt(0) && playerObject) {
        const storageKey = createStorageKey(activeAddress, appId)

        try {
          const playerData = await playerObject.toIDB()
          await savePlayerData(storageKey, playerData)
        } catch (error) {
          console.error('Error saving player state to IndexedDB:', error)
        }
      }
    }

    savePlayer()
  }, [activeAddress, appId, playerObject])

  const getGamePlayState = async () => {
    if (!activeAddress) {
      throw Error('Cannot get game state: Player address not connected')
    }

    if (appId === BigInt(0)) {
      throw Error('Cannot get game state: Invalid application ID')
    }

    if (!playerObject) {
      throw Error('Cannot get game state: Player object undefined')
    }

    return await playerObject.day_client.state.global.gameState()
  }

  const gamePlayStateQuery = useQuery({ queryKey: ['playerState'], queryFn: getGamePlayState, refetchInterval: 2800 })

  useEffect(() => {
    const handleGameStateAndCleanup = async () => {
      if (gamePlayStateQuery.data !== undefined) {
        setGameState(GameState[GameState[Number(gamePlayStateQuery.data)] as keyof typeof GameState])
      }

      if (
        gameState !== GameState.JoinGameLobby && // If game state isn't joint lobby then an active game must be played.
        gamePlayStateQuery.error &&
        (gamePlayStateQuery.error.message === 'Cannot get game state: Invalid application ID' ||
          gamePlayStateQuery.error.message === 'Network request error. Received status 404 (Not Found): application does not exist')
      ) {
        const nightAlgoBalance = (await algorand.client.algod.accountInformation(playerObject!.night_algo_address.addr).do()).amount
        const dayAlgoBalance = (await algorand.client.algod.accountInformation(playerObject!.day_algo_address.addr).do()).amount

        if (nightAlgoBalance! > 0) {
          try {
            await algorand.send.payment({
              sender: playerObject!.night_algo_address.addr,
              amount: (0).algo(),
              receiver: activeAddress!,
              closeRemainderTo: activeAddress!,
              signer: playerObject!.night_algo_address.signer,
            })
            console.log('Payment successful - night algo funds returned to active address')
          } catch (error) {
            console.error('Failed to return funds:', error)
          }
        }

        if (dayAlgoBalance! > 0) {
          try {
            await algorand.send.payment({
              sender: playerObject!.day_algo_address.addr,
              amount: (0).algo(),
              receiver: activeAddress!,
              closeRemainderTo: activeAddress!,
              signer: playerObject!.day_algo_address.signer,
            })
            console.log('Payment successful - day algo funds returned to active address')
          } catch (error) {
            console.error('Failed to return funds:', error)
          }
        }

        window.location.href = '/'
      }
    }

    handleGameStateAndCleanup()
  }, [gamePlayStateQuery])

  const renderGameState = () => {
    // First check if we should show the player selection modal
    if (showPlayerSelection) {
      return null // Don't render game state if player selection is active
    }

    if (!activeAddress) {
      return (
        <div className="text-center">
          <p>Please connect your wallet to proceed.</p>
          <button className="btn m-2" onClick={toggleWalletModal}>
            Connect Wallet
          </button>
          <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
        </div>
      )
    }

    if (appId === BigInt(0)) {
      return <Intro setGameState={setGameState} setAppId={setAppId} />
    }

    return (
      <LastCommittedRoundWrapper
        appId={Number(appId)}
        currentRound={currentRound ?? 0}
        setLastCommittedRound={setLastCommittedRound}
        gameState={gameState}
        playerObject={playerObject}
      >
        {(() => {
          switch (gameState) {
            case GameState.JoinGameLobby:
              return playerObject && <JoinGameLobby playerObject={playerObject} />
            case GameState.AssignRole:
              return playerObject && <AssignRole playerObject={playerObject} />
            case GameState.DayStageVote:
              return playerObject && <DayStageVote playerObject={playerObject} />
            case GameState.DayStageEliminate:
              return playerObject && <DayStageEliminate playerObject={playerObject} />
            case GameState.DayStageUnmasking:
              return playerObject && <DayStageUnmasking playerObject={playerObject} />
            case GameState.NightStageMafiaCommit:
              return playerObject && <NightStageMafiaCommit playerObject={playerObject} />
            case GameState.NightStageDoctorCommit:
              return playerObject && <NightStageDoctorCommit playerObject={playerObject} />
            case GameState.DawnStageMafiaReveal:
              return playerObject && <DawnStageMafiaReveal playerObject={playerObject} />
            case GameState.DawnStageDoctorReveal:
              return playerObject && <DawnStageDoctorReveal playerObject={playerObject} />
            case GameState.DawnStageDeadOrSaved:
              return playerObject && <DawnStageDeadOrSaved playerObject={playerObject} />
            case GameState.DawnStageUnmasking:
              return playerObject && <DawnStageUnmasking playerObject={playerObject} />
            case GameState.GameOver:
              return playerObject && <GameOver playerObject={playerObject} />
            case GameState.AssignRoleTimeout:
              return playerObject && <AssignRoleTimeout playerObject={playerObject} />
            default:
              return <p>Unknown game state</p>
          }
        })()}
      </LastCommittedRoundWrapper>
    )
  }

  const toggleAudio = () => {
    const audio = document.getElementById('background-music') as HTMLAudioElement
    audio.volume = 0.1
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="hero min-h-screen relative">
      <Navbar
        appId={appId}
        activeAddress={activeAddress ?? undefined}
        transactionSigner={activeAddress ? transactionSigner : undefined}
        isPlaying={isPlaying}
        toggleAudio={toggleAudio}
        openWalletModal={toggleWalletModal}
        currentPlayerAddress={playerObject?.day_algo_address.addr.toString() ?? undefined}
        currentRound={currentRound}
        lastCommittedRound={lastCommittedRound}
      />

      <div className="hero-content text-center rounded-lg p-6 max-w-md bg-white bg-opacity-90 mx-auto relative z-10">
        {renderGameState()}
        <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />

        {/* Render the IDBPlayerSelectionModal if showPlayerSelection is true */}
        {showPlayerSelection && (
          <IDBPlayerSelectionModal
            players={storedPlayers}
            onSelectPlayer={handleSelectPlayer}
            onCreateNewPlayer={handleCreateNewPlayer}
            onClose={() => {
              // Default to first player if available when modal is closed
              if (storedPlayers.length > 0) {
                handleSelectPlayer(storedPlayers[0])
              } else {
                createNewPlayer()
              }
            }}
          />
        )}
      </div>

      <audio id="background-music" loop>
        <source src="/song-1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default Home
