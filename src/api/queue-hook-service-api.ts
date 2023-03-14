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
import { EngineCreateQueueHookRequest } from '../api'
// @ts-ignore
import { EngineListQueueHook } from '../api'
// @ts-ignore
import { EnginePatchQueueHookRequest } from '../api'
// @ts-ignore
import { EngineQueueHook } from '../api'
// @ts-ignore
import { EngineUpdateQueueHookRequest } from '../api'
// @ts-ignore
import { RuntimeError } from '../api'
/**
 * QueueHookServiceApi - axios parameter creator
 * @export
 */
export const QueueHookServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {number} queueId
     * @param {EngineCreateQueueHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createQueueHook: async (
      queueId: number,
      body: EngineCreateQueueHookRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'queueId' is not null or undefined
      if (queueId === null || queueId === undefined) {
        throw new RequiredError(
          'queueId',
          'Required parameter queueId was null or undefined when calling createQueueHook.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createQueueHook.'
        )
      }
      const localVarPath = `/call_center/queues/{queue_id}/hooks`.replace(
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
     * @param {number} queueId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteQueueHook: async (
      queueId: number,
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'queueId' is not null or undefined
      if (queueId === null || queueId === undefined) {
        throw new RequiredError(
          'queueId',
          'Required parameter queueId was null or undefined when calling deleteQueueHook.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteQueueHook.'
        )
      }
      const localVarPath = `/call_center/queues/{queue_id}/hooks/{id}`
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
     * @param {number} queueId
     * @param {number} id
     * @param {EnginePatchQueueHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchQueueHook: async (
      queueId: number,
      id: number,
      body: EnginePatchQueueHookRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'queueId' is not null or undefined
      if (queueId === null || queueId === undefined) {
        throw new RequiredError(
          'queueId',
          'Required parameter queueId was null or undefined when calling patchQueueHook.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchQueueHook.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchQueueHook.'
        )
      }
      const localVarPath = `/call_center/queues/{queue_id}/hooks/{id}`
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
     * @param {number} queueId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readQueueHook: async (
      queueId: number,
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'queueId' is not null or undefined
      if (queueId === null || queueId === undefined) {
        throw new RequiredError(
          'queueId',
          'Required parameter queueId was null or undefined when calling readQueueHook.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readQueueHook.'
        )
      }
      const localVarPath = `/call_center/queues/{queue_id}/hooks/{id}`
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
     * @param {number} queueId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {Array<number>} [schemaId]
     * @param {Array<string>} [event]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchQueueHook: async (
      queueId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      schemaId?: Array<number>,
      event?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'queueId' is not null or undefined
      if (queueId === null || queueId === undefined) {
        throw new RequiredError(
          'queueId',
          'Required parameter queueId was null or undefined when calling searchQueueHook.'
        )
      }
      const localVarPath = `/call_center/queues/{queue_id}/hooks`.replace(
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

      if (schemaId) {
        localVarQueryParameter['schema_id'] = schemaId
      }

      if (event) {
        localVarQueryParameter['event'] = event
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
     * @param {number} queueId
     * @param {number} id
     * @param {EngineUpdateQueueHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateQueueHook: async (
      queueId: number,
      id: number,
      body: EngineUpdateQueueHookRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'queueId' is not null or undefined
      if (queueId === null || queueId === undefined) {
        throw new RequiredError(
          'queueId',
          'Required parameter queueId was null or undefined when calling updateQueueHook.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateQueueHook.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateQueueHook.'
        )
      }
      const localVarPath = `/call_center/queues/{queue_id}/hooks/{id}`
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
 * QueueHookServiceApi - functional programming interface
 * @export
 */
export const QueueHookServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {number} queueId
     * @param {EngineCreateQueueHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createQueueHook(
      queueId: number,
      body: EngineCreateQueueHookRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineQueueHook>
    > {
      const localVarAxiosArgs = await QueueHookServiceApiAxiosParamCreator(
        configuration
      ).createQueueHook(queueId, body, options)
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
     * @param {number} queueId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteQueueHook(
      queueId: number,
      id: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineQueueHook>
    > {
      const localVarAxiosArgs = await QueueHookServiceApiAxiosParamCreator(
        configuration
      ).deleteQueueHook(queueId, id, options)
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
     * @param {number} queueId
     * @param {number} id
     * @param {EnginePatchQueueHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchQueueHook(
      queueId: number,
      id: number,
      body: EnginePatchQueueHookRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineQueueHook>
    > {
      const localVarAxiosArgs = await QueueHookServiceApiAxiosParamCreator(
        configuration
      ).patchQueueHook(queueId, id, body, options)
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
     * @param {number} queueId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readQueueHook(
      queueId: number,
      id: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineQueueHook>
    > {
      const localVarAxiosArgs = await QueueHookServiceApiAxiosParamCreator(
        configuration
      ).readQueueHook(queueId, id, options)
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
     * @param {number} queueId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {Array<number>} [schemaId]
     * @param {Array<string>} [event]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchQueueHook(
      queueId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      schemaId?: Array<number>,
      event?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListQueueHook>
    > {
      const localVarAxiosArgs = await QueueHookServiceApiAxiosParamCreator(
        configuration
      ).searchQueueHook(
        queueId,
        page,
        size,
        q,
        sort,
        fields,
        id,
        schemaId,
        event,
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
     * @param {number} queueId
     * @param {number} id
     * @param {EngineUpdateQueueHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateQueueHook(
      queueId: number,
      id: number,
      body: EngineUpdateQueueHookRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineQueueHook>
    > {
      const localVarAxiosArgs = await QueueHookServiceApiAxiosParamCreator(
        configuration
      ).updateQueueHook(queueId, id, body, options)
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
 * QueueHookServiceApi - factory interface
 * @export
 */
export const QueueHookServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {number} queueId
     * @param {EngineCreateQueueHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createQueueHook(
      queueId: number,
      body: EngineCreateQueueHookRequest,
      options?: any
    ): AxiosPromise<EngineQueueHook> {
      return QueueHookServiceApiFp(configuration)
        .createQueueHook(queueId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} queueId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteQueueHook(
      queueId: number,
      id: number,
      options?: any
    ): AxiosPromise<EngineQueueHook> {
      return QueueHookServiceApiFp(configuration)
        .deleteQueueHook(queueId, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} queueId
     * @param {number} id
     * @param {EnginePatchQueueHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchQueueHook(
      queueId: number,
      id: number,
      body: EnginePatchQueueHookRequest,
      options?: any
    ): AxiosPromise<EngineQueueHook> {
      return QueueHookServiceApiFp(configuration)
        .patchQueueHook(queueId, id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} queueId
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readQueueHook(
      queueId: number,
      id: number,
      options?: any
    ): AxiosPromise<EngineQueueHook> {
      return QueueHookServiceApiFp(configuration)
        .readQueueHook(queueId, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} queueId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {Array<number>} [schemaId]
     * @param {Array<string>} [event]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchQueueHook(
      queueId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      schemaId?: Array<number>,
      event?: Array<string>,
      options?: any
    ): AxiosPromise<EngineListQueueHook> {
      return QueueHookServiceApiFp(configuration)
        .searchQueueHook(
          queueId,
          page,
          size,
          q,
          sort,
          fields,
          id,
          schemaId,
          event,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} queueId
     * @param {number} id
     * @param {EngineUpdateQueueHookRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateQueueHook(
      queueId: number,
      id: number,
      body: EngineUpdateQueueHookRequest,
      options?: any
    ): AxiosPromise<EngineQueueHook> {
      return QueueHookServiceApiFp(configuration)
        .updateQueueHook(queueId, id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * QueueHookServiceApi - object-oriented interface
 * @export
 * @class QueueHookServiceApi
 * @extends {BaseAPI}
 */
export class QueueHookServiceApi extends BaseAPI {
  /**
   *
   * @param {number} queueId
   * @param {EngineCreateQueueHookRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueHookServiceApi
   */
  public createQueueHook(
    queueId: number,
    body: EngineCreateQueueHookRequest,
    options?: any
  ) {
    return QueueHookServiceApiFp(this.configuration)
      .createQueueHook(queueId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} queueId
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueHookServiceApi
   */
  public deleteQueueHook(queueId: number, id: number, options?: any) {
    return QueueHookServiceApiFp(this.configuration)
      .deleteQueueHook(queueId, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} queueId
   * @param {number} id
   * @param {EnginePatchQueueHookRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueHookServiceApi
   */
  public patchQueueHook(
    queueId: number,
    id: number,
    body: EnginePatchQueueHookRequest,
    options?: any
  ) {
    return QueueHookServiceApiFp(this.configuration)
      .patchQueueHook(queueId, id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} queueId
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueHookServiceApi
   */
  public readQueueHook(queueId: number, id: number, options?: any) {
    return QueueHookServiceApiFp(this.configuration)
      .readQueueHook(queueId, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} queueId
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<number>} [id]
   * @param {Array<number>} [schemaId]
   * @param {Array<string>} [event]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueHookServiceApi
   */
  public searchQueueHook(
    queueId: number,
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    id?: Array<number>,
    schemaId?: Array<number>,
    event?: Array<string>,
    options?: any
  ) {
    return QueueHookServiceApiFp(this.configuration)
      .searchQueueHook(
        queueId,
        page,
        size,
        q,
        sort,
        fields,
        id,
        schemaId,
        event,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} queueId
   * @param {number} id
   * @param {EngineUpdateQueueHookRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueHookServiceApi
   */
  public updateQueueHook(
    queueId: number,
    id: number,
    body: EngineUpdateQueueHookRequest,
    options?: any
  ) {
    return QueueHookServiceApiFp(this.configuration)
      .updateQueueHook(queueId, id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
