import {
  Configuration,
  EngineOutboundResourceGroup,
  EngineOutboundResourceInGroup,
  OutboundResourceGroupServiceApi,
} from '../'

const successCode = 200

jest.mock('../environment.ts', () => ({
  IS_DEV: true,
  IS_PROD: false,
}))

describe(`OutboundResourceServiceApi API`, () => {
  let group: EngineOutboundResourceGroup
  let parent: EngineOutboundResourceInGroup
  let api: OutboundResourceGroupServiceApi

  const configuration = new Configuration({
    basePath: process.env.WEBITEL_API_BASE_PATH,
    apiKey: process.env.WEBITEL_API_KEY,
  })

  api = new OutboundResourceGroupServiceApi(configuration)

  it(`Create EngineOutboundResourceGroup`, async () => {
    const res = await api.createOutboundResourceGroup({
      name: 'test',
      strategy: 'test',
      description: 'test',
      communication: {
        id: '1',
      },
    })

    group = res.data

    expect(res.status).toBe(successCode)

    expect(group.name).toBe('test')
    expect(group.strategy).toBe('test')
    expect(group.description).toBe('test')
    expect(group.communication).toBeInstanceOf(Object)
  })

  it(`Search EngineOutboundResourceGroup`, async () => {
    if (!group.domain_id) {
      throw new Error('domain_id require')
    }
    /* tslint:disable */
    const res = await api.searchOutboundResourceGroup(
      0,
      10,
      '',
      group.domain_id
    )
    /* tslint:enabled */
    expect(res.status).toBe(successCode)
    expect(res.data.items).toBeInstanceOf(Array)
  })

  it(`Read EngineOutboundResourceGroup`, async () => {
    if (!group.id) {
      throw new Error('id require')
    }
    const res = await api.readOutboundResourceGroup(group.id, group.domain_id)

    expect(res.status).toBe(successCode)
    expect(res.data.name).toBe('test')
  })

  it(`Update EngineOutboundResourceGroup`, async () => {
    if (!group.id) {
      throw new Error('id require')
    }
    const res = await api.updateOutboundResourceGroup(group.id, {
      name: 'test1',
      strategy: 'test1',
      description: 'test1',
      communication: {
        id: '2',
      },
    })

    group = res.data

    expect(res.status).toBe(successCode)

    expect(group.name).toBe('test1')
    expect(group.strategy).toBe('test1')
    expect(group.description).toBe('test1')
    expect(group.communication).toBeInstanceOf(Object)
  })

  it(`Create EngineOutboundResourceInGroup`, async () => {
    if (!group.id) {
      throw new Error('id require')
    }
    const res = await api.createOutboundResourceInGroup(group.id, {
      resource: {
        id: '272',
      },
    })

    parent = res.data

    expect(res.status).toBe(successCode)

    expect(parent.resource).toBeInstanceOf(Object)
  })

  it(`Read EngineOutboundResourceInGroup`, async () => {
    if (!group.id || !parent.id) {
      throw new Error('id require')
    }
    const res = await api.readOutboundResourceInGroup(
      group.id,
      parent.id,
      group.domain_id
    )

    expect(res.status).toBe(successCode)
    expect(parent.resource).toBeInstanceOf(Object)
  })

  it(`Update EngineOutboundResourceInGroup`, async () => {
    if (!group.id || !parent.id) {
      throw new Error('id require')
    }
    const res = await api.updateOutboundResourceInGroup(group.id, parent.id, {
      resource: {
        id: '2',
      },
    })

    parent = res.data

    expect(res.status).toBe(successCode)
    expect(parent.resource).toBeInstanceOf(Object)
  })

  it(`Remove EngineOutboundResourceInGroup`, async () => {
    if (!group.id || !parent.id) {
      throw new Error('id require')
    }

    const res = await api.deleteOutboundResourceInGroup(
      group.id,
      parent.id,
      group.domain_id
    )

    expect(res.status).toBe(successCode)
    expect(res.data.id).toBe(parent.id)
  })

  it(`Remove EngineOutboundResourceGroup`, async () => {
    if (!group.id) {
      throw new Error('id require')
    }

    const res = await api.deleteOutboundResourceGroup(group.id, group.domain_id)

    expect(res.status).toBe(successCode)
    expect(res.data.id).toBe(group.id)
  })
})
