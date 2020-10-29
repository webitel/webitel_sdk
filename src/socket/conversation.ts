import { Client } from './client'

export enum ChatActions {
  Message = 'message',
  UserInvite = 'user_invite',
  Invite = 'invite_conversation', // коли запрошують в групу нового учасника
  Joined = 'join_conversation',

  Close = 'close_conversation',
  Leave = 'leave_conversation',
  Decline = 'decline_invite',
  Update = 'update_channel',
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
  // user_id: number
  title: string
  members: ChatChannel[]
  messages: MessageEvent[]
  conversation: ConversationInfo
}

export interface JoinedEvent extends BaseChatEvent {
  member: ChatChannel
}

export interface MessageEvent extends BaseChatEvent {
  channel_id: string
  message_id: number
  message_type: string
  message_value: string
  created_at: number
  updated_at: number
}

export interface LeavedEvent extends BaseChatEvent {
  leaved_channel_id: string
}

export interface DeclineInviteEvent extends BaseChatEvent {
  invite_id: string
  user_id: number
}

export interface UpdateChannelEvent extends BaseChatEvent {
  channel_id: string
  updated_at: number
}

export interface Message {
  id: number
  channel_id: string
  type: string
  value: string
  created_at: number
}

export interface ChatChannel {
  channel_id: string
  user_id?: number
  internal: boolean // if true then webitel user else client id
  username: string
  type: string
  updated_at: number
}

export interface ConversationInfo {
  id: string
  title: string
  created_at: number
  updated_at: number
}

export class Conversation {
  state: ConversationState
  channelId!: string | null
  channels!: ChatChannel[]
  messages!: Message[]
  updatedAt!: number | null

  constructor(
    private readonly client: Client,
    private readonly invite: InviteEvent
  ) {
    this.channelId = null
    this.messages = []
    this.state = ConversationState.Invite
  }

  // get userId() {
  //   return this.invite.user_id
  // }

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
      channel_id: e.channel_id,
      created_at: e.timestamp,
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
      cause,
    })
  }

  async leave(cause: string) {
    return this.client.request(`leave_chat`, {
      channel_id: this.channelId,
      conversation_id: this.id,
      // cause,
    })
  }

  async sendText(text: string) {
    if (!this.channelId) {
      throw new Error('conversation not active')
    }

    return this.client.request(`send_text_chat`, {
      channel_id: this.channelId,
      conversation_id: this.id,
      text,
    })
  }

  async addToChat(userId: number, title: string) {
    return this.client.request(`add_to_chat`, {
      channel_id: this.channelId,
      conversation_id: this.id,
      user_id: userId,
      title,
    })
  }

  async startChat(userId: number) {
    return this.client.request(`start_chat`, {
      user_id: userId,
    })
  }

  async updateChannel() {
    return this.client.request(`update_channel_chat`, {
      channel_id: this.channelId,
    })
  }
}
