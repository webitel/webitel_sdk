import SdkGetterApiConsumer from '../sdk-getter-api-consumer/sdk-getter-api-consumer'

const expectedResponse = { name: 'jest' }
const sdkMethod = jest.fn(() => expectedResponse)
const getter = new SdkGetterApiConsumer(sdkMethod)

const parentId = 321
const itemId = 123

describe('Sdk Getter Api Consumer', () => {
  it('correctly returns received response from getItem()', async () => {
    const response = await getter.getItem({ itemId })
    expect(response).toEqual(expectedResponse)
  })
  it('correctly returns received response from getNestedItem()', async () => {
    const response = await getter.getNestedItem({ parentId, itemId })
    expect(response).toEqual(expectedResponse)
  })
  it('correctly passes received arguments to passed SDK method', async () => {
    await getter.getItem({ itemId })
    expect(sdkMethod).toHaveBeenCalledWith(itemId)
  })
})
