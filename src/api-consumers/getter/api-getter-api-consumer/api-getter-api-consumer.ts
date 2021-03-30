import GetterResponse from '../_shared/interfaces/response/getter-response'
import BaseGetterApiConsumer from '../base-getter-api-consumer/base-getter-api-consumer'
import BaseGetParams from '../base-getter-api-consumer/interfaces/base-get-params'
import ApiGetterConstructorParams from './interfaces/api-getter-constructor-params'

export default class ApiGetterApiConsumer extends BaseGetterApiConsumer {
  private readonly instance: any
  private readonly baseUrl: string
  private readonly nestedUrl: string | undefined

  constructor(
    { baseUrl, instance }: { baseUrl: string; instance: any },
    params: ApiGetterConstructorParams
  ) {
    super(params)
    this.baseUrl = baseUrl
    if (params.nestedUrl) this.nestedUrl = params.nestedUrl
  }

  getItem(params: BaseGetParams): Promise<GetterResponse> {
    return this._getItem(params)
  }

  getNestedItem({ parentId, itemId }: BaseGetParams): Promise<GetterResponse> {
    const baseUrl = `${this.baseUrl}/${parentId}/${this.nestedUrl}`

    return this._getItem({ itemId }, baseUrl)
  }

  protected async _getItem(
    { itemId }: BaseGetParams,
    baseUrl = this.baseUrl
  ): Promise<GetterResponse> {
    const getUrl = `${baseUrl}/${itemId}`
    try {
      let response = await this.instance.get(getUrl)
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
