import SdkCreatorApiConsumer from '../sdk-creator-api-consumer/sdk-creator-api-consumer'

const itemInstance = { name: 'jest' }
const sdkMethod = jest.fn(() => itemInstance)
const fieldsToSend = ['name']
const creator = new SdkCreatorApiConsumer(sdkMethod, { fieldsToSend })

const parentId = 321

describe('Sdk Creator Api Consumer', () => {
  it('sends itemInstance within createItem()', async () => {
    const response = await creator.createItem({ itemInstance })
    expect(response).toEqual(itemInstance)
  })
  it('sends itemInstance within createNestedItem()', async () => {
    const response = await creator.createNestedItem({ parentId, itemInstance })
    expect(response).toEqual(itemInstance)
  })
  it('correctly passes received itemInstance to SDK method', async () => {
    await creator.createItem({ itemInstance })
    expect(sdkMethod).toHaveBeenCalledWith(itemInstance)
  })
})
