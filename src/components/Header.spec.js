import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders children', async () => {
    const { container } = render(<Header>Hello</Header>)
    expect(container.firstChild).toHaveTextContent('Hello')
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
