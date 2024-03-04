export type keyable = {
  [key: string]: any
}

export interface Notification {
  action: string
  body?: keyable
  created_at: number
  for_users: number[]
  id: number
}

export enum NotificationActions {
  HideMember = 'hide_member',
  HideAttempt = 'hide_attempt',
  WaitingList = 'waiting_list',
  SetContact = 'set_contact',
  RefreshMissed = 'refresh_missed',
}
