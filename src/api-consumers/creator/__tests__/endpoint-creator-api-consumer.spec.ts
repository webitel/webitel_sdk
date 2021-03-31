import EndpointCreatorApiConsumer from '../endpoint-creator-api-consumer/endpoint-creator-api-consumer'

const itemInstance = { name: 'jest' }
const instance = {
  post: jest.fn((url, item) => item),
}
const baseUrl = '/jest'
const fieldsToSend = ['name']
const creator = new EndpointCreatorApiConsumer(
  { instance, baseUrl },
  { fieldsToSend }
)

const parentId = 321

describe('Endpoint Creator Api Consumer', () => {
  it('sends itemInstance within createItem()', async () => {
    const response = await creator.createItem({ itemInstance })
    expect(response).toEqual(itemInstance)
  })
  it('sends itemInstance within createNestedItem()', async () => {
    const response = await creator.createNestedItem({ parentId, itemInstance })
    expect(response).toEqual(itemInstance)
  })
  it('correctly passes received itemInstance to endpoint method', async () => {
    await creator.createItem({ itemInstance })
    expect(instance.post).toHaveBeenCalledWith(baseUrl, itemInstance)
  })
  it('correctly updates itemInstance with passed preRequestHandler within createItem()', async () => {
    const preRequestHandler = (item: object) => ({ ...item, name: 'jest2' })
    const localCreator = new EndpointCreatorApiConsumer(
      { instance, baseUrl },
      { fieldsToSend, preRequestHandler }
    )
    const handledItemInstance = { name: 'jest2' }
    const response = await localCreator.createItem({ itemInstance })
    expect(response).toEqual(handledItemInstance)
  })
})
