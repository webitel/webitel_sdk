import { Client } from './client'

export enum ChatActions {
  Message = 'message',
  UserInvite = 'user_invite',
  Invite = 'invite_conversation', // коли запрошують в групу нового учасника
  Joined = 'join_conversation',


  Close = 'close_conversation',
  Leave = 'leave_conversation',
  Decline = 'decline_invite',
}

export enum ConversationState {
  Invite = 'invite',
  Active = 'active',
  Pending = 'pending',
  Closed = 'closed',
}

export interface ChatEvent {
  action: string
  data?: object
}

export interface BaseChatEvent {
  conversation_id: string
  timestamp: number
}

export interface InviteEvent extends BaseChatEvent {
  invite_id: string
  user_id: number
  channels: ChatChannel[]
  title: string
}

export interface JoinedEvent extends BaseChatEvent {
  joined_channel_id: string
}

export interface MessageEvent extends BaseChatEvent {
  from_channel_id: string
  message_id: number
  message_type: string
  message_value: string
}

export interface Message {
  id: number
  channel_id: string
  type: string
  value: string
}

export interface ChatChannel {
  id: string
  user_id?: number
  internal: boolean // if true then webitel user else client id
  name: string
}

export class Conversation {
  state: ConversationState
  channelId!: string | null
  channels!: ChatChannel[]
  messages!: Message[]

  constructor(
    private readonly client: Client,
    private readonly invite: InviteEvent
  ) {
    this.channelId = null
    this.messages = []
    this.state = ConversationState.Invite
  }

  get userId() {
    return this.invite.user_id
  }

  get id() {
    return this.invite.conversation_id
  }

  get invitedAt() {
    return this.invite.timestamp
  }

  setChannelId(id: string) {
    this.state = ConversationState.Active
    this.channelId = id
  }

  newMessage(e: MessageEvent) {
    this.messages.push({
      id: e.message_id,
      type: e.message_type,
      value: e.message_value,
      channel_id: e.from_channel_id
    })
  }

  async decline() {
    return this.client.request(`decline_chat`, {
      invite_id: this.invite.invite_id,
    })
  }

  async join() {
    return this.client.request(`join_chat`, {
      invite_id: this.invite.invite_id,
    })
  }

  async close(cause: string) {
    return this.client.request(`close_chat`, {
      channel_id: this.channelId,
      conversation_id: this.id,
      cause
    })
  }

  async leave(cause: string) {
    return this.client.request(`leave_chat`, {
      channel_id: this.channelId,
      conversation_id: this.id,
      cause
    })
  }

  async sendText(text: string) {
    if (!this.channelId) {
      throw new Error("conversation not active")
    }

    return this.client.request(`send_text_chat`, {
      channel_id: this.channelId,
      conversation_id: this.id,
      text
    })
  }
}
