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
import { EngineCreateQueueRequest } from '../api'
// @ts-ignore
import { EngineListQueue } from '../api'
// @ts-ignore
import { EngineListReportGeneral } from '../api'
// @ts-ignore
import { EnginePatchQueueRequest } from '../api'
// @ts-ignore
import { EngineQueue } from '../api'
// @ts-ignore
import { EngineUpdateQueueRequest } from '../api'
/**
 * QueueServiceApi - axios parameter creator
 * @export
 */
export const QueueServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create Queue
     * @param {EngineCreateQueueRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createQueue: async (
      body: EngineCreateQueueRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createQueue.'
        )
      }
      const localVarPath = `/call_center/queues`
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
     * @summary Remove Queue
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteQueue: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteQueue.'
        )
      }
      const localVarPath = `/call_center/queues/{id}`.replace(
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
     * @summary Patch Queue
     * @param {string} id
     * @param {EnginePatchQueueRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchQueue: async (
      id: string,
      body: EnginePatchQueueRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchQueue.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchQueue.'
        )
      }
      const localVarPath = `/call_center/queues/{id}`.replace(
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
     * @summary Queue item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readQueue: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readQueue.'
        )
      }
      const localVarPath = `/call_center/queues/{id}`.replace(
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
     * @summary List of Queue
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {Array<string>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchQueue: async (
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      fields?: Array<string>,
      sort?: string,
      id?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/call_center/queues`
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

      if (domainId !== undefined) {
        localVarQueryParameter['domain_id'] = domainId
      }

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
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
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [joinedAtFrom]
     * @param {string} [joinedAtTo]
     * @param {string} [domainId]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {string} [q]
     * @param {Array<number>} [queueId]
     * @param {Array<number>} [teamId]
     * @param {Array<number>} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchQueueReportGeneral: async (
      page?: number,
      size?: number,
      joinedAtFrom?: string,
      joinedAtTo?: string,
      domainId?: string,
      fields?: Array<string>,
      sort?: string,
      q?: string,
      queueId?: Array<number>,
      teamId?: Array<number>,
      type?: Array<number>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/call_center/queues/reports/general`
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

      if (joinedAtFrom !== undefined) {
        localVarQueryParameter['joined_at.from'] = joinedAtFrom
      }

      if (joinedAtTo !== undefined) {
        localVarQueryParameter['joined_at.to'] = joinedAtTo
      }

      if (domainId !== undefined) {
        localVarQueryParameter['domain_id'] = domainId
      }

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      if (queueId) {
        localVarQueryParameter['queue_id'] = queueId
      }

      if (teamId) {
        localVarQueryParameter['team_id'] = teamId
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
     * @summary Update Queue
     * @param {string} id
     * @param {EngineUpdateQueueRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateQueue: async (
      id: string,
      body: EngineUpdateQueueRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateQueue.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateQueue.'
        )
      }
      const localVarPath = `/call_center/queues/{id}`.replace(
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
 * QueueServiceApi - functional programming interface
 * @export
 */
export const QueueServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create Queue
     * @param {EngineCreateQueueRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createQueue(
      body: EngineCreateQueueRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineQueue>
    > {
      const localVarAxiosArgs = await QueueServiceApiAxiosParamCreator(
        configuration
      ).createQueue(body, options)
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
     * @summary Remove Queue
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteQueue(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineQueue>
    > {
      const localVarAxiosArgs = await QueueServiceApiAxiosParamCreator(
        configuration
      ).deleteQueue(id, domainId, options)
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
     * @summary Patch Queue
     * @param {string} id
     * @param {EnginePatchQueueRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchQueue(
      id: string,
      body: EnginePatchQueueRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineQueue>
    > {
      const localVarAxiosArgs = await QueueServiceApiAxiosParamCreator(
        configuration
      ).patchQueue(id, body, options)
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
     * @summary Queue item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readQueue(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineQueue>
    > {
      const localVarAxiosArgs = await QueueServiceApiAxiosParamCreator(
        configuration
      ).readQueue(id, domainId, options)
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
     * @summary List of Queue
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {Array<string>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchQueue(
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      fields?: Array<string>,
      sort?: string,
      id?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListQueue>
    > {
      const localVarAxiosArgs = await QueueServiceApiAxiosParamCreator(
        configuration
      ).searchQueue(page, size, q, domainId, fields, sort, id, options)
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
     * @param {string} [joinedAtFrom]
     * @param {string} [joinedAtTo]
     * @param {string} [domainId]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {string} [q]
     * @param {Array<number>} [queueId]
     * @param {Array<number>} [teamId]
     * @param {Array<number>} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchQueueReportGeneral(
      page?: number,
      size?: number,
      joinedAtFrom?: string,
      joinedAtTo?: string,
      domainId?: string,
      fields?: Array<string>,
      sort?: string,
      q?: string,
      queueId?: Array<number>,
      teamId?: Array<number>,
      type?: Array<number>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListReportGeneral>
    > {
      const localVarAxiosArgs = await QueueServiceApiAxiosParamCreator(
        configuration
      ).searchQueueReportGeneral(
        page,
        size,
        joinedAtFrom,
        joinedAtTo,
        domainId,
        fields,
        sort,
        q,
        queueId,
        teamId,
        type,
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
     * @summary Update Queue
     * @param {string} id
     * @param {EngineUpdateQueueRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateQueue(
      id: string,
      body: EngineUpdateQueueRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineQueue>
    > {
      const localVarAxiosArgs = await QueueServiceApiAxiosParamCreator(
        configuration
      ).updateQueue(id, body, options)
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
 * QueueServiceApi - factory interface
 * @export
 */
export const QueueServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create Queue
     * @param {EngineCreateQueueRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createQueue(
      body: EngineCreateQueueRequest,
      options?: any
    ): AxiosPromise<EngineQueue> {
      return QueueServiceApiFp(configuration)
        .createQueue(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Remove Queue
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteQueue(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineQueue> {
      return QueueServiceApiFp(configuration)
        .deleteQueue(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Patch Queue
     * @param {string} id
     * @param {EnginePatchQueueRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchQueue(
      id: string,
      body: EnginePatchQueueRequest,
      options?: any
    ): AxiosPromise<EngineQueue> {
      return QueueServiceApiFp(configuration)
        .patchQueue(id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Queue item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readQueue(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineQueue> {
      return QueueServiceApiFp(configuration)
        .readQueue(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary List of Queue
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {Array<string>} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchQueue(
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      fields?: Array<string>,
      sort?: string,
      id?: Array<string>,
      options?: any
    ): AxiosPromise<EngineListQueue> {
      return QueueServiceApiFp(configuration)
        .searchQueue(page, size, q, domainId, fields, sort, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [joinedAtFrom]
     * @param {string} [joinedAtTo]
     * @param {string} [domainId]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {string} [q]
     * @param {Array<number>} [queueId]
     * @param {Array<number>} [teamId]
     * @param {Array<number>} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchQueueReportGeneral(
      page?: number,
      size?: number,
      joinedAtFrom?: string,
      joinedAtTo?: string,
      domainId?: string,
      fields?: Array<string>,
      sort?: string,
      q?: string,
      queueId?: Array<number>,
      teamId?: Array<number>,
      type?: Array<number>,
      options?: any
    ): AxiosPromise<EngineListReportGeneral> {
      return QueueServiceApiFp(configuration)
        .searchQueueReportGeneral(
          page,
          size,
          joinedAtFrom,
          joinedAtTo,
          domainId,
          fields,
          sort,
          q,
          queueId,
          teamId,
          type,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update Queue
     * @param {string} id
     * @param {EngineUpdateQueueRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateQueue(
      id: string,
      body: EngineUpdateQueueRequest,
      options?: any
    ): AxiosPromise<EngineQueue> {
      return QueueServiceApiFp(configuration)
        .updateQueue(id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * QueueServiceApi - object-oriented interface
 * @export
 * @class QueueServiceApi
 * @extends {BaseAPI}
 */
export class QueueServiceApi extends BaseAPI {
  /**
   *
   * @summary Create Queue
   * @param {EngineCreateQueueRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueServiceApi
   */
  public createQueue(body: EngineCreateQueueRequest, options?: any) {
    return QueueServiceApiFp(this.configuration)
      .createQueue(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Remove Queue
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueServiceApi
   */
  public deleteQueue(id: string, domainId?: string, options?: any) {
    return QueueServiceApiFp(this.configuration)
      .deleteQueue(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Patch Queue
   * @param {string} id
   * @param {EnginePatchQueueRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueServiceApi
   */
  public patchQueue(id: string, body: EnginePatchQueueRequest, options?: any) {
    return QueueServiceApiFp(this.configuration)
      .patchQueue(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Queue item
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueServiceApi
   */
  public readQueue(id: string, domainId?: string, options?: any) {
    return QueueServiceApiFp(this.configuration)
      .readQueue(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary List of Queue
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [domainId]
   * @param {Array<string>} [fields]
   * @param {string} [sort]
   * @param {Array<string>} [id]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueServiceApi
   */
  public searchQueue(
    page?: number,
    size?: number,
    q?: string,
    domainId?: string,
    fields?: Array<string>,
    sort?: string,
    id?: Array<string>,
    options?: any
  ) {
    return QueueServiceApiFp(this.configuration)
      .searchQueue(page, size, q, domainId, fields, sort, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [joinedAtFrom]
   * @param {string} [joinedAtTo]
   * @param {string} [domainId]
   * @param {Array<string>} [fields]
   * @param {string} [sort]
   * @param {string} [q]
   * @param {Array<number>} [queueId]
   * @param {Array<number>} [teamId]
   * @param {Array<number>} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueServiceApi
   */
  public searchQueueReportGeneral(
    page?: number,
    size?: number,
    joinedAtFrom?: string,
    joinedAtTo?: string,
    domainId?: string,
    fields?: Array<string>,
    sort?: string,
    q?: string,
    queueId?: Array<number>,
    teamId?: Array<number>,
    type?: Array<number>,
    options?: any
  ) {
    return QueueServiceApiFp(this.configuration)
      .searchQueueReportGeneral(
        page,
        size,
        joinedAtFrom,
        joinedAtTo,
        domainId,
        fields,
        sort,
        q,
        queueId,
        teamId,
        type,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update Queue
   * @param {string} id
   * @param {EngineUpdateQueueRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueServiceApi
   */
  public updateQueue(
    id: string,
    body: EngineUpdateQueueRequest,
    options?: any
  ) {
    return QueueServiceApiFp(this.configuration)
      .updateQueue(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
