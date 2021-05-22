import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('contains a text', async () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByRole('button', { name: 'Click me' })
    userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('changes with the prop isActive', () => {
    const { rerender } = render(<Button>Click me</Button>)
    const button = screen.getByRole('button')

    const defaultStyle = getComputedStyle(button)

    rerender(<Button isActive>Click me</Button>)
    const activeStyle = getComputedStyle(button)
    expect(activeStyle).not.toBe(defaultStyle)
  })

  it('Can be rendered as different Elements', () => {
    // render as heading
    const { rerender } = render(<Button component={'h3'}>Click me</Button>)

    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveTextContent('Click me')

    // render as anchor
    const Link = ({ children, ...otherProps }) => (
      <a {...otherProps}>{children}</a>
    )

    rerender(
      <Button component={Link} href="#needs-this-for-aria-role">
        Click me
      </Button>
    )

    const link = screen.getByRole('link')
    expect(link).toHaveTextContent('Click me')
  })
})
