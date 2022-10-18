// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 22.05.0
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
import { EngineAgentSkill } from '../api'
// @ts-ignore
import { EngineCreateAgentSkillRequest } from '../api'
// @ts-ignore
import { EngineListAgentSkill } from '../api'
// @ts-ignore
import { EngineListSkill } from '../api'
// @ts-ignore
import { EnginePatchAgentSkillRequest } from '../api'
// @ts-ignore
import { EngineUpdateAgentSkillRequest } from '../api'
// @ts-ignore
import { RuntimeError } from '../api'
/**
 * AgentSkillServiceApi - axios parameter creator
 * @export
 */
export const AgentSkillServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create AgentSkill
     * @param {string} agentId
     * @param {EngineCreateAgentSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAgentSkill: async (
      agentId: string,
      body: EngineCreateAgentSkillRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'agentId' is not null or undefined
      if (agentId === null || agentId === undefined) {
        throw new RequiredError(
          'agentId',
          'Required parameter agentId was null or undefined when calling createAgentSkill.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createAgentSkill.'
        )
      }
      const localVarPath = `/call_center/agents/{agent_id}/skills`.replace(
        `{${'agent_id'}}`,
        encodeURIComponent(String(agentId))
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
     * @summary Remove AgentSkill
     * @param {string} agentId
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAgentSkill: async (
      agentId: string,
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'agentId' is not null or undefined
      if (agentId === null || agentId === undefined) {
        throw new RequiredError(
          'agentId',
          'Required parameter agentId was null or undefined when calling deleteAgentSkill.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteAgentSkill.'
        )
      }
      const localVarPath = `/call_center/agents/{agent_id}/skills/{id}`
        .replace(`{${'agent_id'}}`, encodeURIComponent(String(agentId)))
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

      if (domainId !== undefined) {
        localVarQueryParameter['domain_id'] = domainId
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
     * @param {string} agentId
     * @param {string} id
     * @param {EnginePatchAgentSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchAgentSkill: async (
      agentId: string,
      id: string,
      body: EnginePatchAgentSkillRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'agentId' is not null or undefined
      if (agentId === null || agentId === undefined) {
        throw new RequiredError(
          'agentId',
          'Required parameter agentId was null or undefined when calling patchAgentSkill.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchAgentSkill.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchAgentSkill.'
        )
      }
      const localVarPath = `/call_center/agents/{agent_id}/skills/{id}`
        .replace(`{${'agent_id'}}`, encodeURIComponent(String(agentId)))
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
     * @summary AgentSkill item
     * @param {string} agentId
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readAgentSkill: async (
      agentId: string,
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'agentId' is not null or undefined
      if (agentId === null || agentId === undefined) {
        throw new RequiredError(
          'agentId',
          'Required parameter agentId was null or undefined when calling readAgentSkill.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readAgentSkill.'
        )
      }
      const localVarPath = `/call_center/agents/{agent_id}/skills/{id}`
        .replace(`{${'agent_id'}}`, encodeURIComponent(String(agentId)))
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

      if (domainId !== undefined) {
        localVarQueryParameter['domain_id'] = domainId
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
     * @summary List of AgentSkill
     * @param {string} agentId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAgentSkill: async (
      agentId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'agentId' is not null or undefined
      if (agentId === null || agentId === undefined) {
        throw new RequiredError(
          'agentId',
          'Required parameter agentId was null or undefined when calling searchAgentSkill.'
        )
      }
      const localVarPath = `/call_center/agents/{agent_id}/skills`.replace(
        `{${'agent_id'}}`,
        encodeURIComponent(String(agentId))
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
     * @summary SearchLookupAgentNotExistsSkill
     * @param {string} agentId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchLookupAgentNotExistsSkill: async (
      agentId: string,
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'agentId' is not null or undefined
      if (agentId === null || agentId === undefined) {
        throw new RequiredError(
          'agentId',
          'Required parameter agentId was null or undefined when calling searchLookupAgentNotExistsSkill.'
        )
      }
      const localVarPath = `/call_center/lookups/agents/skills/{agent_id}`.replace(
        `{${'agent_id'}}`,
        encodeURIComponent(String(agentId))
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

      if (domainId !== undefined) {
        localVarQueryParameter['domain_id'] = domainId
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
     * @summary Update AgentSkill
     * @param {string} agentId
     * @param {string} id
     * @param {EngineUpdateAgentSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAgentSkill: async (
      agentId: string,
      id: string,
      body: EngineUpdateAgentSkillRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'agentId' is not null or undefined
      if (agentId === null || agentId === undefined) {
        throw new RequiredError(
          'agentId',
          'Required parameter agentId was null or undefined when calling updateAgentSkill.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateAgentSkill.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateAgentSkill.'
        )
      }
      const localVarPath = `/call_center/agents/{agent_id}/skills/{id}`
        .replace(`{${'agent_id'}}`, encodeURIComponent(String(agentId)))
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
 * AgentSkillServiceApi - functional programming interface
 * @export
 */
export const AgentSkillServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create AgentSkill
     * @param {string} agentId
     * @param {EngineCreateAgentSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createAgentSkill(
      agentId: string,
      body: EngineCreateAgentSkillRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentSkill>
    > {
      const localVarAxiosArgs = await AgentSkillServiceApiAxiosParamCreator(
        configuration
      ).createAgentSkill(agentId, body, options)
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
     * @summary Remove AgentSkill
     * @param {string} agentId
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteAgentSkill(
      agentId: string,
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentSkill>
    > {
      const localVarAxiosArgs = await AgentSkillServiceApiAxiosParamCreator(
        configuration
      ).deleteAgentSkill(agentId, id, domainId, options)
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
     * @param {string} agentId
     * @param {string} id
     * @param {EnginePatchAgentSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchAgentSkill(
      agentId: string,
      id: string,
      body: EnginePatchAgentSkillRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentSkill>
    > {
      const localVarAxiosArgs = await AgentSkillServiceApiAxiosParamCreator(
        configuration
      ).patchAgentSkill(agentId, id, body, options)
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
     * @summary AgentSkill item
     * @param {string} agentId
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readAgentSkill(
      agentId: string,
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentSkill>
    > {
      const localVarAxiosArgs = await AgentSkillServiceApiAxiosParamCreator(
        configuration
      ).readAgentSkill(agentId, id, domainId, options)
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
     * @summary List of AgentSkill
     * @param {string} agentId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchAgentSkill(
      agentId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListAgentSkill>
    > {
      const localVarAxiosArgs = await AgentSkillServiceApiAxiosParamCreator(
        configuration
      ).searchAgentSkill(agentId, page, size, q, sort, fields, id, options)
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
     * @summary SearchLookupAgentNotExistsSkill
     * @param {string} agentId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchLookupAgentNotExistsSkill(
      agentId: string,
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListSkill>
    > {
      const localVarAxiosArgs = await AgentSkillServiceApiAxiosParamCreator(
        configuration
      ).searchLookupAgentNotExistsSkill(
        agentId,
        page,
        size,
        q,
        domainId,
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
     * @summary Update AgentSkill
     * @param {string} agentId
     * @param {string} id
     * @param {EngineUpdateAgentSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateAgentSkill(
      agentId: string,
      id: string,
      body: EngineUpdateAgentSkillRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentSkill>
    > {
      const localVarAxiosArgs = await AgentSkillServiceApiAxiosParamCreator(
        configuration
      ).updateAgentSkill(agentId, id, body, options)
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
 * AgentSkillServiceApi - factory interface
 * @export
 */
export const AgentSkillServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create AgentSkill
     * @param {string} agentId
     * @param {EngineCreateAgentSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAgentSkill(
      agentId: string,
      body: EngineCreateAgentSkillRequest,
      options?: any
    ): AxiosPromise<EngineAgentSkill> {
      return AgentSkillServiceApiFp(configuration)
        .createAgentSkill(agentId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Remove AgentSkill
     * @param {string} agentId
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAgentSkill(
      agentId: string,
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineAgentSkill> {
      return AgentSkillServiceApiFp(configuration)
        .deleteAgentSkill(agentId, id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} agentId
     * @param {string} id
     * @param {EnginePatchAgentSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchAgentSkill(
      agentId: string,
      id: string,
      body: EnginePatchAgentSkillRequest,
      options?: any
    ): AxiosPromise<EngineAgentSkill> {
      return AgentSkillServiceApiFp(configuration)
        .patchAgentSkill(agentId, id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary AgentSkill item
     * @param {string} agentId
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readAgentSkill(
      agentId: string,
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineAgentSkill> {
      return AgentSkillServiceApiFp(configuration)
        .readAgentSkill(agentId, id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary List of AgentSkill
     * @param {string} agentId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAgentSkill(
      agentId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options?: any
    ): AxiosPromise<EngineListAgentSkill> {
      return AgentSkillServiceApiFp(configuration)
        .searchAgentSkill(agentId, page, size, q, sort, fields, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary SearchLookupAgentNotExistsSkill
     * @param {string} agentId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchLookupAgentNotExistsSkill(
      agentId: string,
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineListSkill> {
      return AgentSkillServiceApiFp(configuration)
        .searchLookupAgentNotExistsSkill(
          agentId,
          page,
          size,
          q,
          domainId,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update AgentSkill
     * @param {string} agentId
     * @param {string} id
     * @param {EngineUpdateAgentSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAgentSkill(
      agentId: string,
      id: string,
      body: EngineUpdateAgentSkillRequest,
      options?: any
    ): AxiosPromise<EngineAgentSkill> {
      return AgentSkillServiceApiFp(configuration)
        .updateAgentSkill(agentId, id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * AgentSkillServiceApi - object-oriented interface
 * @export
 * @class AgentSkillServiceApi
 * @extends {BaseAPI}
 */
export class AgentSkillServiceApi extends BaseAPI {
  /**
   *
   * @summary Create AgentSkill
   * @param {string} agentId
   * @param {EngineCreateAgentSkillRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentSkillServiceApi
   */
  public createAgentSkill(
    agentId: string,
    body: EngineCreateAgentSkillRequest,
    options?: any
  ) {
    return AgentSkillServiceApiFp(this.configuration)
      .createAgentSkill(agentId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Remove AgentSkill
   * @param {string} agentId
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentSkillServiceApi
   */
  public deleteAgentSkill(
    agentId: string,
    id: string,
    domainId?: string,
    options?: any
  ) {
    return AgentSkillServiceApiFp(this.configuration)
      .deleteAgentSkill(agentId, id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} agentId
   * @param {string} id
   * @param {EnginePatchAgentSkillRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentSkillServiceApi
   */
  public patchAgentSkill(
    agentId: string,
    id: string,
    body: EnginePatchAgentSkillRequest,
    options?: any
  ) {
    return AgentSkillServiceApiFp(this.configuration)
      .patchAgentSkill(agentId, id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary AgentSkill item
   * @param {string} agentId
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentSkillServiceApi
   */
  public readAgentSkill(
    agentId: string,
    id: string,
    domainId?: string,
    options?: any
  ) {
    return AgentSkillServiceApiFp(this.configuration)
      .readAgentSkill(agentId, id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary List of AgentSkill
   * @param {string} agentId
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<number>} [id]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentSkillServiceApi
   */
  public searchAgentSkill(
    agentId: string,
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    id?: Array<number>,
    options?: any
  ) {
    return AgentSkillServiceApiFp(this.configuration)
      .searchAgentSkill(agentId, page, size, q, sort, fields, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary SearchLookupAgentNotExistsSkill
   * @param {string} agentId
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentSkillServiceApi
   */
  public searchLookupAgentNotExistsSkill(
    agentId: string,
    page?: number,
    size?: number,
    q?: string,
    domainId?: string,
    options?: any
  ) {
    return AgentSkillServiceApiFp(this.configuration)
      .searchLookupAgentNotExistsSkill(
        agentId,
        page,
        size,
        q,
        domainId,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update AgentSkill
   * @param {string} agentId
   * @param {string} id
   * @param {EngineUpdateAgentSkillRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentSkillServiceApi
   */
  public updateAgentSkill(
    agentId: string,
    id: string,
    body: EngineUpdateAgentSkillRequest,
    options?: any
  ) {
    return AgentSkillServiceApiFp(this.configuration)
      .updateAgentSkill(agentId, id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
