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
import { EngineApiError } from '../api'
// @ts-ignore
import { EngineCreateTeamTriggerRequest } from '../api'
// @ts-ignore
import { EngineListTeamTrigger } from '../api'
// @ts-ignore
import { EnginePatchTeamTriggerRequest } from '../api'
// @ts-ignore
import { EngineRunTeamTriggerRequest } from '../api'
// @ts-ignore
import { EngineRunTeamTriggerResponse } from '../api'
// @ts-ignore
import { EngineTeamTrigger } from '../api'
// @ts-ignore
import { EngineUpdateTeamTriggerRequest } from '../api'
/**
 * TeamTriggerServiceApi - axios parameter creator
 * @export
 */
export const TeamTriggerServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} teamId
     * @param {EngineCreateTeamTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeamTrigger: async (
      teamId: string,
      body: EngineCreateTeamTriggerRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling createTeamTrigger.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createTeamTrigger.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/triggers`.replace(
        `{${'team_id'}}`,
        encodeURIComponent(String(teamId))
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
     * @param {string} teamId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTeamTrigger: async (
      teamId: string,
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling deleteTeamTrigger.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteTeamTrigger.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/triggers/{id}`
        .replace(`{${'team_id'}}`, encodeURIComponent(String(teamId)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * @param {string} teamId
     * @param {number} id
     * @param {EnginePatchTeamTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchTeamTrigger: async (
      teamId: string,
      id: number,
      body: EnginePatchTeamTriggerRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling patchTeamTrigger.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchTeamTrigger.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchTeamTrigger.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/triggers/{id}`
        .replace(`{${'team_id'}}`, encodeURIComponent(String(teamId)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'PATCH',
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
     * @param {string} teamId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readTeamTrigger: async (
      teamId: string,
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling readTeamTrigger.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readTeamTrigger.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/triggers/{id}`
        .replace(`{${'team_id'}}`, encodeURIComponent(String(teamId)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * @param {number} triggerId
     * @param {EngineRunTeamTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    runTeamTrigger: async (
      triggerId: number,
      body: EngineRunTeamTriggerRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'triggerId' is not null or undefined
      if (triggerId === null || triggerId === undefined) {
        throw new RequiredError(
          'triggerId',
          'Required parameter triggerId was null or undefined when calling runTeamTrigger.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling runTeamTrigger.'
        )
      }
      const localVarPath = `/call_center/teams/triggers/{trigger_id}`.replace(
        `{${'trigger_id'}}`,
        encodeURIComponent(String(triggerId))
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
     * @param {string} teamId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {boolean} [enabled]
     * @param {Array<number>} [id]
     * @param {Array<number>} [schemaId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchTeamTrigger: async (
      teamId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      enabled?: boolean,
      id?: Array<number>,
      schemaId?: Array<number>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling searchTeamTrigger.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/triggers`.replace(
        `{${'team_id'}}`,
        encodeURIComponent(String(teamId))
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

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (size !== undefined) {
        localVarQueryParameter['size'] = size
      }

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (enabled !== undefined) {
        localVarQueryParameter['enabled'] = enabled
      }

      if (id) {
        localVarQueryParameter['id'] = id
      }

      if (schemaId) {
        localVarQueryParameter['schema_id'] = schemaId
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
     * @param {string} teamId
     * @param {number} id
     * @param {EngineUpdateTeamTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTeamTrigger: async (
      teamId: string,
      id: number,
      body: EngineUpdateTeamTriggerRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling updateTeamTrigger.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateTeamTrigger.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateTeamTrigger.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/triggers/{id}`
        .replace(`{${'team_id'}}`, encodeURIComponent(String(teamId)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
  }
}

/**
 * TeamTriggerServiceApi - functional programming interface
 * @export
 */
export const TeamTriggerServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {string} teamId
     * @param {EngineCreateTeamTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTeamTrigger(
      teamId: string,
      body: EngineCreateTeamTriggerRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineTeamTrigger>
    > {
      const localVarAxiosArgs = await TeamTriggerServiceApiAxiosParamCreator(
        configuration
      ).createTeamTrigger(teamId, body, options)
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
     * @param {string} teamId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteTeamTrigger(
      teamId: string,
      id: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineTeamTrigger>
    > {
      const localVarAxiosArgs = await TeamTriggerServiceApiAxiosParamCreator(
        configuration
      ).deleteTeamTrigger(teamId, id, options)
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
     * @param {string} teamId
     * @param {number} id
     * @param {EnginePatchTeamTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchTeamTrigger(
      teamId: string,
      id: number,
      body: EnginePatchTeamTriggerRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineTeamTrigger>
    > {
      const localVarAxiosArgs = await TeamTriggerServiceApiAxiosParamCreator(
        configuration
      ).patchTeamTrigger(teamId, id, body, options)
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
     * @param {string} teamId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readTeamTrigger(
      teamId: string,
      id: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineTeamTrigger>
    > {
      const localVarAxiosArgs = await TeamTriggerServiceApiAxiosParamCreator(
        configuration
      ).readTeamTrigger(teamId, id, options)
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
     * @param {number} triggerId
     * @param {EngineRunTeamTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async runTeamTrigger(
      triggerId: number,
      body: EngineRunTeamTriggerRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineRunTeamTriggerResponse>
    > {
      const localVarAxiosArgs = await TeamTriggerServiceApiAxiosParamCreator(
        configuration
      ).runTeamTrigger(triggerId, body, options)
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
     * @param {string} teamId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {boolean} [enabled]
     * @param {Array<number>} [id]
     * @param {Array<number>} [schemaId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchTeamTrigger(
      teamId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      enabled?: boolean,
      id?: Array<number>,
      schemaId?: Array<number>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListTeamTrigger>
    > {
      const localVarAxiosArgs = await TeamTriggerServiceApiAxiosParamCreator(
        configuration
      ).searchTeamTrigger(
        teamId,
        page,
        size,
        q,
        sort,
        fields,
        enabled,
        id,
        schemaId,
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
    /**
     *
     * @param {string} teamId
     * @param {number} id
     * @param {EngineUpdateTeamTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateTeamTrigger(
      teamId: string,
      id: number,
      body: EngineUpdateTeamTriggerRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineTeamTrigger>
    > {
      const localVarAxiosArgs = await TeamTriggerServiceApiAxiosParamCreator(
        configuration
      ).updateTeamTrigger(teamId, id, body, options)
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
 * TeamTriggerServiceApi - factory interface
 * @export
 */
export const TeamTriggerServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {string} teamId
     * @param {EngineCreateTeamTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeamTrigger(
      teamId: string,
      body: EngineCreateTeamTriggerRequest,
      options?: any
    ): AxiosPromise<EngineTeamTrigger> {
      return TeamTriggerServiceApiFp(configuration)
        .createTeamTrigger(teamId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} teamId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTeamTrigger(
      teamId: string,
      id: number,
      options?: any
    ): AxiosPromise<EngineTeamTrigger> {
      return TeamTriggerServiceApiFp(configuration)
        .deleteTeamTrigger(teamId, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} teamId
     * @param {number} id
     * @param {EnginePatchTeamTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchTeamTrigger(
      teamId: string,
      id: number,
      body: EnginePatchTeamTriggerRequest,
      options?: any
    ): AxiosPromise<EngineTeamTrigger> {
      return TeamTriggerServiceApiFp(configuration)
        .patchTeamTrigger(teamId, id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} teamId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readTeamTrigger(
      teamId: string,
      id: number,
      options?: any
    ): AxiosPromise<EngineTeamTrigger> {
      return TeamTriggerServiceApiFp(configuration)
        .readTeamTrigger(teamId, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} triggerId
     * @param {EngineRunTeamTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    runTeamTrigger(
      triggerId: number,
      body: EngineRunTeamTriggerRequest,
      options?: any
    ): AxiosPromise<EngineRunTeamTriggerResponse> {
      return TeamTriggerServiceApiFp(configuration)
        .runTeamTrigger(triggerId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} teamId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {boolean} [enabled]
     * @param {Array<number>} [id]
     * @param {Array<number>} [schemaId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchTeamTrigger(
      teamId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      enabled?: boolean,
      id?: Array<number>,
      schemaId?: Array<number>,
      options?: any
    ): AxiosPromise<EngineListTeamTrigger> {
      return TeamTriggerServiceApiFp(configuration)
        .searchTeamTrigger(
          teamId,
          page,
          size,
          q,
          sort,
          fields,
          enabled,
          id,
          schemaId,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} teamId
     * @param {number} id
     * @param {EngineUpdateTeamTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTeamTrigger(
      teamId: string,
      id: number,
      body: EngineUpdateTeamTriggerRequest,
      options?: any
    ): AxiosPromise<EngineTeamTrigger> {
      return TeamTriggerServiceApiFp(configuration)
        .updateTeamTrigger(teamId, id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * TeamTriggerServiceApi - object-oriented interface
 * @export
 * @class TeamTriggerServiceApi
 * @extends {BaseAPI}
 */
export class TeamTriggerServiceApi extends BaseAPI {
  /**
   *
   * @param {string} teamId
   * @param {EngineCreateTeamTriggerRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamTriggerServiceApi
   */
  public createTeamTrigger(
    teamId: string,
    body: EngineCreateTeamTriggerRequest,
    options?: any
  ) {
    return TeamTriggerServiceApiFp(this.configuration)
      .createTeamTrigger(teamId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} teamId
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamTriggerServiceApi
   */
  public deleteTeamTrigger(teamId: string, id: number, options?: any) {
    return TeamTriggerServiceApiFp(this.configuration)
      .deleteTeamTrigger(teamId, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} teamId
   * @param {number} id
   * @param {EnginePatchTeamTriggerRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamTriggerServiceApi
   */
  public patchTeamTrigger(
    teamId: string,
    id: number,
    body: EnginePatchTeamTriggerRequest,
    options?: any
  ) {
    return TeamTriggerServiceApiFp(this.configuration)
      .patchTeamTrigger(teamId, id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} teamId
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamTriggerServiceApi
   */
  public readTeamTrigger(teamId: string, id: number, options?: any) {
    return TeamTriggerServiceApiFp(this.configuration)
      .readTeamTrigger(teamId, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} triggerId
   * @param {EngineRunTeamTriggerRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamTriggerServiceApi
   */
  public runTeamTrigger(
    triggerId: number,
    body: EngineRunTeamTriggerRequest,
    options?: any
  ) {
    return TeamTriggerServiceApiFp(this.configuration)
      .runTeamTrigger(triggerId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} teamId
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {boolean} [enabled]
   * @param {Array<number>} [id]
   * @param {Array<number>} [schemaId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamTriggerServiceApi
   */
  public searchTeamTrigger(
    teamId: string,
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    enabled?: boolean,
    id?: Array<number>,
    schemaId?: Array<number>,
    options?: any
  ) {
    return TeamTriggerServiceApiFp(this.configuration)
      .searchTeamTrigger(
        teamId,
        page,
        size,
        q,
        sort,
        fields,
        enabled,
        id,
        schemaId,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} teamId
   * @param {number} id
   * @param {EngineUpdateTeamTriggerRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamTriggerServiceApi
   */
  public updateTeamTrigger(
    teamId: string,
    id: number,
    body: EngineUpdateTeamTriggerRequest,
    options?: any
  ) {
    return TeamTriggerServiceApiFp(this.configuration)
      .updateTeamTrigger(teamId, id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
