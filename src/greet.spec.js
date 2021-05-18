import greet from './greet'

describe('greet', () => {
  it('returns "Hi, John" for greet("John")', () => {
    expect(greet('John')).toBe('Hi, John')
  })

  it('returns "Hi, coach" for greet("Jerry")', () => {
    expect(greet('Jerry')).toBe('Hi, coach')
  })

  it('returns "Hi, stranger" for greet()', () => {
    expect(greet()).toBe('Hi, stranger')
  })

  it('returns "Hi, guys" for greet("John", "Jerry")', () => {
    expect(greet('John', 'Jerry')).toBe('Hi, guys')
  })
})
