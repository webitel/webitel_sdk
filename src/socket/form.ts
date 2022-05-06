export interface Form {
  id: string
  actions: object[]
  view: object
}

export interface FormAction {
  action: string
  fields?: Map<string, string>
}
