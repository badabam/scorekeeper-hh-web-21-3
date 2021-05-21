import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('contains a text', async () => {
    render(<Button onClick={() => {}}>Click me</Button>)

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
    const { rerender } = render(<Button onClick={jest.fn()}>Click me</Button>)

    const button = screen.getByRole('button')

    const defaultStyle = getComputedStyle(button)

    rerender(
      <Button isActive onClick={jest.fn()}>
        Click me
      </Button>
    )
    const activeStyle = getComputedStyle(button)
    expect(activeStyle).not.toBe(defaultStyle)
  })
})
