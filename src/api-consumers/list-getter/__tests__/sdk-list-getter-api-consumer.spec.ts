import SdkListGetterApiConsumer from '../sdk-list-getter-api-consumer/sdk-list-getter-api-consumer'

const expectedResponse = { items: [{ jest: 'jest' }], next: false }
const sdkMethod = jest.fn(() => expectedResponse)
const listGetter = new SdkListGetterApiConsumer(sdkMethod)

const params = {
  page: 2,
  size: 11,
  search: '12',
  sort: '+jest',
  fields: [],
  ids: [],
}

describe('Sdk List Getter Api Consumer', () => {
  it('correctly returns received response from getList()', async () => {
    const response = await listGetter.getList({})
    expect(response).toEqual(expectedResponse)
  })
  it('correctly returns received response from getNestedList()', async () => {
    const response = await listGetter.getNestedList({})
    expect(response).toEqual(expectedResponse)
  })
  it('correctly passes received arguments to passed SDK method', async () => {
    await listGetter.getList(params)
    expect(sdkMethod).toHaveBeenCalledWith(...Object.values(params))
  })
})
