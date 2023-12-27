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
import { RuntimeError } from '../api'
// @ts-ignore
import { StorageListMedia } from '../api'
// @ts-ignore
import { StorageMediaFile } from '../api'
/**
 * MediaFileServiceApi - axios parameter creator
 * @export
 */
export const MediaFileServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Remove MediaFile
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMediaFile: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteMediaFile.'
        )
      }
      const localVarPath = `/storage/media/{id}`.replace(
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
     * @summary MediaFile item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readMediaFile: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readMediaFile.'
        )
      }
      const localVarPath = `/storage/media/{id}`.replace(
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
     * @summary Search MediaFile
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchMediaFile: async (
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/storage/media`
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
  }
}

/**
 * MediaFileServiceApi - functional programming interface
 * @export
 */
export const MediaFileServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Remove MediaFile
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteMediaFile(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageMediaFile>
    > {
      const localVarAxiosArgs = await MediaFileServiceApiAxiosParamCreator(
        configuration
      ).deleteMediaFile(id, domainId, options)
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
     * @summary MediaFile item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readMediaFile(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageMediaFile>
    > {
      const localVarAxiosArgs = await MediaFileServiceApiAxiosParamCreator(
        configuration
      ).readMediaFile(id, domainId, options)
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
     * @summary Search MediaFile
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchMediaFile(
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
      ) => AxiosPromise<StorageListMedia>
    > {
      const localVarAxiosArgs = await MediaFileServiceApiAxiosParamCreator(
        configuration
      ).searchMediaFile(page, size, q, sort, fields, id, options)
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
 * MediaFileServiceApi - factory interface
 * @export
 */
export const MediaFileServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Remove MediaFile
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMediaFile(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<StorageMediaFile> {
      return MediaFileServiceApiFp(configuration)
        .deleteMediaFile(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary MediaFile item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readMediaFile(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<StorageMediaFile> {
      return MediaFileServiceApiFp(configuration)
        .readMediaFile(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Search MediaFile
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchMediaFile(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options?: any
    ): AxiosPromise<StorageListMedia> {
      return MediaFileServiceApiFp(configuration)
        .searchMediaFile(page, size, q, sort, fields, id, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * MediaFileServiceApi - object-oriented interface
 * @export
 * @class MediaFileServiceApi
 * @extends {BaseAPI}
 */
export class MediaFileServiceApi extends BaseAPI {
  /**
   *
   * @summary Remove MediaFile
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MediaFileServiceApi
   */
  public deleteMediaFile(id: string, domainId?: string, options?: any) {
    return MediaFileServiceApiFp(this.configuration)
      .deleteMediaFile(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary MediaFile item
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MediaFileServiceApi
   */
  public readMediaFile(id: string, domainId?: string, options?: any) {
    return MediaFileServiceApiFp(this.configuration)
      .readMediaFile(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Search MediaFile
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<number>} [id]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MediaFileServiceApi
   */
  public searchMediaFile(
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    id?: Array<number>,
    options?: any
  ) {
    return MediaFileServiceApiFp(this.configuration)
      .searchMediaFile(page, size, q, sort, fields, id, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
