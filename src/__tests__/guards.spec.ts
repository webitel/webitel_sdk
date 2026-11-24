import { isNonEmptyString } from '../utils/guards'

describe('isNonEmptyString', () => {
  it('accepts a string with at least one character', () => {
    expect(isNonEmptyString('a')).toBe(true)
  })

  it.each([
    ['an empty string', ''],
    ['undefined', undefined],
    ['null', null],
    ['a number', 1],
    ['an object', { id: 'a' }],
  ])('rejects %s', (_, value) => {
    expect(isNonEmptyString(value)).toBe(false)
  })
})
