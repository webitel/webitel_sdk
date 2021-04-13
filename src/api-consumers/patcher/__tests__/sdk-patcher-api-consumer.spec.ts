import SdkPatcherApiConsumer from '../sdk-patcher-api-consumer/sdk-patcher-api-consumer'

const changes = { name: 'jest' }
const sdkMethod = jest.fn(() => changes)
const patcher = new SdkPatcherApiConsumer(sdkMethod)

const parentId = 321
const id = 123

describe('Sdk Patcher Api Consumer', () => {
  it('sends changes within patchItem()', async () => {
    const response = await patcher.patchItem({ id, changes })
    expect(response).toEqual(changes)
  })
  it('sends itemInstance within patchNestedItem()', async () => {
    const response = await patcher.patchNestedItem({ parentId, id, changes })
    expect(response).toEqual(changes)
  })
  it('correctly passes received itemInstance to SDK method', async () => {
    await patcher.patchItem({ id, changes })
    expect(sdkMethod).toHaveBeenCalledWith(id, changes)
  })
})
