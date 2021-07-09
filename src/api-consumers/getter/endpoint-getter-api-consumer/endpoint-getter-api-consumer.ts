import qs from 'query-string'
import EndpointApiConsumersBasicParams from '../../_shared/endpoint-api-consumers/endpoint-api-consumers-basic-params'
import GetterResponse from '../_shared/interfaces/response/getter-response'
import BaseGetterApiConsumer from '../base-getter-api-consumer/base-getter-api-consumer'
import BaseGetParams from '../base-getter-api-consumer/interfaces/base-get-params'
import EndpointGetterConstructorParams from './interfaces/endpoint-getter-constructor-params'

export default class EndpointGetterApiConsumer extends BaseGetterApiConsumer {
  private readonly instance: any
  private readonly baseUrl: string
  private readonly nestedUrl: string | undefined

  constructor(
    { baseUrl, instance }: EndpointApiConsumersBasicParams,
    params: EndpointGetterConstructorParams = {}
  ) {
    super(params)
    this.instance = instance
    this.baseUrl = baseUrl
    if (params.nestedUrl) this.nestedUrl = params.nestedUrl
  }

  getItem(params: BaseGetParams): Promise<GetterResponse> {
    return this._getItem(params)
  }

  getNestedItem({
    parentId,
    itemId,
    query,
  }: BaseGetParams): Promise<GetterResponse> {
    const baseUrl = `${this.baseUrl}/${parentId}/${this.nestedUrl}`

    return this._getItem({ itemId, query }, baseUrl)
  }

  protected async _getItem(
    { itemId, query }: BaseGetParams,
    baseUrl = this.baseUrl
  ): Promise<GetterResponse> {
    let url = `${baseUrl}/${itemId}`
    if (query) {
      url += `?${qs.stringify(query, {
        skipEmptyString: true,
        skipNull: true,
      })}`
    }

    try {
      let response = await this.instance.get(url)
      response = this.responseHandler(response)
      if (this.userResponseHandler) {
        response = this.userResponseHandler(response)
      }

      return response
    } catch (err) {
      throw err
    }
  }
}
