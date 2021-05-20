import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders two buttons', async () => {
    render(
      <Navigation
        currentPageId="1"
        onNavigate={jest.fn()}
        pages={[
          { title: 'Foo', id: '1' },
          { title: 'Bar', id: '2' },
        ]}
      />
    )

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0]).toHaveTextContent('Foo')
    expect(buttons[1]).toHaveTextContent('Bar')
  })

  it('sends id "play" when clicking on "Play"', async () => {
    const handleNavigate = jest.fn()

    render(
      <Navigation
        currentPageId="play"
        onNavigate={handleNavigate}
        pages={[
          { title: 'Play', id: 'play' },
          { title: 'History', id: 'history' },
        ]}
      />
    )

    const playButton = screen.getByRole('button', { name: 'Play' })
    userEvent.click(playButton)
    expect(handleNavigate).toHaveBeenCalledWith('play')

    const historyButton = screen.getByRole('button', { name: 'History' })
    userEvent.click(historyButton)
    expect(handleNavigate).toHaveBeenCalledWith('history')
  })
})
