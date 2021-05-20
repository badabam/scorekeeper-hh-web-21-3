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
      {players.map(({ name, score }, index) => (
        <Player
          onMinus={() => onPlayerUpdate(index, -1)}
          onPlus={() => onPlayerUpdate(index, 1)}
          key={name}
          name={name}
          score={score}
        />
      ))}
      <Button onClick={onResetScores}>Reset scores</Button>
      <Button onClick={onEndGame}>End game</Button>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  padding: 20px;
  gap: 20px;
`
