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
  sort: '+jest',
  fields: [],
  ids: [],
  rest: { myCringeParam: '123' },
}

const getUrl = '/jest?size=11&page=2&q=12*&sort=%2Bjest&myCringeParam=123'

describe('Endpoint List Getter Api Consumer', () => {
  it('correctly returns received response from getList()', async () => {
    const response = await listGetter.getList({})
    expect(response).toEqual(expectedResponse)
  })
  it('correctly returns received response from getNestedList()', async () => {
    const response = await listGetter.getNestedList({})
    expect(response).toEqual(expectedResponse)
  })
  it('getLookup() calls getList() with passed params', async () => {
    const getLookupParams = { search: 'jest' }
    const expectedParams = { size: 20, search: 'jest', fields: ['id', 'name'] }
    const getListMock = jest.fn(() => ({ items: [] }))
    jest.spyOn(listGetter, 'getList').mockImplementationOnce(getListMock)
    await listGetter.getLookup(getLookupParams)
    expect(getListMock).toHaveBeenCalledWith(expectedParams)
  })
  it('correctly passes received arguments to passed endpoint method', async () => {
    await listGetter.getList(params)
    expect(instance.get).toHaveBeenCalledWith(getUrl)
  })
})
