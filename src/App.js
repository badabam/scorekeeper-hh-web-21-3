import { useState } from 'react'
import { Switch, Route, useHistory, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from '../src/components/Navigation/Navigation'
import CreatePage from '../src/pages/CreatePage/CreatePage'
import GamePage from '../src/pages/GamePage/GamePage'
import HistoryPage from '../src/pages/HistoryPage/HistoryPage'

export default function App() {
  const [history, setHistory] = useState([])
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')

  const { push } = useHistory()

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <Redirect to="/create" />
        </Route>
        <Route path="/create">
          <CreatePage onSubmit={handleSubmit} />
        </Route>
        <Route path="/game">
          <GamePage
            onResetScores={resetScores}
            onEndGame={handleEndGame}
            onPlayerUpdate={updateScore}
            nameOfGame={nameOfGame}
            players={players}
          />
        </Route>
        <Route path="/history">
          <HistoryPage games={history} />
        </Route>
      </Switch>
      <Route path={['/', '/history']}>
        <Navigation
          pages={[
            {
              name: 'create',
              path: '/create',
            },
            {
              name: 'history',
              path: '/history',
            },
          ]}
        />
      </Route>
    </AppGrid>
  )

  function handleEndGame() {
    setHistory([{ players, nameOfGame }, ...history])
    push('/history')
  }

  function handleSubmit({ players, nameOfGame }) {
    setPlayers(players)
    setNameOfGame(nameOfGame)
    push('/game')
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]

    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + value },
      ...players.slice(index + 1),
    ])
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto min-content;
  height: 100vh;
  padding: 12px;
  gap: 20px;
`
