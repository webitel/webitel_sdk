import GetterResponse from '../_shared/interfaces/response/getter-response'
import BaseGetParams from './interfaces/base-get-params'
import BaseGetterConstructorParams from './interfaces/base-getter-constructor-params'

export default abstract class BaseGetterApiConsumer {
  protected userResponseHandler:
    | ((response: GetterResponse) => GetterResponse)
    | undefined

  private readonly defaultSingleObject: object

  protected constructor({
    defaultSingleObject = {},
    itemResponseHandler,
  }: BaseGetterConstructorParams = {}) {
    this.defaultSingleObject = defaultSingleObject
    if (itemResponseHandler) this.userResponseHandler = itemResponseHandler
  }

  abstract getItem(params: BaseGetParams): Promise<GetterResponse>

  protected responseHandler = (response: GetterResponse): GetterResponse => ({
    ...this.defaultSingleObject,
    ...response,
  })

  protected abstract _getItem(...args: any): Promise<GetterResponse>
}
