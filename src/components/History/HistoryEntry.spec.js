import { render, screen } from '@testing-library/react'
import HistoryEntry from './HistoryEntry'

describe('HistoryEntry', () => {
  it('renders a title and players', async () => {
    render(
      <HistoryEntry
        nameOfGame="Carcassonne"
        players={[
          { name: 'John', score: 2 },
          { name: 'Jane', score: 3 },
        ]}
      />
    )

    expect(screen.getByRole('heading')).toHaveTextContent('Carcassonne')

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(2)
    expect(listItems[0]).toHaveTextContent('John')
    expect(listItems[0]).toHaveTextContent('2')
    expect(listItems[1]).toHaveTextContent('Jane')
    expect(listItems[1]).toHaveTextContent('3')
  })
})
