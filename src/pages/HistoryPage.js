import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import LoginButton from '../auth/LoginButton'
import LogoutButton from '../auth/LogoutButton'
import Header from '../components/Header'
import HistoryEntry from '../components/HistoryEntry'

HistoryPage.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      nameOfGame: PropTypes.string,
      players: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
      ),
    })
  ),
}

export default function HistoryPage({ games }) {
  return games.length === 0 ? (
    <Redirect to="/" />
  ) : (
    <Grid>
      <Header>History</Header>
      <div>
        <LoginButton />
        <LogoutButton />
      </div>
      <div>
        {games.map((game, index) => (
          <HistoryEntry
            key={index}
            nameOfGame={game.nameOfGame}
            players={game.players}
          />
        ))}
      </div>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  align-content: start;
  padding: 20px;
  gap: 20px;
`
