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
import { EngineAgentTeam } from '../api'
// @ts-ignore
import { EngineCreateAgentTeamRequest } from '../api'
// @ts-ignore
import { EngineListAgentTeam } from '../api'
// @ts-ignore
import { EngineUpdateAgentTeamRequest } from '../api'
/**
 * AgentTeamServiceApi - axios parameter creator
 * @export
 */
export const AgentTeamServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create AgentTeam
     * @param {EngineCreateAgentTeamRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAgentTeam: async (
      body: EngineCreateAgentTeamRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createAgentTeam.'
        )
      }
      const localVarPath = `/call_center/teams`
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
     * @summary Remove AgentTeam
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAgentTeam: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteAgentTeam.'
        )
      }
      const localVarPath = `/call_center/teams/{id}`.replace(
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
     * @summary AgentTeam item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readAgentTeam: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readAgentTeam.'
        )
      }
      const localVarPath = `/call_center/teams/{id}`.replace(
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
     * @summary List of AgentTeam
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {Array<number>} [id]
     * @param {Array<string>} [strategy]
     * @param {Array<number>} [administratorId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAgentTeam: async (
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      fields?: Array<string>,
      sort?: string,
      id?: Array<number>,
      strategy?: Array<string>,
      administratorId?: Array<number>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/call_center/teams`
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

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (id) {
        localVarQueryParameter['id'] = id
      }

      if (strategy) {
        localVarQueryParameter['strategy'] = strategy
      }

      if (administratorId) {
        localVarQueryParameter['administrator_id'] = administratorId
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
     * @summary Update AgentTeam
     * @param {string} id
     * @param {EngineUpdateAgentTeamRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAgentTeam: async (
      id: string,
      body: EngineUpdateAgentTeamRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateAgentTeam.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateAgentTeam.'
        )
      }
      const localVarPath = `/call_center/teams/{id}`.replace(
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
 * AgentTeamServiceApi - functional programming interface
 * @export
 */
export const AgentTeamServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create AgentTeam
     * @param {EngineCreateAgentTeamRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createAgentTeam(
      body: EngineCreateAgentTeamRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentTeam>
    > {
      const localVarAxiosArgs = await AgentTeamServiceApiAxiosParamCreator(
        configuration
      ).createAgentTeam(body, options)
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
     * @summary Remove AgentTeam
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteAgentTeam(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentTeam>
    > {
      const localVarAxiosArgs = await AgentTeamServiceApiAxiosParamCreator(
        configuration
      ).deleteAgentTeam(id, domainId, options)
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
     * @summary AgentTeam item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readAgentTeam(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentTeam>
    > {
      const localVarAxiosArgs = await AgentTeamServiceApiAxiosParamCreator(
        configuration
      ).readAgentTeam(id, domainId, options)
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
     * @summary List of AgentTeam
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {Array<number>} [id]
     * @param {Array<string>} [strategy]
     * @param {Array<number>} [administratorId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchAgentTeam(
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      fields?: Array<string>,
      sort?: string,
      id?: Array<number>,
      strategy?: Array<string>,
      administratorId?: Array<number>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListAgentTeam>
    > {
      const localVarAxiosArgs = await AgentTeamServiceApiAxiosParamCreator(
        configuration
      ).searchAgentTeam(
        page,
        size,
        q,
        domainId,
        fields,
        sort,
        id,
        strategy,
        administratorId,
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
     * @summary Update AgentTeam
     * @param {string} id
     * @param {EngineUpdateAgentTeamRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateAgentTeam(
      id: string,
      body: EngineUpdateAgentTeamRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineAgentTeam>
    > {
      const localVarAxiosArgs = await AgentTeamServiceApiAxiosParamCreator(
        configuration
      ).updateAgentTeam(id, body, options)
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
 * AgentTeamServiceApi - factory interface
 * @export
 */
export const AgentTeamServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create AgentTeam
     * @param {EngineCreateAgentTeamRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAgentTeam(
      body: EngineCreateAgentTeamRequest,
      options?: any
    ): AxiosPromise<EngineAgentTeam> {
      return AgentTeamServiceApiFp(configuration)
        .createAgentTeam(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Remove AgentTeam
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAgentTeam(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineAgentTeam> {
      return AgentTeamServiceApiFp(configuration)
        .deleteAgentTeam(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary AgentTeam item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readAgentTeam(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineAgentTeam> {
      return AgentTeamServiceApiFp(configuration)
        .readAgentTeam(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary List of AgentTeam
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {Array<number>} [id]
     * @param {Array<string>} [strategy]
     * @param {Array<number>} [administratorId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAgentTeam(
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      fields?: Array<string>,
      sort?: string,
      id?: Array<number>,
      strategy?: Array<string>,
      administratorId?: Array<number>,
      options?: any
    ): AxiosPromise<EngineListAgentTeam> {
      return AgentTeamServiceApiFp(configuration)
        .searchAgentTeam(
          page,
          size,
          q,
          domainId,
          fields,
          sort,
          id,
          strategy,
          administratorId,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update AgentTeam
     * @param {string} id
     * @param {EngineUpdateAgentTeamRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAgentTeam(
      id: string,
      body: EngineUpdateAgentTeamRequest,
      options?: any
    ): AxiosPromise<EngineAgentTeam> {
      return AgentTeamServiceApiFp(configuration)
        .updateAgentTeam(id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * AgentTeamServiceApi - object-oriented interface
 * @export
 * @class AgentTeamServiceApi
 * @extends {BaseAPI}
 */
export class AgentTeamServiceApi extends BaseAPI {
  /**
   *
   * @summary Create AgentTeam
   * @param {EngineCreateAgentTeamRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentTeamServiceApi
   */
  public createAgentTeam(body: EngineCreateAgentTeamRequest, options?: any) {
    return AgentTeamServiceApiFp(this.configuration)
      .createAgentTeam(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Remove AgentTeam
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentTeamServiceApi
   */
  public deleteAgentTeam(id: string, domainId?: string, options?: any) {
    return AgentTeamServiceApiFp(this.configuration)
      .deleteAgentTeam(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary AgentTeam item
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentTeamServiceApi
   */
  public readAgentTeam(id: string, domainId?: string, options?: any) {
    return AgentTeamServiceApiFp(this.configuration)
      .readAgentTeam(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary List of AgentTeam
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [domainId]
   * @param {Array<string>} [fields]
   * @param {string} [sort]
   * @param {Array<number>} [id]
   * @param {Array<string>} [strategy]
   * @param {Array<number>} [administratorId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentTeamServiceApi
   */
  public searchAgentTeam(
    page?: number,
    size?: number,
    q?: string,
    domainId?: string,
    fields?: Array<string>,
    sort?: string,
    id?: Array<number>,
    strategy?: Array<string>,
    administratorId?: Array<number>,
    options?: any
  ) {
    return AgentTeamServiceApiFp(this.configuration)
      .searchAgentTeam(
        page,
        size,
        q,
        domainId,
        fields,
        sort,
        id,
        strategy,
        administratorId,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update AgentTeam
   * @param {string} id
   * @param {EngineUpdateAgentTeamRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentTeamServiceApi
   */
  public updateAgentTeam(
    id: string,
    body: EngineUpdateAgentTeamRequest,
    options?: any
  ) {
    return AgentTeamServiceApiFp(this.configuration)
      .updateAgentTeam(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
