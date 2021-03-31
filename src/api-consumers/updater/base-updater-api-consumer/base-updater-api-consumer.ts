import UpdaterResponse from '../_shared/interfaces/response/updater-response'
import BaseUpdateParams from './interfaces/base-update-params'
import BaseUpdaterConstructorParams from './interfaces/base-updater-constructor-params'

export default abstract class BaseUpdaterApiConsumer {
  protected readonly fieldsToSend: string[] | undefined
  protected readonly preRequestHandler:
    | ((createdItem: object, parentId?: number | string) => object)
    | undefined

  protected constructor({
    fieldsToSend,
    preRequestHandler,
  }: BaseUpdaterConstructorParams = {}) {
    if (fieldsToSend) this.fieldsToSend = fieldsToSend
    if (preRequestHandler) this.preRequestHandler = preRequestHandler
  }

  abstract updateItem(params: BaseUpdateParams): Promise<UpdaterResponse>

  protected responseHandler = (response: UpdaterResponse): UpdaterResponse =>
    response

  protected abstract _updateItem(...args: any): Promise<UpdaterResponse>
}
