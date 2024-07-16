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
import { WebitelContactsGetTimelineCounterResponse } from '../api'
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
     * @param {string} [page]
     * @param {string} [size]
     * @param {string} [search]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<string>} [ids]
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {Array<'chat' | 'call' | 'email'>} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimeline: async (
      contactId: string,
      page?: string,
      size?: string,
      search?: string,
      sort?: string,
      fields?: Array<string>,
      ids?: Array<string>,
      dateFrom?: string,
      dateTo?: string,
      type?: Array<'chat' | 'call' | 'email'>,
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

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (size !== undefined) {
        localVarQueryParameter['size'] = size
      }

      if (search !== undefined) {
        localVarQueryParameter['search'] = search
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (ids) {
        localVarQueryParameter['ids'] = ids
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
    /**
     *
     * @param {string} contactId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimelineCounter: async (
      contactId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'contactId' is not null or undefined
      if (contactId === null || contactId === undefined) {
        throw new RequiredError(
          'contactId',
          'Required parameter contactId was null or undefined when calling getTimelineCounter.'
        )
      }
      const localVarPath = `/contacts/{contact_id}/timeline/counter`.replace(
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
     * @param {string} [page]
     * @param {string} [size]
     * @param {string} [search]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<string>} [ids]
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {Array<'chat' | 'call' | 'email'>} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTimeline(
      contactId: string,
      page?: string,
      size?: string,
      search?: string,
      sort?: string,
      fields?: Array<string>,
      ids?: Array<string>,
      dateFrom?: string,
      dateTo?: string,
      type?: Array<'chat' | 'call' | 'email'>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelContactsGetTimelineResponse>
    > {
      const localVarAxiosArgs = await TimelineApiAxiosParamCreator(
        configuration
      ).getTimeline(
        contactId,
        page,
        size,
        search,
        sort,
        fields,
        ids,
        dateFrom,
        dateTo,
        type,
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
     * @param {string} contactId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTimelineCounter(
      contactId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelContactsGetTimelineCounterResponse>
    > {
      const localVarAxiosArgs = await TimelineApiAxiosParamCreator(
        configuration
      ).getTimelineCounter(contactId, options)
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
     * @param {string} [page]
     * @param {string} [size]
     * @param {string} [search]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<string>} [ids]
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {Array<'chat' | 'call' | 'email'>} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimeline(
      contactId: string,
      page?: string,
      size?: string,
      search?: string,
      sort?: string,
      fields?: Array<string>,
      ids?: Array<string>,
      dateFrom?: string,
      dateTo?: string,
      type?: Array<'chat' | 'call' | 'email'>,
      options?: any
    ): AxiosPromise<WebitelContactsGetTimelineResponse> {
      return TimelineApiFp(configuration)
        .getTimeline(
          contactId,
          page,
          size,
          search,
          sort,
          fields,
          ids,
          dateFrom,
          dateTo,
          type,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} contactId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimelineCounter(
      contactId: string,
      options?: any
    ): AxiosPromise<WebitelContactsGetTimelineCounterResponse> {
      return TimelineApiFp(configuration)
        .getTimelineCounter(contactId, options)
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
   * @param {string} [page]
   * @param {string} [size]
   * @param {string} [search]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<string>} [ids]
   * @param {string} [dateFrom]
   * @param {string} [dateTo]
   * @param {Array<'chat' | 'call' | 'email'>} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TimelineApi
   */
  public getTimeline(
    contactId: string,
    page?: string,
    size?: string,
    search?: string,
    sort?: string,
    fields?: Array<string>,
    ids?: Array<string>,
    dateFrom?: string,
    dateTo?: string,
    type?: Array<'chat' | 'call' | 'email'>,
    options?: any
  ) {
    return TimelineApiFp(this.configuration)
      .getTimeline(
        contactId,
        page,
        size,
        search,
        sort,
        fields,
        ids,
        dateFrom,
        dateTo,
        type,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} contactId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TimelineApi
   */
  public getTimelineCounter(contactId: string, options?: any) {
    return TimelineApiFp(this.configuration)
      .getTimelineCounter(contactId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
