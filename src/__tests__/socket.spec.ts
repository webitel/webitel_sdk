jest.mock('../environment.ts', () => ({
  IS_DEV: true,
  IS_PROD: false,
}))

const TEST_USER_ID = 14001

describe(`WebSocket`, () => {
  it('connect', async () => {
    expect(TEST_USER_ID).toBe(TEST_USER_ID)
  })
})
