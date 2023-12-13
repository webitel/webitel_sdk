// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.09.0
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
import { EngineCommunicationType } from '../api'
// @ts-ignore
import { EngineCommunicationTypeRequest } from '../api'
// @ts-ignore
import { EngineListCommunicationType } from '../api'
// @ts-ignore
import { EnginePatchCommunicationTypeRequest } from '../api'
// @ts-ignore
import { EngineUpdateCommunicationTypeRequest } from '../api'
// @ts-ignore
import { RuntimeError } from '../api'
/**
 * CommunicationTypeServiceApi - axios parameter creator
 * @export
 */
export const CommunicationTypeServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create CommunicationType
     * @param {EngineCommunicationTypeRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCommunicationType: async (
      body: EngineCommunicationTypeRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createCommunicationType.'
        )
      }
      const localVarPath = `/call_center/communication_type`
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
     * @summary Remove CommunicationType
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCommunicationType: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteCommunicationType.'
        )
      }
      const localVarPath = `/call_center/communication_type/{id}`.replace(
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
     * @param {string} id
     * @param {EnginePatchCommunicationTypeRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchCommunicationType: async (
      id: string,
      body: EnginePatchCommunicationTypeRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchCommunicationType.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchCommunicationType.'
        )
      }
      const localVarPath = `/call_center/communication_type/{id}`.replace(
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
     * @summary CommunicationType item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readCommunicationType: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readCommunicationType.'
        )
      }
      const localVarPath = `/call_center/communication_type/{id}`.replace(
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
     * @summary List of CommunicationType
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {Array<'Undefined' | 'Phone' | 'Email' | 'Messaging'>} [channel]
     * @param {boolean} [_default]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchCommunicationType: async (
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      channel?: Array<'Undefined' | 'Phone' | 'Email' | 'Messaging'>,
      _default?: boolean,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/call_center/communication_type`
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

      if (channel) {
        localVarQueryParameter['channel'] = channel
      }

      if (_default !== undefined) {
        localVarQueryParameter['default'] = _default
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
     * @summary Update CommunicationType
     * @param {string} id
     * @param {EngineUpdateCommunicationTypeRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCommunicationType: async (
      id: string,
      body: EngineUpdateCommunicationTypeRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateCommunicationType.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateCommunicationType.'
        )
      }
      const localVarPath = `/call_center/communication_type/{id}`.replace(
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
 * CommunicationTypeServiceApi - functional programming interface
 * @export
 */
export const CommunicationTypeServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create CommunicationType
     * @param {EngineCommunicationTypeRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCommunicationType(
      body: EngineCommunicationTypeRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineCommunicationType>
    > {
      const localVarAxiosArgs = await CommunicationTypeServiceApiAxiosParamCreator(
        configuration
      ).createCommunicationType(body, options)
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
     * @summary Remove CommunicationType
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteCommunicationType(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineCommunicationType>
    > {
      const localVarAxiosArgs = await CommunicationTypeServiceApiAxiosParamCreator(
        configuration
      ).deleteCommunicationType(id, domainId, options)
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
     * @param {EnginePatchCommunicationTypeRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchCommunicationType(
      id: string,
      body: EnginePatchCommunicationTypeRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineCommunicationType>
    > {
      const localVarAxiosArgs = await CommunicationTypeServiceApiAxiosParamCreator(
        configuration
      ).patchCommunicationType(id, body, options)
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
     * @summary CommunicationType item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readCommunicationType(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineCommunicationType>
    > {
      const localVarAxiosArgs = await CommunicationTypeServiceApiAxiosParamCreator(
        configuration
      ).readCommunicationType(id, domainId, options)
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
     * @summary List of CommunicationType
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {Array<'Undefined' | 'Phone' | 'Email' | 'Messaging'>} [channel]
     * @param {boolean} [_default]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchCommunicationType(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      channel?: Array<'Undefined' | 'Phone' | 'Email' | 'Messaging'>,
      _default?: boolean,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListCommunicationType>
    > {
      const localVarAxiosArgs = await CommunicationTypeServiceApiAxiosParamCreator(
        configuration
      ).searchCommunicationType(
        page,
        size,
        q,
        sort,
        fields,
        id,
        channel,
        _default,
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
     * @summary Update CommunicationType
     * @param {string} id
     * @param {EngineUpdateCommunicationTypeRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateCommunicationType(
      id: string,
      body: EngineUpdateCommunicationTypeRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineCommunicationType>
    > {
      const localVarAxiosArgs = await CommunicationTypeServiceApiAxiosParamCreator(
        configuration
      ).updateCommunicationType(id, body, options)
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
 * CommunicationTypeServiceApi - factory interface
 * @export
 */
export const CommunicationTypeServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create CommunicationType
     * @param {EngineCommunicationTypeRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCommunicationType(
      body: EngineCommunicationTypeRequest,
      options?: any
    ): AxiosPromise<EngineCommunicationType> {
      return CommunicationTypeServiceApiFp(configuration)
        .createCommunicationType(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Remove CommunicationType
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCommunicationType(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineCommunicationType> {
      return CommunicationTypeServiceApiFp(configuration)
        .deleteCommunicationType(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} id
     * @param {EnginePatchCommunicationTypeRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchCommunicationType(
      id: string,
      body: EnginePatchCommunicationTypeRequest,
      options?: any
    ): AxiosPromise<EngineCommunicationType> {
      return CommunicationTypeServiceApiFp(configuration)
        .patchCommunicationType(id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary CommunicationType item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readCommunicationType(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineCommunicationType> {
      return CommunicationTypeServiceApiFp(configuration)
        .readCommunicationType(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary List of CommunicationType
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {Array<'Undefined' | 'Phone' | 'Email' | 'Messaging'>} [channel]
     * @param {boolean} [_default]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchCommunicationType(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      channel?: Array<'Undefined' | 'Phone' | 'Email' | 'Messaging'>,
      _default?: boolean,
      options?: any
    ): AxiosPromise<EngineListCommunicationType> {
      return CommunicationTypeServiceApiFp(configuration)
        .searchCommunicationType(
          page,
          size,
          q,
          sort,
          fields,
          id,
          channel,
          _default,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update CommunicationType
     * @param {string} id
     * @param {EngineUpdateCommunicationTypeRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCommunicationType(
      id: string,
      body: EngineUpdateCommunicationTypeRequest,
      options?: any
    ): AxiosPromise<EngineCommunicationType> {
      return CommunicationTypeServiceApiFp(configuration)
        .updateCommunicationType(id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * CommunicationTypeServiceApi - object-oriented interface
 * @export
 * @class CommunicationTypeServiceApi
 * @extends {BaseAPI}
 */
export class CommunicationTypeServiceApi extends BaseAPI {
  /**
   *
   * @summary Create CommunicationType
   * @param {EngineCommunicationTypeRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunicationTypeServiceApi
   */
  public createCommunicationType(
    body: EngineCommunicationTypeRequest,
    options?: any
  ) {
    return CommunicationTypeServiceApiFp(this.configuration)
      .createCommunicationType(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Remove CommunicationType
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunicationTypeServiceApi
   */
  public deleteCommunicationType(id: string, domainId?: string, options?: any) {
    return CommunicationTypeServiceApiFp(this.configuration)
      .deleteCommunicationType(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} id
   * @param {EnginePatchCommunicationTypeRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunicationTypeServiceApi
   */
  public patchCommunicationType(
    id: string,
    body: EnginePatchCommunicationTypeRequest,
    options?: any
  ) {
    return CommunicationTypeServiceApiFp(this.configuration)
      .patchCommunicationType(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary CommunicationType item
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunicationTypeServiceApi
   */
  public readCommunicationType(id: string, domainId?: string, options?: any) {
    return CommunicationTypeServiceApiFp(this.configuration)
      .readCommunicationType(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary List of CommunicationType
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<number>} [id]
   * @param {Array<'Undefined' | 'Phone' | 'Email' | 'Messaging'>} [channel]
   * @param {boolean} [_default]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunicationTypeServiceApi
   */
  public searchCommunicationType(
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    id?: Array<number>,
    channel?: Array<'Undefined' | 'Phone' | 'Email' | 'Messaging'>,
    _default?: boolean,
    options?: any
  ) {
    return CommunicationTypeServiceApiFp(this.configuration)
      .searchCommunicationType(
        page,
        size,
        q,
        sort,
        fields,
        id,
        channel,
        _default,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update CommunicationType
   * @param {string} id
   * @param {EngineUpdateCommunicationTypeRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommunicationTypeServiceApi
   */
  public updateCommunicationType(
    id: string,
    body: EngineUpdateCommunicationTypeRequest,
    options?: any
  ) {
    return CommunicationTypeServiceApiFp(this.configuration)
      .updateCommunicationType(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
