import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import LabeledInput from '../../components/LabeledInput/LabeledInput'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'

CreatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function CreatePage({ onSubmit }) {
  return (
    <Grid>
      <Header>Create Game</Header>
      <Form onSubmit={handleSubmit}>
        <LabeledInput
          label="Name of game:"
          name="name"
          placeholder="e.g. Carcassonne"
        />
        <LabeledInput
          label="Player names:"
          name="players"
          placeholder="e.g. Jane, John"
        />
        <Button>Create game</Button>
      </Form>
    </Grid>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const playersInput = form.elements.players
    const nameOfGame = nameInput.value
    const players = playersInput.value
      .split(',')
      .map(name => ({ name: name.trim(), score: 0 }))

    const game = {
      nameOfGame,
      players,
    }

    onSubmit(game)
  }
}

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`

const Form = styled.form`
  display: grid;
  gap: 12px;
  background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
  label {
    display: grid;
    gap: 4px;
  }
  input {
    padding: 4px;
  }
`
