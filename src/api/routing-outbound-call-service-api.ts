// tslint:disable
/**
 * Webitel API
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
import { EngineCreateRoutingOutboundCallRequest } from '../api'
// @ts-ignore
import { EngineListRoutingOutboundCall } from '../api'
// @ts-ignore
import { EngineMovePositionRoutingOutboundCallRequest } from '../api'
// @ts-ignore
import { EngineMovePositionRoutingOutboundCallResponse } from '../api'
// @ts-ignore
import { EnginePatchRoutingOutboundCallRequest } from '../api'
// @ts-ignore
import { EngineRoutingOutboundCall } from '../api'
// @ts-ignore
import { EngineUpdateRoutingOutboundCallRequest } from '../api'
// @ts-ignore
import { RuntimeError } from '../api'
/**
 * RoutingOutboundCallServiceApi - axios parameter creator
 * @export
 */
export const RoutingOutboundCallServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create RoutingOutboundCall
     * @param {EngineCreateRoutingOutboundCallRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRoutingOutboundCall: async (
      body: EngineCreateRoutingOutboundCallRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createRoutingOutboundCall.'
        )
      }
      const localVarPath = `/routing/outbound/calls`
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
     * @summary Remove RoutingOutboundCall
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRoutingOutboundCall: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteRoutingOutboundCall.'
        )
      }
      const localVarPath = `/routing/outbound/calls/{id}`.replace(
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
     * @summary Move RoutingOutboundCall
     * @param {string} fromId
     * @param {string} toId
     * @param {EngineMovePositionRoutingOutboundCallRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    movePositionRoutingOutboundCall: async (
      fromId: string,
      toId: string,
      body: EngineMovePositionRoutingOutboundCallRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'fromId' is not null or undefined
      if (fromId === null || fromId === undefined) {
        throw new RequiredError(
          'fromId',
          'Required parameter fromId was null or undefined when calling movePositionRoutingOutboundCall.'
        )
      }
      // verify required parameter 'toId' is not null or undefined
      if (toId === null || toId === undefined) {
        throw new RequiredError(
          'toId',
          'Required parameter toId was null or undefined when calling movePositionRoutingOutboundCall.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling movePositionRoutingOutboundCall.'
        )
      }
      const localVarPath = `/routing/outbound/calls/{from_id}/to/{to_id}`
        .replace(`{${'from_id'}}`, encodeURIComponent(String(fromId)))
        .replace(`{${'to_id'}}`, encodeURIComponent(String(toId)))
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
     * @summary Patch RoutingOutboundCall
     * @param {string} id
     * @param {EnginePatchRoutingOutboundCallRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchRoutingOutboundCall: async (
      id: string,
      body: EnginePatchRoutingOutboundCallRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchRoutingOutboundCall.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchRoutingOutboundCall.'
        )
      }
      const localVarPath = `/routing/outbound/calls/{id}`.replace(
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
     * @summary RoutingOutboundCall item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readRoutingOutboundCall: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readRoutingOutboundCall.'
        )
      }
      const localVarPath = `/routing/outbound/calls/{id}`.replace(
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
     * @summary List of RoutingOutboundCall
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {string} [name]
     * @param {Array<number>} [schemaId]
     * @param {string} [pattern]
     * @param {string} [description]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchRoutingOutboundCall: async (
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      name?: string,
      schemaId?: Array<number>,
      pattern?: string,
      description?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/routing/outbound/calls`
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

      if (name !== undefined) {
        localVarQueryParameter['name'] = name
      }

      if (schemaId) {
        localVarQueryParameter['schema_id'] = schemaId
      }

      if (pattern !== undefined) {
        localVarQueryParameter['pattern'] = pattern
      }

      if (description !== undefined) {
        localVarQueryParameter['description'] = description
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
     * @summary Update RoutingOutboundCall
     * @param {string} id
     * @param {EngineUpdateRoutingOutboundCallRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRoutingOutboundCall: async (
      id: string,
      body: EngineUpdateRoutingOutboundCallRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateRoutingOutboundCall.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateRoutingOutboundCall.'
        )
      }
      const localVarPath = `/routing/outbound/calls/{id}`.replace(
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
 * RoutingOutboundCallServiceApi - functional programming interface
 * @export
 */
export const RoutingOutboundCallServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create RoutingOutboundCall
     * @param {EngineCreateRoutingOutboundCallRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRoutingOutboundCall(
      body: EngineCreateRoutingOutboundCallRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineRoutingOutboundCall>
    > {
      const localVarAxiosArgs = await RoutingOutboundCallServiceApiAxiosParamCreator(
        configuration
      ).createRoutingOutboundCall(body, options)
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
     * @summary Remove RoutingOutboundCall
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteRoutingOutboundCall(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineRoutingOutboundCall>
    > {
      const localVarAxiosArgs = await RoutingOutboundCallServiceApiAxiosParamCreator(
        configuration
      ).deleteRoutingOutboundCall(id, domainId, options)
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
     * @summary Move RoutingOutboundCall
     * @param {string} fromId
     * @param {string} toId
     * @param {EngineMovePositionRoutingOutboundCallRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async movePositionRoutingOutboundCall(
      fromId: string,
      toId: string,
      body: EngineMovePositionRoutingOutboundCallRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineMovePositionRoutingOutboundCallResponse>
    > {
      const localVarAxiosArgs = await RoutingOutboundCallServiceApiAxiosParamCreator(
        configuration
      ).movePositionRoutingOutboundCall(fromId, toId, body, options)
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
     * @summary Patch RoutingOutboundCall
     * @param {string} id
     * @param {EnginePatchRoutingOutboundCallRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchRoutingOutboundCall(
      id: string,
      body: EnginePatchRoutingOutboundCallRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineRoutingOutboundCall>
    > {
      const localVarAxiosArgs = await RoutingOutboundCallServiceApiAxiosParamCreator(
        configuration
      ).patchRoutingOutboundCall(id, body, options)
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
     * @summary RoutingOutboundCall item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readRoutingOutboundCall(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineRoutingOutboundCall>
    > {
      const localVarAxiosArgs = await RoutingOutboundCallServiceApiAxiosParamCreator(
        configuration
      ).readRoutingOutboundCall(id, domainId, options)
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
     * @summary List of RoutingOutboundCall
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {string} [name]
     * @param {Array<number>} [schemaId]
     * @param {string} [pattern]
     * @param {string} [description]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchRoutingOutboundCall(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      name?: string,
      schemaId?: Array<number>,
      pattern?: string,
      description?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListRoutingOutboundCall>
    > {
      const localVarAxiosArgs = await RoutingOutboundCallServiceApiAxiosParamCreator(
        configuration
      ).searchRoutingOutboundCall(
        page,
        size,
        q,
        sort,
        fields,
        id,
        name,
        schemaId,
        pattern,
        description,
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
     * @summary Update RoutingOutboundCall
     * @param {string} id
     * @param {EngineUpdateRoutingOutboundCallRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateRoutingOutboundCall(
      id: string,
      body: EngineUpdateRoutingOutboundCallRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineRoutingOutboundCall>
    > {
      const localVarAxiosArgs = await RoutingOutboundCallServiceApiAxiosParamCreator(
        configuration
      ).updateRoutingOutboundCall(id, body, options)
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
 * RoutingOutboundCallServiceApi - factory interface
 * @export
 */
export const RoutingOutboundCallServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create RoutingOutboundCall
     * @param {EngineCreateRoutingOutboundCallRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRoutingOutboundCall(
      body: EngineCreateRoutingOutboundCallRequest,
      options?: any
    ): AxiosPromise<EngineRoutingOutboundCall> {
      return RoutingOutboundCallServiceApiFp(configuration)
        .createRoutingOutboundCall(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Remove RoutingOutboundCall
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRoutingOutboundCall(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineRoutingOutboundCall> {
      return RoutingOutboundCallServiceApiFp(configuration)
        .deleteRoutingOutboundCall(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Move RoutingOutboundCall
     * @param {string} fromId
     * @param {string} toId
     * @param {EngineMovePositionRoutingOutboundCallRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    movePositionRoutingOutboundCall(
      fromId: string,
      toId: string,
      body: EngineMovePositionRoutingOutboundCallRequest,
      options?: any
    ): AxiosPromise<EngineMovePositionRoutingOutboundCallResponse> {
      return RoutingOutboundCallServiceApiFp(configuration)
        .movePositionRoutingOutboundCall(fromId, toId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Patch RoutingOutboundCall
     * @param {string} id
     * @param {EnginePatchRoutingOutboundCallRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchRoutingOutboundCall(
      id: string,
      body: EnginePatchRoutingOutboundCallRequest,
      options?: any
    ): AxiosPromise<EngineRoutingOutboundCall> {
      return RoutingOutboundCallServiceApiFp(configuration)
        .patchRoutingOutboundCall(id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary RoutingOutboundCall item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readRoutingOutboundCall(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineRoutingOutboundCall> {
      return RoutingOutboundCallServiceApiFp(configuration)
        .readRoutingOutboundCall(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary List of RoutingOutboundCall
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<number>} [id]
     * @param {string} [name]
     * @param {Array<number>} [schemaId]
     * @param {string} [pattern]
     * @param {string} [description]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchRoutingOutboundCall(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      id?: Array<number>,
      name?: string,
      schemaId?: Array<number>,
      pattern?: string,
      description?: string,
      options?: any
    ): AxiosPromise<EngineListRoutingOutboundCall> {
      return RoutingOutboundCallServiceApiFp(configuration)
        .searchRoutingOutboundCall(
          page,
          size,
          q,
          sort,
          fields,
          id,
          name,
          schemaId,
          pattern,
          description,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update RoutingOutboundCall
     * @param {string} id
     * @param {EngineUpdateRoutingOutboundCallRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRoutingOutboundCall(
      id: string,
      body: EngineUpdateRoutingOutboundCallRequest,
      options?: any
    ): AxiosPromise<EngineRoutingOutboundCall> {
      return RoutingOutboundCallServiceApiFp(configuration)
        .updateRoutingOutboundCall(id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * RoutingOutboundCallServiceApi - object-oriented interface
 * @export
 * @class RoutingOutboundCallServiceApi
 * @extends {BaseAPI}
 */
export class RoutingOutboundCallServiceApi extends BaseAPI {
  /**
   *
   * @summary Create RoutingOutboundCall
   * @param {EngineCreateRoutingOutboundCallRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoutingOutboundCallServiceApi
   */
  public createRoutingOutboundCall(
    body: EngineCreateRoutingOutboundCallRequest,
    options?: any
  ) {
    return RoutingOutboundCallServiceApiFp(this.configuration)
      .createRoutingOutboundCall(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Remove RoutingOutboundCall
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoutingOutboundCallServiceApi
   */
  public deleteRoutingOutboundCall(
    id: string,
    domainId?: string,
    options?: any
  ) {
    return RoutingOutboundCallServiceApiFp(this.configuration)
      .deleteRoutingOutboundCall(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Move RoutingOutboundCall
   * @param {string} fromId
   * @param {string} toId
   * @param {EngineMovePositionRoutingOutboundCallRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoutingOutboundCallServiceApi
   */
  public movePositionRoutingOutboundCall(
    fromId: string,
    toId: string,
    body: EngineMovePositionRoutingOutboundCallRequest,
    options?: any
  ) {
    return RoutingOutboundCallServiceApiFp(this.configuration)
      .movePositionRoutingOutboundCall(fromId, toId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Patch RoutingOutboundCall
   * @param {string} id
   * @param {EnginePatchRoutingOutboundCallRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoutingOutboundCallServiceApi
   */
  public patchRoutingOutboundCall(
    id: string,
    body: EnginePatchRoutingOutboundCallRequest,
    options?: any
  ) {
    return RoutingOutboundCallServiceApiFp(this.configuration)
      .patchRoutingOutboundCall(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary RoutingOutboundCall item
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoutingOutboundCallServiceApi
   */
  public readRoutingOutboundCall(id: string, domainId?: string, options?: any) {
    return RoutingOutboundCallServiceApiFp(this.configuration)
      .readRoutingOutboundCall(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary List of RoutingOutboundCall
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<number>} [id]
   * @param {string} [name]
   * @param {Array<number>} [schemaId]
   * @param {string} [pattern]
   * @param {string} [description]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoutingOutboundCallServiceApi
   */
  public searchRoutingOutboundCall(
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    id?: Array<number>,
    name?: string,
    schemaId?: Array<number>,
    pattern?: string,
    description?: string,
    options?: any
  ) {
    return RoutingOutboundCallServiceApiFp(this.configuration)
      .searchRoutingOutboundCall(
        page,
        size,
        q,
        sort,
        fields,
        id,
        name,
        schemaId,
        pattern,
        description,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update RoutingOutboundCall
   * @param {string} id
   * @param {EngineUpdateRoutingOutboundCallRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoutingOutboundCallServiceApi
   */
  public updateRoutingOutboundCall(
    id: string,
    body: EngineUpdateRoutingOutboundCallRequest,
    options?: any
  ) {
    return RoutingOutboundCallServiceApiFp(this.configuration)
      .updateRoutingOutboundCall(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
