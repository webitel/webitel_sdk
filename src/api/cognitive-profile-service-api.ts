// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.12.0
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
import { StorageCognitiveProfile } from '../api'
// @ts-ignore
import { StorageCreateCognitiveProfileRequest } from '../api'
// @ts-ignore
import { StorageListCognitiveProfile } from '../api'
// @ts-ignore
import { StoragePatchCognitiveProfileRequest } from '../api'
// @ts-ignore
import { StorageUpdateCognitiveProfileRequest } from '../api'
/**
 * CognitiveProfileServiceApi - axios parameter creator
 * @export
 */
export const CognitiveProfileServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {StorageCreateCognitiveProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCognitiveProfile: async (
      body: StorageCreateCognitiveProfileRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createCognitiveProfile.'
        )
      }
      const localVarPath = `/storage/cognitive_profiles`
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
     * @summary Remove BackendProfile
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCognitiveProfile: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteCognitiveProfile.'
        )
      }
      const localVarPath = `/storage/cognitive_profiles/{id}`.replace(
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
     * @param {string} id
     * @param {StoragePatchCognitiveProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchCognitiveProfile: async (
      id: string,
      body: StoragePatchCognitiveProfileRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchCognitiveProfile.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchCognitiveProfile.'
        )
      }
      const localVarPath = `/storage/cognitive_profiles/{id}`.replace(
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
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readCognitiveProfile: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readCognitiveProfile.'
        )
      }
      const localVarPath = `/storage/cognitive_profiles/{id}`.replace(
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
     * @param {Array<string>} [id]
     * @param {Array<string>} [service]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchCognitiveProfile: async (
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<string>,
      service?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/storage/cognitive_profiles`
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

      if (service) {
        localVarQueryParameter['service'] = service
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
     * @param {string} id
     * @param {StorageUpdateCognitiveProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCognitiveProfile: async (
      id: string,
      body: StorageUpdateCognitiveProfileRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateCognitiveProfile.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateCognitiveProfile.'
        )
      }
      const localVarPath = `/storage/cognitive_profiles/{id}`.replace(
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
 * CognitiveProfileServiceApi - functional programming interface
 * @export
 */
export const CognitiveProfileServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {StorageCreateCognitiveProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCognitiveProfile(
      body: StorageCreateCognitiveProfileRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageCognitiveProfile>
    > {
      const localVarAxiosArgs = await CognitiveProfileServiceApiAxiosParamCreator(
        configuration
      ).createCognitiveProfile(body, options)
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
     * @summary Remove BackendProfile
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteCognitiveProfile(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageCognitiveProfile>
    > {
      const localVarAxiosArgs = await CognitiveProfileServiceApiAxiosParamCreator(
        configuration
      ).deleteCognitiveProfile(id, options)
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
     * @param {StoragePatchCognitiveProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchCognitiveProfile(
      id: string,
      body: StoragePatchCognitiveProfileRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageCognitiveProfile>
    > {
      const localVarAxiosArgs = await CognitiveProfileServiceApiAxiosParamCreator(
        configuration
      ).patchCognitiveProfile(id, body, options)
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readCognitiveProfile(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageCognitiveProfile>
    > {
      const localVarAxiosArgs = await CognitiveProfileServiceApiAxiosParamCreator(
        configuration
      ).readCognitiveProfile(id, options)
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
     * @param {Array<string>} [id]
     * @param {Array<string>} [service]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchCognitiveProfile(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<string>,
      service?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageListCognitiveProfile>
    > {
      const localVarAxiosArgs = await CognitiveProfileServiceApiAxiosParamCreator(
        configuration
      ).searchCognitiveProfile(
        page,
        size,
        q,
        sort,
        fields,
        id,
        service,
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
     * @param {string} id
     * @param {StorageUpdateCognitiveProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateCognitiveProfile(
      id: string,
      body: StorageUpdateCognitiveProfileRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<StorageCognitiveProfile>
    > {
      const localVarAxiosArgs = await CognitiveProfileServiceApiAxiosParamCreator(
        configuration
      ).updateCognitiveProfile(id, body, options)
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
 * CognitiveProfileServiceApi - factory interface
 * @export
 */
export const CognitiveProfileServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {StorageCreateCognitiveProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCognitiveProfile(
      body: StorageCreateCognitiveProfileRequest,
      options?: any
    ): AxiosPromise<StorageCognitiveProfile> {
      return CognitiveProfileServiceApiFp(configuration)
        .createCognitiveProfile(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Remove BackendProfile
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCognitiveProfile(
      id: string,
      options?: any
    ): AxiosPromise<StorageCognitiveProfile> {
      return CognitiveProfileServiceApiFp(configuration)
        .deleteCognitiveProfile(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} id
     * @param {StoragePatchCognitiveProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchCognitiveProfile(
      id: string,
      body: StoragePatchCognitiveProfileRequest,
      options?: any
    ): AxiosPromise<StorageCognitiveProfile> {
      return CognitiveProfileServiceApiFp(configuration)
        .patchCognitiveProfile(id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readCognitiveProfile(
      id: string,
      options?: any
    ): AxiosPromise<StorageCognitiveProfile> {
      return CognitiveProfileServiceApiFp(configuration)
        .readCognitiveProfile(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<string>} [id]
     * @param {Array<string>} [service]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchCognitiveProfile(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<string>,
      service?: Array<string>,
      options?: any
    ): AxiosPromise<StorageListCognitiveProfile> {
      return CognitiveProfileServiceApiFp(configuration)
        .searchCognitiveProfile(
          page,
          size,
          q,
          sort,
          fields,
          id,
          service,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} id
     * @param {StorageUpdateCognitiveProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCognitiveProfile(
      id: string,
      body: StorageUpdateCognitiveProfileRequest,
      options?: any
    ): AxiosPromise<StorageCognitiveProfile> {
      return CognitiveProfileServiceApiFp(configuration)
        .updateCognitiveProfile(id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * CognitiveProfileServiceApi - object-oriented interface
 * @export
 * @class CognitiveProfileServiceApi
 * @extends {BaseAPI}
 */
export class CognitiveProfileServiceApi extends BaseAPI {
  /**
   *
   * @param {StorageCreateCognitiveProfileRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CognitiveProfileServiceApi
   */
  public createCognitiveProfile(
    body: StorageCreateCognitiveProfileRequest,
    options?: any
  ) {
    return CognitiveProfileServiceApiFp(this.configuration)
      .createCognitiveProfile(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Remove BackendProfile
   * @param {string} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CognitiveProfileServiceApi
   */
  public deleteCognitiveProfile(id: string, options?: any) {
    return CognitiveProfileServiceApiFp(this.configuration)
      .deleteCognitiveProfile(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} id
   * @param {StoragePatchCognitiveProfileRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CognitiveProfileServiceApi
   */
  public patchCognitiveProfile(
    id: string,
    body: StoragePatchCognitiveProfileRequest,
    options?: any
  ) {
    return CognitiveProfileServiceApiFp(this.configuration)
      .patchCognitiveProfile(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CognitiveProfileServiceApi
   */
  public readCognitiveProfile(id: string, options?: any) {
    return CognitiveProfileServiceApiFp(this.configuration)
      .readCognitiveProfile(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<string>} [id]
   * @param {Array<string>} [service]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CognitiveProfileServiceApi
   */
  public searchCognitiveProfile(
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    id?: Array<string>,
    service?: Array<string>,
    options?: any
  ) {
    return CognitiveProfileServiceApiFp(this.configuration)
      .searchCognitiveProfile(page, size, q, sort, fields, id, service, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} id
   * @param {StorageUpdateCognitiveProfileRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CognitiveProfileServiceApi
   */
  public updateCognitiveProfile(
    id: string,
    body: StorageUpdateCognitiveProfileRequest,
    options?: any
  ) {
    return CognitiveProfileServiceApiFp(this.configuration)
      .updateCognitiveProfile(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
