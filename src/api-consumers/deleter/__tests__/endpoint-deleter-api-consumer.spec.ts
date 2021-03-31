import EndpointDeleterApiConsumer from '../endpoint-deleter-api-consumer/endpoint-deleter-api-consumer'

const instance = { delete: jest.fn() }
const baseUrl = 'jest'
const nestedUrl = 'nested-jest'
const deleter = new EndpointDeleterApiConsumer(
  { instance, baseUrl },
  { nestedUrl }
)

const parentId = 321
const id = 123

describe('Sdk Deleter Api Consumer', () => {
  it('correctly passed params to sdk method within deleteItem()', async () => {
    const deleteUrl = `${baseUrl}/${id}?permanent=true`
    await deleter.deleteItem({ id })
    expect(instance.delete).toHaveBeenCalledWith(deleteUrl)
  })
  it('correctly passed params to sdk method within deleteNestedItem()', async () => {
    const deleteUrl = `${baseUrl}/${parentId}/${nestedUrl}/${id}?permanent=true`
    await deleter.deleteNestedItem({ parentId, id })
    expect(instance.delete).toHaveBeenCalledWith(deleteUrl)
  })
})
