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
import { RuntimeError } from '../api'
// @ts-ignore
import { StorageCreateImportTemplateRequest } from '../api'
// @ts-ignore
import { StorageImportTemplate } from '../api'
// @ts-ignore
import { StorageListImportTemplate } from '../api'
// @ts-ignore
import { StoragePatchImportTemplateRequest } from '../api'
// @ts-ignore
import { StorageUpdateImportTemplateRequest } from '../api'
/**
 * ImportTemplateServiceApi - axios parameter creator
 * @export
 */
export const ImportTemplateServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {StorageCreateImportTemplateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createImportTemplate: async (
      body: StorageCreateImportTemplateRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createImportTemplate.'
        )
      }
      const localVarPath = `/storage/import_templates`
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
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteImportTemplate: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteImportTemplate.'
        )
      }
      const localVarPath = `/storage/import_templates/{id}`.replace(
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
     * @param {number} id
     * @param {StoragePatchImportTemplateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchImportTemplate: async (
      id: number,
      body: StoragePatchImportTemplateRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchImportTemplate.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchImportTemplate.'
        )
      }
      const localVarPath = `/storage/import_templates/{id}`.replace(
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
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readImportTemplate: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readImportTemplate.'
        )
      }
      const localVarPath = `/storage/import_templates/{id}`.replace(
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
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchImportTemplate: async (
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/storage/import_templates`
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
     * @param {number} id
     * @param {StorageUpdateImportTemplateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateImportTemplate: async (
      id: number,
      body: StorageUpdateImportTemplateRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateImportTemplate.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateImportTemplate.'
        )
      }
      const localVarPath = `/storage/import_templates/{id}`.replace(
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
 * ImportTemplateServiceApi - functional programming interface
 * @export
 */
export const ImportTemplateServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {StorageCreateImportTemplateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createImportTemplate(
      body: StorageCreateImportTemplateRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageImportTemplate>
    > {
      const localVarAxiosArgs = await ImportTemplateServiceApiAxiosParamCreator(
        configuration
      ).createImportTemplate(body, options)
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
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteImportTemplate(
      id: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageImportTemplate>
    > {
      const localVarAxiosArgs = await ImportTemplateServiceApiAxiosParamCreator(
        configuration
      ).deleteImportTemplate(id, options)
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
     * @param {number} id
     * @param {StoragePatchImportTemplateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchImportTemplate(
      id: number,
      body: StoragePatchImportTemplateRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageImportTemplate>
    > {
      const localVarAxiosArgs = await ImportTemplateServiceApiAxiosParamCreator(
        configuration
      ).patchImportTemplate(id, body, options)
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
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readImportTemplate(
      id: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageImportTemplate>
    > {
      const localVarAxiosArgs = await ImportTemplateServiceApiAxiosParamCreator(
        configuration
      ).readImportTemplate(id, options)
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
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchImportTemplate(
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
      ) => AxiosPromise<StorageListImportTemplate>
    > {
      const localVarAxiosArgs = await ImportTemplateServiceApiAxiosParamCreator(
        configuration
      ).searchImportTemplate(page, size, q, sort, fields, id, options)
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
     * @param {number} id
     * @param {StorageUpdateImportTemplateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateImportTemplate(
      id: number,
      body: StorageUpdateImportTemplateRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageImportTemplate>
    > {
      const localVarAxiosArgs = await ImportTemplateServiceApiAxiosParamCreator(
        configuration
      ).updateImportTemplate(id, body, options)
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
 * ImportTemplateServiceApi - factory interface
 * @export
 */
export const ImportTemplateServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {StorageCreateImportTemplateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createImportTemplate(
      body: StorageCreateImportTemplateRequest,
      options?: any
    ): AxiosPromise<StorageImportTemplate> {
      return ImportTemplateServiceApiFp(configuration)
        .createImportTemplate(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteImportTemplate(
      id: number,
      options?: any
    ): AxiosPromise<StorageImportTemplate> {
      return ImportTemplateServiceApiFp(configuration)
        .deleteImportTemplate(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {StoragePatchImportTemplateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchImportTemplate(
      id: number,
      body: StoragePatchImportTemplateRequest,
      options?: any
    ): AxiosPromise<StorageImportTemplate> {
      return ImportTemplateServiceApiFp(configuration)
        .patchImportTemplate(id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readImportTemplate(
      id: number,
      options?: any
    ): AxiosPromise<StorageImportTemplate> {
      return ImportTemplateServiceApiFp(configuration)
        .readImportTemplate(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchImportTemplate(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options?: any
    ): AxiosPromise<StorageListImportTemplate> {
      return ImportTemplateServiceApiFp(configuration)
        .searchImportTemplate(page, size, q, sort, fields, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {StorageUpdateImportTemplateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateImportTemplate(
      id: number,
      body: StorageUpdateImportTemplateRequest,
      options?: any
    ): AxiosPromise<StorageImportTemplate> {
      return ImportTemplateServiceApiFp(configuration)
        .updateImportTemplate(id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ImportTemplateServiceApi - object-oriented interface
 * @export
 * @class ImportTemplateServiceApi
 * @extends {BaseAPI}
 */
export class ImportTemplateServiceApi extends BaseAPI {
  /**
   *
   * @param {StorageCreateImportTemplateRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ImportTemplateServiceApi
   */
  public createImportTemplate(
    body: StorageCreateImportTemplateRequest,
    options?: any
  ) {
    return ImportTemplateServiceApiFp(this.configuration)
      .createImportTemplate(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ImportTemplateServiceApi
   */
  public deleteImportTemplate(id: number, options?: any) {
    return ImportTemplateServiceApiFp(this.configuration)
      .deleteImportTemplate(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {StoragePatchImportTemplateRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ImportTemplateServiceApi
   */
  public patchImportTemplate(
    id: number,
    body: StoragePatchImportTemplateRequest,
    options?: any
  ) {
    return ImportTemplateServiceApiFp(this.configuration)
      .patchImportTemplate(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ImportTemplateServiceApi
   */
  public readImportTemplate(id: number, options?: any) {
    return ImportTemplateServiceApiFp(this.configuration)
      .readImportTemplate(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<number>} [id]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ImportTemplateServiceApi
   */
  public searchImportTemplate(
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    id?: Array<number>,
    options?: any
  ) {
    return ImportTemplateServiceApiFp(this.configuration)
      .searchImportTemplate(page, size, q, sort, fields, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {StorageUpdateImportTemplateRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ImportTemplateServiceApi
   */
  public updateImportTemplate(
    id: number,
    body: StorageUpdateImportTemplateRequest,
    options?: any
  ) {
    return ImportTemplateServiceApiFp(this.configuration)
      .updateImportTemplate(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
