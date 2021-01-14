export interface QueueParameters {
  attempt_id: number | string
  member_id: string // fixme
  queue_id: string // fixme
  queue_name: string
  queue_type: string
  reporting: string // TODO

  resource_id?: number
}

export interface QueueJoinMemberEvent {
  id: number // ід абонента
  name: string // імя абонента
  destination: string // номер абонета
  type_id: number // тип номена, з розділу Communication types

  attempt_id: number // ід спроби, попотрібно для колбеку
  queue_id: number // ід черги
  queue_type: number // тип черги (0 офлайн, 1 вхідна, 2 ІВР, 3 превю, 4 прогрусів, 5 предиктів)

  agent_id?: number // ід агента на якого піде дзвінок
  bucket_id?: number // ід бакета

  resource_id: number // ід ресурсу по якому іде дзвінок
  display: string // номер який відображається абоненту

  expired_at?: number // час коли абонент стане не актуальний, він виключиться з прозвону, заповняться в карточці абоненту

  variables?: Map<string, string> // варібли абонента
}
