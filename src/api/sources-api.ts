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
import { CasesCreateSourceRequest } from '../api'
// @ts-ignore
import { CasesInputSource } from '../api'
// @ts-ignore
import { CasesLocateSourceResponse } from '../api'
// @ts-ignore
import { CasesSource } from '../api'
// @ts-ignore
import { CasesSourceList } from '../api'
// @ts-ignore
import { GooglerpcStatus } from '../api'
/**
 * SourcesApi - axios parameter creator
 * @export
 */
export const SourcesApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create a new source
     * @param {CasesCreateSourceRequest} body Request message for creating a new source.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSource: async (
      body: CasesCreateSourceRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createSource.'
        )
      }
      const localVarPath = `/cases/sources`
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
     * @summary Delete a source
     * @param {string} id The unique ID of the source to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSource: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteSource.'
        )
      }
      const localVarPath = `/cases/sources/{id}`.replace(
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
     * @summary Retrieve a list of sources or search sources
     * @param {number} [page] Page number of result dataset records. offset &#x3D; (page*size)
     * @param {number} [size] Size count of records on result page. limit &#x3D; (size++)
     * @param {Array<string>} [fields] Fields to be retrieved as a result.
     * @param {Array<string>} [sort] Sort the result according to fields.
     * @param {Array<string>} [id] Filter by unique IDs.
     * @param {string} [q] Search query string for filtering by name. Supports: - Wildcards (*) for substring matching - Placeholder (?) for single character substitution - Exact match for full names
     * @param {Array<'TYPE_UNSPECIFIED' | 'CALL' | 'CHAT' | 'SOCIAL_MEDIA' | 'EMAIL' | 'API' | 'MANUAL'>} [type] Filter by source type.   - TYPE_UNSPECIFIED: Unspecified source type.  - CALL: Phone call source type.  - CHAT: Chat source type.  - SOCIAL_MEDIA: Social media source type.  - EMAIL: Email source type.  - API: API source type.  - MANUAL: Manual source type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSources: async (
      page?: number,
      size?: number,
      fields?: Array<string>,
      sort?: Array<string>,
      id?: Array<string>,
      q?: string,
      type?: Array<
        | 'TYPE_UNSPECIFIED'
        | 'CALL'
        | 'CHAT'
        | 'SOCIAL_MEDIA'
        | 'EMAIL'
        | 'API'
        | 'MANUAL'
      >,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/cases/sources`
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

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (sort) {
        localVarQueryParameter['sort'] = sort
      }

      if (id) {
        localVarQueryParameter['id'] = id
      }

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      if (type) {
        localVarQueryParameter['type'] = type
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
     * @summary Locate a source by ID
     * @param {string} id The unique ID of the source to locate.
     * @param {Array<string>} [fields] Fields to be retrieved into result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateSource: async (
      id: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling locateSource.'
        )
      }
      const localVarPath = `/cases/sources/{id}`.replace(
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
     * @summary Update an existing source
     * @param {string} id
     * @param {CasesInputSource} input
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSource: async (
      id: string,
      input: CasesInputSource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateSource.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateSource.'
        )
      }
      const localVarPath = `/cases/sources/{id}`.replace(
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
        typeof input !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json'
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(input !== undefined ? input : {})
        : input || ''

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Update an existing source
     * @param {string} id
     * @param {CasesInputSource} input
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSource2: async (
      id: string,
      input: CasesInputSource,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateSource2.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateSource2.'
        )
      }
      const localVarPath = `/cases/sources/{id}`.replace(
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
        typeof input !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json'
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(input !== undefined ? input : {})
        : input || ''

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * SourcesApi - functional programming interface
 * @export
 */
export const SourcesApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create a new source
     * @param {CasesCreateSourceRequest} body Request message for creating a new source.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSource(
      body: CasesCreateSourceRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CasesSource>
    > {
      const localVarAxiosArgs = await SourcesApiAxiosParamCreator(
        configuration
      ).createSource(body, options)
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
     * @summary Delete a source
     * @param {string} id The unique ID of the source to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSource(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CasesSource>
    > {
      const localVarAxiosArgs = await SourcesApiAxiosParamCreator(
        configuration
      ).deleteSource(id, options)
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
     * @summary Retrieve a list of sources or search sources
     * @param {number} [page] Page number of result dataset records. offset &#x3D; (page*size)
     * @param {number} [size] Size count of records on result page. limit &#x3D; (size++)
     * @param {Array<string>} [fields] Fields to be retrieved as a result.
     * @param {Array<string>} [sort] Sort the result according to fields.
     * @param {Array<string>} [id] Filter by unique IDs.
     * @param {string} [q] Search query string for filtering by name. Supports: - Wildcards (*) for substring matching - Placeholder (?) for single character substitution - Exact match for full names
     * @param {Array<'TYPE_UNSPECIFIED' | 'CALL' | 'CHAT' | 'SOCIAL_MEDIA' | 'EMAIL' | 'API' | 'MANUAL'>} [type] Filter by source type.   - TYPE_UNSPECIFIED: Unspecified source type.  - CALL: Phone call source type.  - CHAT: Chat source type.  - SOCIAL_MEDIA: Social media source type.  - EMAIL: Email source type.  - API: API source type.  - MANUAL: Manual source type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSources(
      page?: number,
      size?: number,
      fields?: Array<string>,
      sort?: Array<string>,
      id?: Array<string>,
      q?: string,
      type?: Array<
        | 'TYPE_UNSPECIFIED'
        | 'CALL'
        | 'CHAT'
        | 'SOCIAL_MEDIA'
        | 'EMAIL'
        | 'API'
        | 'MANUAL'
      >,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesSourceList>
    > {
      const localVarAxiosArgs = await SourcesApiAxiosParamCreator(
        configuration
      ).listSources(page, size, fields, sort, id, q, type, options)
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
     * @summary Locate a source by ID
     * @param {string} id The unique ID of the source to locate.
     * @param {Array<string>} [fields] Fields to be retrieved into result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async locateSource(
      id: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesLocateSourceResponse>
    > {
      const localVarAxiosArgs = await SourcesApiAxiosParamCreator(
        configuration
      ).locateSource(id, fields, options)
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
     * @summary Update an existing source
     * @param {string} id
     * @param {CasesInputSource} input
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSource(
      id: string,
      input: CasesInputSource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CasesSource>
    > {
      const localVarAxiosArgs = await SourcesApiAxiosParamCreator(
        configuration
      ).updateSource(id, input, options)
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
     * @summary Update an existing source
     * @param {string} id
     * @param {CasesInputSource} input
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSource2(
      id: string,
      input: CasesInputSource,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CasesSource>
    > {
      const localVarAxiosArgs = await SourcesApiAxiosParamCreator(
        configuration
      ).updateSource2(id, input, options)
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
 * SourcesApi - factory interface
 * @export
 */
export const SourcesApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create a new source
     * @param {CasesCreateSourceRequest} body Request message for creating a new source.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSource(
      body: CasesCreateSourceRequest,
      options?: any
    ): AxiosPromise<CasesSource> {
      return SourcesApiFp(configuration)
        .createSource(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Delete a source
     * @param {string} id The unique ID of the source to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSource(id: string, options?: any): AxiosPromise<CasesSource> {
      return SourcesApiFp(configuration)
        .deleteSource(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Retrieve a list of sources or search sources
     * @param {number} [page] Page number of result dataset records. offset &#x3D; (page*size)
     * @param {number} [size] Size count of records on result page. limit &#x3D; (size++)
     * @param {Array<string>} [fields] Fields to be retrieved as a result.
     * @param {Array<string>} [sort] Sort the result according to fields.
     * @param {Array<string>} [id] Filter by unique IDs.
     * @param {string} [q] Search query string for filtering by name. Supports: - Wildcards (*) for substring matching - Placeholder (?) for single character substitution - Exact match for full names
     * @param {Array<'TYPE_UNSPECIFIED' | 'CALL' | 'CHAT' | 'SOCIAL_MEDIA' | 'EMAIL' | 'API' | 'MANUAL'>} [type] Filter by source type.   - TYPE_UNSPECIFIED: Unspecified source type.  - CALL: Phone call source type.  - CHAT: Chat source type.  - SOCIAL_MEDIA: Social media source type.  - EMAIL: Email source type.  - API: API source type.  - MANUAL: Manual source type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSources(
      page?: number,
      size?: number,
      fields?: Array<string>,
      sort?: Array<string>,
      id?: Array<string>,
      q?: string,
      type?: Array<
        | 'TYPE_UNSPECIFIED'
        | 'CALL'
        | 'CHAT'
        | 'SOCIAL_MEDIA'
        | 'EMAIL'
        | 'API'
        | 'MANUAL'
      >,
      options?: any
    ): AxiosPromise<CasesSourceList> {
      return SourcesApiFp(configuration)
        .listSources(page, size, fields, sort, id, q, type, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Locate a source by ID
     * @param {string} id The unique ID of the source to locate.
     * @param {Array<string>} [fields] Fields to be retrieved into result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateSource(
      id: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesLocateSourceResponse> {
      return SourcesApiFp(configuration)
        .locateSource(id, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update an existing source
     * @param {string} id
     * @param {CasesInputSource} input
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSource(
      id: string,
      input: CasesInputSource,
      options?: any
    ): AxiosPromise<CasesSource> {
      return SourcesApiFp(configuration)
        .updateSource(id, input, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update an existing source
     * @param {string} id
     * @param {CasesInputSource} input
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSource2(
      id: string,
      input: CasesInputSource,
      options?: any
    ): AxiosPromise<CasesSource> {
      return SourcesApiFp(configuration)
        .updateSource2(id, input, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * SourcesApi - object-oriented interface
 * @export
 * @class SourcesApi
 * @extends {BaseAPI}
 */
export class SourcesApi extends BaseAPI {
  /**
   *
   * @summary Create a new source
   * @param {CasesCreateSourceRequest} body Request message for creating a new source.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SourcesApi
   */
  public createSource(body: CasesCreateSourceRequest, options?: any) {
    return SourcesApiFp(this.configuration)
      .createSource(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Delete a source
   * @param {string} id The unique ID of the source to delete.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SourcesApi
   */
  public deleteSource(id: string, options?: any) {
    return SourcesApiFp(this.configuration)
      .deleteSource(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Retrieve a list of sources or search sources
   * @param {number} [page] Page number of result dataset records. offset &#x3D; (page*size)
   * @param {number} [size] Size count of records on result page. limit &#x3D; (size++)
   * @param {Array<string>} [fields] Fields to be retrieved as a result.
   * @param {Array<string>} [sort] Sort the result according to fields.
   * @param {Array<string>} [id] Filter by unique IDs.
   * @param {string} [q] Search query string for filtering by name. Supports: - Wildcards (*) for substring matching - Placeholder (?) for single character substitution - Exact match for full names
   * @param {Array<'TYPE_UNSPECIFIED' | 'CALL' | 'CHAT' | 'SOCIAL_MEDIA' | 'EMAIL' | 'API' | 'MANUAL'>} [type] Filter by source type.   - TYPE_UNSPECIFIED: Unspecified source type.  - CALL: Phone call source type.  - CHAT: Chat source type.  - SOCIAL_MEDIA: Social media source type.  - EMAIL: Email source type.  - API: API source type.  - MANUAL: Manual source type.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SourcesApi
   */
  public listSources(
    page?: number,
    size?: number,
    fields?: Array<string>,
    sort?: Array<string>,
    id?: Array<string>,
    q?: string,
    type?: Array<
      | 'TYPE_UNSPECIFIED'
      | 'CALL'
      | 'CHAT'
      | 'SOCIAL_MEDIA'
      | 'EMAIL'
      | 'API'
      | 'MANUAL'
    >,
    options?: any
  ) {
    return SourcesApiFp(this.configuration)
      .listSources(page, size, fields, sort, id, q, type, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Locate a source by ID
   * @param {string} id The unique ID of the source to locate.
   * @param {Array<string>} [fields] Fields to be retrieved into result.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SourcesApi
   */
  public locateSource(id: string, fields?: Array<string>, options?: any) {
    return SourcesApiFp(this.configuration)
      .locateSource(id, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update an existing source
   * @param {string} id
   * @param {CasesInputSource} input
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SourcesApi
   */
  public updateSource(id: string, input: CasesInputSource, options?: any) {
    return SourcesApiFp(this.configuration)
      .updateSource(id, input, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update an existing source
   * @param {string} id
   * @param {CasesInputSource} input
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SourcesApi
   */
  public updateSource2(id: string, input: CasesInputSource, options?: any) {
    return SourcesApiFp(this.configuration)
      .updateSource2(id, input, options)
      .then((request) => request(this.axios, this.basePath))
  }
}