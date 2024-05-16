// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.12.0
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
import { EngineCreateTeamHookRequest } from '../api'
// @ts-ignore
import { EngineListTeamHook } from '../api'
// @ts-ignore
import { EnginePatchTeamHookRequest } from '../api'
// @ts-ignore
import { EngineTeamHook } from '../api'
// @ts-ignore
import { EngineUpdateTeamHookRequest } from '../api'
/**
 * TeamHookServiceApi - axios parameter creator
 * @export
 */
export const TeamHookServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} teamId
     * @param {EngineCreateTeamHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeamHook: async (
      teamId: string,
      body: EngineCreateTeamHookRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling createTeamHook.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createTeamHook.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/hooks`.replace(
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
    deleteTeamHook: async (
      teamId: string,
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling deleteTeamHook.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteTeamHook.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/hooks/{id}`
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
     * @param {EnginePatchTeamHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchTeamHook: async (
      teamId: string,
      id: number,
      body: EnginePatchTeamHookRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling patchTeamHook.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchTeamHook.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchTeamHook.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/hooks/{id}`
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
    readTeamHook: async (
      teamId: string,
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling readTeamHook.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readTeamHook.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/hooks/{id}`
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
     * @param {string} teamId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {Array<number>} [schemaId]
     * @param {Array<'teamHookEventUndefined' | 'agent_status'>} [event]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchTeamHook: async (
      teamId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      schemaId?: Array<number>,
      event?: Array<'teamHookEventUndefined' | 'agent_status'>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling searchTeamHook.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/hooks`.replace(
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

      if (id) {
        localVarQueryParameter['id'] = id
      }

      if (schemaId) {
        localVarQueryParameter['schema_id'] = schemaId
      }

      if (event) {
        localVarQueryParameter['event'] = event
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
     * @param {EngineUpdateTeamHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTeamHook: async (
      teamId: string,
      id: number,
      body: EngineUpdateTeamHookRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling updateTeamHook.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateTeamHook.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateTeamHook.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/hooks/{id}`
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
 * TeamHookServiceApi - functional programming interface
 * @export
 */
export const TeamHookServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {string} teamId
     * @param {EngineCreateTeamHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTeamHook(
      teamId: string,
      body: EngineCreateTeamHookRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineTeamHook>
    > {
      const localVarAxiosArgs = await TeamHookServiceApiAxiosParamCreator(
        configuration
      ).createTeamHook(teamId, body, options)
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
    async deleteTeamHook(
      teamId: string,
      id: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineTeamHook>
    > {
      const localVarAxiosArgs = await TeamHookServiceApiAxiosParamCreator(
        configuration
      ).deleteTeamHook(teamId, id, options)
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
     * @param {EnginePatchTeamHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchTeamHook(
      teamId: string,
      id: number,
      body: EnginePatchTeamHookRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineTeamHook>
    > {
      const localVarAxiosArgs = await TeamHookServiceApiAxiosParamCreator(
        configuration
      ).patchTeamHook(teamId, id, body, options)
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
    async readTeamHook(
      teamId: string,
      id: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineTeamHook>
    > {
      const localVarAxiosArgs = await TeamHookServiceApiAxiosParamCreator(
        configuration
      ).readTeamHook(teamId, id, options)
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
     * @param {Array<number>} [id]
     * @param {Array<number>} [schemaId]
     * @param {Array<'teamHookEventUndefined' | 'agent_status'>} [event]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchTeamHook(
      teamId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      schemaId?: Array<number>,
      event?: Array<'teamHookEventUndefined' | 'agent_status'>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListTeamHook>
    > {
      const localVarAxiosArgs = await TeamHookServiceApiAxiosParamCreator(
        configuration
      ).searchTeamHook(
        teamId,
        page,
        size,
        q,
        sort,
        fields,
        id,
        schemaId,
        event,
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
     * @param {EngineUpdateTeamHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateTeamHook(
      teamId: string,
      id: number,
      body: EngineUpdateTeamHookRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineTeamHook>
    > {
      const localVarAxiosArgs = await TeamHookServiceApiAxiosParamCreator(
        configuration
      ).updateTeamHook(teamId, id, body, options)
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
 * TeamHookServiceApi - factory interface
 * @export
 */
export const TeamHookServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {string} teamId
     * @param {EngineCreateTeamHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeamHook(
      teamId: string,
      body: EngineCreateTeamHookRequest,
      options?: any
    ): AxiosPromise<EngineTeamHook> {
      return TeamHookServiceApiFp(configuration)
        .createTeamHook(teamId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} teamId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTeamHook(
      teamId: string,
      id: number,
      options?: any
    ): AxiosPromise<EngineTeamHook> {
      return TeamHookServiceApiFp(configuration)
        .deleteTeamHook(teamId, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} teamId
     * @param {number} id
     * @param {EnginePatchTeamHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchTeamHook(
      teamId: string,
      id: number,
      body: EnginePatchTeamHookRequest,
      options?: any
    ): AxiosPromise<EngineTeamHook> {
      return TeamHookServiceApiFp(configuration)
        .patchTeamHook(teamId, id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} teamId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readTeamHook(
      teamId: string,
      id: number,
      options?: any
    ): AxiosPromise<EngineTeamHook> {
      return TeamHookServiceApiFp(configuration)
        .readTeamHook(teamId, id, options)
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
     * @param {Array<number>} [id]
     * @param {Array<number>} [schemaId]
     * @param {Array<'teamHookEventUndefined' | 'agent_status'>} [event]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchTeamHook(
      teamId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      schemaId?: Array<number>,
      event?: Array<'teamHookEventUndefined' | 'agent_status'>,
      options?: any
    ): AxiosPromise<EngineListTeamHook> {
      return TeamHookServiceApiFp(configuration)
        .searchTeamHook(
          teamId,
          page,
          size,
          q,
          sort,
          fields,
          id,
          schemaId,
          event,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} teamId
     * @param {number} id
     * @param {EngineUpdateTeamHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTeamHook(
      teamId: string,
      id: number,
      body: EngineUpdateTeamHookRequest,
      options?: any
    ): AxiosPromise<EngineTeamHook> {
      return TeamHookServiceApiFp(configuration)
        .updateTeamHook(teamId, id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * TeamHookServiceApi - object-oriented interface
 * @export
 * @class TeamHookServiceApi
 * @extends {BaseAPI}
 */
export class TeamHookServiceApi extends BaseAPI {
  /**
   *
   * @param {string} teamId
   * @param {EngineCreateTeamHookRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamHookServiceApi
   */
  public createTeamHook(
    teamId: string,
    body: EngineCreateTeamHookRequest,
    options?: any
  ) {
    return TeamHookServiceApiFp(this.configuration)
      .createTeamHook(teamId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} teamId
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamHookServiceApi
   */
  public deleteTeamHook(teamId: string, id: number, options?: any) {
    return TeamHookServiceApiFp(this.configuration)
      .deleteTeamHook(teamId, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} teamId
   * @param {number} id
   * @param {EnginePatchTeamHookRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamHookServiceApi
   */
  public patchTeamHook(
    teamId: string,
    id: number,
    body: EnginePatchTeamHookRequest,
    options?: any
  ) {
    return TeamHookServiceApiFp(this.configuration)
      .patchTeamHook(teamId, id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} teamId
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamHookServiceApi
   */
  public readTeamHook(teamId: string, id: number, options?: any) {
    return TeamHookServiceApiFp(this.configuration)
      .readTeamHook(teamId, id, options)
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
   * @param {Array<number>} [id]
   * @param {Array<number>} [schemaId]
   * @param {Array<'teamHookEventUndefined' | 'agent_status'>} [event]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamHookServiceApi
   */
  public searchTeamHook(
    teamId: string,
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    id?: Array<number>,
    schemaId?: Array<number>,
    event?: Array<'teamHookEventUndefined' | 'agent_status'>,
    options?: any
  ) {
    return TeamHookServiceApiFp(this.configuration)
      .searchTeamHook(
        teamId,
        page,
        size,
        q,
        sort,
        fields,
        id,
        schemaId,
        event,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} teamId
   * @param {number} id
   * @param {EngineUpdateTeamHookRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamHookServiceApi
   */
  public updateTeamHook(
    teamId: string,
    id: number,
    body: EngineUpdateTeamHookRequest,
    options?: any
  ) {
    return TeamHookServiceApiFp(this.configuration)
      .updateTeamHook(teamId, id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}