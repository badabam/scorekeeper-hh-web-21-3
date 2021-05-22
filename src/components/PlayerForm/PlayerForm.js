import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Add player:
        <Input name="name" type="text" placeholder="Player name" />
      </label>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.name
    onSubmit(input.value)
    form.reset()
    input.focus()
  }
}

const Form = styled.form`
  display: grid;
  gap: 4px;
`
const Input = styled.input`
  padding: 4px;
`
