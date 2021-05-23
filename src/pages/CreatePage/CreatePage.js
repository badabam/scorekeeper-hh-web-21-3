import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import LabeledInput from '../../components/LabeledInput/LabeledInput'
import Button from '../../components/Button/Button'

CreatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function CreatePage({ onSubmit }) {
  return (
    <Grid>
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
        <Button>Create Game</Button>
      </Form>
    </Grid>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const playersInput = form.elements.players
    const players = playersInput.value
    const nameOfGame = nameInput.value
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
  display: felx;
  flex-direction: column;
`

const Form = styled.form`
  display: grid;
  gap: 12px;
  label {
    display: grid;
    gap: 4px;
  }
  input {
    padding: 4px;
  }
`
