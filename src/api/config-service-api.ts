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
import { LoggerCreateConfigRequest } from '../api'
// @ts-ignore
import { LoggerDeleteConfigBulkRequest } from '../api'
// @ts-ignore
import { LoggerPatchConfigRequest } from '../api'
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
     * @param {LoggerCreateConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createConfig: async (
      body: LoggerCreateConfigRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createConfig.'
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteConfig: async (
      configId: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'configId' is not null or undefined
      if (configId === null || configId === undefined) {
        throw new RequiredError(
          'configId',
          'Required parameter configId was null or undefined when calling deleteConfig.'
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
     * @param {LoggerDeleteConfigBulkRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteConfigBulk: async (
      body: LoggerDeleteConfigBulkRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling deleteConfigBulk.'
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
     * @param {number} configId
     * @param {LoggerPatchConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchConfig: async (
      configId: number,
      body: LoggerPatchConfigRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'configId' is not null or undefined
      if (configId === null || configId === undefined) {
        throw new RequiredError(
          'configId',
          'Required parameter configId was null or undefined when calling patchConfig.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchConfig.'
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readConfig: async (
      configId: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'configId' is not null or undefined
      if (configId === null || configId === undefined) {
        throw new RequiredError(
          'configId',
          'Required parameter configId was null or undefined when calling readConfig.'
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
     * @param {boolean} [includeExisting]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readSystemObjects: async (
      includeExisting?: boolean,
      options: any = {}
    ): Promise<RequestArgs> => {
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

      if (includeExisting !== undefined) {
        localVarQueryParameter['include_existing'] = includeExisting
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
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchConfig: async (
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
     * @param {LoggerUpdateConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateConfig: async (
      configId: number,
      body: LoggerUpdateConfigRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'configId' is not null or undefined
      if (configId === null || configId === undefined) {
        throw new RequiredError(
          'configId',
          'Required parameter configId was null or undefined when calling updateConfig.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateConfig.'
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
     * @param {LoggerCreateConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createConfig(
      body: LoggerCreateConfigRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoggerConfig>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).createConfig(body, options)
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
    async deleteConfig(
      configId: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).deleteConfig(configId, options)
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
     * @param {LoggerDeleteConfigBulkRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteConfigBulk(
      body: LoggerDeleteConfigBulkRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).deleteConfigBulk(body, options)
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
     * @param {LoggerPatchConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchConfig(
      configId: number,
      body: LoggerPatchConfigRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoggerConfig>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).patchConfig(configId, body, options)
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
    async readConfig(
      configId: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoggerConfig>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).readConfig(configId, options)
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
     * @param {boolean} [includeExisting]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readSystemObjects(
      includeExisting?: boolean,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LoggerSystemObjects>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).readSystemObjects(includeExisting, options)
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
    async searchConfig(
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
      ).searchConfig(page, size, q, sort, fields, options)
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
    async updateConfig(
      configId: number,
      body: LoggerUpdateConfigRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoggerConfig>
    > {
      const localVarAxiosArgs = await ConfigServiceApiAxiosParamCreator(
        configuration
      ).updateConfig(configId, body, options)
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
     * @param {LoggerCreateConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createConfig(
      body: LoggerCreateConfigRequest,
      options?: any
    ): AxiosPromise<LoggerConfig> {
      return ConfigServiceApiFp(configuration)
        .createConfig(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} configId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteConfig(configId: number, options?: any): AxiosPromise<object> {
      return ConfigServiceApiFp(configuration)
        .deleteConfig(configId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {LoggerDeleteConfigBulkRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteConfigBulk(
      body: LoggerDeleteConfigBulkRequest,
      options?: any
    ): AxiosPromise<object> {
      return ConfigServiceApiFp(configuration)
        .deleteConfigBulk(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} configId
     * @param {LoggerPatchConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchConfig(
      configId: number,
      body: LoggerPatchConfigRequest,
      options?: any
    ): AxiosPromise<LoggerConfig> {
      return ConfigServiceApiFp(configuration)
        .patchConfig(configId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} configId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readConfig(configId: number, options?: any): AxiosPromise<LoggerConfig> {
      return ConfigServiceApiFp(configuration)
        .readConfig(configId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {boolean} [includeExisting]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readSystemObjects(
      includeExisting?: boolean,
      options?: any
    ): AxiosPromise<LoggerSystemObjects> {
      return ConfigServiceApiFp(configuration)
        .readSystemObjects(includeExisting, options)
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
    searchConfig(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<LoggerConfigs> {
      return ConfigServiceApiFp(configuration)
        .searchConfig(page, size, q, sort, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} configId
     * @param {LoggerUpdateConfigRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateConfig(
      configId: number,
      body: LoggerUpdateConfigRequest,
      options?: any
    ): AxiosPromise<LoggerConfig> {
      return ConfigServiceApiFp(configuration)
        .updateConfig(configId, body, options)
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
   * @param {LoggerCreateConfigRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public createConfig(body: LoggerCreateConfigRequest, options?: any) {
    return ConfigServiceApiFp(this.configuration)
      .createConfig(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} configId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public deleteConfig(configId: number, options?: any) {
    return ConfigServiceApiFp(this.configuration)
      .deleteConfig(configId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {LoggerDeleteConfigBulkRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public deleteConfigBulk(body: LoggerDeleteConfigBulkRequest, options?: any) {
    return ConfigServiceApiFp(this.configuration)
      .deleteConfigBulk(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} configId
   * @param {LoggerPatchConfigRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public patchConfig(
    configId: number,
    body: LoggerPatchConfigRequest,
    options?: any
  ) {
    return ConfigServiceApiFp(this.configuration)
      .patchConfig(configId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} configId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public readConfig(configId: number, options?: any) {
    return ConfigServiceApiFp(this.configuration)
      .readConfig(configId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {boolean} [includeExisting]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigServiceApi
   */
  public readSystemObjects(includeExisting?: boolean, options?: any) {
    return ConfigServiceApiFp(this.configuration)
      .readSystemObjects(includeExisting, options)
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
  public searchConfig(
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    options?: any
  ) {
    return ConfigServiceApiFp(this.configuration)
      .searchConfig(page, size, q, sort, fields, options)
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
  public updateConfig(
    configId: number,
    body: LoggerUpdateConfigRequest,
    options?: any
  ) {
    return ConfigServiceApiFp(this.configuration)
      .updateConfig(configId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
