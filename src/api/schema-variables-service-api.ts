// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.12.0
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
import { EngineCreateSchemaVariableRequest } from '../api'
// @ts-ignore
import { EngineListSchemaVariable } from '../api'
// @ts-ignore
import { EnginePatchSchemaVariableRequest } from '../api'
// @ts-ignore
import { EngineSchemaVariable } from '../api'
// @ts-ignore
import { EngineUpdateSchemaVariableRequest } from '../api'
/**
 * SchemaVariablesServiceApi - axios parameter creator
 * @export
 */
export const SchemaVariablesServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {EngineCreateSchemaVariableRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSchemaVariable: async (
      body: EngineCreateSchemaVariableRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createSchemaVariable.'
        )
      }
      const localVarPath = `/routing/schema/variables`
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
    deleteSchemaVariable: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteSchemaVariable.'
        )
      }
      const localVarPath = `/routing/schema/variables/{id}`.replace(
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
     * @param {EnginePatchSchemaVariableRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSchemaVariable: async (
      id: number,
      body: EnginePatchSchemaVariableRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchSchemaVariable.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchSchemaVariable.'
        )
      }
      const localVarPath = `/routing/schema/variables/{id}`.replace(
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
    readSchemaVariable: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readSchemaVariable.'
        )
      }
      const localVarPath = `/routing/schema/variables/{id}`.replace(
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSchemaVariable: async (
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/routing/schema/variables`
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
     * @param {EngineUpdateSchemaVariableRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSchemaVariable: async (
      id: number,
      body: EngineUpdateSchemaVariableRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateSchemaVariable.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateSchemaVariable.'
        )
      }
      const localVarPath = `/routing/schema/variables/{id}`.replace(
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
 * SchemaVariablesServiceApi - functional programming interface
 * @export
 */
export const SchemaVariablesServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {EngineCreateSchemaVariableRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSchemaVariable(
      body: EngineCreateSchemaVariableRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineSchemaVariable>
    > {
      const localVarAxiosArgs = await SchemaVariablesServiceApiAxiosParamCreator(
        configuration
      ).createSchemaVariable(body, options)
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
    async deleteSchemaVariable(
      id: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineSchemaVariable>
    > {
      const localVarAxiosArgs = await SchemaVariablesServiceApiAxiosParamCreator(
        configuration
      ).deleteSchemaVariable(id, options)
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
     * @param {EnginePatchSchemaVariableRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchSchemaVariable(
      id: number,
      body: EnginePatchSchemaVariableRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineSchemaVariable>
    > {
      const localVarAxiosArgs = await SchemaVariablesServiceApiAxiosParamCreator(
        configuration
      ).patchSchemaVariable(id, body, options)
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
    async readSchemaVariable(
      id: number,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineSchemaVariable>
    > {
      const localVarAxiosArgs = await SchemaVariablesServiceApiAxiosParamCreator(
        configuration
      ).readSchemaVariable(id, options)
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchSchemaVariable(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListSchemaVariable>
    > {
      const localVarAxiosArgs = await SchemaVariablesServiceApiAxiosParamCreator(
        configuration
      ).searchSchemaVariable(page, size, q, sort, fields, options)
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
     * @param {EngineUpdateSchemaVariableRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSchemaVariable(
      id: number,
      body: EngineUpdateSchemaVariableRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineSchemaVariable>
    > {
      const localVarAxiosArgs = await SchemaVariablesServiceApiAxiosParamCreator(
        configuration
      ).updateSchemaVariable(id, body, options)
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
 * SchemaVariablesServiceApi - factory interface
 * @export
 */
export const SchemaVariablesServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {EngineCreateSchemaVariableRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSchemaVariable(
      body: EngineCreateSchemaVariableRequest,
      options?: any
    ): AxiosPromise<EngineSchemaVariable> {
      return SchemaVariablesServiceApiFp(configuration)
        .createSchemaVariable(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSchemaVariable(
      id: number,
      options?: any
    ): AxiosPromise<EngineSchemaVariable> {
      return SchemaVariablesServiceApiFp(configuration)
        .deleteSchemaVariable(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {EnginePatchSchemaVariableRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSchemaVariable(
      id: number,
      body: EnginePatchSchemaVariableRequest,
      options?: any
    ): AxiosPromise<EngineSchemaVariable> {
      return SchemaVariablesServiceApiFp(configuration)
        .patchSchemaVariable(id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readSchemaVariable(
      id: number,
      options?: any
    ): AxiosPromise<EngineSchemaVariable> {
      return SchemaVariablesServiceApiFp(configuration)
        .readSchemaVariable(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSchemaVariable(
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<EngineListSchemaVariable> {
      return SchemaVariablesServiceApiFp(configuration)
        .searchSchemaVariable(page, size, q, sort, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} id
     * @param {EngineUpdateSchemaVariableRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSchemaVariable(
      id: number,
      body: EngineUpdateSchemaVariableRequest,
      options?: any
    ): AxiosPromise<EngineSchemaVariable> {
      return SchemaVariablesServiceApiFp(configuration)
        .updateSchemaVariable(id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * SchemaVariablesServiceApi - object-oriented interface
 * @export
 * @class SchemaVariablesServiceApi
 * @extends {BaseAPI}
 */
export class SchemaVariablesServiceApi extends BaseAPI {
  /**
   *
   * @param {EngineCreateSchemaVariableRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchemaVariablesServiceApi
   */
  public createSchemaVariable(
    body: EngineCreateSchemaVariableRequest,
    options?: any
  ) {
    return SchemaVariablesServiceApiFp(this.configuration)
      .createSchemaVariable(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchemaVariablesServiceApi
   */
  public deleteSchemaVariable(id: number, options?: any) {
    return SchemaVariablesServiceApiFp(this.configuration)
      .deleteSchemaVariable(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {EnginePatchSchemaVariableRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchemaVariablesServiceApi
   */
  public patchSchemaVariable(
    id: number,
    body: EnginePatchSchemaVariableRequest,
    options?: any
  ) {
    return SchemaVariablesServiceApiFp(this.configuration)
      .patchSchemaVariable(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchemaVariablesServiceApi
   */
  public readSchemaVariable(id: number, options?: any) {
    return SchemaVariablesServiceApiFp(this.configuration)
      .readSchemaVariable(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchemaVariablesServiceApi
   */
  public searchSchemaVariable(
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    options?: any
  ) {
    return SchemaVariablesServiceApiFp(this.configuration)
      .searchSchemaVariable(page, size, q, sort, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} id
   * @param {EngineUpdateSchemaVariableRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SchemaVariablesServiceApi
   */
  public updateSchemaVariable(
    id: number,
    body: EngineUpdateSchemaVariableRequest,
    options?: any
  ) {
    return SchemaVariablesServiceApiFp(this.configuration)
      .updateSchemaVariable(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}