import { Call, Client } from '../'
import { CallActions } from '../socket'

jest.mock('../environment.ts', () => ({
  IS_DEV: true,
  IS_PROD: false,
}))

const TEST_USER_ID = 14001

describe(`WebSocket`, () => {
  it('connect', async () => {
    const cli = new Client({
      endpoint: process.env.WEBITEL_WEBSOCKET_PATH!,
      token: process.env.WEBITEL_API_KEY!,
    })

    await cli.connect()
    await cli.auth()

    const callHandle = (action: CallActions, call: Call) => {
      return
    }

    await cli.subscribeCall(callHandle)

    expect(cli.sessionInfo().user_id).toBe(TEST_USER_ID)

    await cli.invite({ toNumber: 'user', toName: 'web cli1' })

    await cli.disconnect()
  })
})
