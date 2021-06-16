import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { Route, Switch, useHistory, Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import LoginButton from './auth/LoginButton'
import LogoutButton from './auth/LogoutButton'
import Navigation from './components/Navigation'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'

export default function App() {
  const [previousGames, setPreviousGames] = useState([])
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const history = useHistory()

  const { isLoading, error, user, isAuthenticated } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  if (!isAuthenticated) {
    return <LoginButton />
  }

  return (
    <AppGrid>
      <Switch>
        <Route path="/login">
          <div>
            <LoginButton />
            <LogoutButton />
          </div>
        </Route>
        <Route exact path="/">
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
          <HistoryPage games={previousGames} />
        </Route>
      </Switch>
      {user && (
        <Route paths={['/', 'history']}>
          <Navigation
            pages={[
              { title: 'Create', id: '/' },
              {
                title: 'History',
                id: 'history',
                disabled: !previousGames.length,
              },
            ]}
          />
        </Route>
      )}
    </AppGrid>
  )

  function handleEndGame() {
    history.push('history')
    setPreviousGames([{ players, nameOfGame }, ...previousGames])
  }

  function handleSubmit({ players, nameOfGame }) {
    setPlayers(players)
    setNameOfGame(nameOfGame)
    history.push('game')
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
