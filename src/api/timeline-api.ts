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
import { WebitelChatChatMessages } from '../api'
// @ts-ignore
import { WebitelContactsGetTimelineResponse } from '../api'
/**
 * TimelineApi - axios parameter creator
 * @export
 */
export const TimelineApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} contactId
     * @param {string} conversationId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDetailedMessageHistory: async (
      contactId: string,
      conversationId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'contactId' is not null or undefined
      if (contactId === null || contactId === undefined) {
        throw new RequiredError(
          'contactId',
          'Required parameter contactId was null or undefined when calling getDetailedMessageHistory.'
        )
      }
      // verify required parameter 'conversationId' is not null or undefined
      if (conversationId === null || conversationId === undefined) {
        throw new RequiredError(
          'conversationId',
          'Required parameter conversationId was null or undefined when calling getDetailedMessageHistory.'
        )
      }
      const localVarPath = `/contacts/{contact_id}/timeline/chats/{conversation_id}`
        .replace(`{${'contact_id'}}`, encodeURIComponent(String(contactId)))
        .replace(
          `{${'conversation_id'}}`,
          encodeURIComponent(String(conversationId))
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
     * @param {string} contactId
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {Array<string>} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimeline: async (
      contactId: string,
      dateFrom?: string,
      dateTo?: string,
      type?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'contactId' is not null or undefined
      if (contactId === null || contactId === undefined) {
        throw new RequiredError(
          'contactId',
          'Required parameter contactId was null or undefined when calling getTimeline.'
        )
      }
      const localVarPath = `/contacts/{contact_id}/timeline`.replace(
        `{${'contact_id'}}`,
        encodeURIComponent(String(contactId))
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
        localVarQueryParameter['date_from'] = dateFrom
      }

      if (dateTo !== undefined) {
        localVarQueryParameter['date_to'] = dateTo
      }

      if (type) {
        localVarQueryParameter['type'] = type
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
 * TimelineApi - functional programming interface
 * @export
 */
export const TimelineApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {string} contactId
     * @param {string} conversationId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDetailedMessageHistory(
      contactId: string,
      conversationId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelChatChatMessages>
    > {
      const localVarAxiosArgs = await TimelineApiAxiosParamCreator(
        configuration
      ).getDetailedMessageHistory(contactId, conversationId, options)
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
     * @param {string} contactId
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {Array<string>} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTimeline(
      contactId: string,
      dateFrom?: string,
      dateTo?: string,
      type?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelContactsGetTimelineResponse>
    > {
      const localVarAxiosArgs = await TimelineApiAxiosParamCreator(
        configuration
      ).getTimeline(contactId, dateFrom, dateTo, type, options)
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
 * TimelineApi - factory interface
 * @export
 */
export const TimelineApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {string} contactId
     * @param {string} conversationId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDetailedMessageHistory(
      contactId: string,
      conversationId: string,
      options?: any
    ): AxiosPromise<WebitelChatChatMessages> {
      return TimelineApiFp(configuration)
        .getDetailedMessageHistory(contactId, conversationId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} contactId
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {Array<string>} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimeline(
      contactId: string,
      dateFrom?: string,
      dateTo?: string,
      type?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelContactsGetTimelineResponse> {
      return TimelineApiFp(configuration)
        .getTimeline(contactId, dateFrom, dateTo, type, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * TimelineApi - object-oriented interface
 * @export
 * @class TimelineApi
 * @extends {BaseAPI}
 */
export class TimelineApi extends BaseAPI {
  /**
   *
   * @param {string} contactId
   * @param {string} conversationId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TimelineApi
   */
  public getDetailedMessageHistory(
    contactId: string,
    conversationId: string,
    options?: any
  ) {
    return TimelineApiFp(this.configuration)
      .getDetailedMessageHistory(contactId, conversationId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} contactId
   * @param {string} [dateFrom]
   * @param {string} [dateTo]
   * @param {Array<string>} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TimelineApi
   */
  public getTimeline(
    contactId: string,
    dateFrom?: string,
    dateTo?: string,
    type?: Array<string>,
    options?: any
  ) {
    return TimelineApiFp(this.configuration)
      .getTimeline(contactId, dateFrom, dateTo, type, options)
      .then((request) => request(this.axios, this.basePath))
  }
}