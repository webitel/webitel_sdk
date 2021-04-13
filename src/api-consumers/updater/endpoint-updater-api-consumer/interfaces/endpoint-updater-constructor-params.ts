import BaseUpdaterConstructorParams from '../../base-updater-api-consumer/interfaces/base-updater-constructor-params'

export default interface EndpointUpdaterConstructorParams
  extends BaseUpdaterConstructorParams {
  nestedUrl?: string
}
