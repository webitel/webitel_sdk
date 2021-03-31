import CreatorResponse from '../_shared/interfaces/response/creator-response'
import BaseCreateParams from './interfaces/base-create-params'
import BaseCreatorConstructorParams from './interfaces/base-creator-constructor-params'

export default abstract class BaseCreatorApiConsumer {
  protected readonly fieldsToSend: string[] | undefined
  protected readonly preRequestHandler:
    | ((createdItem: object, parentId?: number | string) => object)
    | undefined

  protected constructor({
    fieldsToSend,
    preRequestHandler,
  }: BaseCreatorConstructorParams = {}) {
    if (fieldsToSend) this.fieldsToSend = fieldsToSend
    if (preRequestHandler) this.preRequestHandler = preRequestHandler
  }

  abstract createItem(params: BaseCreateParams): Promise<CreatorResponse>

  protected responseHandler = (response: CreatorResponse): CreatorResponse =>
    response

  protected abstract _createItem(...args: any): Promise<CreatorResponse>
}
