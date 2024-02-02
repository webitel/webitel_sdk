import GetterResponse from '../_shared/interfaces/response/getter-response'
import BaseGetterApiConsumer from '../base-getter-api-consumer/base-getter-api-consumer'
import BaseGetParams from '../base-getter-api-consumer/interfaces/base-get-params'
import BaseGetterConstructorParams from '../base-getter-api-consumer/interfaces/base-getter-constructor-params'

export default class SdkGetterApiConsumer extends BaseGetterApiConsumer {
  private readonly SDKMethod: (...args: any[]) => Promise<GetterResponse>

  constructor(
    SDKMethod: (...args: any) => Promise<GetterResponse>,
    params?: BaseGetterConstructorParams
  ) {
    super(params)
    this.SDKMethod = SDKMethod
  }

  getItem({ itemId }: BaseGetParams): Promise<GetterResponse> {
    return this._getItem([itemId])
  }

  getNestedItem({ parentId, itemId }: BaseGetParams): Promise<GetterResponse> {
    return this._getItem([parentId, itemId])
  }

  protected async _getItem(args: any[]): Promise<GetterResponse> {
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
