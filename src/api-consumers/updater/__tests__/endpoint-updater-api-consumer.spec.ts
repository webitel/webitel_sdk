import EndpointUpdaterApiConsumer from '../endpoint-updater-api-consumer/endpoint-updater-api-consumer'

const itemInstance = { name: 'jest' }
const instance = {
  put: jest.fn(() => itemInstance),
}
const baseUrl = '/jest'
const fieldsToSend = ['name']
const updater = new EndpointUpdaterApiConsumer(
  { instance, baseUrl },
  { fieldsToSend }
)

const parentId = 321
const itemId = 123

describe('Endpoint Updater Api Consumer', () => {
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
  it('correctly passes received itemInstance to endpoint method', async () => {
    const updUrl = `${baseUrl}/${itemId}`
    await updater.updateItem({ itemId, itemInstance })
    expect(instance.put).toHaveBeenCalledWith(updUrl, itemInstance)
  })
})
