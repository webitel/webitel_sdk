export default interface BaseGetListParams {
  parentId?: number | string
  page?: number
  size?: number
  search?: string
  sort?: string
  fields?: string[]
  id?: Array<number | string>
}
