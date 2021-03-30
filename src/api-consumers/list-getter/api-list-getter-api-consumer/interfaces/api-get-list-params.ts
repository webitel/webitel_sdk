import BaseGetListParams from '../../base-list-getter-api-consumer/interfaces/base-get-list-params'

export default interface ApiGetListParams extends BaseGetListParams {
  parentId?: number | string
  page?: number
  size?: number
  search?: string
  searchQuery?: string
  sort?: string
  fields?: string[]
  ids?: Array<number | string>
}
