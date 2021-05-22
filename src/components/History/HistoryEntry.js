import styled from 'styled-components/macro'
import PropTyopes from 'prop-types'

export default function History({ nameOfGame, players }) {
  return (
    <Grid>
      <Title>{nameOfGame}</Title>
      <ul>
        {players.map(player => (
          <Player>
            <span>{players.name}</span>
            <span>{players.score}</span>
          </Player>
        ))}
      </ul>
    </Grid>
  )
}

const Grid = styled.section`
display: grid;
gap 10px;
`

const Title = styled.h2`
  font-size: 1.1em;
  margin: 0.2em 0;
`

const Player = styled.li`
  display: flex;
  justify-content: space-between;
`
