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
import { CasesGetTimelineCounterResponse } from '../api'
// @ts-ignore
import { CasesGetTimelineResponse } from '../api'
// @ts-ignore
import { GooglerpcStatus } from '../api'
/**
 * CaseTimelineApi - axios parameter creator
 * @export
 */
export const CaseTimelineApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} caseId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
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
      caseId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      ids?: Array<string>,
      dateFrom?: string,
      dateTo?: string,
      type?: Array<'chat' | 'call' | 'email'>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseId' is not null or undefined
      if (caseId === null || caseId === undefined) {
        throw new RequiredError(
          'caseId',
          'Required parameter caseId was null or undefined when calling getTimeline.'
        )
      }
      const localVarPath = `/cases/{case_id}/timeline`.replace(
        `{${'case_id'}}`,
        encodeURIComponent(String(caseId))
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
     * @param {string} caseId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimelineCounter: async (
      caseId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseId' is not null or undefined
      if (caseId === null || caseId === undefined) {
        throw new RequiredError(
          'caseId',
          'Required parameter caseId was null or undefined when calling getTimelineCounter.'
        )
      }
      const localVarPath = `/cases/{case_id}/timeline/counter`.replace(
        `{${'case_id'}}`,
        encodeURIComponent(String(caseId))
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
 * CaseTimelineApi - functional programming interface
 * @export
 */
export const CaseTimelineApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {string} caseId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
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
      caseId: string,
      page?: number,
      size?: number,
      q?: string,
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
      ) => AxiosPromise<CasesGetTimelineResponse>
    > {
      const localVarAxiosArgs = await CaseTimelineApiAxiosParamCreator(
        configuration
      ).getTimeline(
        caseId,
        page,
        size,
        q,
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
     * @param {string} caseId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTimelineCounter(
      caseId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesGetTimelineCounterResponse>
    > {
      const localVarAxiosArgs = await CaseTimelineApiAxiosParamCreator(
        configuration
      ).getTimelineCounter(caseId, options)
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
 * CaseTimelineApi - factory interface
 * @export
 */
export const CaseTimelineApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {string} caseId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
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
      caseId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      ids?: Array<string>,
      dateFrom?: string,
      dateTo?: string,
      type?: Array<'chat' | 'call' | 'email'>,
      options?: any
    ): AxiosPromise<CasesGetTimelineResponse> {
      return CaseTimelineApiFp(configuration)
        .getTimeline(
          caseId,
          page,
          size,
          q,
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
     * @param {string} caseId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimelineCounter(
      caseId: string,
      options?: any
    ): AxiosPromise<CasesGetTimelineCounterResponse> {
      return CaseTimelineApiFp(configuration)
        .getTimelineCounter(caseId, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * CaseTimelineApi - object-oriented interface
 * @export
 * @class CaseTimelineApi
 * @extends {BaseAPI}
 */
export class CaseTimelineApi extends BaseAPI {
  /**
   *
   * @param {string} caseId
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<string>} [ids]
   * @param {string} [dateFrom]
   * @param {string} [dateTo]
   * @param {Array<'chat' | 'call' | 'email'>} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseTimelineApi
   */
  public getTimeline(
    caseId: string,
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    ids?: Array<string>,
    dateFrom?: string,
    dateTo?: string,
    type?: Array<'chat' | 'call' | 'email'>,
    options?: any
  ) {
    return CaseTimelineApiFp(this.configuration)
      .getTimeline(
        caseId,
        page,
        size,
        q,
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
   * @param {string} caseId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseTimelineApi
   */
  public getTimelineCounter(caseId: string, options?: any) {
    return CaseTimelineApiFp(this.configuration)
      .getTimelineCounter(caseId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
