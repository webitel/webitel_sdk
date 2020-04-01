import { CalendarServiceApi, Configuration, EngineCalendar } from '../'

const successCode = 200

jest.mock('../environment.ts', () => ({
  IS_DEV: true,
  IS_PROD: false,
}))

describe(`Calendar API`, () => {
  let calendar: EngineCalendar
  let api: CalendarServiceApi

  const configuration = new Configuration({
    basePath: process.env.WEBITEL_API_BASE_PATH,
    apiKey: process.env.WEBITEL_API_KEY,
  })

  api = new CalendarServiceApi(configuration)

  it(`Read timezones`, async () => {
    /* tslint:disable */
    const res = await api.searchTimezones(0, 10)
    /* tslint:enabled */
    expect(res.status).toBe(successCode)
    expect(res.data.items).toBeInstanceOf(Array)
  })

  it(`Create calendar`, async () => {
    const res = await api.createCalendar({
      name: 'test',
      timezone: {
        id: '1',
      },
      accepts: [
        {
          day: 1,
          disabled: false,
          start_time_of_day: 0,
          end_time_of_day: 1440,
        },
      ],
    })

    calendar = res.data

    expect(res.status).toBe(successCode)
    expect(calendar.name).toBe('test')
    if (!calendar.timezone) {
      return
    }
    expect(calendar.timezone.id).toBe('1')

    expect(calendar).toBeDefined()
    expect(calendar.id).toBeDefined()
  })

  it(`Search calendars`, async () => {
    if (!calendar.domain_id) {
      throw new Error('calendar domain_id require')
    }
    const res = await api.searchCalendar(0, 10, '', calendar.domain_id)
    expect(res.status).toBe(successCode)
    expect(res.data.items).toBeInstanceOf(Array)
  })

  it(`Read calendar`, async () => {
    if (!calendar.id) {
      throw new Error('calendar id require')
    }
    const res = await api.readCalendar(calendar.id, calendar.domain_id)

    expect(res.status).toBe(successCode)
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
      accepts: calendar.accepts,
    })

    expect(res.status).toBe(successCode)
    expect(res.data.name).toBe('update-test')
    expect(res.data.id).toBe(calendar.id)
  })

  it(`Remove calendar`, async () => {
    if (!calendar.id) {
      throw new Error('calendar id require')
    }

    const res = await api.deleteCalendar(calendar.id, calendar.domain_id)

    expect(res.status).toBe(successCode)
    expect(res.data.id).toBe(calendar.id)
  })
})
