import dcopy from 'deep-copy'
import EndpointApiConsumersBasicParams from '../../_shared/endpoint-api-consumers/endpoint-api-consumers-basic-params'
import sanitizer from '../../_shared/utils/sanitizer'
import UpdaterResponse from '../_shared/interfaces/response/updater-response'
import BaseUpdaterApiConsumer from '../base-updater-api-consumer/base-updater-api-consumer'
import BaseUpdateParams from '../base-updater-api-consumer/interfaces/base-update-params'
import EndpointUpdaterConstructorParams from './interfaces/endpoint-updater-constructor-params'

export default class EndpointUpdaterApiConsumer extends BaseUpdaterApiConsumer {
  private readonly instance: any
  private readonly baseUrl: string
  private readonly nestedUrl: string | undefined

  constructor(
    { baseUrl, instance }: EndpointApiConsumersBasicParams,
    params: EndpointUpdaterConstructorParams
  ) {
    super(params)
    this.instance = instance
    this.baseUrl = baseUrl
    if (params.nestedUrl) this.nestedUrl = params.nestedUrl
  }

  updateItem({
    itemId,
    itemInstance,
  }: BaseUpdateParams): Promise<UpdaterResponse> {
    let itemCopy = dcopy(itemInstance)
    if (this.preRequestHandler) {
      this.preRequestHandler(itemCopy)
    }
    if (this.fieldsToSend) {
      itemCopy = sanitizer(itemCopy, this.fieldsToSend)
    }

    return this._updateItem({ id: itemId, item: itemCopy })
  }

  updateNestedItem({
    parentId,
    itemId,
    itemInstance,
  }: BaseUpdateParams): Promise<UpdaterResponse> {
    let itemCopy = dcopy(itemInstance)
    if (this.preRequestHandler) {
      this.preRequestHandler(itemCopy)
    }
    if (this.fieldsToSend) {
      itemCopy = sanitizer(itemCopy, this.fieldsToSend)
    }
    const baseUrl = `${this.baseUrl}/${parentId}/${this.nestedUrl}`

    return this._updateItem({ id: itemId, item: itemCopy }, baseUrl)
  }

  protected async _updateItem(
    {
      id,
      item,
    }: {
      id: number | string
      item: object
    },
    baseUrl = this.baseUrl
  ) {
    const updUrl = `${baseUrl}/${id}`
    try {
      const response = await this.instance.put(updUrl, item)

      return this.responseHandler(response)
    } catch (err) {
      throw err
    }
  }
}
