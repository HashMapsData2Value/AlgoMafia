import { useWallet } from '@txnlab/use-wallet-react'
import React, { useEffect, useState } from 'react'
import ConnectWallet from './components/ConnectWallet'
import { GameState } from './interfaces/gameState'

// Import components for each game state
import { Player } from './interfaces/player'
import AssignRole from './states/AssignRole'
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
import Navbar from './components/NavBar'

// Audio

const Home: React.FC = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [appId, setAppId] = useState<bigint>(BigInt(0))
  const [playerObject, setPlayerObject] = useState<Player | undefined>(undefined)
  const [gameState, setGameState] = useState<GameState>(GameState.JoinGameLobby)
  const [isPlaying, setIsPlaying] = useState<boolean>(false) // State to track audio playback
  const { activeAddress } = useWallet()

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal)
  }

  // Set Player Object for a specific appId
  useEffect(() => {
    if (activeAddress && appId !== BigInt(0)) {
      const player = new Player(appId)
      setPlayerObject(player)
    }
  }, [appId])

  const getGamePlayerState = async () => {
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

  const playerQuery = useQuery({ queryKey: ['playerState'], queryFn: getGamePlayerState, refetchInterval: 2800 })

  useEffect(() => {
    if (playerQuery.data !== undefined) {
      setGameState(GameState[GameState[Number(playerQuery.data)] as keyof typeof GameState])
    }
  }, [playerQuery])

  const renderGameState = () => {
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
      default:
        return <p>Unknown game state</p>
    }
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
        isPlaying={isPlaying}
        toggleAudio={toggleAudio}
        openWalletModal={toggleWalletModal}
        currentPlayerAddress={playerObject?.day_algo_address.addr.toString() ?? undefined}
      />

      <div className="hero-content text-center rounded-lg p-6 max-w-md bg-white bg-opacity-90 mx-auto relative z-10">
        {renderGameState()}
        <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
      </div>

      <audio id="background-music" loop>
        <source src="/song-1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default Home
