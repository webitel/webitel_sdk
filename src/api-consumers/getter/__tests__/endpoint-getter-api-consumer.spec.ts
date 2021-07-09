import EndpointGetterApiConsumer from '../endpoint-getter-api-consumer/endpoint-getter-api-consumer'

const expectedResponse = { name: 'jest' }
const instance = {
  get: jest.fn(() => expectedResponse),
}
const baseUrl = '/jest'
const getter = new EndpointGetterApiConsumer({ instance, baseUrl })

const parentId = 321
const itemId = 123
const query = {
  fields: 'metadata.access',
}
const getUrl = '/jest/123?fields=metadata.access'

describe('Endpoint Getter Api Consumer', () => {
  it('correctly returns received response from getItem()', async () => {
    const response = await getter.getItem({ itemId })
    expect(response).toEqual(expectedResponse)
  })
  it('correctly returns received response from getNestedItem()', async () => {
    const response = await getter.getNestedItem({ parentId, itemId })
    expect(response).toEqual(expectedResponse)
  })
  it('correctly passes received arguments to passed endpoint method', async () => {
    await getter.getItem({ itemId, query })
    expect(instance.get).toHaveBeenCalledWith(getUrl)
  })
})
