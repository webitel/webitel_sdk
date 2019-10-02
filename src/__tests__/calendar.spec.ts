import {
  CalendarServiceApi,
  Configuration,
  EngineAcceptOfDay,
  EngineCalendar,
  EngineExceptDate,
} from '../api'

const succesCode = 200

jest.mock('../environment.ts', () => ({
  IS_DEV: true,
  IS_PROD: false,
}))

describe(`Calendar API`, () => {
  let calendar: EngineCalendar
  let api: CalendarServiceApi
  let acceptOfDay: EngineAcceptOfDay
  let exceptDate: EngineExceptDate

  beforeEach(() => {
    const configuration = new Configuration({
      basePath: 'http://10.10.10.25:1907',
      apiKey: 'GUEST_TOKEN',
      accessToken: 'GUEST_TOKEN',
    })

    api = new CalendarServiceApi(configuration)
  })

  it(`Read timezones`, async () => {
    /* tslint:disable */
    const res = await api.searchTimezones(10, 0)
    /* tslint:enabled */
    expect(res.status).toBe(succesCode)
    expect(res.data.items).toBeInstanceOf(Array)
  })

  it(`Create calendar`, async () => {
    const res = await api.createCalendar({
      name: 'test',
      timezone: {
        id: '1',
      },
    })

    calendar = res.data

    expect(res.status).toBe(succesCode)
    expect(calendar.name).toBe('test')
    if (!calendar.timezone) {
      return
    }
    expect(calendar.timezone.id).toBe('1')

    expect(calendar).toBeDefined()
    expect(calendar.id).toBeDefined()
  })

  it(`Read calendar`, async () => {
    if (!calendar.id) {
      throw new Error('calendar id require')
    }
    const res = await api.readCalendar(calendar.id, calendar.domain_id)

    expect(res.status).toBe(succesCode)
    expect(res.data.name).toBe('test')
    expect(res.data.id).toBe(calendar.id)
  })

  it(`Update calendar`, async () => {
    if (!calendar.id) {
      throw new Error('calendar id require')
    }
    const res = await api.updateCalendar(calendar.id, {
      name: 'update-test',
      timezone: {
        id: '2',
      },
    })

    expect(res.status).toBe(succesCode)
    expect(res.data.name).toBe('update-test')
    expect(res.data.id).toBe(calendar.id)
  })

  it('Create accept of day', async () => {
    if (!calendar.id) {
      throw new Error('calendar id require')
    }

    const res = await api.createAcceptOfDay(calendar.id, {
      week_day: 1,
      start_time_of_day: 10,
      end_time_of_day: 100,
      disabled: true,
    })

    expect(res.status).toBe(succesCode)

    /* tslint:disable */
    expect(res.data.start_time_of_day).toBe(10)
    expect(res.data.end_time_of_day).toBe(100)
    /* tslint:enable */
    expect(res.data.disabled).toBe(true)

    acceptOfDay = res.data
  })

  it('Read accept of day', async () => {
    if (!calendar.id || !acceptOfDay.id) {
      throw new Error('calendar id require')
    }

    const res = await api.readAcceptOfDay(calendar.id, acceptOfDay.id)

    expect(res.status).toBe(succesCode)
    /* tslint:disable */
    expect(res.data.start_time_of_day).toBe(10)
    expect(res.data.end_time_of_day).toBe(100)
    /* tslint:enable */
  })

  it('Update accept of day', async () => {
    if (!calendar.id || !acceptOfDay.id) {
      throw new Error('calendar id require')
    }

    const res = await api.updateAcceptOfDay(calendar.id, acceptOfDay.id, {
      ...acceptOfDay,
      end_time_of_day: 1000,
      start_time_of_day: 999,
      disabled: false,
    })

    expect(res.status).toBe(succesCode)
    /* tslint:disable */
    expect(res.data.start_time_of_day).toBe(999)
    expect(res.data.end_time_of_day).toBe(1000)
    /* tslint:enable */
    expect(res.data.disabled).toBe(false)
  })

  it('Remove accept of day', async () => {
    if (!calendar.id || !acceptOfDay.id) {
      throw new Error('calendar id require')
    }

    const res = await api.readAcceptOfDay(
      calendar.id,
      acceptOfDay.id,
      calendar.domain_id
    )

    expect(res.status).toBe(succesCode)
    /* tslint:disable */
    expect(res.data.start_time_of_day).toBe(999)
    expect(res.data.end_time_of_day).toBe(1000)
    /* tslint:enable */
    expect(res.data.disabled).toBe(false)
  })

  it('Create except', async () => {
    if (!calendar.id) {
      throw new Error('calendar id require')
    }

    const res = await api.createExceptDate(calendar.id, {
      date: '2000',
      name: 'test',
      repeat: 1,
    })

    expect(res.status).toBe(succesCode)
    expect(res.data.date).toBe('2000')
    expect(res.data.name).toBe('test')
    expect(res.data.repeat).toBe(1)

    exceptDate = res.data
  })

  it('Read except', async () => {
    if (!calendar.id || !exceptDate.id) {
      throw new Error('calendar id require')
    }

    const res = await api.readExceptDate(calendar.id, exceptDate.id)

    expect(res.status).toBe(succesCode)
    expect(res.data.date).toBe('2000')
    expect(res.data.name).toBe('test')
    expect(res.data.repeat).toBe(1)

    exceptDate = res.data
  })

  it('Update except', async () => {
    if (!calendar.id || !exceptDate.id) {
      throw new Error('calendar id require')
    }

    const res = await api.updateExceptDate(calendar.id, exceptDate.id, {
      ...exceptDate,
      name: 'update-except',
      date: '0',
      repeat: 2,
    })

    expect(res.status).toBe(succesCode)
    expect(res.data.date).toBe('0')
    expect(res.data.name).toBe('update-except')
    /* tslint:disable */
    expect(res.data.repeat).toBe(2)
    /* tslint:enable */

    exceptDate = res.data
  })

  it('Remove except', async () => {
    if (!calendar.id || !exceptDate.id) {
      throw new Error('calendar id require')
    }

    const res = await api.deleteExceptDate(calendar.id, exceptDate.id)

    expect(res.status).toBe(succesCode)
    expect(res.data.date).toBe('0')
    expect(res.data.name).toBe('update-except')
    /* tslint:disable */
    expect(res.data.repeat).toBe(2)
    /* tslint:enable */

    exceptDate = res.data
  })

  it(`Remove calendar`, async () => {
    if (!calendar.id) {
      throw new Error('calendar id require')
    }

    const res = await api.deleteCalendar(calendar.id, calendar.domain_id)

    expect(res.status).toBe(succesCode)
    expect(res.data.id).toBe(calendar.id)
  })
})
