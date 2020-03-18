export interface UserStatus {
  id: string
  app?: string
  status?: string
  note?: string
  open?: number
  closed?: boolean
  contact?: string
  priority?: number
  sequence?: number
  expires?: number
  timestamp?: number
  domain_id?: number
  presence?: any
}
