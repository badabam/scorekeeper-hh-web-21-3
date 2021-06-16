import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreatePage from './CreatePage'

describe('CreatePage', () => {
  it('contains one form with two inputs and a button', async () => {
    render(<CreatePage onSubmit={jest.fn()} />)

    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()

    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(2)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls onSubmit with formatted game data', () => {
    const handleSubmit = jest.fn()
    render(<CreatePage onSubmit={handleSubmit} />)

    const expectedGame = {
      nameOfGame: 'Gloomhaven',
      players: [
        { name: 'Jane', score: 0 },
        { name: 'John', score: 0 },
      ],
    }

    const nameInput = screen.getByLabelText(/name.*game/i)
    userEvent.type(nameInput, 'Gloomhaven')

    const playerInput = screen.getByLabelText(/player.*names/i)
    userEvent.type(playerInput, 'Jane, John')

    const button = screen.getByRole('button', { name: /create/i })
    userEvent.click(button)

    expect(handleSubmit).toHaveBeenCalledWith(expectedGame)
  })
})
