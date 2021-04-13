import dcopy from 'deep-copy'
import sanitizer from '../../_shared/utils/sanitizer'
import CreatorResponse from '../_shared/interfaces/response/creator-response'
import BaseCreatorApiConsumer from '../base-creator-api-consumer/base-creator-api-consumer'
import BaseCreateParams from '../base-creator-api-consumer/interfaces/base-create-params'
import BaseCreatorConstructorParams from '../base-creator-api-consumer/interfaces/base-creator-constructor-params'

export default class SdkCreatorApiConsumer extends BaseCreatorApiConsumer {
  private readonly SDKMethod: (...args: any[]) => Promise<CreatorResponse>

  constructor(
    SDKMethod: (...args: any) => Promise<CreatorResponse>,
    params?: BaseCreatorConstructorParams
  ) {
    super(params)
    this.SDKMethod = SDKMethod
  }

  createItem({ itemInstance }: BaseCreateParams): Promise<CreatorResponse> {
    let itemCopy = dcopy(itemInstance)
    if (this.preRequestHandler) {
      itemCopy = this.preRequestHandler(itemCopy)
    }
    if (this.fieldsToSend) {
      itemCopy = sanitizer(itemCopy, this.fieldsToSend)
    }

    return this._createItem([itemCopy])
  }

  createNestedItem({
    parentId,
    itemInstance,
  }: BaseCreateParams): Promise<CreatorResponse> {
    let itemCopy = dcopy(itemInstance)
    if (this.preRequestHandler) {
      itemCopy = this.preRequestHandler(itemCopy, parentId)
    }
    if (this.fieldsToSend) {
      itemCopy = sanitizer(itemCopy, this.fieldsToSend)
    }

    return this._createItem([parentId, itemCopy])
  }

  protected async _createItem(args: any[]): Promise<CreatorResponse> {
    try {
      const response = await this.SDKMethod(...args)

      return this.responseHandler(response)
    } catch (err) {
      throw err
    }
  }
}
