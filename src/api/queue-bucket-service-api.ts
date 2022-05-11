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
import { EngineCreateQueueBucketRequest } from '../api'
// @ts-ignore
import { EngineListQueueBucket } from '../api'
// @ts-ignore
import { EnginePatchQueueBucketRequest } from '../api'
// @ts-ignore
import { EngineQueueBucket } from '../api'
// @ts-ignore
import { EngineUpdateQueueBucketRequest } from '../api'
// @ts-ignore
import { RuntimeError } from '../api'
/**
 * QueueBucketServiceApi - axios parameter creator
 * @export
 */
export const QueueBucketServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create QueueBucket
     * @param {string} queueId
     * @param {EngineCreateQueueBucketRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queueBucketServiceCreateQueueBucket: async (
      queueId: string,
      body: EngineCreateQueueBucketRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'queueId' is not null or undefined
      if (queueId === null || queueId === undefined) {
        throw new RequiredError(
          'queueId',
          'Required parameter queueId was null or undefined when calling queueBucketServiceCreateQueueBucket.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling queueBucketServiceCreateQueueBucket.'
        )
      }
      const localVarPath = `/call_center/queues/{queue_id}/buckets`.replace(
        `{${'queue_id'}}`,
        encodeURIComponent(String(queueId))
      )
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
     * @summary DeleteQueueRouting
     * @param {string} queueId
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queueBucketServiceDeleteQueueBucket: async (
      queueId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'queueId' is not null or undefined
      if (queueId === null || queueId === undefined) {
        throw new RequiredError(
          'queueId',
          'Required parameter queueId was null or undefined when calling queueBucketServiceDeleteQueueBucket.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling queueBucketServiceDeleteQueueBucket.'
        )
      }
      const localVarPath = `/call_center/queues/{queue_id}/buckets/{id}`
        .replace(`{${'queue_id'}}`, encodeURIComponent(String(queueId)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * @param {string} queueId
     * @param {string} id
     * @param {EnginePatchQueueBucketRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queueBucketServicePatchQueueBucket: async (
      queueId: string,
      id: string,
      body: EnginePatchQueueBucketRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'queueId' is not null or undefined
      if (queueId === null || queueId === undefined) {
        throw new RequiredError(
          'queueId',
          'Required parameter queueId was null or undefined when calling queueBucketServicePatchQueueBucket.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling queueBucketServicePatchQueueBucket.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling queueBucketServicePatchQueueBucket.'
        )
      }
      const localVarPath = `/call_center/queues/{queue_id}/buckets/{id}`
        .replace(`{${'queue_id'}}`, encodeURIComponent(String(queueId)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * @summary ReadQueueRouting
     * @param {string} queueId
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queueBucketServiceReadQueueBucket: async (
      queueId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'queueId' is not null or undefined
      if (queueId === null || queueId === undefined) {
        throw new RequiredError(
          'queueId',
          'Required parameter queueId was null or undefined when calling queueBucketServiceReadQueueBucket.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling queueBucketServiceReadQueueBucket.'
        )
      }
      const localVarPath = `/call_center/queues/{queue_id}/buckets/{id}`
        .replace(`{${'queue_id'}}`, encodeURIComponent(String(queueId)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * @summary SearchQueueRouting
     * @param {string} queueId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queueBucketServiceSearchQueueBucket: async (
      queueId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'queueId' is not null or undefined
      if (queueId === null || queueId === undefined) {
        throw new RequiredError(
          'queueId',
          'Required parameter queueId was null or undefined when calling queueBucketServiceSearchQueueBucket.'
        )
      }
      const localVarPath = `/call_center/queues/{queue_id}/buckets`.replace(
        `{${'queue_id'}}`,
        encodeURIComponent(String(queueId))
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
     * @summary UpdateQueueBucket
     * @param {string} queueId
     * @param {string} id
     * @param {EngineUpdateQueueBucketRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queueBucketServiceUpdateQueueBucket: async (
      queueId: string,
      id: string,
      body: EngineUpdateQueueBucketRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'queueId' is not null or undefined
      if (queueId === null || queueId === undefined) {
        throw new RequiredError(
          'queueId',
          'Required parameter queueId was null or undefined when calling queueBucketServiceUpdateQueueBucket.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling queueBucketServiceUpdateQueueBucket.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling queueBucketServiceUpdateQueueBucket.'
        )
      }
      const localVarPath = `/call_center/queues/{queue_id}/buckets/{id}`
        .replace(`{${'queue_id'}}`, encodeURIComponent(String(queueId)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
 * QueueBucketServiceApi - functional programming interface
 * @export
 */
export const QueueBucketServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create QueueBucket
     * @param {string} queueId
     * @param {EngineCreateQueueBucketRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queueBucketServiceCreateQueueBucket(
      queueId: string,
      body: EngineCreateQueueBucketRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineQueueBucket>
    > {
      const localVarAxiosArgs = await QueueBucketServiceApiAxiosParamCreator(
        configuration
      ).queueBucketServiceCreateQueueBucket(queueId, body, options)
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
     * @summary DeleteQueueRouting
     * @param {string} queueId
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queueBucketServiceDeleteQueueBucket(
      queueId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineQueueBucket>
    > {
      const localVarAxiosArgs = await QueueBucketServiceApiAxiosParamCreator(
        configuration
      ).queueBucketServiceDeleteQueueBucket(queueId, id, options)
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
     * @param {string} queueId
     * @param {string} id
     * @param {EnginePatchQueueBucketRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queueBucketServicePatchQueueBucket(
      queueId: string,
      id: string,
      body: EnginePatchQueueBucketRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineQueueBucket>
    > {
      const localVarAxiosArgs = await QueueBucketServiceApiAxiosParamCreator(
        configuration
      ).queueBucketServicePatchQueueBucket(queueId, id, body, options)
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
     * @summary ReadQueueRouting
     * @param {string} queueId
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queueBucketServiceReadQueueBucket(
      queueId: string,
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineQueueBucket>
    > {
      const localVarAxiosArgs = await QueueBucketServiceApiAxiosParamCreator(
        configuration
      ).queueBucketServiceReadQueueBucket(queueId, id, options)
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
     * @summary SearchQueueRouting
     * @param {string} queueId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queueBucketServiceSearchQueueBucket(
      queueId: string,
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
      ) => AxiosPromise<EngineListQueueBucket>
    > {
      const localVarAxiosArgs = await QueueBucketServiceApiAxiosParamCreator(
        configuration
      ).queueBucketServiceSearchQueueBucket(
        queueId,
        page,
        size,
        q,
        sort,
        fields,
        id,
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
     * @summary UpdateQueueBucket
     * @param {string} queueId
     * @param {string} id
     * @param {EngineUpdateQueueBucketRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queueBucketServiceUpdateQueueBucket(
      queueId: string,
      id: string,
      body: EngineUpdateQueueBucketRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineQueueBucket>
    > {
      const localVarAxiosArgs = await QueueBucketServiceApiAxiosParamCreator(
        configuration
      ).queueBucketServiceUpdateQueueBucket(queueId, id, body, options)
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
 * QueueBucketServiceApi - factory interface
 * @export
 */
export const QueueBucketServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create QueueBucket
     * @param {string} queueId
     * @param {EngineCreateQueueBucketRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queueBucketServiceCreateQueueBucket(
      queueId: string,
      body: EngineCreateQueueBucketRequest,
      options?: any
    ): AxiosPromise<EngineQueueBucket> {
      return QueueBucketServiceApiFp(configuration)
        .queueBucketServiceCreateQueueBucket(queueId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary DeleteQueueRouting
     * @param {string} queueId
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queueBucketServiceDeleteQueueBucket(
      queueId: string,
      id: string,
      options?: any
    ): AxiosPromise<EngineQueueBucket> {
      return QueueBucketServiceApiFp(configuration)
        .queueBucketServiceDeleteQueueBucket(queueId, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} queueId
     * @param {string} id
     * @param {EnginePatchQueueBucketRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queueBucketServicePatchQueueBucket(
      queueId: string,
      id: string,
      body: EnginePatchQueueBucketRequest,
      options?: any
    ): AxiosPromise<EngineQueueBucket> {
      return QueueBucketServiceApiFp(configuration)
        .queueBucketServicePatchQueueBucket(queueId, id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary ReadQueueRouting
     * @param {string} queueId
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queueBucketServiceReadQueueBucket(
      queueId: string,
      id: string,
      options?: any
    ): AxiosPromise<EngineQueueBucket> {
      return QueueBucketServiceApiFp(configuration)
        .queueBucketServiceReadQueueBucket(queueId, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary SearchQueueRouting
     * @param {string} queueId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queueBucketServiceSearchQueueBucket(
      queueId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      options?: any
    ): AxiosPromise<EngineListQueueBucket> {
      return QueueBucketServiceApiFp(configuration)
        .queueBucketServiceSearchQueueBucket(
          queueId,
          page,
          size,
          q,
          sort,
          fields,
          id,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary UpdateQueueBucket
     * @param {string} queueId
     * @param {string} id
     * @param {EngineUpdateQueueBucketRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queueBucketServiceUpdateQueueBucket(
      queueId: string,
      id: string,
      body: EngineUpdateQueueBucketRequest,
      options?: any
    ): AxiosPromise<EngineQueueBucket> {
      return QueueBucketServiceApiFp(configuration)
        .queueBucketServiceUpdateQueueBucket(queueId, id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * QueueBucketServiceApi - object-oriented interface
 * @export
 * @class QueueBucketServiceApi
 * @extends {BaseAPI}
 */
export class QueueBucketServiceApi extends BaseAPI {
  /**
   *
   * @summary Create QueueBucket
   * @param {string} queueId
   * @param {EngineCreateQueueBucketRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueBucketServiceApi
   */
  public queueBucketServiceCreateQueueBucket(
    queueId: string,
    body: EngineCreateQueueBucketRequest,
    options?: any
  ) {
    return QueueBucketServiceApiFp(this.configuration)
      .queueBucketServiceCreateQueueBucket(queueId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary DeleteQueueRouting
   * @param {string} queueId
   * @param {string} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueBucketServiceApi
   */
  public queueBucketServiceDeleteQueueBucket(
    queueId: string,
    id: string,
    options?: any
  ) {
    return QueueBucketServiceApiFp(this.configuration)
      .queueBucketServiceDeleteQueueBucket(queueId, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} queueId
   * @param {string} id
   * @param {EnginePatchQueueBucketRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueBucketServiceApi
   */
  public queueBucketServicePatchQueueBucket(
    queueId: string,
    id: string,
    body: EnginePatchQueueBucketRequest,
    options?: any
  ) {
    return QueueBucketServiceApiFp(this.configuration)
      .queueBucketServicePatchQueueBucket(queueId, id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary ReadQueueRouting
   * @param {string} queueId
   * @param {string} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueBucketServiceApi
   */
  public queueBucketServiceReadQueueBucket(
    queueId: string,
    id: string,
    options?: any
  ) {
    return QueueBucketServiceApiFp(this.configuration)
      .queueBucketServiceReadQueueBucket(queueId, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary SearchQueueRouting
   * @param {string} queueId
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<number>} [id]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueBucketServiceApi
   */
  public queueBucketServiceSearchQueueBucket(
    queueId: string,
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    id?: Array<number>,
    options?: any
  ) {
    return QueueBucketServiceApiFp(this.configuration)
      .queueBucketServiceSearchQueueBucket(
        queueId,
        page,
        size,
        q,
        sort,
        fields,
        id,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary UpdateQueueBucket
   * @param {string} queueId
   * @param {string} id
   * @param {EngineUpdateQueueBucketRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueBucketServiceApi
   */
  public queueBucketServiceUpdateQueueBucket(
    queueId: string,
    id: string,
    body: EngineUpdateQueueBucketRequest,
    options?: any
  ) {
    return QueueBucketServiceApiFp(this.configuration)
      .queueBucketServiceUpdateQueueBucket(queueId, id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
