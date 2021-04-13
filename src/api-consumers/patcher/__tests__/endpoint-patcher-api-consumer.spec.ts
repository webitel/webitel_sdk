import EndpointPatcherApiConsumer from '../endpoint-patcher-api-consumer/endpoint-patcher-api-consumer'

const changes = { name: 'jest' }
const instance = { patch: jest.fn(() => changes) }
const baseUrl = 'jest'
const patcher = new EndpointPatcherApiConsumer({ baseUrl, instance })

const parentId = 321
const id = 123

describe('Endpoint Patcher Api Consumer', () => {
  it('sends changes within patchItem()', async () => {
    const response = await patcher.patchItem({ id, changes })
    expect(response).toEqual(changes)
  })
  it('sends itemInstance within patchNestedItem()', async () => {
    const response = await patcher.patchNestedItem({ parentId, id, changes })
    expect(response).toEqual(changes)
  })
  it('correctly passes received itemInstance to endpoint method', async () => {
    await patcher.patchItem({ id, changes })
    const url = `${baseUrl}/${id}`
    expect(instance.patch).toHaveBeenCalledWith(url, changes)
  })
})
