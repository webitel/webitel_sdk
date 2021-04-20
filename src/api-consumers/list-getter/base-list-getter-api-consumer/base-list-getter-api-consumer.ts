import ListGetterResponse from '../_shared/interfaces/response/list-getter-response'
import LookupListGetterResponse from '../_shared/interfaces/response/lookup-list-getter-response'
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

  async getLookup(
    params: BaseGetListParams = {}
  ): Promise<LookupListGetterResponse> {
    const defaultLookupParams = {
      size: 20,
      fields: ['id', 'name'],
    }
    try {
      const response = await this.getList({ ...defaultLookupParams, ...params })

      return response.items
    } catch (err) {
      throw err
    }
  }

  setGetListMethod(
    method: (
      getList: () => Promise<ListGetterResponse>
    ) => (params: BaseGetListParams) => Promise<ListGetterResponse>
  ): BaseListGetterApiConsumer {
    this.getList = method(this._getList.bind(this))

    return this
  }

  protected responseHandler = (
    response: ListGetterResponse
  ): ListGetterResponse => {
    let items: object[] = []
    const next = response.next || false
    if (response.items) {
      items = response.items.map((item) => ({
        ...this.defaultListObject,
        ...item,
      }))
    }

    return { ...response, items, next }
  }

  protected abstract _getList(...args: any): Promise<ListGetterResponse>
}
