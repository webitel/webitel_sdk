import BaseGetListParams from '../../base-list-getter-api-consumer/interfaces/base-get-list-params'

export default interface EndpointGetListParams extends BaseGetListParams {
  searchQuery?: string
  rest?: object
}
