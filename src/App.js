import { useState } from 'react'
import './App.css'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'

function App() {
  const [currentPageId, setCurrentPageId] = useState('create')
  const [history, setHistory] = useState([])
  const [currentGame, setCurrentGame] = useState({})
  const { players, nameOfGame } = currentGame

  return (
    <div className="App">
      {currentPageId === 'create' && (
        <CreatePage onNavigate={setCurrentPageId} onSubmit={handleSubmit} />
      )}
      {currentPageId === 'game' && (
        <GamePage
          onResetScores={resetScores}
          onEndGame={handleEndGame}
          onPlayerUpdate={updateScore}
          nameOfGame={nameOfGame}
          players={players}
        />
      )}
      {currentPageId === 'history' && (
        <HistoryPage games={history} onNavigate={setCurrentPageId} />
      )}
    </div>
  )

  function handleEndGame() {
    setCurrentPageId('history')
    setHistory([currentGame, ...history])
    setCurrentGame({})
  }

  function handleSubmit(game) {
    setCurrentGame(game)
    setCurrentPageId('game')
  }

  function resetScores() {
    setCurrentGame({
      ...currentGame,
      players: players.map(player => ({ ...player, score: 0 })),
    })
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]

    const updatedGame = {
      ...currentGame,
      players: [
        ...players.slice(0, index),
        { ...playerToUpdate, score: playerToUpdate.score + value },
        ...players.slice(index + 1),
      ],
    }

    setCurrentGame(updatedGame)
  }
}

export default App
