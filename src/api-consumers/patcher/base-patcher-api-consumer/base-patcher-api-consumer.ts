import PatcherResponse from '../_shared/interfaces/response/patcher-response'
import BasePatchParams from './interfaces/base-patch-params'

export default abstract class BasePatcherApiConsumer {
  abstract patchItem(
    params: BasePatchParams,
    ...args: any
  ): Promise<PatcherResponse>

  protected abstract _patchItem(...args: any): Promise<PatcherResponse>
}
