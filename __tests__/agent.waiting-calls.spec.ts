import { Agent, AgentStatus, AgentSession, WaitingCallsSort } from '../src/socket/agent'
import { Client } from '../src/socket/client'

const NOW = 1_700_000_000_000

interface CallSeed {
  id: number
  name: string
  destination: string
  wait: number
  queue: string
}

const BASE_SEEDS: CallSeed[] = [
  { id: 1, name: 'Charlie', destination: '+380501112233', wait: 30, queue: 'Support' },
  { id: 2, name: 'alice', destination: '+380671234567', wait: 120, queue: 'Billing' },
  { id: 3, name: 'Bob', destination: '0442223344', wait: 60, queue: 'Sales' },
]

const createSession = (status: string = AgentStatus.Online): AgentSession => ({
  agent_id: 1,
  status,
  on_demand: false,
  last_status_change: 0,
  status_duration: 0,
  status_payload: null,
  status_comment: '',
  channels: [],
  is_supervisor: false,
  is_admin: false,
  team: null,
  supervisor: null,
  auditor: null,
})

const createEvent = (seeds: CallSeed[]) => ({
  calls: seeds.map((s) => ({
    attempt_id: s.id,
    session_id: `session-${s.id}`,
    communication: { name: s.name, destination: s.destination },
    deadline: 0,
    queue: { id: s.id, name: s.queue },
    wait: s.wait,
  })),
  chats: [],
})

const createManySeeds = (count: number): CallSeed[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Member ${i + 1}`,
    destination: `+38050000${String(i).padStart(4, '0')}`,
    wait: i,
    queue: `Queue ${(i % 3) + 1}`,
  }))

const createAgent = (seeds: CallSeed[] = BASE_SEEDS, status?: string): Agent => {
  const agent = new Agent({} as Client, createSession(status))
  agent.setWaitingList(createEvent(seeds))

  return agent
}

const ids = (agent: Agent): number[] => agent.waitingListCalls.map((c) => c.attemptId)

const rawSort = (value: string) => value as WaitingCallsSort

describe('Agent waiting calls', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.setSystemTime(NOW)
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  describe('initial state', () => {
    it('keeps backend order without query', () => {
      const agent = createAgent()

      expect(ids(agent)).toEqual([1, 2, 3])
      expect(agent.waitingCallsTotal).toBe(3)
      expect(agent.hasMoreWaitingCalls).toBe(false)
    })

    it('computes joinedAt from wait', () => {
      const agent = createAgent()

      expect(agent.waitingListCalls[0].joinedAt).toBe(NOW - 30_000)
      expect(agent.waitingListCalls[1].joinedAt).toBe(NOW - 120_000)
    })

    it('is empty when agent is not online', () => {
      const agent = createAgent(BASE_SEEDS, AgentStatus.Pause)

      expect(agent.waitingListCalls).toEqual([])
      expect(agent.waitingCallsTotal).toBe(0)
      expect(agent.hasMoreWaitingCalls).toBe(false)
    })
  })

  describe('pagination', () => {
    it('shows only the first page', () => {
      const agent = createAgent(createManySeeds(50))

      expect(agent.waitingListCalls).toHaveLength(20)
      expect(agent.waitingCallsTotal).toBe(50)
      expect(agent.hasMoreWaitingCalls).toBe(true)
    })

    it('loads more pages until the end', () => {
      const agent = createAgent(createManySeeds(50))

      expect(agent.loadMoreWaitingCalls()).toBe(true)
      expect(agent.waitingListCalls).toHaveLength(40)

      expect(agent.loadMoreWaitingCalls()).toBe(true)
      expect(agent.waitingListCalls).toHaveLength(50)
      expect(agent.hasMoreWaitingCalls).toBe(false)

      expect(agent.loadMoreWaitingCalls()).toBe(false)
      expect(agent.waitingListCalls).toHaveLength(50)
    })

    it('respects custom size', () => {
      const agent = createAgent(createManySeeds(50))

      agent.setWaitingCallsQuery({ size: 7 })

      expect(agent.waitingListCalls).toHaveLength(7)

      agent.loadMoreWaitingCalls()

      expect(agent.waitingListCalls).toHaveLength(14)
    })

    it('normalizes invalid size', () => {
      const agent = createAgent(createManySeeds(50))

      agent.setWaitingCallsQuery({ size: 0 })
      expect(agent.waitingListCalls).toHaveLength(1)

      agent.setWaitingCallsQuery({ size: Number.NaN })
      expect(agent.waitingListCalls).toHaveLength(20)

      agent.setWaitingCallsQuery({ size: 5.9 })
      expect(agent.waitingListCalls).toHaveLength(5)
    })

    it('keeps the same array reference', () => {
      const agent = createAgent(createManySeeds(50))
      const reference = agent.waitingListCalls

      agent.loadMoreWaitingCalls()
      agent.setWaitingCallsQuery({ q: 'Member 1' })

      expect(agent.waitingListCalls).toBe(reference)
    })

    it('resets to the first page when query changes', () => {
      const agent = createAgent(createManySeeds(50))

      agent.loadMoreWaitingCalls()
      expect(agent.waitingListCalls).toHaveLength(40)

      agent.setWaitingCallsQuery({ sort: '+name' })

      expect(agent.waitingListCalls).toHaveLength(20)
    })

    it('does not reset the page on push updates', () => {
      const agent = createAgent(createManySeeds(50))

      agent.loadMoreWaitingCalls()
      agent.setWaitingList(createEvent(createManySeeds(50)))

      expect(agent.waitingListCalls).toHaveLength(40)
    })
  })

  describe('search', () => {
    it('finds by name ignoring case', () => {
      const agent = createAgent()

      agent.setWaitingCallsQuery({ q: 'ALI' })

      expect(ids(agent)).toEqual([2])
      expect(agent.waitingCallsTotal).toBe(1)
    })

    it('finds by phone substring', () => {
      const agent = createAgent()

      agent.setWaitingCallsQuery({ q: '0442' })

      expect(ids(agent)).toEqual([3])
    })

    it('finds by phone digits regardless of formatting', () => {
      const agent = createAgent()

      agent.setWaitingCallsQuery({ q: '+38 (050) 111' })

      expect(ids(agent)).toEqual([1])
    })

    it('ignores surrounding whitespace', () => {
      const agent = createAgent()

      agent.setWaitingCallsQuery({ q: '  bob  ' })

      expect(ids(agent)).toEqual([3])
    })

    it('returns nothing when there is no match', () => {
      const agent = createAgent()

      agent.setWaitingCallsQuery({ q: 'zzz' })

      expect(ids(agent)).toEqual([])
      expect(agent.waitingCallsTotal).toBe(0)
      expect(agent.hasMoreWaitingCalls).toBe(false)
    })

    it('restores the full list when q is cleared', () => {
      const agent = createAgent()

      agent.setWaitingCallsQuery({ q: 'bob' })
      agent.setWaitingCallsQuery({ q: '' })

      expect(ids(agent)).toEqual([1, 2, 3])
    })

    it('applies search before pagination', () => {
      const agent = createAgent(createManySeeds(50))

      agent.setWaitingCallsQuery({ q: 'Member 4' })

      expect(agent.waitingCallsTotal).toBe(11)
      expect(agent.waitingListCalls).toHaveLength(11)
    })
  })

  describe('sorting', () => {
    it.each([
      ['+name', [2, 3, 1]],
      ['-name', [1, 3, 2]],
      ['+joined_at', [2, 3, 1]],
      ['-joined_at', [1, 3, 2]],
      ['+duration', [1, 3, 2]],
      ['-duration', [2, 3, 1]],
      ['+queue', [2, 3, 1]],
      ['-queue', [1, 3, 2]],
    ] as const)('sorts by %s', (sort, expected) => {
      const agent = createAgent()

      agent.setWaitingCallsQuery({ sort })

      expect(ids(agent)).toEqual(expected)
    })

    it('treats a missing sign as ascending', () => {
      const agent = createAgent()

      agent.setWaitingCallsQuery({ sort: rawSort('name') })

      expect(ids(agent)).toEqual([2, 3, 1])
    })

    it('treats a leading space as ascending', () => {
      const agent = createAgent()

      agent.setWaitingCallsQuery({ sort: rawSort(' name') })

      expect(ids(agent)).toEqual([2, 3, 1])
    })

    it('keeps backend order for an unknown field', () => {
      const agent = createAgent()

      agent.setWaitingCallsQuery({ sort: rawSort('+unknown') })

      expect(ids(agent)).toEqual([1, 2, 3])
    })

    it('keeps backend order when sort is null', () => {
      const agent = createAgent()

      agent.setWaitingCallsQuery({ sort: '+name' })
      agent.setWaitingCallsQuery({ sort: null })

      expect(ids(agent)).toEqual([1, 2, 3])
    })

    it('sorts names numerically', () => {
      const agent = createAgent([
        { id: 1, name: 'Item 10', destination: '1', wait: 1, queue: 'A' },
        { id: 2, name: 'Item 2', destination: '2', wait: 2, queue: 'A' },
        { id: 3, name: 'Item 1', destination: '3', wait: 3, queue: 'A' },
      ])

      agent.setWaitingCallsQuery({ sort: '+name' })

      expect(ids(agent)).toEqual([3, 2, 1])
    })

    it('sorts cyrillic names', () => {
      const agent = createAgent([
        { id: 1, name: 'Олена', destination: '1', wait: 1, queue: 'A' },
        { id: 2, name: 'Андрій', destination: '2', wait: 2, queue: 'A' },
        { id: 3, name: 'Іван', destination: '3', wait: 3, queue: 'A' },
      ])

      agent.setWaitingCallsQuery({ sort: '+name' })

      expect(ids(agent)).toEqual([2, 3, 1])
    })

    it('breaks ties by attemptId', () => {
      const agent = createAgent([
        { id: 5, name: 'Same', destination: '1', wait: 10, queue: 'Q' },
        { id: 3, name: 'same', destination: '2', wait: 10, queue: 'Q' },
        { id: 4, name: 'SAME', destination: '3', wait: 10, queue: 'Q' },
      ])

      agent.setWaitingCallsQuery({ sort: '+name' })
      expect(ids(agent)).toEqual([3, 4, 5])

      agent.setWaitingCallsQuery({ sort: '-name' })
      expect(ids(agent)).toEqual([3, 4, 5])
    })

    it('sorts before pagination', () => {
      const agent = createAgent(createManySeeds(50))

      agent.setWaitingCallsQuery({ sort: '-duration', size: 5 })

      expect(ids(agent)).toEqual([50, 49, 48, 47, 46])
    })

    it('combines search and sort', () => {
      const agent = createAgent()

      agent.setWaitingCallsQuery({ q: 'li', sort: '-name' })
      expect(ids(agent)).toEqual([1, 2])

      agent.setWaitingCallsQuery({ sort: '+name' })
      expect(ids(agent)).toEqual([2, 1])
    })
  })

  describe('updates', () => {
    it('removes a call and refreshes the total', () => {
      const agent = createAgent()

      agent.deleteWaitingAttempt({ attempt_id: 2 })

      expect(ids(agent)).toEqual([1, 3])
      expect(agent.waitingCallsTotal).toBe(2)
    })

    it('ignores an unknown attempt', () => {
      const agent = createAgent()

      agent.deleteWaitingAttempt({ attempt_id: 999 })

      expect(ids(agent)).toEqual([1, 2, 3])
      expect(agent.waitingCallsTotal).toBe(3)
    })

    it('keeps query on push updates', () => {
      const agent = createAgent()

      agent.setWaitingCallsQuery({ q: 'a', sort: '+name' })
      agent.setWaitingList(
        createEvent([
          ...BASE_SEEDS,
          { id: 4, name: 'Anna', destination: '4', wait: 5, queue: 'Sales' },
        ])
      )

      expect(ids(agent)).toEqual([2, 4, 1])
    })

    it('clears calls when the agent goes offline', () => {
      const agent = createAgent()

      agent.setStatus({
        user_id: 1,
        agent_id: 1,
        timestamp: NOW,
        status: AgentStatus.Offline,
        status_comment: '',
        channels: [],
      })

      expect(agent.waitingListCalls).toEqual([])
      expect(agent.waitingCallsTotal).toBe(0)
    })
  })
})
