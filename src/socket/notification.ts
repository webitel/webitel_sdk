/**
 * Тип, що представляє об'єкт, який може мати довільні ключі та значення.
 *
 * @typedef {Object} keyable
 * @property {string} [key] - Ключ, який є рядком.
 * @property {*} [key: string] - Значення будь-якого типу.
 */
export type keyable = {
  [key: string]: any
}

/**
 * Інтерфейс, що представляє повідомлення (Notification).
 *
 * @interface Notification
 * @property {string} action - Дія, пов'язана з повідомленням.
 * @property {keyable} [body] - Додаткові дані повідомлення у вигляді об'єкта.
 * @property {number} created_at - Час створення повідомлення у вигляді мітки часу.
 * @property {number[]} for_users - Масив ідентифікаторів користувачів, для яких призначене повідомлення.
 * @property {number} id - Унікальний ідентифікатор повідомлення.
 */
export interface Notification {
  action: string
  body?: keyable
  created_at: number
  for_users: number[]
  id: number
}

/**
 * Інтерфейс, що представляє повідомлення (MessageNotification).
 *
 * @interface MessageNotification
 * @property {string} message - Текст повідомлення.
 * @property {string} [type] - Тип повідомлення.
 * @property {number} [timeout] - Час в мілісекундах, після якого повідомлення зникає.
 */
export interface MessageNotification {
  message: string
  type?: string
  timeout?: number
}

export interface MessageScreenShare {
  state: string
  sdp: string
  session_id?: string
  from_sock_id?: string
  parent_id?: string
  from_user_id?: number
  auto?: boolean
  sock_id?: string
  timeout?: number
  screenConstraints?: any
  RTCConfiguration?: any
}

/**
 * Перелічуваний тип (enum), що представляє можливі дії для повідомлень.
 *
 * @enum {string}
 */
export enum NotificationActions {
  HideMember = 'hide_member',
  HideAttempt = 'hide_attempt',
  WaitingList = 'waiting_list',
  SetContact = 'set_contact',
  RefreshMissed = 'refresh_missed',
  ShowMessage = 'show_message',
  ScreenShare = 'screen_share',
  Screenshot = 'screenshot',
  OpenLink = 'open_link',
  StartScreenRecord = 'ss_record_start',
  StopScreenRecord = 'ss_record_stop',
}
