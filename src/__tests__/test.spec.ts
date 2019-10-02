jest.mock('../environment.ts', () => ({
  IS_DEV: true,
  IS_PROD: false,
}))

describe(`API`, () => {
  it(`TODO`, () => {
    expect(1).toBe(1)
  })
})
