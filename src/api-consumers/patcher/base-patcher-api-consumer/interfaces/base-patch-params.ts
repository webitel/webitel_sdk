export default interface BasePatchParams {
  parentId?: number | string
  id: number | string
  changes: object
}
