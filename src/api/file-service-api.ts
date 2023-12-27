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
import { StorageDeleteFilesRequest } from '../api'
/**
 * FileServiceApi - axios parameter creator
 * @export
 */
export const FileServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {StorageDeleteFilesRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteFiles: async (
      body: StorageDeleteFilesRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling deleteFiles.'
        )
      }
      const localVarPath = `/storage/file`
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
  }
}

/**
 * FileServiceApi - functional programming interface
 * @export
 */
export const FileServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {StorageDeleteFilesRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteFiles(
      body: StorageDeleteFilesRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs = await FileServiceApiAxiosParamCreator(
        configuration
      ).deleteFiles(body, options)
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
 * FileServiceApi - factory interface
 * @export
 */
export const FileServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {StorageDeleteFilesRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteFiles(
      body: StorageDeleteFilesRequest,
      options?: any
    ): AxiosPromise<object> {
      return FileServiceApiFp(configuration)
        .deleteFiles(body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * FileServiceApi - object-oriented interface
 * @export
 * @class FileServiceApi
 * @extends {BaseAPI}
 */
export class FileServiceApi extends BaseAPI {
  /**
   *
   * @param {StorageDeleteFilesRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FileServiceApi
   */
  public deleteFiles(body: StorageDeleteFilesRequest, options?: any) {
    return FileServiceApiFp(this.configuration)
      .deleteFiles(body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
