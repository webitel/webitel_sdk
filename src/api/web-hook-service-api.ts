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
import { EngineApiError } from '../api'
// @ts-ignore
import { EngineCreateWebHookRequest } from '../api'
// @ts-ignore
import { EngineListWebHook } from '../api'
// @ts-ignore
import { EnginePatchWebHookRequest } from '../api'
// @ts-ignore
import { EngineUpdateWebHookRequest } from '../api'
// @ts-ignore
import { EngineWebHook } from '../api'
/**
 * WebHookServiceApi - axios parameter creator
 * @export
 */
export const WebHookServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create WebHook
     * @param {EngineCreateWebHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWebHook: async (
      body: EngineCreateWebHookRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createWebHook.'
        )
      }
      const localVarPath = `/hook`
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
     * @summary Remove WebHook
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteWebHook: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteWebHook.'
        )
      }
      const localVarPath = `/hook/{id}`.replace(
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
     * @summary Patch WebHook
     * @param {number} id
     * @param {EnginePatchWebHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchWebHook: async (
      id: number,
      body: EnginePatchWebHookRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchWebHook.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchWebHook.'
        )
      }
      const localVarPath = `/hook/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
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
     * @summary WebHook item
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readWebHook: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readWebHook.'
        )
      }
      const localVarPath = `/hook/{id}`.replace(
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
     * @summary List of WebHook
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchWebHook: async (
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/hook`
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
    /**
     *
     * @summary Update WebHook
     * @param {number} id
     * @param {EngineUpdateWebHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWebHook: async (
      id: number,
      body: EngineUpdateWebHookRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateWebHook.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateWebHook.'
        )
      }
      const localVarPath = `/hook/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
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
 * WebHookServiceApi - functional programming interface
 * @export
 */
export const WebHookServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create WebHook
     * @param {EngineCreateWebHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createWebHook(
      body: EngineCreateWebHookRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineWebHook>
    > {
      const localVarAxiosArgs = await WebHookServiceApiAxiosParamCreator(
        configuration
      ).createWebHook(body, options)
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
     * @summary Remove WebHook
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteWebHook(
      id: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineWebHook>
    > {
      const localVarAxiosArgs = await WebHookServiceApiAxiosParamCreator(
        configuration
      ).deleteWebHook(id, options)
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
     * @summary Patch WebHook
     * @param {number} id
     * @param {EnginePatchWebHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchWebHook(
      id: number,
      body: EnginePatchWebHookRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineWebHook>
    > {
      const localVarAxiosArgs = await WebHookServiceApiAxiosParamCreator(
        configuration
      ).patchWebHook(id, body, options)
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
     * @summary WebHook item
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readWebHook(
      id: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineWebHook>
    > {
      const localVarAxiosArgs = await WebHookServiceApiAxiosParamCreator(
        configuration
      ).readWebHook(id, options)
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
     * @summary List of WebHook
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchWebHook(
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
      ) => AxiosPromise<EngineListWebHook>
    > {
      const localVarAxiosArgs = await WebHookServiceApiAxiosParamCreator(
        configuration
      ).searchWebHook(page, size, q, sort, fields, id, options)
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
     * @summary Update WebHook
     * @param {number} id
     * @param {EngineUpdateWebHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateWebHook(
      id: number,
      body: EngineUpdateWebHookRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineWebHook>
    > {
      const localVarAxiosArgs = await WebHookServiceApiAxiosParamCreator(
        configuration
      ).updateWebHook(id, body, options)
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
 * WebHookServiceApi - factory interface
 * @export
 */
export const WebHookServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create WebHook
     * @param {EngineCreateWebHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWebHook(
      body: EngineCreateWebHookRequest,
      options?: any
    ): AxiosPromise<EngineWebHook> {
      return WebHookServiceApiFp(configuration)
        .createWebHook(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Remove WebHook
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteWebHook(id: number, options?: any): AxiosPromise<EngineWebHook> {
      return WebHookServiceApiFp(configuration)
        .deleteWebHook(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Patch WebHook
     * @param {number} id
     * @param {EnginePatchWebHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchWebHook(
      id: number,
      body: EnginePatchWebHookRequest,
      options?: any
    ): AxiosPromise<EngineWebHook> {
      return WebHookServiceApiFp(configuration)
        .patchWebHook(id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary WebHook item
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readWebHook(id: number, options?: any): AxiosPromise<EngineWebHook> {
      return WebHookServiceApiFp(configuration)
        .readWebHook(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary List of WebHook
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchWebHook(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options?: any
    ): AxiosPromise<EngineListWebHook> {
      return WebHookServiceApiFp(configuration)
        .searchWebHook(page, size, q, sort, fields, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update WebHook
     * @param {number} id
     * @param {EngineUpdateWebHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWebHook(
      id: number,
      body: EngineUpdateWebHookRequest,
      options?: any
    ): AxiosPromise<EngineWebHook> {
      return WebHookServiceApiFp(configuration)
        .updateWebHook(id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * WebHookServiceApi - object-oriented interface
 * @export
 * @class WebHookServiceApi
 * @extends {BaseAPI}
 */
export class WebHookServiceApi extends BaseAPI {
  /**
   *
   * @summary Create WebHook
   * @param {EngineCreateWebHookRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WebHookServiceApi
   */
  public createWebHook(body: EngineCreateWebHookRequest, options?: any) {
    return WebHookServiceApiFp(this.configuration)
      .createWebHook(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Remove WebHook
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WebHookServiceApi
   */
  public deleteWebHook(id: number, options?: any) {
    return WebHookServiceApiFp(this.configuration)
      .deleteWebHook(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Patch WebHook
   * @param {number} id
   * @param {EnginePatchWebHookRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WebHookServiceApi
   */
  public patchWebHook(
    id: number,
    body: EnginePatchWebHookRequest,
    options?: any
  ) {
    return WebHookServiceApiFp(this.configuration)
      .patchWebHook(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary WebHook item
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WebHookServiceApi
   */
  public readWebHook(id: number, options?: any) {
    return WebHookServiceApiFp(this.configuration)
      .readWebHook(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary List of WebHook
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<number>} [id]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WebHookServiceApi
   */
  public searchWebHook(
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    id?: Array<number>,
    options?: any
  ) {
    return WebHookServiceApiFp(this.configuration)
      .searchWebHook(page, size, q, sort, fields, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update WebHook
   * @param {number} id
   * @param {EngineUpdateWebHookRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WebHookServiceApi
   */
  public updateWebHook(
    id: number,
    body: EngineUpdateWebHookRequest,
    options?: any
  ) {
    return WebHookServiceApiFp(this.configuration)
      .updateWebHook(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
