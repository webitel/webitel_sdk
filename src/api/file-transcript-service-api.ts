// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.02.0
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
import { StorageDeleteFileTranscriptRequest } from '../api'
// @ts-ignore
import { StorageDeleteFileTranscriptResponse } from '../api'
// @ts-ignore
import { StorageListPhrases } from '../api'
// @ts-ignore
import { StorageStartFileTranscriptRequest } from '../api'
// @ts-ignore
import { StorageStartFileTranscriptResponse } from '../api'
/**
 * FileTranscriptServiceApi - axios parameter creator
 * @export
 */
export const FileTranscriptServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {StorageStartFileTranscriptRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createFileTranscript: async (
      body: StorageStartFileTranscriptRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createFileTranscript.'
        )
      }
      const localVarPath = `/storage/transcript_file`
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
     * @param {StorageDeleteFileTranscriptRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteFileTranscript: async (
      body: StorageDeleteFileTranscriptRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling deleteFileTranscript.'
        )
      }
      const localVarPath = `/storage/transcript_file`
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
     * @param {string} id
     * @param {number} [page]
     * @param {number} [size]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFileTranscriptPhrases: async (
      id: string,
      page?: number,
      size?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling getFileTranscriptPhrases.'
        )
      }
      const localVarPath = `/storage/transcript_file/{id}/phrases`.replace(
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

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (size !== undefined) {
        localVarQueryParameter['size'] = size
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
 * FileTranscriptServiceApi - functional programming interface
 * @export
 */
export const FileTranscriptServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {StorageStartFileTranscriptRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createFileTranscript(
      body: StorageStartFileTranscriptRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageStartFileTranscriptResponse>
    > {
      const localVarAxiosArgs = await FileTranscriptServiceApiAxiosParamCreator(
        configuration
      ).createFileTranscript(body, options)
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
     * @param {StorageDeleteFileTranscriptRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteFileTranscript(
      body: StorageDeleteFileTranscriptRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageDeleteFileTranscriptResponse>
    > {
      const localVarAxiosArgs = await FileTranscriptServiceApiAxiosParamCreator(
        configuration
      ).deleteFileTranscript(body, options)
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
     * @param {string} id
     * @param {number} [page]
     * @param {number} [size]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getFileTranscriptPhrases(
      id: string,
      page?: number,
      size?: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageListPhrases>
    > {
      const localVarAxiosArgs = await FileTranscriptServiceApiAxiosParamCreator(
        configuration
      ).getFileTranscriptPhrases(id, page, size, options)
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
 * FileTranscriptServiceApi - factory interface
 * @export
 */
export const FileTranscriptServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {StorageStartFileTranscriptRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createFileTranscript(
      body: StorageStartFileTranscriptRequest,
      options?: any
    ): AxiosPromise<StorageStartFileTranscriptResponse> {
      return FileTranscriptServiceApiFp(configuration)
        .createFileTranscript(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {StorageDeleteFileTranscriptRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteFileTranscript(
      body: StorageDeleteFileTranscriptRequest,
      options?: any
    ): AxiosPromise<StorageDeleteFileTranscriptResponse> {
      return FileTranscriptServiceApiFp(configuration)
        .deleteFileTranscript(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} id
     * @param {number} [page]
     * @param {number} [size]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFileTranscriptPhrases(
      id: string,
      page?: number,
      size?: number,
      options?: any
    ): AxiosPromise<StorageListPhrases> {
      return FileTranscriptServiceApiFp(configuration)
        .getFileTranscriptPhrases(id, page, size, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * FileTranscriptServiceApi - object-oriented interface
 * @export
 * @class FileTranscriptServiceApi
 * @extends {BaseAPI}
 */
export class FileTranscriptServiceApi extends BaseAPI {
  /**
   *
   * @param {StorageStartFileTranscriptRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FileTranscriptServiceApi
   */
  public createFileTranscript(
    body: StorageStartFileTranscriptRequest,
    options?: any
  ) {
    return FileTranscriptServiceApiFp(this.configuration)
      .createFileTranscript(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {StorageDeleteFileTranscriptRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FileTranscriptServiceApi
   */
  public deleteFileTranscript(
    body: StorageDeleteFileTranscriptRequest,
    options?: any
  ) {
    return FileTranscriptServiceApiFp(this.configuration)
      .deleteFileTranscript(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} id
   * @param {number} [page]
   * @param {number} [size]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FileTranscriptServiceApi
   */
  public getFileTranscriptPhrases(
    id: string,
    page?: number,
    size?: number,
    options?: any
  ) {
    return FileTranscriptServiceApiFp(this.configuration)
      .getFileTranscriptPhrases(id, page, size, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
