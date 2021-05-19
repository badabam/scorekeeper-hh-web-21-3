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
    const { rerender, container } = render(
      <Button onClick={jest.fn()}>Click me</Button>
    )

    const defaultStyle = getComputedStyle(container.firstChild)

    rerender(
      <Button isActive onClick={jest.fn()}>
        Click me
      </Button>
    )
    const activeStyle = getComputedStyle(container.firstChild)
    expect(activeStyle).toBe(defaultStyle)
  })
})
