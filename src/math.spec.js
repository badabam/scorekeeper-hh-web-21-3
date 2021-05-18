import { add } from './math'

describe('math', () => {
  describe('add', () => {
    it('returns 5 with arguments 2 and 3', () => {
      const result = add(2, 3)
      expect(result).toBe(5)
    })

    it('returns 0 for add(0, 0)', () => {
      const result = add(0, 0)
      expect(result).toBe(0)
    })

    it('returns 5 for add(5)', () => {
      const result = add(5)
      expect(result).toBe(5)
    })

    it('returns 6 for add(1, 2, 3)', () => {
      const result = add(1, 2, 3)
      expect(result).toBe(6)
    })
  })
})
