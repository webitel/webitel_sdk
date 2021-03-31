import CreatorResponse from '../../creator/_shared/interfaces/response/creator-response'
import PatcherResponse from '../_shared/interfaces/response/patcher-response'
import BasePatcherApiConsumer from '../base-patcher-api-consumer/base-patcher-api-consumer'
import BasePatchParams from '../base-patcher-api-consumer/interfaces/base-patch-params'

export default class SdkPatcherApiConsumer extends BasePatcherApiConsumer {
  private readonly SDKMethod: (...args: any[]) => Promise<CreatorResponse>

  constructor(SDKMethod: (...args: any) => Promise<CreatorResponse>) {
    super()
    this.SDKMethod = SDKMethod
  }

  patchItem({ id, changes }: BasePatchParams): Promise<PatcherResponse> {
    return this._patchItem([id, changes])
  }

  patchNestedItem({
    parentId,
    id,
    changes,
  }: BasePatchParams): Promise<PatcherResponse> {
    return this._patchItem([parentId, id, changes])
  }

  protected async _patchItem(args: any[]) {
    try {
      const response = await this.SDKMethod(...args)

      return response
    } catch (err) {
      throw err
    }
  }
}
