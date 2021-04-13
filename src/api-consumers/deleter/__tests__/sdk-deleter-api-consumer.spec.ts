import SdkDeleterApiConsumer from '../sdk-deleter-api-consumer/sdk-deleter-api-consumer'

const sdkMethod = jest.fn()
const deleter = new SdkDeleterApiConsumer(sdkMethod)

const parentId = 321
const id = 123

describe('Sdk Deleter Api Consumer', () => {
  it('correctly passed params to sdk method within deleteItem()', async () => {
    await deleter.deleteItem({ id })
    expect(sdkMethod).toHaveBeenCalledWith(id)
  })
  it('correctly passed params to sdk method within deleteNestedItem()', async () => {
    await deleter.deleteNestedItem({ parentId, id })
    expect(sdkMethod).toHaveBeenCalledWith(parentId, id)
  })
})
