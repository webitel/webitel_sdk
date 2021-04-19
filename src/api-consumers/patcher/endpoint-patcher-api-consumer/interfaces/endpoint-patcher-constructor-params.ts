import BasePatcherConstructorParams from '../../base-patcher-api-consumer/interfaces/base-patcher-constructor-params'

export default interface EndpointPatcherConstructorParams
  extends BasePatcherConstructorParams {
  nestedUrl?: string
}
