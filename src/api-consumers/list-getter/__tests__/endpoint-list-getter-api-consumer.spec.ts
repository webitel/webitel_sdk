import EndpointListGetterApiConsumer from '../endpoint-list-getter-api-consumer/endpoint-list-getter-api-consumer'

const expectedResponse = { items: [{ jest: 'jest' }], next: false }
const instance = {
  get: jest.fn(() => expectedResponse),
}
const baseUrl = '/jest'
const listGetter = new EndpointListGetterApiConsumer({ instance, baseUrl })

const params = {
  page: 2,
  size: 11,
  search: '12',
  sort: 'jest',
  fields: [],
  ids: [],
}

const getUrl = '/jest?size=11&page=2&name=12*&sort=jest'

describe('Endpoint List Getter Api Consumer', () => {
  it('correctly returns received response from getList()', async () => {
    const response = await listGetter.getList({})
    expect(response).toEqual(expectedResponse)
  })
  it('correctly returns received response from getNestedList()', async () => {
    const response = await listGetter.getNestedList({})
    expect(response).toEqual(expectedResponse)
  })
  it('correctly passes received arguments to passed endpoint method', async () => {
    await listGetter.getList(params)
    expect(instance.get).toHaveBeenCalledWith(getUrl)
  })
})
