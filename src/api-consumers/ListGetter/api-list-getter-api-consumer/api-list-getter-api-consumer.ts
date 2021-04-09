import ListGetterResponse from '../_shared/interfaces/response/list-getter-response'
import BaseListGetterApiConsumer from '../base-list-getter-api-consumer/base-list-getter-api-consumer'
import ApiGetListParams from './interfaces/api-get-list-params'
import ApiListGetterConstructorParams from './interfaces/api-list-getter-constructor-params'

export default class ApiListGetterApiConsumer extends BaseListGetterApiConsumer {
  private readonly instance: any
  private readonly baseUrl: string
  private readonly nestedUrl: string | undefined

  // instance -- axios instance.js
  constructor(
    { baseUrl, instance }: { baseUrl: string; instance: any },
    params: ApiListGetterConstructorParams
  ) {
    super(params)
    this.baseUrl = baseUrl
    this.instance = instance
    if (params.nestedUrl) this.nestedUrl = params.nestedUrl
  }

  getList(params: ApiGetListParams): Promise<ListGetterResponse> {
    return this._getList(params)
  }

  getNestedList(params: ApiGetListParams): Promise<ListGetterResponse> {
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
    }: ApiGetListParams,
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
