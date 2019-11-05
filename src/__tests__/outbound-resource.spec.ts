import {
  Configuration,
  EngineOutboundResource,
  OutboundResourceServiceApi,
} from '../'

const successCode = 200

jest.mock('../environment.ts', () => ({
  IS_DEV: true,
  IS_PROD: false,
}))

describe(`OutboundResourceServiceApi API`, () => {
  let resource: EngineOutboundResource
  let api: OutboundResourceServiceApi

  const configuration = new Configuration({
    basePath: process.env.WEBITEL_API_BASE_PATH,
    apiKey: process.env.WEBITEL_API_KEY,
  })

  api = new OutboundResourceServiceApi(configuration)

  it(`Create EngineOutboundResource`, async () => {
    const res = await api.createOutboundResource({
      name: 'test',
      error_ids: ['400', '5XX'],
      limit: 10,
      variables: {
        v: 'test',
      },
      rps: 123,
      number: '111',
      enabled: true,
      reserve: true,
      max_successively_errors: 10,
      dial_string: 'test',
    })

    resource = res.data

    expect(res.status).toBe(successCode)
    expect(resource.name).toBe('test')
    expect(resource.dial_string).toBe('test')
    expect(resource.number).toBe('111')
    /* tslint:disable */
    expect(resource.limit).toBe(10)
    expect(resource.max_successively_errors).toBe(10)
    expect(resource.rps).toBe(123)
    /* tslint:enabled */
    expect(resource.enabled).toBe(true)
    expect(resource.reserve).toBe(true)

    expect(res.data.error_ids).toBeInstanceOf(Array)
    expect(res.data.variables).toBeInstanceOf(Object)
  })

  it(`Search EngineOutboundResource`, async () => {
    if (!resource.domain_id) {
      throw new Error('domain_id require')
    }
    /* tslint:disable */
    const res = await api.searchOutboundResource(0, 10, resource.domain_id)
    /* tslint:enabled */
    expect(res.status).toBe(successCode)
    expect(res.data.items).toBeInstanceOf(Array)
  })

  it(`Read EngineOutboundResource`, async () => {
    if (!resource.id) {
      throw new Error('id require')
    }
    const res = await api.readOutboundResource(resource.id, resource.domain_id)

    expect(res.status).toBe(successCode)
    expect(res.data.name).toBe('test')
  })

  it(`Update EngineOutboundResource`, async () => {
    if (!resource.id) {
      throw new Error('id require')
    }
    const res = await api.updateOutboundResource(resource.id, {
      name: 'test1',
      error_ids: ['111', '2XX'],
      limit: 15,
      variables: {
        v: 'test1',
      },
      rps: 11,
      number: '12',
      enabled: false,
      reserve: false,
      max_successively_errors: 12,
      dial_string: 'test1',
    })

    resource = res.data

    expect(res.status).toBe(successCode)
    expect(resource.name).toBe('test1')
    expect(resource.dial_string).toBe('test1')
    expect(resource.number).toBe('12')
    /* tslint:disable */
    expect(resource.limit).toBe(15)
    expect(resource.max_successively_errors).toBe(12)
    expect(resource.rps).toBe(11)
    /* tslint:enabled */

    expect(res.data.error_ids).toBeInstanceOf(Array)
    expect(res.data.variables).toBeInstanceOf(Object)
  })

  it(`Patch EngineOutboundResource`, async () => {
    if (!resource.id) {
      throw new Error('id require')
    }
    const res = await api.patchOutboundResource(resource.id, {
      enabled: true,
      reserve: true,
    })

    resource = res.data

    expect(res.status).toBe(successCode)
    expect(resource.enabled).toBe(true)
    expect(resource.reserve).toBe(true)

    expect(resource.name).toBe('test1')
    expect(resource.dial_string).toBe('test1')
    expect(resource.number).toBe('12')
    /* tslint:disable */
    expect(resource.limit).toBe(15)
    expect(resource.max_successively_errors).toBe(12)
    expect(resource.rps).toBe(11)
    /* tslint:enabled */

    expect(res.data.error_ids).toBeInstanceOf(Array)
    expect(res.data.variables).toBeInstanceOf(Object)
  })

  it(`Remove EngineOutboundResource`, async () => {
    if (!resource.id) {
      throw new Error('id require')
    }

    const res = await api.deleteOutboundResource(
      resource.id,
      resource.domain_id
    )

    expect(res.status).toBe(successCode)
    expect(res.data.id).toBe(resource.id)
  })
})
