import { ChatClient } from './chat-client'

import { EventEmitter } from 'ee-ts'
import Timer = NodeJS.Timer

const conversationPath = '/chat/conversation'

export interface Participants {
  name: string
}

export interface PostBody {
  type: string // text, file etc
  data: any
}

export interface Post {
  posted_at: number
  posted_by: string
  body: PostBody
}

export interface CreateConversation {
  key: string
  name: string // User name or web chat name
  title: string
  body: PostBody
}

export interface CreateConversationResponse {
  id: string
  channel_id: string
  activity_at: number
  title: string
}

export interface ConversationInfo extends CreateConversationResponse {
  participants?: Participants[]
}

export async function createConversation(
  client: ChatClient,
  req: CreateConversation
): Promise<Conversation> {
  const info: ConversationInfo = await client.postData(conversationPath, req)

  return new Conversation(client, info, {
    body: req.body,
    posted_at: info.activity_at,
    posted_by: req.name,
  })
}

export async function conversationByChannelId(
  client: ChatClient,
  channelId: string
) {
  try {
    const info: ConversationInfo = await client.getData(
      `${conversationPath}/${channelId}`
    )
    const conv = new Conversation(client, info)
    conv.posts = await conv.history(20, 0)

    return conv
  } catch (e) {
    throw e
  }
}

interface ConversationEvent {
  newPosts(posts: Post[]): void
  end(): void
}

export class Conversation extends EventEmitter<ConversationEvent> {
  posts: Post[]
  timer: Timer | null
  closedAt: number | null = null
  constructor(
    private client: ChatClient,
    protected info: ConversationInfo,
    post?: Post
  ) {
    super()
    this.posts = []

    if (post) {
      this.posts.push(post)
    }

    this.timer = null
    this.startTimer()
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.unreadMessages()
        .then((res) => {
          if (res.code) {
            // FIXME
            this.destroy()
          }
        })
        .catch(() => {
          if (!this.closedAt) {
            this.destroy()
          }
        })
    }, 2000)
  }

  destroy() {
    if (!this.closedAt) {
      this.stopTimer()
      this.closedAt = Date.now()
      this.emit('end')
      this.off('*')
    }
  }

  stopTimer() {
    clearInterval(this.timer!)
  }

  get channelId() {
    return this.info.channel_id
  }

  get title() {
    return this.info.title
  }

  async unreadMessages() {
    const posts = await this.client.getData(
      `${conversationPath}/${this.channelId}/unread`
    )
    if (posts.length > 0) {
      this.posts = posts.concat(this.posts)
      this.emit('newPosts', posts)
    }

    return posts
  }

  async history(limit: number, page: number) {
    const posts: Post[] = await this.client.getData(
      `${conversationPath}/${this.channelId}/history?limit=${limit ||
        10}&page=${page || 0}`
    )

    return posts
  }

  async close() {
    return this.client.delete(`${conversationPath}/${this.channelId}`)
  }

  async createPost(body: PostBody) {
    if (this.closedAt) {
      throw new Error(`This chat is closed`)
    }

    try {
      this.stopTimer()
      const posts: Post[] = await this.client.postData(
        `${conversationPath}/${this.channelId}`,
        body
      )
      this.posts = posts.concat(this.posts)

      return posts
    } catch (e) {
      throw e
    } finally {
      this.startTimer()
    }
  }
}
