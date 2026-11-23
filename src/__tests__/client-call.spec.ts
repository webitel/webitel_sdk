import type { OutboundCallResult, SipClient } from '../sip'
import { SipPhone as JsSipPhone } from '../sip/webrtc'
import { SipPhone as RpcPhone } from '../sip/webrtc2'
import type { RPC } from '../sip/webrtc2/rpc'
import { Client } from '../socket/client'

// case-anything ships ESM only, which Jest (CommonJS) cannot load. The code
// under test does not use it.
jest.mock('case-anything', () => ({ camelCase: (s: string) => s }))

// RTC wraps RTCPeerConnection and getUserMedia, which do not exist in Node.
jest.mock('../sip/webrtc2/rtc', () => ({
  RTC: jest.fn().mockImplementation(() => ({
    localSdp: 'v=0',
    initLocalMediaStream: jest.fn().mockResolvedValue(undefined),
    createOffer: jest.fn().mockResolvedValue(undefined),
    clean: jest.fn(),
  })),
}))

const createClient = () =>
  new Client({ endpoint: 'ws://localhost', token: 'token' })

const withPhone = (cli: Client, call: SipClient['call']) => {
  cli.phone = { call } as unknown as SipClient
  return cli
}

describe('Client.call', () => {
  describe('without a web phone', () => {
    it('sends call_invite and resolves with the call id', async () => {
      const cli = createClient()
      const request = jest
        .spyOn(cli, 'request')
        .mockResolvedValue({ id: 'call-uuid' })
      const req = { destination: '100', params: { video: false } }

      await expect(cli.call(req)).resolves.toEqual({ callId: 'call-uuid' })
      expect(request).toHaveBeenCalledWith('call_invite', req)
    })

    it.each([
      ['no data', undefined],
      ['no id', {}],
      ['an empty id', { id: '' }],
    ])('resolves with undefined when the response has %s', async (_, data) => {
      const cli = createClient()
      jest.spyOn(cli, 'request').mockResolvedValue(data as object)

      await expect(cli.call({ destination: '100' })).resolves.toBeUndefined()
    })

    it('still rejects when call_invite fails', async () => {
      const cli = createClient()
      const err = { id: 'app.call.create.valid.busy' }
      jest.spyOn(cli, 'request').mockRejectedValue(err)

      await expect(cli.call({ destination: '100' })).rejects.toBe(err)
    })
  })

  describe('with a web phone', () => {
    it('resolves with the sip id from the phone', async () => {
      const cli = withPhone(
        createClient(),
        jest.fn().mockResolvedValue({ sipId: 'abc' })
      )
      const request = jest.spyOn(cli, 'request')

      await expect(cli.call({ destination: '100' })).resolves.toEqual({
        sipId: 'abc',
      })
      expect(request).not.toHaveBeenCalled()
    })

    it('resolves with undefined when the phone does not know the id', async () => {
      const cli = withPhone(
        createClient(),
        jest.fn().mockResolvedValue(undefined)
      )

      await expect(cli.call({ destination: '100' })).resolves.toBeUndefined()
    })

    it('keeps swallowing phone errors as an error event', async () => {
      const err = new Error('boom')
      const cli = withPhone(createClient(), jest.fn().mockRejectedValue(err))
      const onError = jest.fn()
      cli.on('error', onError)

      await expect(cli.call({ destination: '100' })).resolves.toBeUndefined()
      expect(onError).toHaveBeenCalledWith(err)
    })
  })
})

describe('JsSIP SipPhone.call', () => {
  const createPhone = (session: unknown) => {
    const phone = new JsSipPhone('instance')
    jest.spyOn(phone, 'callOption').mockResolvedValue({})
    const ua = { call: jest.fn().mockReturnValue(session) }
    ;(phone as unknown as { ua: typeof ua }).ua = ua
    return { phone, ua }
  }

  it('resolves with the JsSIP session id', async () => {
    // JsSIP session id = Call-ID + from-tag.
    const { phone, ua } = createPhone({ id: 'callid123fromtag' })

    const result: OutboundCallResult | undefined = await phone.call({
      destination: '100',
      params: { display: 'Agent', contactId: 7 },
    })

    expect(result).toEqual({ sipId: 'callid123fromtag' })
    expect(ua.call).toHaveBeenCalledWith(
      '100',
      expect.objectContaining({
        extraHeaders: ['X-Webitel-Display: Agent', 'X-Webitel-Contact-Id: 7'],
      })
    )
  })

  it.each([
    ['no session', undefined],
    ['a session with an empty id', { id: '' }],
  ])('resolves with undefined when ua.call returns %s', async (_, session) => {
    const { phone } = createPhone(session)

    await expect(phone.call({ destination: '100' })).resolves.toBeUndefined()
  })
})

describe('RPC SipPhone.call', () => {
  const createRpc = (callSdp: object): RPC => ({
    instanceId: 'sock',
    request: jest.fn().mockResolvedValue(callSdp),
    on: jest.fn(),
  })

  it('resolves with sip_id from the call_sdp response', async () => {
    const rpc = createRpc({ sip_id: 'rpc-sip-id' })
    const phone = new RpcPhone(rpc)
    const onNewSession = jest.fn()
    phone.on('newSession', onNewSession)

    await expect(phone.call({ destination: '100' })).resolves.toEqual({
      sipId: 'rpc-sip-id',
    })
    expect(rpc.request).toHaveBeenCalledWith('call_sdp', {
      destination: '100',
      sdp: 'v=0',
    })
    expect(onNewSession).toHaveBeenCalledTimes(1)
    expect(phone.sipSessionBySipId('rpc-sip-id')).not.toBeNull()
  })

  it('resolves with undefined when call_sdp has no sip_id', async () => {
    const phone = new RpcPhone(createRpc({}))

    await expect(phone.call({ destination: '100' })).resolves.toBeUndefined()
  })
})
