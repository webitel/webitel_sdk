import { Call, Client } from '../socket'

jest.mock('../environment.ts', () => ({
  IS_DEV: true,
  IS_PROD: false,
}))

const TEST_USER_ID = 14001

describe(`WebSocket`, () => {
  it('', async () => {
    const cli = new Client({
      endpoint: process.env.WEBITEL_WEBSOCKET_PATH!,
      token: process.env.WEBITEL_API_KEY!,
    })

    await cli.connect()
    await cli.auth()

    const callHandle = (call: Call) => {
      return
    }

    await cli.subscribeCall(callHandle)

    expect(cli.sessionInfo().user_id).toBe(TEST_USER_ID)

    await cli.disconnect()
  })
})
