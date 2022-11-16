// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 22.05.0
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
import { EngineCreateTriggerJobRequest } from '../api'
// @ts-ignore
import { EngineCreateTriggerRequest } from '../api'
// @ts-ignore
import { EngineListTrigger } from '../api'
// @ts-ignore
import { EngineListTriggerJob } from '../api'
// @ts-ignore
import { EnginePatchTriggerRequest } from '../api'
// @ts-ignore
import { EngineTrigger } from '../api'
// @ts-ignore
import { EngineTriggerJob } from '../api'
// @ts-ignore
import { EngineUpdateTriggerRequest } from '../api'
// @ts-ignore
import { RuntimeError } from '../api'
/**
 * TriggerServiceApi - axios parameter creator
 * @export
 */
export const TriggerServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create Trigger
     * @param {EngineCreateTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTrigger: async (
      body: EngineCreateTriggerRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createTrigger.'
        )
      }
      const localVarPath = `/trigger`
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
     * @param {number} triggerId
     * @param {EngineCreateTriggerJobRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTriggerJob: async (
      triggerId: number,
      body: EngineCreateTriggerJobRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'triggerId' is not null or undefined
      if (triggerId === null || triggerId === undefined) {
        throw new RequiredError(
          'triggerId',
          'Required parameter triggerId was null or undefined when calling createTriggerJob.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createTriggerJob.'
        )
      }
      const localVarPath = `/trigger/{trigger_id}/job`.replace(
        `{${'trigger_id'}}`,
        encodeURIComponent(String(triggerId))
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
     * @summary Remove Trigger
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTrigger: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteTrigger.'
        )
      }
      const localVarPath = `/trigger/{id}`.replace(
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
     * @param {EnginePatchTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchTrigger: async (
      id: number,
      body: EnginePatchTriggerRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchTrigger.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchTrigger.'
        )
      }
      const localVarPath = `/trigger/{id}`.replace(
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
     * @summary Trigger item
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readTrigger: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readTrigger.'
        )
      }
      const localVarPath = `/trigger/{id}`.replace(
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
     * @summary List of Trigger
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {Array<number>} [schemaId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchTrigger: async (
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      schemaId?: Array<number>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/trigger`
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
     * @param {number} triggerId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {string} [createdAtFrom]
     * @param {string} [createdAtTo]
     * @param {string} [startedAtFrom]
     * @param {string} [startedAtTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchTriggerJob: async (
      triggerId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      createdAtFrom?: string,
      createdAtTo?: string,
      startedAtFrom?: string,
      startedAtTo?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'triggerId' is not null or undefined
      if (triggerId === null || triggerId === undefined) {
        throw new RequiredError(
          'triggerId',
          'Required parameter triggerId was null or undefined when calling searchTriggerJob.'
        )
      }
      const localVarPath = `/trigger/{trigger_id}/job`.replace(
        `{${'trigger_id'}}`,
        encodeURIComponent(String(triggerId))
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

      if (createdAtFrom !== undefined) {
        localVarQueryParameter['created_at.from'] = createdAtFrom
      }

      if (createdAtTo !== undefined) {
        localVarQueryParameter['created_at.to'] = createdAtTo
      }

      if (startedAtFrom !== undefined) {
        localVarQueryParameter['started_at.from'] = startedAtFrom
      }

      if (startedAtTo !== undefined) {
        localVarQueryParameter['started_at.to'] = startedAtTo
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
     * @summary Update Trigger
     * @param {number} id
     * @param {EngineUpdateTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTrigger: async (
      id: number,
      body: EngineUpdateTriggerRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateTrigger.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateTrigger.'
        )
      }
      const localVarPath = `/trigger/{id}`.replace(
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
 * TriggerServiceApi - functional programming interface
 * @export
 */
export const TriggerServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create Trigger
     * @param {EngineCreateTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTrigger(
      body: EngineCreateTriggerRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineTrigger>
    > {
      const localVarAxiosArgs = await TriggerServiceApiAxiosParamCreator(
        configuration
      ).createTrigger(body, options)
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
     * @param {number} triggerId
     * @param {EngineCreateTriggerJobRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTriggerJob(
      triggerId: number,
      body: EngineCreateTriggerJobRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineTriggerJob>
    > {
      const localVarAxiosArgs = await TriggerServiceApiAxiosParamCreator(
        configuration
      ).createTriggerJob(triggerId, body, options)
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
     * @summary Remove Trigger
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteTrigger(
      id: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineTrigger>
    > {
      const localVarAxiosArgs = await TriggerServiceApiAxiosParamCreator(
        configuration
      ).deleteTrigger(id, options)
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
     * @param {EnginePatchTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchTrigger(
      id: number,
      body: EnginePatchTriggerRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineTrigger>
    > {
      const localVarAxiosArgs = await TriggerServiceApiAxiosParamCreator(
        configuration
      ).patchTrigger(id, body, options)
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
     * @summary Trigger item
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readTrigger(
      id: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineTrigger>
    > {
      const localVarAxiosArgs = await TriggerServiceApiAxiosParamCreator(
        configuration
      ).readTrigger(id, options)
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
     * @summary List of Trigger
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {Array<number>} [schemaId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchTrigger(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      schemaId?: Array<number>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListTrigger>
    > {
      const localVarAxiosArgs = await TriggerServiceApiAxiosParamCreator(
        configuration
      ).searchTrigger(page, size, q, sort, fields, id, schemaId, options)
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
     * @param {number} triggerId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {string} [createdAtFrom]
     * @param {string} [createdAtTo]
     * @param {string} [startedAtFrom]
     * @param {string} [startedAtTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchTriggerJob(
      triggerId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      createdAtFrom?: string,
      createdAtTo?: string,
      startedAtFrom?: string,
      startedAtTo?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListTriggerJob>
    > {
      const localVarAxiosArgs = await TriggerServiceApiAxiosParamCreator(
        configuration
      ).searchTriggerJob(
        triggerId,
        page,
        size,
        q,
        sort,
        fields,
        createdAtFrom,
        createdAtTo,
        startedAtFrom,
        startedAtTo,
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
     * @summary Update Trigger
     * @param {number} id
     * @param {EngineUpdateTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateTrigger(
      id: number,
      body: EngineUpdateTriggerRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineTrigger>
    > {
      const localVarAxiosArgs = await TriggerServiceApiAxiosParamCreator(
        configuration
      ).updateTrigger(id, body, options)
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
 * TriggerServiceApi - factory interface
 * @export
 */
export const TriggerServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create Trigger
     * @param {EngineCreateTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTrigger(
      body: EngineCreateTriggerRequest,
      options?: any
    ): AxiosPromise<EngineTrigger> {
      return TriggerServiceApiFp(configuration)
        .createTrigger(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} triggerId
     * @param {EngineCreateTriggerJobRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTriggerJob(
      triggerId: number,
      body: EngineCreateTriggerJobRequest,
      options?: any
    ): AxiosPromise<EngineTriggerJob> {
      return TriggerServiceApiFp(configuration)
        .createTriggerJob(triggerId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Remove Trigger
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTrigger(id: number, options?: any): AxiosPromise<EngineTrigger> {
      return TriggerServiceApiFp(configuration)
        .deleteTrigger(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {EnginePatchTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchTrigger(
      id: number,
      body: EnginePatchTriggerRequest,
      options?: any
    ): AxiosPromise<EngineTrigger> {
      return TriggerServiceApiFp(configuration)
        .patchTrigger(id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Trigger item
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readTrigger(id: number, options?: any): AxiosPromise<EngineTrigger> {
      return TriggerServiceApiFp(configuration)
        .readTrigger(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary List of Trigger
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {Array<number>} [schemaId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchTrigger(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      schemaId?: Array<number>,
      options?: any
    ): AxiosPromise<EngineListTrigger> {
      return TriggerServiceApiFp(configuration)
        .searchTrigger(page, size, q, sort, fields, id, schemaId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} triggerId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {string} [createdAtFrom]
     * @param {string} [createdAtTo]
     * @param {string} [startedAtFrom]
     * @param {string} [startedAtTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchTriggerJob(
      triggerId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      createdAtFrom?: string,
      createdAtTo?: string,
      startedAtFrom?: string,
      startedAtTo?: string,
      options?: any
    ): AxiosPromise<EngineListTriggerJob> {
      return TriggerServiceApiFp(configuration)
        .searchTriggerJob(
          triggerId,
          page,
          size,
          q,
          sort,
          fields,
          createdAtFrom,
          createdAtTo,
          startedAtFrom,
          startedAtTo,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update Trigger
     * @param {number} id
     * @param {EngineUpdateTriggerRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTrigger(
      id: number,
      body: EngineUpdateTriggerRequest,
      options?: any
    ): AxiosPromise<EngineTrigger> {
      return TriggerServiceApiFp(configuration)
        .updateTrigger(id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * TriggerServiceApi - object-oriented interface
 * @export
 * @class TriggerServiceApi
 * @extends {BaseAPI}
 */
export class TriggerServiceApi extends BaseAPI {
  /**
   *
   * @summary Create Trigger
   * @param {EngineCreateTriggerRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TriggerServiceApi
   */
  public createTrigger(body: EngineCreateTriggerRequest, options?: any) {
    return TriggerServiceApiFp(this.configuration)
      .createTrigger(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} triggerId
   * @param {EngineCreateTriggerJobRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TriggerServiceApi
   */
  public createTriggerJob(
    triggerId: number,
    body: EngineCreateTriggerJobRequest,
    options?: any
  ) {
    return TriggerServiceApiFp(this.configuration)
      .createTriggerJob(triggerId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Remove Trigger
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TriggerServiceApi
   */
  public deleteTrigger(id: number, options?: any) {
    return TriggerServiceApiFp(this.configuration)
      .deleteTrigger(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {EnginePatchTriggerRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TriggerServiceApi
   */
  public patchTrigger(
    id: number,
    body: EnginePatchTriggerRequest,
    options?: any
  ) {
    return TriggerServiceApiFp(this.configuration)
      .patchTrigger(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Trigger item
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TriggerServiceApi
   */
  public readTrigger(id: number, options?: any) {
    return TriggerServiceApiFp(this.configuration)
      .readTrigger(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary List of Trigger
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<number>} [id]
   * @param {Array<number>} [schemaId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TriggerServiceApi
   */
  public searchTrigger(
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    id?: Array<number>,
    schemaId?: Array<number>,
    options?: any
  ) {
    return TriggerServiceApiFp(this.configuration)
      .searchTrigger(page, size, q, sort, fields, id, schemaId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} triggerId
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {string} [createdAtFrom]
   * @param {string} [createdAtTo]
   * @param {string} [startedAtFrom]
   * @param {string} [startedAtTo]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TriggerServiceApi
   */
  public searchTriggerJob(
    triggerId: number,
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    createdAtFrom?: string,
    createdAtTo?: string,
    startedAtFrom?: string,
    startedAtTo?: string,
    options?: any
  ) {
    return TriggerServiceApiFp(this.configuration)
      .searchTriggerJob(
        triggerId,
        page,
        size,
        q,
        sort,
        fields,
        createdAtFrom,
        createdAtTo,
        startedAtFrom,
        startedAtTo,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update Trigger
   * @param {number} id
   * @param {EngineUpdateTriggerRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TriggerServiceApi
   */
  public updateTrigger(
    id: number,
    body: EngineUpdateTriggerRequest,
    options?: any
  ) {
    return TriggerServiceApiFp(this.configuration)
      .updateTrigger(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
