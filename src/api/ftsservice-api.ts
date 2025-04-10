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
import { FtsSearchResponse } from '../api'
// @ts-ignore
import { RpcStatus } from '../api'
/**
 * FTSServiceApi - axios parameter creator
 * @export
 */
export const FTSServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<string>} [objectName]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search: async (
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      objectName?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/search`
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

      if (objectName) {
        localVarQueryParameter['object_name'] = objectName
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
 * FTSServiceApi - functional programming interface
 * @export
 */
export const FTSServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<string>} [objectName]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async search(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      objectName?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<FtsSearchResponse>
    > {
      const localVarAxiosArgs = await FTSServiceApiAxiosParamCreator(
        configuration
      ).search(page, size, q, sort, fields, objectName, options)
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
 * FTSServiceApi - factory interface
 * @export
 */
export const FTSServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<string>} [objectName]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      objectName?: Array<string>,
      options?: any
    ): AxiosPromise<FtsSearchResponse> {
      return FTSServiceApiFp(configuration)
        .search(page, size, q, sort, fields, objectName, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * FTSServiceApi - object-oriented interface
 * @export
 * @class FTSServiceApi
 * @extends {BaseAPI}
 */
export class FTSServiceApi extends BaseAPI {
  /**
   *
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<string>} [objectName]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FTSServiceApi
   */
  public search(
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    objectName?: Array<string>,
    options?: any
  ) {
    return FTSServiceApiFp(this.configuration)
      .search(page, size, q, sort, fields, objectName, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
