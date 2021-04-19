import dcopy from 'deep-copy'
import EndpointApiConsumersBasicParams from '../../_shared/endpoint-api-consumers/endpoint-api-consumers-basic-params'
import sanitizer from '../../_shared/utils/sanitizer'
import CreatorResponse from '../_shared/interfaces/response/creator-response'
import BaseCreatorApiConsumer from '../base-creator-api-consumer/base-creator-api-consumer'
import BaseCreateParams from '../base-creator-api-consumer/interfaces/base-create-params'
import EndpointCreatorConstructorParams from './interfaces/endpoint-creator-constructor-params'

export default class EndpointCreatorApiConsumer extends BaseCreatorApiConsumer {
  private readonly instance: any
  private readonly baseUrl: string
  private readonly nestedUrl: string | undefined

  constructor(
    { baseUrl, instance }: EndpointApiConsumersBasicParams,
    params: EndpointCreatorConstructorParams = {}
  ) {
    super(params)
    this.instance = instance
    this.baseUrl = baseUrl
    if (params.nestedUrl) this.nestedUrl = params.nestedUrl
  }

  createItem({ itemInstance }: BaseCreateParams): Promise<CreatorResponse> {
    let itemCopy = dcopy(itemInstance)
    if (this.preRequestHandler) {
      itemCopy = this.preRequestHandler(itemCopy)
    }
    if (this.fieldsToSend) {
      itemCopy = sanitizer(itemCopy, this.fieldsToSend)
    }

    return this._createItem(itemCopy)
  }

  createNestedItem({
    parentId,
    itemInstance,
  }: BaseCreateParams): Promise<CreatorResponse> {
    let itemCopy = dcopy(itemInstance)
    if (this.preRequestHandler) {
      itemCopy = this.preRequestHandler(itemCopy)
    }
    if (this.fieldsToSend) {
      itemCopy = sanitizer(itemCopy, this.fieldsToSend)
    }
    const baseUrl = `${this.baseUrl}/${parentId}/${this.nestedUrl}`

    return this._createItem(itemCopy, baseUrl)
  }

  protected async _createItem(item: object, baseUrl = this.baseUrl) {
    try {
      const response = await this.instance.post(baseUrl, item)

      return this.responseHandler(response)
    } catch (err) {
      throw err
    }
  }
}
