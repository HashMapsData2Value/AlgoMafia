import { Player } from '../interfaces/player'

interface GameOverProps {
  playerObject: Player
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GameOver: React.FC<GameOverProps> = ({ playerObject }) => {
  return <h1>The game is over!</h1>
}

export default GameOver
