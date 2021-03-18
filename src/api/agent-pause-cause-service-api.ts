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
    createAgentPauseCause: async (
      body: EngineCreateAgentPauseCauseRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createAgentPauseCause.'
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
    deleteAgentPauseCause: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteAgentPauseCause.'
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
    patchAgentPauseCause: async (
      id: number,
      body: EnginePatchAgentPauseCauseRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchAgentPauseCause.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchAgentPauseCause.'
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
    readAgentPauseCause: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readAgentPauseCause.'
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
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAgentPauseCause: async (
      page?: number,
      size?: number,
      q?: string,
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
    updateAgentPauseCause: async (
      id: number,
      body: EngineUpdateAgentPauseCauseRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateAgentPauseCause.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateAgentPauseCause.'
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
    async createAgentPauseCause(
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
      ).createAgentPauseCause(body, options)
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
    async deleteAgentPauseCause(
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
      ).deleteAgentPauseCause(id, options)
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
    async patchAgentPauseCause(
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
      ).patchAgentPauseCause(id, body, options)
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
    async readAgentPauseCause(
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
      ).readAgentPauseCause(id, options)
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
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchAgentPauseCause(
      page?: number,
      size?: number,
      q?: string,
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
      ).searchAgentPauseCause(page, size, q, fields, id, options)
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
    async updateAgentPauseCause(
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
      ).updateAgentPauseCause(id, body, options)
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
    createAgentPauseCause(
      body: EngineCreateAgentPauseCauseRequest,
      options?: any
    ): AxiosPromise<EngineAgentPauseCause> {
      return AgentPauseCauseServiceApiFp(configuration)
        .createAgentPauseCause(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAgentPauseCause(
      id: number,
      options?: any
    ): AxiosPromise<EngineAgentPauseCause> {
      return AgentPauseCauseServiceApiFp(configuration)
        .deleteAgentPauseCause(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {EnginePatchAgentPauseCauseRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchAgentPauseCause(
      id: number,
      body: EnginePatchAgentPauseCauseRequest,
      options?: any
    ): AxiosPromise<EngineAgentPauseCause> {
      return AgentPauseCauseServiceApiFp(configuration)
        .patchAgentPauseCause(id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readAgentPauseCause(
      id: number,
      options?: any
    ): AxiosPromise<EngineAgentPauseCause> {
      return AgentPauseCauseServiceApiFp(configuration)
        .readAgentPauseCause(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAgentPauseCause(
      page?: number,
      size?: number,
      q?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options?: any
    ): AxiosPromise<EngineListAgentPauseCause> {
      return AgentPauseCauseServiceApiFp(configuration)
        .searchAgentPauseCause(page, size, q, fields, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {EngineUpdateAgentPauseCauseRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAgentPauseCause(
      id: number,
      body: EngineUpdateAgentPauseCauseRequest,
      options?: any
    ): AxiosPromise<EngineAgentPauseCause> {
      return AgentPauseCauseServiceApiFp(configuration)
        .updateAgentPauseCause(id, body, options)
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
  public createAgentPauseCause(
    body: EngineCreateAgentPauseCauseRequest,
    options?: any
  ) {
    return AgentPauseCauseServiceApiFp(this.configuration)
      .createAgentPauseCause(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentPauseCauseServiceApi
   */
  public deleteAgentPauseCause(id: number, options?: any) {
    return AgentPauseCauseServiceApiFp(this.configuration)
      .deleteAgentPauseCause(id, options)
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
  public patchAgentPauseCause(
    id: number,
    body: EnginePatchAgentPauseCauseRequest,
    options?: any
  ) {
    return AgentPauseCauseServiceApiFp(this.configuration)
      .patchAgentPauseCause(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentPauseCauseServiceApi
   */
  public readAgentPauseCause(id: number, options?: any) {
    return AgentPauseCauseServiceApiFp(this.configuration)
      .readAgentPauseCause(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {Array<string>} [fields]
   * @param {Array<number>} [id]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentPauseCauseServiceApi
   */
  public searchAgentPauseCause(
    page?: number,
    size?: number,
    q?: string,
    fields?: Array<string>,
    id?: Array<number>,
    options?: any
  ) {
    return AgentPauseCauseServiceApiFp(this.configuration)
      .searchAgentPauseCause(page, size, q, fields, id, options)
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
  public updateAgentPauseCause(
    id: number,
    body: EngineUpdateAgentPauseCauseRequest,
    options?: any
  ) {
    return AgentPauseCauseServiceApiFp(this.configuration)
      .updateAgentPauseCause(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}