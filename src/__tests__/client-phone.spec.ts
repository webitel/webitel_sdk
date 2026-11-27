import type { SipConfiguration } from '../sip'
import { SipPhone as JsSipPhone } from '../sip/webrtc'
import { SipPhone as RpcPhone } from '../sip/webrtc2'
import { Client } from '../socket/client'

// case-anything ships ESM only, which Jest (CommonJS) cannot load. The code
// under test does not use it.
jest.mock('case-anything', () => ({ camelCase: (s: string) => s }))

// A JsSIP UA opens a real WebSocket on start(); the tests only count UAs.
jest.mock('jssip/lib/JsSIP', () => {
  const actual = jest.requireActual('jssip/lib/JsSIP')
  const UA = jest.fn().mockImplementation(() => ({
    on: jest.fn(),
    start: jest.fn(),
    stop: jest.fn().mockResolvedValue(undefined),
    terminateSessions: jest.fn(),
    removeAllListeners: jest.fn(),
    isRegistered: jest.fn().mockReturnValue(true),
  }))
  const WebSocketInterface = jest.fn()
  return {
    __esModule: true,
    default: { ...actual, UA, WebSocketInterface },
  }
})

const { UA } = jest.requireMock('jssip/lib/JsSIP').default as {
  UA: jest.Mock
}

const sipConf: SipConfiguration = {
  server: 'wss://sip.example/ws',
  extension: '207',
  realm: 'example',
  uri: 'sip:207@example',
  authorization_user: '207',
  display_name: 'Agent',
  ha1: 'ha1',
}

type ClientInternals = {
  connected(info: object): Promise<void>
}

const hello = (cli: Client, info: object = {}) =>
  (cli as unknown as ClientInternals).connected(info)

const createClient = () => {
  const cli = new Client({
    endpoint: 'ws://localhost',
    token: 'token',
    registerWebDevice: true,
  })
  jest.spyOn(cli, 'deviceConfig').mockResolvedValue(sipConf)
  return cli
}

beforeEach(() => {
  UA.mockClear()
})

describe('Client web phone on a repeated hello', () => {
  it('keeps the same JsSIP phone and UA', async () => {
    const cli = createClient()
    const subscribePhone = jest.spyOn(cli, 'subscribePhone')

    await hello(cli)
    const phone = cli.phone
    await hello(cli)

    expect(phone).toBeInstanceOf(JsSipPhone)
    expect(cli.phone).toBe(phone)
    expect(UA).toHaveBeenCalledTimes(1)
    expect(subscribePhone).toHaveBeenCalledTimes(1)
  })

  it('replaces the JsSIP phone when the server switches to b2bua', async () => {
    const cli = createClient()
    jest.spyOn(cli, 'request').mockResolvedValue({})

    await hello(cli)
    const jsSipPhone = cli.phone as JsSipPhone
    const unregister = jest.spyOn(jsSipPhone, 'unregister')

    await hello(cli, { b2bua: true })

    expect(unregister).toHaveBeenCalledTimes(1)
    expect(cli.phone).toBeInstanceOf(RpcPhone)
  })
})

describe('JsSIP SipPhone.register', () => {
  it('keeps the live UA for the same account', async () => {
    const phone = new JsSipPhone('instance')

    await phone.register(sipConf)
    await phone.register({ ...sipConf })

    expect(UA).toHaveBeenCalledTimes(1)
  })

  it('stops the old UA before registering another account', async () => {
    const phone = new JsSipPhone('instance')

    await phone.register(sipConf)
    const oldUa = UA.mock.results[0].value
    await phone.register({ ...sipConf, ha1: 'other' })

    expect(oldUa.stop).toHaveBeenCalledTimes(1)
    expect(UA).toHaveBeenCalledTimes(2)
  })

  it('registers again after unregister', async () => {
    const phone = new JsSipPhone('instance')

    await phone.register(sipConf)
    await phone.unregister()
    await phone.register(sipConf)

    expect(UA).toHaveBeenCalledTimes(2)
  })
})
