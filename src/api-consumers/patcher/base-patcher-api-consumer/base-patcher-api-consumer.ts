import PatcherResponse from '../_shared/interfaces/response/patcher-response'
import BasePatchParams from './interfaces/base-patch-params'
import BasePatcherConstructorParams from './interfaces/base-patcher-constructor-params'

export default abstract class BasePatcherApiConsumer {
  protected readonly fieldsToSend: string[] | undefined
  protected readonly preRequestHandler:
    | ((createdItem: object, parentId?: number | string) => object)
    | undefined

  protected constructor({
    fieldsToSend,
    preRequestHandler,
  }: BasePatcherConstructorParams = {}) {
    if (fieldsToSend) this.fieldsToSend = fieldsToSend
    if (preRequestHandler) this.preRequestHandler = preRequestHandler
  }

  abstract patchItem(
    params: BasePatchParams,
    ...args: any
  ): Promise<PatcherResponse>

  protected abstract _patchItem(...args: any): Promise<PatcherResponse>
}
