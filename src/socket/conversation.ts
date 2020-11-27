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
  Init = 'init',
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
  messages: Message[]
  conversation: ConversationInfo
}

export interface JoinedEvent extends BaseChatEvent {
  member: ChatChannel
}

export interface MessageEvent extends BaseChatEvent, Message {}

export interface LeavedEvent extends BaseChatEvent {
  leaved_channel_id: string
}

export interface DeclineInviteEvent extends BaseChatEvent {
  user_id: number
  invite_id: string
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
  updated_at: number
}

export interface ChatChannel {
  id: string
  user_id?: number
  name: string
  type: string
}

export interface MessageWithChannel extends Message {
  member: ChatChannel | null
}

export interface ConversationInfo {
  id: string
  title: string
  created_at: number
  updated_at: number
}

export interface ConversationItem {
  id: string
  invite_id?: string
  channel_id?: string
  title: string
  created_at: number
  closed_at: number
  updated_at: number
  joined_at: number
  members: ChatChannel[]
  messages: Message[]
}

export class Conversation {
  state: ConversationState
  channelId!: string | null
  inviteId!: string | null
  member!: ChatChannel
  members!: ChatChannel[]
  _messages: Message[]

  updatedAt: number
  answeredAt: number
  invitedAt: number

  constructor(
    private readonly client: Client,
    private readonly conversationId: string,
    private readonly title: string,
    members: ChatChannel[],
    messages: Message[]
  ) {
    this.channelId = null
    this.answeredAt = 0
    this.updatedAt = 0
    this.invitedAt = 0
    this.members = members || []
    this._messages = messages || []
    this.state = ConversationState.Invite
  }

  setInvite(inviteId: string, timestamp: number) {
    this.inviteId = inviteId
    this.invitedAt = timestamp
  }

  setAnswered(channelId: string, timestamp: number, member: ChatChannel) {
    this.state = ConversationState.Active
    this.answeredAt = timestamp
    this.channelId = channelId
    this.member = member
    this.inviteId = null // deleted in DB
  }

  get id() {
    return this.conversationId
  }

  get messages(): MessageWithChannel[] {
    return this._messages.map((i) => {
      return {
        member: this.messageMember(i),
        ...i,
      }
    })
  }

  async next() {
    throw new Error('TODO')
  }

  async pagination(page: number, perPage: number) {
    throw new Error('TODO')
  }

  newMessage(e: MessageEvent) {
    this._messages.push(e)
  }

  get getAllowDecline() {
    return !!this.inviteId
  }

  get getAllowJoin() {
    return !!this.inviteId
  }

  get getAllowLeave() {
    return !!this.channelId
  }

  /*
  Actions
   */

  async decline() {
    if (!this.inviteId) throw new Error('This conversation is joined')

    return this.client.request(`decline_chat`, {
      invite_id: this.inviteId,
    })
  }

  async join() {
    if (!this.inviteId) throw new Error('This conversation is joined')

    return this.client.request(`join_chat`, {
      invite_id: this.inviteId,
    })
  }

  async close(cause: string) {
    if (!this.channelId) throw new Error('This conversation not active')

    return this.client.request(`close_chat`, {
      channel_id: this.channelId,
      conversation_id: this.id,
      cause,
    })
  }

  async leave(cause: string) {
    if (!this.channelId) throw new Error('This conversation not active')

    return this.client.request(`leave_chat`, {
      channel_id: this.channelId,
      conversation_id: this.id,
      cause,
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

  private messageMember(msg: Message): ChatChannel | null {
    if (this.member && msg.channel_id === this.channelId) {
      return this.member
    }

    for (const m of this.members) {
      if (m.id === msg.channel_id) {
        return m
      }
    }

    return null // TODO
  }
}
