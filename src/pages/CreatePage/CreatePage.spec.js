import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreatePage from './CreatePage'

describe('CreatePage', () => {
  it('has two input fields and one button', () => {
    render(<CreatePage onSubmit={jest.fn()} />)

    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(2)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('it sends nameOfGame and playerNames when clicking on createGame button', () => {
    const handleSubmit = jest.fn()
    const setCurrentPageId = 'create'

    render(
      <CreatePage
        onSubmit={handleSubmit}
        onNavigate={setCurrentPageId}
        nameOfGame="Carcassonne"
      />
    )

    const submitButton = screen.getByRole('button')
    userEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalledWith({
      nameOfGame: '',
      players: [{ name: '', score: 0 }],
    })
  })
})
