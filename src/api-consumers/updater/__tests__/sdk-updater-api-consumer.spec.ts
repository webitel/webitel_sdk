import SdkUpdaterApiConsumer from '../sdk-updater-api-consumer/sdk-updater-api-consumer'

const itemInstance = { name: 'jest' }
const sdkMethod = jest.fn(() => itemInstance)
const fieldsToSend = ['name']
const updater = new SdkUpdaterApiConsumer(sdkMethod, { fieldsToSend })

const parentId = 321
const itemId = 123

describe('Sdk Updater Api Consumer', () => {
  it('sends itemInstance within updateItem()', async () => {
    const response = await updater.updateItem({ itemId, itemInstance })
    expect(response).toEqual(itemInstance)
  })
  it('sends itemInstance within updateNestedItem()', async () => {
    const response = await updater.updateNestedItem({
      parentId,
      itemId,
      itemInstance,
    })
    expect(response).toEqual(itemInstance)
  })
  it('correctly passes received itemInstance to SDK method', async () => {
    await updater.updateItem({ itemId, itemInstance })
    expect(sdkMethod).toHaveBeenCalledWith(itemId, itemInstance)
  })
})
