import ListGetterResponse from '../_shared/interfaces/response/list-getter-response'
import BaseGetListParams from './interfaces/base-get-list-params'
import BaseListGetterConstructorParams from './interfaces/base-list-getter-constructor-params'

export default abstract class BaseListGetterApiConsumer {
  protected userResponseHandler:
    | ((response: ListGetterResponse) => ListGetterResponse)
    | undefined

  private readonly defaultListObject: object

  protected constructor({
    defaultListObject = {},
    listResponseHandler,
  }: BaseListGetterConstructorParams = {}) {
    this.defaultListObject = defaultListObject
    if (listResponseHandler) this.userResponseHandler = listResponseHandler
  }

  abstract getList(params: BaseGetListParams): Promise<ListGetterResponse>

  protected responseHandler = (
    response: ListGetterResponse
  ): ListGetterResponse => {
    if (response.items) {
      return {
        items: response.items.map((item) => ({
          ...this.defaultListObject,
          ...item,
        })),
        next: response.next || false,
      }
    }

    return { items: [], next: false }
  }

  protected abstract _getList(...args: any): Promise<ListGetterResponse>
}
