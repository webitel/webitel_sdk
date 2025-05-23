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
import { InlineObject11 } from '../api'
// @ts-ignore
import { InlineObject12 } from '../api'
// @ts-ignore
import { WfmCreateWorkingScheduleRequest } from '../api'
// @ts-ignore
import { WfmCreateWorkingScheduleResponse } from '../api'
// @ts-ignore
import { WfmDeleteWorkingScheduleResponse } from '../api'
// @ts-ignore
import { WfmReadWorkingScheduleForecastResponse } from '../api'
// @ts-ignore
import { WfmReadWorkingScheduleResponse } from '../api'
// @ts-ignore
import { WfmSearchWorkingScheduleResponse } from '../api'
// @ts-ignore
import { WfmUpdateWorkingScheduleAddAgentsResponse } from '../api'
// @ts-ignore
import { WfmUpdateWorkingScheduleRemoveAgentResponse } from '../api'
// @ts-ignore
import { WfmUpdateWorkingScheduleResponse } from '../api'
/**
 * WorkingScheduleServiceApi - axios parameter creator
 * @export
 */
export const WorkingScheduleServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {WfmCreateWorkingScheduleRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWorkingSchedule: async (
      body: WfmCreateWorkingScheduleRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createWorkingSchedule.'
        )
      }
      const localVarPath = `/wfm/lookups/working_schedules`
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
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteWorkingSchedule: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteWorkingSchedule.'
        )
      }
      const localVarPath = `/wfm/lookups/working_schedules/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'DELETE',
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
    /**
     *
     * @param {string} id
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readWorkingSchedule: async (
      id: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readWorkingSchedule.'
        )
      }
      const localVarPath = `/wfm/lookups/working_schedules/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
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

      if (fields) {
        localVarQueryParameter['fields'] = fields
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
    /**
     *
     * @param {string} id
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readWorkingScheduleForecast: async (
      id: string,
      dateFrom?: string,
      dateTo?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readWorkingScheduleForecast.'
        )
      }
      const localVarPath = `/wfm/lookups/working_schedules/{id}/forecast`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
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
    /**
     *
     * @param {string} [q]
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchWorkingSchedule: async (
      q?: string,
      page?: number,
      size?: number,
      sort?: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/wfm/lookups/working_schedules`
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

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (size !== undefined) {
        localVarQueryParameter['size'] = size
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (fields) {
        localVarQueryParameter['fields'] = fields
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
    /**
     *
     * @param {string} itemId
     * @param {InlineObject12} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWorkingSchedule: async (
      itemId: string,
      body: InlineObject12,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'itemId' is not null or undefined
      if (itemId === null || itemId === undefined) {
        throw new RequiredError(
          'itemId',
          'Required parameter itemId was null or undefined when calling updateWorkingSchedule.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateWorkingSchedule.'
        )
      }
      const localVarPath = `/wfm/lookups/working_schedules/{item.id}`.replace(
        `{${'item.id'}}`,
        encodeURIComponent(String(itemId))
      )
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'PUT',
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
     * @param {string} id
     * @param {InlineObject11} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWorkingScheduleAddAgents: async (
      id: string,
      body: InlineObject11,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateWorkingScheduleAddAgents.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateWorkingScheduleAddAgents.'
        )
      }
      const localVarPath = `/wfm/lookups/working_schedules/{id}/agents`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
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
     * @param {string} id
     * @param {string} agentId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWorkingScheduleRemoveAgent: async (
      id: string,
      agentId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateWorkingScheduleRemoveAgent.'
        )
      }
      // verify required parameter 'agentId' is not null or undefined
      if (agentId === null || agentId === undefined) {
        throw new RequiredError(
          'agentId',
          'Required parameter agentId was null or undefined when calling updateWorkingScheduleRemoveAgent.'
        )
      }
      const localVarPath = `/wfm/lookups/working_schedules/{id}/agents/{agent_id}`
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
        .replace(`{${'agent_id'}}`, encodeURIComponent(String(agentId)))
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'DELETE',
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
 * WorkingScheduleServiceApi - functional programming interface
 * @export
 */
export const WorkingScheduleServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {WfmCreateWorkingScheduleRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createWorkingSchedule(
      body: WfmCreateWorkingScheduleRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WfmCreateWorkingScheduleResponse>
    > {
      const localVarAxiosArgs = await WorkingScheduleServiceApiAxiosParamCreator(
        configuration
      ).createWorkingSchedule(body, options)
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
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteWorkingSchedule(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WfmDeleteWorkingScheduleResponse>
    > {
      const localVarAxiosArgs = await WorkingScheduleServiceApiAxiosParamCreator(
        configuration
      ).deleteWorkingSchedule(id, options)
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
     * @param {string} id
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readWorkingSchedule(
      id: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WfmReadWorkingScheduleResponse>
    > {
      const localVarAxiosArgs = await WorkingScheduleServiceApiAxiosParamCreator(
        configuration
      ).readWorkingSchedule(id, fields, options)
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
     * @param {string} id
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readWorkingScheduleForecast(
      id: string,
      dateFrom?: string,
      dateTo?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WfmReadWorkingScheduleForecastResponse>
    > {
      const localVarAxiosArgs = await WorkingScheduleServiceApiAxiosParamCreator(
        configuration
      ).readWorkingScheduleForecast(id, dateFrom, dateTo, options)
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
     * @param {string} [q]
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchWorkingSchedule(
      q?: string,
      page?: number,
      size?: number,
      sort?: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WfmSearchWorkingScheduleResponse>
    > {
      const localVarAxiosArgs = await WorkingScheduleServiceApiAxiosParamCreator(
        configuration
      ).searchWorkingSchedule(q, page, size, sort, fields, options)
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
     * @param {string} itemId
     * @param {InlineObject12} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateWorkingSchedule(
      itemId: string,
      body: InlineObject12,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WfmUpdateWorkingScheduleResponse>
    > {
      const localVarAxiosArgs = await WorkingScheduleServiceApiAxiosParamCreator(
        configuration
      ).updateWorkingSchedule(itemId, body, options)
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
     * @param {string} id
     * @param {InlineObject11} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateWorkingScheduleAddAgents(
      id: string,
      body: InlineObject11,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WfmUpdateWorkingScheduleAddAgentsResponse>
    > {
      const localVarAxiosArgs = await WorkingScheduleServiceApiAxiosParamCreator(
        configuration
      ).updateWorkingScheduleAddAgents(id, body, options)
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
     * @param {string} id
     * @param {string} agentId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateWorkingScheduleRemoveAgent(
      id: string,
      agentId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WfmUpdateWorkingScheduleRemoveAgentResponse>
    > {
      const localVarAxiosArgs = await WorkingScheduleServiceApiAxiosParamCreator(
        configuration
      ).updateWorkingScheduleRemoveAgent(id, agentId, options)
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
 * WorkingScheduleServiceApi - factory interface
 * @export
 */
export const WorkingScheduleServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {WfmCreateWorkingScheduleRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWorkingSchedule(
      body: WfmCreateWorkingScheduleRequest,
      options?: any
    ): AxiosPromise<WfmCreateWorkingScheduleResponse> {
      return WorkingScheduleServiceApiFp(configuration)
        .createWorkingSchedule(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteWorkingSchedule(
      id: string,
      options?: any
    ): AxiosPromise<WfmDeleteWorkingScheduleResponse> {
      return WorkingScheduleServiceApiFp(configuration)
        .deleteWorkingSchedule(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} id
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readWorkingSchedule(
      id: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<WfmReadWorkingScheduleResponse> {
      return WorkingScheduleServiceApiFp(configuration)
        .readWorkingSchedule(id, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} id
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readWorkingScheduleForecast(
      id: string,
      dateFrom?: string,
      dateTo?: string,
      options?: any
    ): AxiosPromise<WfmReadWorkingScheduleForecastResponse> {
      return WorkingScheduleServiceApiFp(configuration)
        .readWorkingScheduleForecast(id, dateFrom, dateTo, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} [q]
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchWorkingSchedule(
      q?: string,
      page?: number,
      size?: number,
      sort?: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<WfmSearchWorkingScheduleResponse> {
      return WorkingScheduleServiceApiFp(configuration)
        .searchWorkingSchedule(q, page, size, sort, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} itemId
     * @param {InlineObject12} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWorkingSchedule(
      itemId: string,
      body: InlineObject12,
      options?: any
    ): AxiosPromise<WfmUpdateWorkingScheduleResponse> {
      return WorkingScheduleServiceApiFp(configuration)
        .updateWorkingSchedule(itemId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} id
     * @param {InlineObject11} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWorkingScheduleAddAgents(
      id: string,
      body: InlineObject11,
      options?: any
    ): AxiosPromise<WfmUpdateWorkingScheduleAddAgentsResponse> {
      return WorkingScheduleServiceApiFp(configuration)
        .updateWorkingScheduleAddAgents(id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} id
     * @param {string} agentId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWorkingScheduleRemoveAgent(
      id: string,
      agentId: string,
      options?: any
    ): AxiosPromise<WfmUpdateWorkingScheduleRemoveAgentResponse> {
      return WorkingScheduleServiceApiFp(configuration)
        .updateWorkingScheduleRemoveAgent(id, agentId, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * WorkingScheduleServiceApi - object-oriented interface
 * @export
 * @class WorkingScheduleServiceApi
 * @extends {BaseAPI}
 */
export class WorkingScheduleServiceApi extends BaseAPI {
  /**
   *
   * @param {WfmCreateWorkingScheduleRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkingScheduleServiceApi
   */
  public createWorkingSchedule(
    body: WfmCreateWorkingScheduleRequest,
    options?: any
  ) {
    return WorkingScheduleServiceApiFp(this.configuration)
      .createWorkingSchedule(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkingScheduleServiceApi
   */
  public deleteWorkingSchedule(id: string, options?: any) {
    return WorkingScheduleServiceApiFp(this.configuration)
      .deleteWorkingSchedule(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} id
   * @param {Array<string>} [fields]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkingScheduleServiceApi
   */
  public readWorkingSchedule(
    id: string,
    fields?: Array<string>,
    options?: any
  ) {
    return WorkingScheduleServiceApiFp(this.configuration)
      .readWorkingSchedule(id, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} id
   * @param {string} [dateFrom]
   * @param {string} [dateTo]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkingScheduleServiceApi
   */
  public readWorkingScheduleForecast(
    id: string,
    dateFrom?: string,
    dateTo?: string,
    options?: any
  ) {
    return WorkingScheduleServiceApiFp(this.configuration)
      .readWorkingScheduleForecast(id, dateFrom, dateTo, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} [q]
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkingScheduleServiceApi
   */
  public searchWorkingSchedule(
    q?: string,
    page?: number,
    size?: number,
    sort?: string,
    fields?: Array<string>,
    options?: any
  ) {
    return WorkingScheduleServiceApiFp(this.configuration)
      .searchWorkingSchedule(q, page, size, sort, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} itemId
   * @param {InlineObject12} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkingScheduleServiceApi
   */
  public updateWorkingSchedule(
    itemId: string,
    body: InlineObject12,
    options?: any
  ) {
    return WorkingScheduleServiceApiFp(this.configuration)
      .updateWorkingSchedule(itemId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} id
   * @param {InlineObject11} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkingScheduleServiceApi
   */
  public updateWorkingScheduleAddAgents(
    id: string,
    body: InlineObject11,
    options?: any
  ) {
    return WorkingScheduleServiceApiFp(this.configuration)
      .updateWorkingScheduleAddAgents(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} id
   * @param {string} agentId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkingScheduleServiceApi
   */
  public updateWorkingScheduleRemoveAgent(
    id: string,
    agentId: string,
    options?: any
  ) {
    return WorkingScheduleServiceApiFp(this.configuration)
      .updateWorkingScheduleRemoveAgent(id, agentId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
