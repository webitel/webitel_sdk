import {
  CommunicationTypeServiceApi,
  Configuration,
  EngineCommunicationType,
} from '../'

const successCode = 200

jest.mock('../environment.ts', () => ({
  IS_DEV: true,
  IS_PROD: false,
}))

describe(`Communication type API`, () => {
  let type: EngineCommunicationType
  let api: CommunicationTypeServiceApi

  const configuration = new Configuration({
    basePath: process.env.WEBITEL_API_BASE_PATH,
    apiKey: process.env.WEBITEL_API_KEY,
  })

  api = new CommunicationTypeServiceApi(configuration)

  it(`Create communication type`, async () => {
    const res = await api.createCommunicationType({
      name: 'test',
      code: 'test',
      description: 'test',
      type: 'test',
    })

    type = res.data

    expect(res.status).toBe(successCode)
    expect(type.name).toBe('test')
    expect(type.code).toBe('test')
    expect(type.description).toBe('test')
    expect(type.type).toBe('test')
    expect(type.id).toBeDefined()
  })

  it(`Search communication type`, async () => {
    if (!type.domain_id) {
      throw new Error('type domain_id require')
    }
    /* tslint:disable */
    const res = await api.searchCommunicationType(0, 10, type.domain_id)
    /* tslint:enabled */
    expect(res.status).toBe(successCode)
    expect(res.data.items).toBeInstanceOf(Array)
  })

  it(`Read communication type`, async () => {
    if (!type.id) {
      throw new Error('type id require')
    }
    const res = await api.readCommunicationType(type.id, type.domain_id)

    expect(res.status).toBe(successCode)
    expect(res.data.name).toBe('test')
    expect(res.data.id).toBe(type.id)
  })

  it(`Update communication type`, async () => {
    if (!type.id) {
      throw new Error('type id require')
    }
    const res = await api.updateCommunicationType(type.id, {
      name: 'testupd',
      code: 'testupd',
      description: 'testupd',
      type: 'upd',
    })

    type = res.data

    expect(res.status).toBe(successCode)
    expect(type.name).toBe('testupd')
    expect(type.code).toBe('testupd')
    expect(type.description).toBe('testupd')
    expect(type.type).toBe('upd')
  })

  it(`Remove communication type`, async () => {
    if (!type.id) {
      throw new Error('type id require')
    }

    const res = await api.deleteCommunicationType(type.id, type.domain_id)

    expect(res.status).toBe(successCode)
    expect(res.data.id).toBe(type.id)
  })
})
