import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from '../components/Header'
import Player from '../components/Player'
import Button from '../components/Button'

GamePage.propTypes = {
  nameOfGame: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
  onResetScores: PropTypes.func.isRequired,
  onEndGame: PropTypes.func.isRequired,
  onPlayerUpdate: PropTypes.func.isRequired,
}

export default function GamePage({
  nameOfGame,
  players,
  onResetScores,
  onEndGame,
  onPlayerUpdate,
}) {
  return (
    <Grid>
      <Header>{nameOfGame}</Header>
      <PlayerList aria-label="Player scores">
        {players.map(({ name, score }, index) => (
          <li key={name}>
            <Player
              onMinus={() => onPlayerUpdate(index, -1)}
              onPlus={() => onPlayerUpdate(index, 1)}
              name={name}
              score={score}
            />
          </li>
        ))}
      </PlayerList>

      <Button onClick={onResetScores}>Reset scores</Button>
      <Button onClick={onEndGame}>End game</Button>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  align-content: start;
  gap: 20px;
`

const PlayerList = styled.ul`
  list-style: none;
  padding: 0;
`
