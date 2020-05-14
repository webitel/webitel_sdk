import { ChatClient } from './chat-client'

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
  const info: ConversationInfo = await client.getData(
    `${conversationPath}/${channelId}`
  )
  const conv = new Conversation(client, info)
  conv.posts = await conv.history(20, 0)

  return conv
}

export class Conversation {
  posts: Post[]
  constructor(
    private client: ChatClient,
    protected info: ConversationInfo,
    post?: Post
  ) {
    this.posts = []
    if (post) {
      this.posts.push(post)
    }
  }

  get channelId() {
    return this.info.channel_id
  }

  get title() {
    return this.info.title
  }

  async unreadMessages() {
    const posts: Post[] = await this.client.getData(
      `${conversationPath}/${this.channelId}/unread`
    )
    if (posts.length > 0) {
      this.posts = posts.concat(this.posts)
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

  async createPost(body: PostBody) {
    const posts: Post[] = await this.client.postData(
      `${conversationPath}/${this.channelId}`,
      body
    )
    this.posts = posts.concat(this.posts)

    return posts
  }
}
