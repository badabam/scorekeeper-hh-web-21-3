import { render, screen } from '@testing-library/react'
import Navigation from './Navigation'
import { MemoryRouter as Router } from 'react-router-dom'

describe('Navigation', () => {
  it('renders two NavLinks', async () => {
    render(
      <Router>
        <Navigation
          currentPageId="1"
          pages={[
            { title: 'Foo', id: '1' },
            { title: 'Bar', id: '2' },
          ]}
        />
      </Router>
    )

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
    expect(links[0]).toHaveTextContent('Foo')
    expect(links[1]).toHaveTextContent('Bar')
  })
})
