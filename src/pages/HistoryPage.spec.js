import { render, screen } from '@testing-library/react'
import HistoryPage from './HistoryPage'

describe('HistoryPage', () => {
  it('renders the history of games', () => {
    const exampleGames = [
      {
        nameOfGame: 'Carcassonne',
        players: [
          { name: 'John', score: 10 },
          { name: 'Jane', score: 20 },
        ],
      },
      {
        nameOfGame: 'Gloomhaven',
        players: [
          { name: 'John', score: 30 },
          { name: 'Jane', score: 40 },
        ],
      },
    ]

    render(<HistoryPage games={exampleGames} />)

    const [firstHeading, secondHeading] = screen.getAllByRole('heading', {
      level: 2,
    })
    expect(firstHeading).toHaveTextContent('Carcassonne')
    expect(secondHeading).toHaveTextContent('Gloomhaven')

    const [player1, player2, player3, player4] = screen.getAllByTestId(
      'player-score'
    )
    expect(player1).toHaveTextContent(/John.*10/)
    expect(player2).toHaveTextContent(/Jane.*20/)
    expect(player3).toHaveTextContent(/John.*30/)
    expect(player4).toHaveTextContent(/Jane.*40/)
  })
})
