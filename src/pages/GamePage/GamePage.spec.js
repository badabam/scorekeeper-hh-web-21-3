import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GamePage from './GamePage'

describe('GamePage', () => {
  it('has a header component and two buttons', () => {
    render(
      <GamePage
        nameOfGame="carcassonne"
        players={[
          { name: 'petra', score: 9 },
          { name: 'Dajana', score: 10 },
        ]}
        onResetScores={jest.fn()}
        onEndGame={jest.fn()}
        onPlayerUpdate={jest.fn()}
      />
    )

    const header = screen.getByRole('heading')
    expect(header).toBeInTheDocument()

    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(6)
  })

  /*it('sets the scores and end game when clicking on button', () => {})*/
})
