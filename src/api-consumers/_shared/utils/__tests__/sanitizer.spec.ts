import sanitizer from '../sanitizer'

test('sanitizer', () => {
  const input = { foo: 'bar', jest: 'jest' }
  const fields = ['jest']
  const output = { jest: 'jest' }
  expect(sanitizer(input, fields)).toEqual(output)
})
