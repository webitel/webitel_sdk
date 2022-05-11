// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.12.0
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
import { EngineAgentPauseCause } from '../api'
// @ts-ignore
import { EngineCreateAgentPauseCauseRequest } from '../api'
// @ts-ignore
import { EngineListAgentPauseCause } from '../api'
// @ts-ignore
import { EnginePatchAgentPauseCauseRequest } from '../api'
// @ts-ignore
import { EngineUpdateAgentPauseCauseRequest } from '../api'
// @ts-ignore
import { RuntimeError } from '../api'
/**
 * AgentPauseCauseServiceApi - axios parameter creator
 * @export
 */
export const AgentPauseCauseServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {EngineCreateAgentPauseCauseRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    agentPauseCauseServiceCreateAgentPauseCause: async (
      body: EngineCreateAgentPauseCauseRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling agentPauseCauseServiceCreateAgentPauseCause.'
        )
      }
      const localVarPath = `/call_center/pause_causes`
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
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    agentPauseCauseServiceDeleteAgentPauseCause: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling agentPauseCauseServiceDeleteAgentPauseCause.'
        )
      }
      const localVarPath = `/call_center/pause_causes/{id}`.replace(
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
     * @param {number} id
     * @param {EnginePatchAgentPauseCauseRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    agentPauseCauseServicePatchAgentPauseCause: async (
      id: number,
      body: EnginePatchAgentPauseCauseRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling agentPauseCauseServicePatchAgentPauseCause.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling agentPauseCauseServicePatchAgentPauseCause.'
        )
      }
      const localVarPath = `/call_center/pause_causes/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
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
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    agentPauseCauseServiceReadAgentPauseCause: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling agentPauseCauseServiceReadAgentPauseCause.'
        )
      }
      const localVarPath = `/call_center/pause_causes/{id}`.replace(
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
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    agentPauseCauseServiceSearchAgentPauseCause: async (
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/call_center/pause_causes`
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
     * @param {number} id
     * @param {EngineUpdateAgentPauseCauseRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    agentPauseCauseServiceUpdateAgentPauseCause: async (
      id: number,
      body: EngineUpdateAgentPauseCauseRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling agentPauseCauseServiceUpdateAgentPauseCause.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling agentPauseCauseServiceUpdateAgentPauseCause.'
        )
      }
      const localVarPath = `/call_center/pause_causes/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
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
  }
}

/**
 * AgentPauseCauseServiceApi - functional programming interface
 * @export
 */
export const AgentPauseCauseServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {EngineCreateAgentPauseCauseRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async agentPauseCauseServiceCreateAgentPauseCause(
      body: EngineCreateAgentPauseCauseRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentPauseCause>
    > {
      const localVarAxiosArgs = await AgentPauseCauseServiceApiAxiosParamCreator(
        configuration
      ).agentPauseCauseServiceCreateAgentPauseCause(body, options)
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
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async agentPauseCauseServiceDeleteAgentPauseCause(
      id: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentPauseCause>
    > {
      const localVarAxiosArgs = await AgentPauseCauseServiceApiAxiosParamCreator(
        configuration
      ).agentPauseCauseServiceDeleteAgentPauseCause(id, options)
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
     * @param {number} id
     * @param {EnginePatchAgentPauseCauseRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async agentPauseCauseServicePatchAgentPauseCause(
      id: number,
      body: EnginePatchAgentPauseCauseRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentPauseCause>
    > {
      const localVarAxiosArgs = await AgentPauseCauseServiceApiAxiosParamCreator(
        configuration
      ).agentPauseCauseServicePatchAgentPauseCause(id, body, options)
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
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async agentPauseCauseServiceReadAgentPauseCause(
      id: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentPauseCause>
    > {
      const localVarAxiosArgs = await AgentPauseCauseServiceApiAxiosParamCreator(
        configuration
      ).agentPauseCauseServiceReadAgentPauseCause(id, options)
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
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async agentPauseCauseServiceSearchAgentPauseCause(
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
      ) => AxiosPromise<EngineListAgentPauseCause>
    > {
      const localVarAxiosArgs = await AgentPauseCauseServiceApiAxiosParamCreator(
        configuration
      ).agentPauseCauseServiceSearchAgentPauseCause(
        page,
        size,
        q,
        sort,
        fields,
        id,
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
     * @param {number} id
     * @param {EngineUpdateAgentPauseCauseRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async agentPauseCauseServiceUpdateAgentPauseCause(
      id: number,
      body: EngineUpdateAgentPauseCauseRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentPauseCause>
    > {
      const localVarAxiosArgs = await AgentPauseCauseServiceApiAxiosParamCreator(
        configuration
      ).agentPauseCauseServiceUpdateAgentPauseCause(id, body, options)
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
 * AgentPauseCauseServiceApi - factory interface
 * @export
 */
export const AgentPauseCauseServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {EngineCreateAgentPauseCauseRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    agentPauseCauseServiceCreateAgentPauseCause(
      body: EngineCreateAgentPauseCauseRequest,
      options?: any
    ): AxiosPromise<EngineAgentPauseCause> {
      return AgentPauseCauseServiceApiFp(configuration)
        .agentPauseCauseServiceCreateAgentPauseCause(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    agentPauseCauseServiceDeleteAgentPauseCause(
      id: number,
      options?: any
    ): AxiosPromise<EngineAgentPauseCause> {
      return AgentPauseCauseServiceApiFp(configuration)
        .agentPauseCauseServiceDeleteAgentPauseCause(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {EnginePatchAgentPauseCauseRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    agentPauseCauseServicePatchAgentPauseCause(
      id: number,
      body: EnginePatchAgentPauseCauseRequest,
      options?: any
    ): AxiosPromise<EngineAgentPauseCause> {
      return AgentPauseCauseServiceApiFp(configuration)
        .agentPauseCauseServicePatchAgentPauseCause(id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    agentPauseCauseServiceReadAgentPauseCause(
      id: number,
      options?: any
    ): AxiosPromise<EngineAgentPauseCause> {
      return AgentPauseCauseServiceApiFp(configuration)
        .agentPauseCauseServiceReadAgentPauseCause(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    agentPauseCauseServiceSearchAgentPauseCause(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options?: any
    ): AxiosPromise<EngineListAgentPauseCause> {
      return AgentPauseCauseServiceApiFp(configuration)
        .agentPauseCauseServiceSearchAgentPauseCause(
          page,
          size,
          q,
          sort,
          fields,
          id,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {EngineUpdateAgentPauseCauseRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    agentPauseCauseServiceUpdateAgentPauseCause(
      id: number,
      body: EngineUpdateAgentPauseCauseRequest,
      options?: any
    ): AxiosPromise<EngineAgentPauseCause> {
      return AgentPauseCauseServiceApiFp(configuration)
        .agentPauseCauseServiceUpdateAgentPauseCause(id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * AgentPauseCauseServiceApi - object-oriented interface
 * @export
 * @class AgentPauseCauseServiceApi
 * @extends {BaseAPI}
 */
export class AgentPauseCauseServiceApi extends BaseAPI {
  /**
   *
   * @param {EngineCreateAgentPauseCauseRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentPauseCauseServiceApi
   */
  public agentPauseCauseServiceCreateAgentPauseCause(
    body: EngineCreateAgentPauseCauseRequest,
    options?: any
  ) {
    return AgentPauseCauseServiceApiFp(this.configuration)
      .agentPauseCauseServiceCreateAgentPauseCause(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentPauseCauseServiceApi
   */
  public agentPauseCauseServiceDeleteAgentPauseCause(
    id: number,
    options?: any
  ) {
    return AgentPauseCauseServiceApiFp(this.configuration)
      .agentPauseCauseServiceDeleteAgentPauseCause(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {EnginePatchAgentPauseCauseRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentPauseCauseServiceApi
   */
  public agentPauseCauseServicePatchAgentPauseCause(
    id: number,
    body: EnginePatchAgentPauseCauseRequest,
    options?: any
  ) {
    return AgentPauseCauseServiceApiFp(this.configuration)
      .agentPauseCauseServicePatchAgentPauseCause(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentPauseCauseServiceApi
   */
  public agentPauseCauseServiceReadAgentPauseCause(id: number, options?: any) {
    return AgentPauseCauseServiceApiFp(this.configuration)
      .agentPauseCauseServiceReadAgentPauseCause(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<number>} [id]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentPauseCauseServiceApi
   */
  public agentPauseCauseServiceSearchAgentPauseCause(
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    id?: Array<number>,
    options?: any
  ) {
    return AgentPauseCauseServiceApiFp(this.configuration)
      .agentPauseCauseServiceSearchAgentPauseCause(
        page,
        size,
        q,
        sort,
        fields,
        id,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {EngineUpdateAgentPauseCauseRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentPauseCauseServiceApi
   */
  public agentPauseCauseServiceUpdateAgentPauseCause(
    id: number,
    body: EngineUpdateAgentPauseCauseRequest,
    options?: any
  ) {
    return AgentPauseCauseServiceApiFp(this.configuration)
      .agentPauseCauseServiceUpdateAgentPauseCause(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
