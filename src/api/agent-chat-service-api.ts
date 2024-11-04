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
import { WebitelChatGetAgentChatsResponse } from '../api'
/**
 * AgentChatServiceApi - axios parameter creator
 * @export
 */
export const AgentChatServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {number} [size] default
     * @param {number} [page]
     * @param {string} [q]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {boolean} [onlyClosed] filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAgentChats: async (
      size?: number,
      page?: number,
      q?: string,
      fields?: Array<string>,
      sort?: string,
      onlyClosed?: boolean,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/agent/chats`
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

      if (size !== undefined) {
        localVarQueryParameter['size'] = size
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (onlyClosed !== undefined) {
        localVarQueryParameter['only_closed'] = onlyClosed
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
     * @param {string} chatId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markChatProcessed: async (
      chatId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'chatId' is not null or undefined
      if (chatId === null || chatId === undefined) {
        throw new RequiredError(
          'chatId',
          'Required parameter chatId was null or undefined when calling markChatProcessed.'
        )
      }
      const localVarPath = `/agent/chats/{chat_id}`.replace(
        `{${'chat_id'}}`,
        encodeURIComponent(String(chatId))
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
 * AgentChatServiceApi - functional programming interface
 * @export
 */
export const AgentChatServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {number} [size] default
     * @param {number} [page]
     * @param {string} [q]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {boolean} [onlyClosed] filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAgentChats(
      size?: number,
      page?: number,
      q?: string,
      fields?: Array<string>,
      sort?: string,
      onlyClosed?: boolean,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelChatGetAgentChatsResponse>
    > {
      const localVarAxiosArgs = await AgentChatServiceApiAxiosParamCreator(
        configuration
      ).getAgentChats(size, page, q, fields, sort, onlyClosed, options)
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
     * @param {string} chatId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async markChatProcessed(
      chatId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs = await AgentChatServiceApiAxiosParamCreator(
        configuration
      ).markChatProcessed(chatId, options)
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
 * AgentChatServiceApi - factory interface
 * @export
 */
export const AgentChatServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {number} [size] default
     * @param {number} [page]
     * @param {string} [q]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {boolean} [onlyClosed] filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAgentChats(
      size?: number,
      page?: number,
      q?: string,
      fields?: Array<string>,
      sort?: string,
      onlyClosed?: boolean,
      options?: any
    ): AxiosPromise<WebitelChatGetAgentChatsResponse> {
      return AgentChatServiceApiFp(configuration)
        .getAgentChats(size, page, q, fields, sort, onlyClosed, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} chatId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markChatProcessed(chatId: string, options?: any): AxiosPromise<object> {
      return AgentChatServiceApiFp(configuration)
        .markChatProcessed(chatId, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * AgentChatServiceApi - object-oriented interface
 * @export
 * @class AgentChatServiceApi
 * @extends {BaseAPI}
 */
export class AgentChatServiceApi extends BaseAPI {
  /**
   *
   * @param {number} [size] default
   * @param {number} [page]
   * @param {string} [q]
   * @param {Array<string>} [fields]
   * @param {string} [sort]
   * @param {boolean} [onlyClosed] filter
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentChatServiceApi
   */
  public getAgentChats(
    size?: number,
    page?: number,
    q?: string,
    fields?: Array<string>,
    sort?: string,
    onlyClosed?: boolean,
    options?: any
  ) {
    return AgentChatServiceApiFp(this.configuration)
      .getAgentChats(size, page, q, fields, sort, onlyClosed, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} chatId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentChatServiceApi
   */
  public markChatProcessed(chatId: string, options?: any) {
    return AgentChatServiceApiFp(this.configuration)
      .markChatProcessed(chatId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
