import { useState } from 'react'
import './App.css'
import Button from './Button'
import Player from './Player'
import PlayerForm from './PlayerForm'

function App() {
  const [players, setPlayers] = useState([
    { name: 'John Doe', score: 20 },
    { name: 'Jane Doe', score: 120 },
  ])

  return (
    <div className="App">
      <PlayerForm onSubmit={createPlayer} />

      <ul className="App__player-list">
        {players.map((player, index) => (
          <li>
            <Player
              onMinus={() => handleMinus(index)}
              onPlus={() => handlePlus(index)}
              key={player.name}
              name={player.name}
              score={player.score}
            />
          </li>
        ))}
      </ul>

      <div className="App__buttons">
        <Button onClick={resetScores}>Reset scores</Button>
        <Button onClick={resetAll}>Reset all</Button>
      </div>
    </div>
  )

  function resetAll() {
    setPlayers([])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function handleMinus(index) {
    const playerToUpdate = players[index]
    setPlayers(players => [
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function handlePlus(index) {
    const playerToUpdate = players[index]
    setPlayers(players => [
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }
}

export default App
