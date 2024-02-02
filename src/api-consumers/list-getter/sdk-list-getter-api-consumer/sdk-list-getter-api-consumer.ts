import ListGetterResponse from '../_shared/interfaces/response/list-getter-response'
import BaseListGetterApiConsumer from '../base-list-getter-api-consumer/base-list-getter-api-consumer'
import BaseListGetterConstructorParams from '../base-list-getter-api-consumer/interfaces/base-list-getter-constructor-params'
import BaseGetListParams from './interfaces/sdk-get-list-params'

export default class SdkListGetterApiConsumer extends BaseListGetterApiConsumer {
  private readonly SDKMethod: (...args: any) => Promise<ListGetterResponse>

  constructor(
    SDKMethod: (...args: any) => Promise<ListGetterResponse>,
    params?: BaseListGetterConstructorParams
  ) {
    super(params)
    this.SDKMethod = SDKMethod
  }

  getList({
    page = 1,
    size = 10,
    search,
    sort,
    fields,
    id,
  }: BaseGetListParams): Promise<ListGetterResponse> {
    return this._getList([page, size, search, sort, fields, id])
  }

  getNestedList({
    parentId,
    page = 1,
    size = 10,
    search,
    sort,
    fields,
    id,
  }: BaseGetListParams): Promise<ListGetterResponse> {
    return this._getList([parentId, page, size, search, sort, fields, id])
  }

  protected async _getList(args: any[]): Promise<ListGetterResponse> {
    try {
      // @ts-ignore
      let response = await this.SDKMethod(...args)
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
