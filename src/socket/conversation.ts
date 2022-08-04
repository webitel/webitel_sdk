import { CallVariables } from './call'
import { Client, FileUploadProgress } from './client'
import { Reporting, Task, TaskData } from './task'
import { chunkString } from './utils'
import any = jasmine.any

const maxSizeMessage = 4096

export enum DeclineCause {
  Timeout = 'TIMEOUT',
  Busy = 'BUSY',
  Cancel = 'CANCEL',
}

export enum ChatActions {
  Message = 'message',
  UserInvite = 'user_invite',
  Invite = 'invite_conversation', // коли запрошують в групу нового учасника
  Joined = 'join_conversation',

  Close = 'close_conversation',
  Leave = 'leave_conversation',
  Decline = 'decline_invite',
  Update = 'update_channel',
  Destroy = 'destroy',
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
  variables?: CallVariables
}

export interface JoinedEvent extends BaseChatEvent {
  member: ChatChannel
}

export interface MessageEvent extends BaseChatEvent, Message {}

export interface LeavedEvent extends BaseChatEvent {
  leaved_channel_id: string
}

export interface CloseEvent extends BaseChatEvent {
  from_channel_id: string
  cause: string
}

export interface DeclineInviteEvent extends BaseChatEvent {
  user_id: number
  invite_id: string
  cause?: DeclineCause | null
}

export interface UpdateChannelEvent extends BaseChatEvent {
  channel_id: string
  updated_at: number
}

export interface Message {
  id: number
  channel_id: string
  type: string
  text: string
  file: MessageFile
  contact?: object
  created_at: number
  updated_at?: number | null
}

export interface ChatChannel {
  id?: string
  name?: string
  type?: string // todo rename
  messenger?: string
  self?: boolean
}

export interface MessageFile {
  id: number // todo to string
  name: string
  mime: string
  size: number
  url: string
  streamUrl: string
}

export interface MessageWithChannel {
  id: number
  channelId: string
  type: string

  file?: MessageFile
  text?: string
  contact?: object | null

  createdAt: number
  updatedAt: number
  member: ChatChannel | null
}

export interface ConversationInfo {
  id: string
  title: string
  created_at: number
  updated_at: number | null
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
  leaving_at?: number
  variables?: CallVariables
  members: ChatChannel[]
  messages: Message[]
  task?: TaskData
}

export class Conversation {
  data: any
  state: ConversationState
  channelId!: string | null
  inviteId!: string | null
  member!: ChatChannel
  members!: ChatChannel[]
  _cause!: DeclineCause | null
  _messages: Message[]
  _autoAnswer: boolean

  createdAt: number
  updatedAt: number
  answeredAt: number
  invitedAt: number
  closedAt: number
  _hasReporting: boolean

  variables?: CallVariables
  task: Task | null

  constructor(
    private readonly client: Client,
    private readonly conversationId: string,
    private readonly title: string,
    members: ChatChannel[],
    messages: Message[],
    variables?: CallVariables
  ) {
    this.channelId = null
    this.createdAt = Date.now()
    this.answeredAt = 0
    this.updatedAt = 0
    this.invitedAt = 0
    this.closedAt = 0
    this.task = null
    this.data = null
    this.members = (members || []).map((i) => wrapChannelMember(i))
    this._messages = messages || []
    this.state = ConversationState.Invite
    this.variables = {}
    this._hasReporting = !!(variables && variables.cc_reporting === 'true')
    this._autoAnswer = false
    this._cause = null

    for (const k in variables) {
      if (!k.startsWith('cc_') && variables.hasOwnProperty(k)) {
        if (k === 'wbt_auto_answer') {
          this._autoAnswer = variables.wbt_auto_answer === 'true'
        } else {
          this.variables[k] = variables[k]
        }
      }
    }

    if (
      variables &&
      variables.hasOwnProperty('cc_attempt_id') &&
      this.client.agent
    ) {
      this.task = this.client.agent.task.get(+variables.cc_attempt_id) || null
    }
  }

  setInvite(inviteId: string, timestamp: number) {
    this.inviteId = inviteId
    this.invitedAt = timestamp
    if (this._autoAnswer) {
      this.join().catch((e) => {
        this.client.emit('error', e)
      })
    }
  }

  setAnswered(channelId: string, timestamp: number, member: ChatChannel) {
    this.state = ConversationState.Active
    this.answeredAt = timestamp
    this.channelId = channelId
    this.member = wrapChannelMember(member)
    this.inviteId = null // deleted in DB
  }

  setClosed(timestamp: number) {
    this.state = ConversationState.Closed
    this.closedAt = timestamp
  }

  setDecline(e: DeclineInviteEvent) {
    this.state = ConversationState.Closed
    this.closedAt = e.timestamp
    this._cause = e.cause || null
  }

  get id() {
    return this.channelId || this.inviteId || this.conversationId
  }

  get cause() {
    return this._cause
  }

  get messages(): MessageWithChannel[] {
    return this.getMessages()
  }

  getMessages(): MessageWithChannel[] {
    return this._messages.map((i) => {
      const msg = {
        id: i.id,
        type: i.type,
        member: this.messageMember(i),
        channelId: i.channel_id,
        createdAt: i.created_at,
        updatedAt: i.updated_at,
        contact: null,
      } as MessageWithChannel

      if (i.hasOwnProperty('file')) {
        i.file.url = this.client.fileUrlDownload(i.file.id)
        i.file.streamUrl = this.client.fileUrlStream(i.file.id)
        msg.file = i.file
      }

      if (i.hasOwnProperty('text')) {
        msg.text = i.text
      }

      if (i.hasOwnProperty('contact')) {
        msg.contact = i.contact
      }

      return msg
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

  get allowDecline() {
    return !!this.inviteId
  }

  get allowJoin() {
    return !!this.inviteId
  }

  get allowLeave() {
    return !!this.channelId && (this.closedAt === 0 || !this.hasReporting)
  }

  get allowReporting() {
    return this.answeredAt > 0 && this.hasReporting
  }

  get hasReporting() {
    return this._hasReporting
  }

  get membersId() {
    const res = [this.id]
    for (const m of this.members) {
      res.push(m.id!)
    }

    return res
  }

  // todo task is deprecated
  get attempt() {
    return this.task
  }

  /*
  Actions
   */

  async decline(cause?: DeclineCause) {
    if (!this.inviteId) throw new Error('This conversation is joined')
    let _cause = cause

    if (!cause && this.answeredAt === 0) {
      _cause = DeclineCause.Busy
    }

    return this.client.request(`decline_chat`, {
      invite_id: this.inviteId,
      cause: _cause,
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
      conversation_id: this.conversationId,
      cause,
    })
  }

  async leave(cause: string) {
    if (!this.channelId) throw new Error('This conversation not active')

    if (
      this.closedAt !== 0 &&
      !this.hasReporting &&
      this.cause !== DeclineCause.Busy
    ) {
      return this.client.destroyConversation(this)
    }

    return this.client.request(`leave_chat`, {
      channel_id: this.channelId,
      conversation_id: this.conversationId,
      cause,
    })
  }

  async sendText(text: string) {
    if (!this.channelId) {
      throw new Error('conversation not active')
    }

    if (!text.length) {
      throw new Error('empty message')
    }

    const chunk = chunkString(text, maxSizeMessage)

    for (let i = 0; i < chunk.length; i++) {
      if (i + 1 >= chunk.length) {
        return this.sendMessageTextChunk(chunk[i])
      }

      await this.sendMessageTextChunk(chunk[i])
    }
  }

  async sendFile(file: File, cb?: FileUploadProgress) {
    const storedFiles = await this.client.storeFile(
      this.conversationId,
      [file],
      cb
    )
    const f = storedFiles[0]

    // todo bug if chat response error
    return this.client.request(`send_file_chat`, {
      channel_id: this.channelId,
      conversation_id: this.conversationId,
      id: f.id,
      name: file.name,
      mime: f.mime,
      url: f.shared,
      size: f.size,
    })
  }

  async send(data: string | File, cb?: FileUploadProgress) {
    if (typeof data === 'string') {
      return this.sendText(data)
    } else if (data instanceof File) {
      return this.sendFile(data, cb)
    } else {
      throw new Error('unknown send data')
    }
  }

  async addToChat(userId: number, title: string) {
    return this.client.request(`add_to_chat`, {
      channel_id: this.channelId,
      conversation_id: this.conversationId,
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

  async reporting(reporting: Reporting) {
    if (!this.task) {
      throw new Error(`this conversation not in queue`)
    }

    return this.task.reporting(reporting)
  }

  async renew(sec?: number) {
    if (!this.task) {
      throw new Error(`this conversation not in queue`)
    }

    return this.task.renew(sec)
  }

  async transferToPlan(planId: number) {
    return this.client.request(`blind_transfer_chat`, {
      conversation_id: this.conversationId,
      channel_id: this.channelId,
      plan_id: planId,
    })
  }

  async transferToUser(userId: number) {
    return this.client.request(`transfer_user_chat`, {
      conversation_id: this.conversationId,
      channel_id: this.channelId,
      user_id: userId,
    })
  }

  private sendMessageTextChunk(text: string) {
    return this.client.request(`send_text_chat`, {
      channel_id: this.channelId,
      conversation_id: this.conversationId,
      text,
    })
  }

  private messageMember(msg: Message): ChatChannel | null {
    if (this.member && msg.channel_id === this.channelId) {
      return {
        self: true,
      }
    }

    for (const m of this.members) {
      if (m.id === msg.channel_id) {
        return m
      }
    }

    return null // TODO
  }
}

function wrapChannelMember(m: ChatChannel): ChatChannel {
  // todo
  m.messenger = m.type

  return m
}
