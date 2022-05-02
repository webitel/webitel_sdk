export interface Form {
  id: string
  actions: string[]
  view: object
}

export interface FormAction {
  action: string
  fields?: Map<string, string>
}
