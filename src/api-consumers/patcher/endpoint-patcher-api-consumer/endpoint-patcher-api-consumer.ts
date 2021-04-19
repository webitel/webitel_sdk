import dcopy from 'deep-copy'
import EndpointApiConsumersBasicParams from '../../_shared/endpoint-api-consumers/endpoint-api-consumers-basic-params'
import sanitizer from '../../_shared/utils/sanitizer'
import PatcherResponse from '../_shared/interfaces/response/patcher-response'
import BasePatcherApiConsumer from '../base-patcher-api-consumer/base-patcher-api-consumer'
import BasePatchParams from '../base-patcher-api-consumer/interfaces/base-patch-params'
import EndpointPatchParams from './interfaces/endpoint-patch-params'
import EndpointPatcherConstructorParams from './interfaces/endpoint-patcher-constructor-params'

export default class EndpointPatcherApiConsumer extends BasePatcherApiConsumer {
  private readonly instance: any
  private readonly baseUrl: string
  private readonly nestedUrl: string | undefined

  constructor(
    { baseUrl, instance }: EndpointApiConsumersBasicParams,
    params: EndpointPatcherConstructorParams = {}
  ) {
    super(params)
    this.instance = instance
    this.baseUrl = baseUrl
    if (params.nestedUrl) this.nestedUrl = params.nestedUrl
  }

  patchItem(
    { id, changes }: BasePatchParams,
    afterUrl?: string
  ): Promise<PatcherResponse> {
    let updUrl = `${this.baseUrl}/${id}`
    if (afterUrl) updUrl += `/${afterUrl}`
    let changesCopy = dcopy(changes)
    if (this.preRequestHandler) {
      changesCopy = this.preRequestHandler(changesCopy)
    }
    if (this.fieldsToSend) {
      changesCopy = sanitizer(changesCopy, this.fieldsToSend)
    }

    return this._patchItem(changesCopy, updUrl)
  }

  patchNestedItem({ parentId, id, changes, afterUrl }: EndpointPatchParams) {
    let updUrl = `${this.baseUrl}/${parentId}/${this.nestedUrl}/${id}`
    if (afterUrl) updUrl += `/${afterUrl}`
    let changesCopy = dcopy(changes)
    if (this.preRequestHandler) {
      changesCopy = this.preRequestHandler(changesCopy)
    }
    if (this.fieldsToSend) {
      changesCopy = sanitizer(changesCopy, this.fieldsToSend)
    }

    return this._patchItem(changes, updUrl)
  }

  protected async _patchItem(changes: object, baseUrl = this.baseUrl) {
    try {
      const response = await this.instance.patch(baseUrl, changes)

      return response
    } catch (err) {
      throw err
    }
  }
}
