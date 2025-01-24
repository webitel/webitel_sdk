// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 24.04.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as globalImportUrl from 'url'
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios'
import { Configuration } from '../configuration'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from '../base'
// @ts-ignore
import { InlineObject3 } from '../api'
// @ts-ignore
import { WfmCreateAgentsWorkingScheduleShiftsResponse } from '../api'
// @ts-ignore
import { WfmSearchAgentsWorkingScheduleResponse } from '../api'
/**
 * AgentWorkingScheduleServiceApi - axios parameter creator
 * @export
 */
export const AgentWorkingScheduleServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} workingScheduleId
     * @param {InlineObject3} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAgentsWorkingScheduleShifts: async (
      workingScheduleId: string,
      body: InlineObject3,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'workingScheduleId' is not null or undefined
      if (workingScheduleId === null || workingScheduleId === undefined) {
        throw new RequiredError(
          'workingScheduleId',
          'Required parameter workingScheduleId was null or undefined when calling createAgentsWorkingScheduleShifts.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createAgentsWorkingScheduleShifts.'
        )
      }
      const localVarPath = `/wfm/agents/working_schedules/{working_schedule_id}`.replace(
        `{${'working_schedule_id'}}`,
        encodeURIComponent(String(workingScheduleId))
      )
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication AccessToken required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === 'function'
            ? await configuration.apiKey('X-Webitel-Access')
            : await configuration.apiKey
        localVarHeaderParameter['X-Webitel-Access'] = localVarApiKeyValue
      }

      localVarHeaderParameter['Content-Type'] = 'application/json'

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      }
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      const needsSerialization =
        typeof body !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json'
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || ''

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @param {string} workingScheduleId
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {Array<string>} [supervisorId]
     * @param {Array<string>} [teamId]
     * @param {Array<string>} [skillId]
     * @param {string} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAgentsWorkingSchedule: async (
      workingScheduleId: string,
      dateFrom?: string,
      dateTo?: string,
      supervisorId?: Array<string>,
      teamId?: Array<string>,
      skillId?: Array<string>,
      q?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'workingScheduleId' is not null or undefined
      if (workingScheduleId === null || workingScheduleId === undefined) {
        throw new RequiredError(
          'workingScheduleId',
          'Required parameter workingScheduleId was null or undefined when calling searchAgentsWorkingSchedule.'
        )
      }
      const localVarPath = `/wfm/agents/working_schedules/{working_schedule_id}`.replace(
        `{${'working_schedule_id'}}`,
        encodeURIComponent(String(workingScheduleId))
      )
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication AccessToken required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === 'function'
            ? await configuration.apiKey('X-Webitel-Access')
            : await configuration.apiKey
        localVarHeaderParameter['X-Webitel-Access'] = localVarApiKeyValue
      }

      if (dateFrom !== undefined) {
        localVarQueryParameter['date.from'] = dateFrom
      }

      if (dateTo !== undefined) {
        localVarQueryParameter['date.to'] = dateTo
      }

      if (supervisorId) {
        localVarQueryParameter['supervisor_id'] = supervisorId
      }

      if (teamId) {
        localVarQueryParameter['team_id'] = teamId
      }

      if (skillId) {
        localVarQueryParameter['skill_id'] = skillId
      }

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      }
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * AgentWorkingScheduleServiceApi - functional programming interface
 * @export
 */
export const AgentWorkingScheduleServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} workingScheduleId
     * @param {InlineObject3} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createAgentsWorkingScheduleShifts(
      workingScheduleId: string,
      body: InlineObject3,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WfmCreateAgentsWorkingScheduleShiftsResponse>
    > {
      const localVarAxiosArgs = await AgentWorkingScheduleServiceApiAxiosParamCreator(
        configuration
      ).createAgentsWorkingScheduleShifts(workingScheduleId, body, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @param {string} workingScheduleId
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {Array<string>} [supervisorId]
     * @param {Array<string>} [teamId]
     * @param {Array<string>} [skillId]
     * @param {string} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchAgentsWorkingSchedule(
      workingScheduleId: string,
      dateFrom?: string,
      dateTo?: string,
      supervisorId?: Array<string>,
      teamId?: Array<string>,
      skillId?: Array<string>,
      q?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WfmSearchAgentsWorkingScheduleResponse>
    > {
      const localVarAxiosArgs = await AgentWorkingScheduleServiceApiAxiosParamCreator(
        configuration
      ).searchAgentsWorkingSchedule(
        workingScheduleId,
        dateFrom,
        dateTo,
        supervisorId,
        teamId,
        skillId,
        q,
        options
      )
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
  }
}

/**
 * AgentWorkingScheduleServiceApi - factory interface
 * @export
 */
export const AgentWorkingScheduleServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {string} workingScheduleId
     * @param {InlineObject3} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAgentsWorkingScheduleShifts(
      workingScheduleId: string,
      body: InlineObject3,
      options?: any
    ): AxiosPromise<WfmCreateAgentsWorkingScheduleShiftsResponse> {
      return AgentWorkingScheduleServiceApiFp(configuration)
        .createAgentsWorkingScheduleShifts(workingScheduleId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} workingScheduleId
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {Array<string>} [supervisorId]
     * @param {Array<string>} [teamId]
     * @param {Array<string>} [skillId]
     * @param {string} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAgentsWorkingSchedule(
      workingScheduleId: string,
      dateFrom?: string,
      dateTo?: string,
      supervisorId?: Array<string>,
      teamId?: Array<string>,
      skillId?: Array<string>,
      q?: string,
      options?: any
    ): AxiosPromise<WfmSearchAgentsWorkingScheduleResponse> {
      return AgentWorkingScheduleServiceApiFp(configuration)
        .searchAgentsWorkingSchedule(
          workingScheduleId,
          dateFrom,
          dateTo,
          supervisorId,
          teamId,
          skillId,
          q,
          options
        )
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * AgentWorkingScheduleServiceApi - object-oriented interface
 * @export
 * @class AgentWorkingScheduleServiceApi
 * @extends {BaseAPI}
 */
export class AgentWorkingScheduleServiceApi extends BaseAPI {
  /**
   *
   * @param {string} workingScheduleId
   * @param {InlineObject3} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentWorkingScheduleServiceApi
   */
  public createAgentsWorkingScheduleShifts(
    workingScheduleId: string,
    body: InlineObject3,
    options?: any
  ) {
    return AgentWorkingScheduleServiceApiFp(this.configuration)
      .createAgentsWorkingScheduleShifts(workingScheduleId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} workingScheduleId
   * @param {string} [dateFrom]
   * @param {string} [dateTo]
   * @param {Array<string>} [supervisorId]
   * @param {Array<string>} [teamId]
   * @param {Array<string>} [skillId]
   * @param {string} [q]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentWorkingScheduleServiceApi
   */
  public searchAgentsWorkingSchedule(
    workingScheduleId: string,
    dateFrom?: string,
    dateTo?: string,
    supervisorId?: Array<string>,
    teamId?: Array<string>,
    skillId?: Array<string>,
    q?: string,
    options?: any
  ) {
    return AgentWorkingScheduleServiceApiFp(this.configuration)
      .searchAgentsWorkingSchedule(
        workingScheduleId,
        dateFrom,
        dateTo,
        supervisorId,
        teamId,
        skillId,
        q,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }
}
