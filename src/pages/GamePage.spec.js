import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GamePage from './GamePage'

const noop = () => {}

const players = [
  { name: 'One', score: 1 },
  { name: 'Two', score: 2 },
  { name: 'Three', score: 3 },
]

describe('GamePage', () => {
  it('renders players with scores', async () => {
    render(
      <GamePage
        nameOfGame="Carcassonne"
        players={players}
        onPlayerUpdate={noop}
        onResetScores={noop}
        onEndGame={noop}
      />
    )

    const playerItems = screen.getAllByRole('listitem')
    expect(playerItems).toHaveLength(3)

    expect(playerItems[0]).toHaveTextContent(/One.*1/)
    expect(playerItems[1]).toHaveTextContent(/Two.*2/)
    expect(playerItems[2]).toHaveTextContent(/Three.*3/)
  })

  it('calls onPlayerUpdate with correct arguments', () => {
    const handlePlayerUpdate = jest.fn()

    render(
      <GamePage
        nameOfGame="Carcassonne"
        players={players}
        onPlayerUpdate={handlePlayerUpdate}
        onResetScores={noop}
        onEndGame={noop}
      />
    )

    const minusButtons = screen.getAllByRole('button', { name: '-' })
    const plusButtons = screen.getAllByRole('button', { name: '+' })

    userEvent.click(minusButtons[0])
    expect(handlePlayerUpdate).toHaveBeenCalledWith(0, -1)

    userEvent.click(plusButtons[1])
    expect(handlePlayerUpdate).toHaveBeenCalledWith(1, 1)
  })

  it('calls onResetScores on click', () => {
    const handleResetScores = jest.fn()

    render(
      <GamePage
        nameOfGame="Carcassonne"
        players={players}
        onPlayerUpdate={noop}
        onResetScores={handleResetScores}
        onEndGame={noop}
      />
    )

    const resetButton = screen.getByRole('button', { name: /reset/i })
    userEvent.click(resetButton)
    expect(handleResetScores).toHaveBeenCalled()
  })

  it('calls onEndGame on click', () => {
    const handleEndGame = jest.fn()

    render(
      <GamePage
        nameOfGame="Carcassonne"
        players={players}
        onPlayerUpdate={noop}
        onResetScores={noop}
        onEndGame={handleEndGame}
      />
    )

    const endGameButton = screen.getByRole('button', { name: /end/i })
    userEvent.click(endGameButton)
    expect(handleEndGame).toHaveBeenCalled()
  })
})
