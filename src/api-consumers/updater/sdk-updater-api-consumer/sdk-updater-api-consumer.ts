import dcopy from 'deep-copy'
import sanitizer from '../../_shared/utils/sanitizer'
import CreatorResponse from '../../creator/_shared/interfaces/response/creator-response'
import UpdaterResponse from '../_shared/interfaces/response/updater-response'
import BaseUpdaterApiConsumer from '../base-updater-api-consumer/base-updater-api-consumer'
import BaseUpdateParams from '../base-updater-api-consumer/interfaces/base-update-params'
import BaseUpdaterConstructorParams from '../base-updater-api-consumer/interfaces/base-updater-constructor-params'

export default class SDKUpdater extends BaseUpdaterApiConsumer {
  private readonly SDKMethod: (...args: any[]) => Promise<CreatorResponse>

  constructor(
    SDKMethod: (...args: any) => Promise<UpdaterResponse>,
    params: BaseUpdaterConstructorParams
  ) {
    super(params)
    this.SDKMethod = SDKMethod
  }

  updateItem({
    itemId,
    itemInstance,
  }: BaseUpdateParams): Promise<UpdaterResponse> {
    let itemCopy = dcopy(itemInstance)
    if (this.preRequestHandler) {
      itemCopy = this.preRequestHandler(itemCopy)
    }
    if (this.fieldsToSend) {
      itemCopy = sanitizer(itemCopy, this.fieldsToSend)
    }

    return this._updateItem([itemId, itemCopy])
  }

  updateNestedItem({
    parentId,
    itemId,
    itemInstance,
  }: BaseUpdateParams): Promise<UpdaterResponse> {
    let itemCopy = dcopy(itemInstance)
    if (this.preRequestHandler) {
      itemCopy = this.preRequestHandler(itemCopy, parentId)
    }
    if (this.fieldsToSend) {
      itemCopy = sanitizer(itemCopy, this.fieldsToSend)
    }

    return this._updateItem([parentId, itemId, itemCopy])
  }

  protected async _updateItem(args: any[]): Promise<UpdaterResponse> {
    try {
      const response = await this.SDKMethod(...args)

      return this.responseHandler(response)
    } catch (err) {
      throw err
    }
  }
}
