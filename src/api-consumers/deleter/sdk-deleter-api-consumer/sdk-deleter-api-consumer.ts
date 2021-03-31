import BaseDeleterApiConsumer from '../base-deleter-api-consumer/base-deleter-api-consumer'
import BaseDeleteParams from '../base-deleter-api-consumer/interfaces/base-delete-params'

export default class SdkDeleterApiConsumer extends BaseDeleterApiConsumer {
  private readonly SDKMethod: (...args: any[]) => Promise<any>

  constructor(SDKMethod: (...args: any) => Promise<any>) {
    super()
    this.SDKMethod = SDKMethod
  }

  deleteItem({ id }: BaseDeleteParams) {
    return this._deleteItem([id])
  }

  deleteNestedItem({ parentId, id }: BaseDeleteParams) {
    return this._deleteItem([parentId, id])
  }

  protected async _deleteItem(args: any[]) {
    try {
      return this.SDKMethod(...args)
    } catch (err) {
      throw err
    }
  }
}
