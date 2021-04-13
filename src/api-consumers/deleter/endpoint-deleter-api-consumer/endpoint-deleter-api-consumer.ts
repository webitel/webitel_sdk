import EndpointApiConsumersBasicParams from '../../_shared/endpoint-api-consumers/endpoint-api-consumers-basic-params'
import BaseDeleterApiConsumer from '../base-deleter-api-consumer/base-deleter-api-consumer'
import BaseDeleteParams from '../base-deleter-api-consumer/interfaces/base-delete-params'
import EndpointDeleterConstructorParams from './interfaces/endpoint-deleter-constructor-params'

export default class EndpointDeleterApiConsumer extends BaseDeleterApiConsumer {
  private readonly instance: any
  private readonly baseUrl: string
  private readonly nestedUrl: string | undefined

  constructor(
    { baseUrl, instance }: EndpointApiConsumersBasicParams,
    params: EndpointDeleterConstructorParams = {}
  ) {
    super()
    this.instance = instance
    this.baseUrl = baseUrl
    if (params.nestedUrl) this.nestedUrl = params.nestedUrl
  }

  deleteItem({ id }: BaseDeleteParams) {
    return this._deleteItem({ id })
  }

  deleteNestedItem({ parentId, id }: BaseDeleteParams) {
    const baseUrl = `${this.baseUrl}/${parentId}/${this.nestedUrl}`

    return this._deleteItem({ id }, baseUrl)
  }

  protected async _deleteItem(
    { id }: BaseDeleteParams,
    baseUrl = this.baseUrl
  ) {
    const delUrl = `${baseUrl}/${id}?permanent=true`
    try {
      return this.instance.delete(delUrl)
    } catch (err) {
      throw err
    }
  }
}
