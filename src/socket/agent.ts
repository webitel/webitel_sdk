import { Client } from './client'

export interface AgentSession {
  agent_id: number
  status: string
  last_state_change: number
  state_timeout?: number
  status_payload: any
}

export interface AgentStatusEvent {
  user_id: number
  agent_id: number
  timestamp: number
  status: string
  status_payload?: any
  timeout?: number
}

export enum AgentStatus {
  Waiting = 'waiting',
  Offline = 'offline',
  Pause = 'pause',
}

export enum AgentState {
  Offline = 'offline',
  Waiting = 'waiting',
  Offering = 'offering',
  Ringing = 'ringing',
  Talking = 'talking',
  Reporting = 'reporting',
  Break = 'break',
  Fine = 'fine',
}

export class Agent {
  constructor(
    protected readonly client: Client,
    protected info: AgentSession
  ) {}

  get agentId() {
    return this.info.agent_id
  }

  get status() {
    return this.info.status
  }

  get stateDuration() {
    return Math.round((Date.now() - this.info.last_state_change) / 1000)
  }

  async waiting() {
    return this.client.request('cc_agent_waiting', { agent_id: this.agentId })
  }

  async logout() {
    return this.client.request('cc_agent_logout', { agent_id: this.agentId })
  }

  async listenStatus() {
    await this.client.subscribeAgentsStatus(
      (e: AgentStatusEvent) => {
        this.info.status = e.status
        this.info.last_state_change = e.timestamp
      },
      { agent_id: this.agentId }
    )
  }

  async pause(payload?: any, timeout?: number) {
    return this.client.request('cc_agent_pause', {
      agent_id: this.agentId,
      payload,
      timeout,
    })
  }

  async directMember(memberId: number, communicationId: number) {
    return this.client.request(`cc_member_direct`, {
      agent_id: this.agentId,
      member_id: memberId,
      communication_id: communicationId,
    })
  }

  async offlineMembers(q: string, page: number, perPage: number) {
    return this.client.request(`cc_fetch_offline_members`, {
      agent_id: this.agentId,
      page,
      q,
      per_page: perPage,
    })
  }
}
