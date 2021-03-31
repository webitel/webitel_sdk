import BaseDeleteParams from './interfaces/base-delete-params'

export default abstract class BaseDeleterApiConsumer {
  abstract deleteItem(params: BaseDeleteParams): Promise<any>

  protected abstract _deleteItem(...args: any[]): Promise<any>
}
