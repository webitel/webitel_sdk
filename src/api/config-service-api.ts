// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
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
import { LoggerConfig } from '../api'
// @ts-ignore
import { LoggerConfigs } from '../api'
// @ts-ignore
import { LoggerDeleteConfigsRequest } from '../api'
// @ts-ignore
import { LoggerInsertConfigRequest } from '../api'
// @ts-ignore
import { LoggerPatchUpdateConfigRequest } from '../api'
// @ts-ignore
import { LoggerSystemObjects } from '../api'
// @ts-ignore
import { LoggerUpdateConfigRequest } from '../api'
// @ts-ignore
import { RuntimeError } from '../api'
/**
 * ConfigServiceApi - axios parameter creator
 * @export
 */
export const ConfigServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {number} configId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete: async (
      configId: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'configId' is not null or undefined
      if (configId === null || configId === undefined) {
        throw new RequiredError(
          'configId',
          'Required parameter configId was null or undefined when calling _delete.'
        )
      }
      const localVarPath = `/logger/config/{config_id}`.replace(
        `{${'config_id'}}`,
        encodeURIComponent(String(configId))
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
     * @param {LoggerDeleteConfigsRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBulk: async (
      body: LoggerDeleteConfigsRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling deleteBulk.'
        )
      }
      const localVarPath = `/logger/config`
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
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAll: async (
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/logger/config`
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
     * @param {number} configId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getById: async (
      configId: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'configId' is not null or undefined
      if (configId === null || configId === undefined) {
        throw new RequiredError(
          'configId',
          'Required parameter configId was null or undefined when calling getById.'
        )
      }
      const localVarPath = `/logger/config/{config_id}`.replace(
        `{${'config_id'}}`,
        encodeURIComponent(String(configId))
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSystemObjects: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/logger/available_objects`
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
     * @param {LoggerInsertConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    insert: async (
      body: LoggerInsertConfigRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling insert.'
        )
      }
      const localVarPath = `/logger/config`
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
     * @param {number} configId
     * @param {LoggerPatchUpdateConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchUpdate: async (
      configId: number,
      body: LoggerPatchUpdateConfigRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'configId' is not null or undefined
      if (configId === null || configId === undefined) {
        throw new RequiredError(
          'configId',
          'Required parameter configId was null or undefined when calling patchUpdate.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchUpdate.'
        )
      }
      const localVarPath = `/logger/config/{config_id}`.replace(
        `{${'config_id'}}`,
        encodeURIComponent(String(configId))
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
     * @param {number} configId
     * @param {LoggerUpdateConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    update: async (
      configId: number,
      body: LoggerUpdateConfigRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'configId' is not null or undefined
      if (configId === null || configId === undefined) {
        throw new RequiredError(
          'configId',
          'Required parameter configId was null or undefined when calling update.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling update.'
        )
      }
      const localVarPath = `/logger/config/{config_id}`.replace(
        `{${'config_id'}}`,
        encodeURIComponent(String(configId))
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
 * ConfigServiceApi - functional programming interface
 * @export
 */
export const ConfigServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {number} configId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async _delete(
      configId: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      )._delete(configId, options)
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
     * @param {LoggerDeleteConfigsRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteBulk(
      body: LoggerDeleteConfigsRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).deleteBulk(body, options)
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
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAll(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoggerConfigs>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).getAll(page, size, q, sort, fields, options)
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
     * @param {number} configId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getById(
      configId: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoggerConfig>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).getById(configId, options)
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSystemObjects(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LoggerSystemObjects>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).getSystemObjects(options)
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
     * @param {LoggerInsertConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async insert(
      body: LoggerInsertConfigRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoggerConfig>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).insert(body, options)
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
     * @param {number} configId
     * @param {LoggerPatchUpdateConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchUpdate(
      configId: number,
      body: LoggerPatchUpdateConfigRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoggerConfig>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).patchUpdate(configId, body, options)
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
     * @param {number} configId
     * @param {LoggerUpdateConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async update(
      configId: number,
      body: LoggerUpdateConfigRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoggerConfig>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).update(configId, body, options)
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
 * ConfigServiceApi - factory interface
 * @export
 */
export const ConfigServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {number} configId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(configId: number, options?: any): AxiosPromise<object> {
      return ConfigServiceApiFp(configuration)
        ._delete(configId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {LoggerDeleteConfigsRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBulk(
      body: LoggerDeleteConfigsRequest,
      options?: any
    ): AxiosPromise<object> {
      return ConfigServiceApiFp(configuration)
        .deleteBulk(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAll(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<LoggerConfigs> {
      return ConfigServiceApiFp(configuration)
        .getAll(page, size, q, sort, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} configId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getById(configId: number, options?: any): AxiosPromise<LoggerConfig> {
      return ConfigServiceApiFp(configuration)
        .getById(configId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSystemObjects(options?: any): AxiosPromise<LoggerSystemObjects> {
      return ConfigServiceApiFp(configuration)
        .getSystemObjects(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {LoggerInsertConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    insert(
      body: LoggerInsertConfigRequest,
      options?: any
    ): AxiosPromise<LoggerConfig> {
      return ConfigServiceApiFp(configuration)
        .insert(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} configId
     * @param {LoggerPatchUpdateConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchUpdate(
      configId: number,
      body: LoggerPatchUpdateConfigRequest,
      options?: any
    ): AxiosPromise<LoggerConfig> {
      return ConfigServiceApiFp(configuration)
        .patchUpdate(configId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} configId
     * @param {LoggerUpdateConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    update(
      configId: number,
      body: LoggerUpdateConfigRequest,
      options?: any
    ): AxiosPromise<LoggerConfig> {
      return ConfigServiceApiFp(configuration)
        .update(configId, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ConfigServiceApi - object-oriented interface
 * @export
 * @class ConfigServiceApi
 * @extends {BaseAPI}
 */
export class ConfigServiceApi extends BaseAPI {
  /**
   *
   * @param {number} configId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public _delete(configId: number, options?: any) {
    return ConfigServiceApiFp(this.configuration)
      ._delete(configId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {LoggerDeleteConfigsRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public deleteBulk(body: LoggerDeleteConfigsRequest, options?: any) {
    return ConfigServiceApiFp(this.configuration)
      .deleteBulk(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public getAll(
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    options?: any
  ) {
    return ConfigServiceApiFp(this.configuration)
      .getAll(page, size, q, sort, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} configId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public getById(configId: number, options?: any) {
    return ConfigServiceApiFp(this.configuration)
      .getById(configId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public getSystemObjects(options?: any) {
    return ConfigServiceApiFp(this.configuration)
      .getSystemObjects(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {LoggerInsertConfigRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public insert(body: LoggerInsertConfigRequest, options?: any) {
    return ConfigServiceApiFp(this.configuration)
      .insert(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} configId
   * @param {LoggerPatchUpdateConfigRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public patchUpdate(
    configId: number,
    body: LoggerPatchUpdateConfigRequest,
    options?: any
  ) {
    return ConfigServiceApiFp(this.configuration)
      .patchUpdate(configId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} configId
   * @param {LoggerUpdateConfigRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public update(
    configId: number,
    body: LoggerUpdateConfigRequest,
    options?: any
  ) {
    return ConfigServiceApiFp(this.configuration)
      .update(configId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}