import BaseCreatorConstructorParams from '../../base-creator-api-consumer/interfaces/base-creator-constructor-params'

export default interface EndpointCreatorConstructorParams
  extends BaseCreatorConstructorParams {
  nestedUrl?: string
}
