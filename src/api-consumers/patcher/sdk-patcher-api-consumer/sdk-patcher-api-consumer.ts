import dcopy from 'deep-copy'
import sanitizer from '../../_shared/utils/sanitizer'
import CreatorResponse from '../../creator/_shared/interfaces/response/creator-response'
import PatcherResponse from '../_shared/interfaces/response/patcher-response'
import BasePatcherApiConsumer from '../base-patcher-api-consumer/base-patcher-api-consumer'
import BasePatchParams from '../base-patcher-api-consumer/interfaces/base-patch-params'
import BasePatcherConstructorParams from '../base-patcher-api-consumer/interfaces/base-patcher-constructor-params'

export default class SdkPatcherApiConsumer extends BasePatcherApiConsumer {
  private readonly SDKMethod: (...args: any[]) => Promise<CreatorResponse>

  constructor(
    SDKMethod: (...args: any) => Promise<CreatorResponse>,
    params: BasePatcherConstructorParams = {}
  ) {
    super(params)
    this.SDKMethod = SDKMethod
  }

  patchItem({ id, changes }: BasePatchParams): Promise<PatcherResponse> {
    let changesCopy = dcopy(changes)
    if (this.preRequestHandler) {
      changesCopy = this.preRequestHandler(changesCopy)
    }
    if (this.fieldsToSend) {
      changesCopy = sanitizer(changesCopy, this.fieldsToSend)
    }

    return this._patchItem([id, changesCopy])
  }

  patchNestedItem({
    parentId,
    id,
    changes,
  }: BasePatchParams): Promise<PatcherResponse> {
    let changesCopy = dcopy(changes)
    if (this.preRequestHandler) {
      changesCopy = this.preRequestHandler(changesCopy, parentId)
    }
    if (this.fieldsToSend) {
      changesCopy = sanitizer(changesCopy, this.fieldsToSend)
    }

    return this._patchItem([parentId, id, changesCopy])
  }

  protected async _patchItem(args: any[]) {
    try {
      // @ts-ignore
      const response = await this.SDKMethod(...args)

      return response
    } catch (err) {
      throw err
    }
  }
}
