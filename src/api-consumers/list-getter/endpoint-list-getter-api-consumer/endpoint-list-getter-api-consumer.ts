import EndpointApiConsumersBasicParams from '../../_shared/endpoint-api-consumers/endpoint-api-consumers-basic-params'
import ListGetterResponse from '../_shared/interfaces/response/list-getter-response'
import BaseListGetterApiConsumer from '../base-list-getter-api-consumer/base-list-getter-api-consumer'
import EndpointGetListParams from './interfaces/endpoint-get-list-params'
import EndpointListGetterConstructorParams from './interfaces/endpoint-list-getter-constructor-params'

export default class EndpointListGetterApiConsumer extends BaseListGetterApiConsumer {
  private readonly instance: any
  private readonly baseUrl: string
  private readonly nestedUrl: string | undefined

  // instance -- axios instance.js
  constructor(
    { baseUrl, instance }: EndpointApiConsumersBasicParams,
    params: EndpointListGetterConstructorParams = {}
  ) {
    super(params)
    this.instance = instance
    this.baseUrl = baseUrl
    this.instance = instance
    if (params.nestedUrl) this.nestedUrl = params.nestedUrl
  }

  getList(params: EndpointGetListParams): Promise<ListGetterResponse> {
    return this._getList(params)
  }

  getNestedList(params: EndpointGetListParams): Promise<ListGetterResponse> {
    const baseUrl = `${this.baseUrl}/${params.parentId}/${this.nestedUrl}`

    return this._getList(params, baseUrl)
  }

  protected async _getList(
    {
      page = 1,
      size = 10,
      search,
      searchQuery = 'name',
      sort,
    }: EndpointGetListParams,
    baseUrl = this.baseUrl
  ): Promise<ListGetterResponse> {
    // tslint:disable-next-line: no-parameter-reassignment
    if (search && search.slice(-1) !== '*') search += '*'
    let url = `${baseUrl}?size=${size}&page=${page}`
    if (search) url += `&${searchQuery}=${search}`
    if (sort) url += `&sort=${encodeURIComponent(sort)}`

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
