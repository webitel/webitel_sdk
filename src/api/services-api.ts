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
import { CasesInputCreateService } from '../api'
// @ts-ignore
import { CasesInputService } from '../api'
// @ts-ignore
import { CasesLocateServiceResponse } from '../api'
// @ts-ignore
import { CasesService } from '../api'
// @ts-ignore
import { CasesServiceList } from '../api'
// @ts-ignore
import { GooglerpcStatus } from '../api'
/**
 * ServicesApi - axios parameter creator
 * @export
 */
export const ServicesApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create a new service within a catalog
     * @param {CasesInputCreateService} input
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createService: async (
      input: CasesInputCreateService,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling createService.'
        )
      }
      const localVarPath = `/cases/services`
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

      if (fields) {
        localVarQueryParameter['fields'] = fields
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
     * @summary Delete a service
     * @param {Array<string>} id ID of the service to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteService: async (
      id: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteService.'
        )
      }
      const localVarPath = `/cases/services/{id}`.replace(
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
     * @summary Retrieve a list of services or search services within a catalog
     * @param {number} [page] Page number for pagination
     * @param {number} [size] Number of records per page
     * @param {string} [sort] Sorting options by fields
     * @param {Array<string>} [id] List of IDs to filter the services
     * @param {string} [q] Search query string for filtering by name. Supports: - Wildcards (*) for substring matching - Placeholder (?) for single character substitution - Exact match for full names
     * @param {string} [rootId] Filter services by catalog ID (required)
     * @param {boolean} [state] Filter by state (true for active, false for inactive)
     * @param {Array<string>} [fields] Fields to be retrieved as a result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listServices: async (
      page?: number,
      size?: number,
      sort?: string,
      id?: Array<string>,
      q?: string,
      rootId?: string,
      state?: boolean,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/cases/services`
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

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (id) {
        localVarQueryParameter['id'] = id
      }

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      if (rootId !== undefined) {
        localVarQueryParameter['root_id'] = rootId
      }

      if (state !== undefined) {
        localVarQueryParameter['state'] = state
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
     * @summary Locate a service by ID
     * @param {string} id ID of the service to be located
     * @param {Array<string>} [fields] Fields to be retrieved as a result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateService: async (
      id: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling locateService.'
        )
      }
      const localVarPath = `/cases/services/{id}`.replace(
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
     * @summary Update an existing service
     * @param {string} id ID of the service to be updated
     * @param {CasesInputService} input Input data for updating the service
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateService: async (
      id: string,
      input: CasesInputService,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateService.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateService.'
        )
      }
      const localVarPath = `/cases/services/{id}`.replace(
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

      if (fields) {
        localVarQueryParameter['fields'] = fields
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
     * @summary Update an existing service
     * @param {string} id ID of the service to be updated
     * @param {CasesInputService} input Input data for updating the service
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateService2: async (
      id: string,
      input: CasesInputService,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateService2.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateService2.'
        )
      }
      const localVarPath = `/cases/services/{id}`.replace(
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

      if (fields) {
        localVarQueryParameter['fields'] = fields
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
 * ServicesApi - functional programming interface
 * @export
 */
export const ServicesApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create a new service within a catalog
     * @param {CasesInputCreateService} input
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createService(
      input: CasesInputCreateService,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CasesService>
    > {
      const localVarAxiosArgs = await ServicesApiAxiosParamCreator(
        configuration
      ).createService(input, fields, options)
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
     * @summary Delete a service
     * @param {Array<string>} id ID of the service to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteService(
      id: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesServiceList>
    > {
      const localVarAxiosArgs = await ServicesApiAxiosParamCreator(
        configuration
      ).deleteService(id, options)
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
     * @summary Retrieve a list of services or search services within a catalog
     * @param {number} [page] Page number for pagination
     * @param {number} [size] Number of records per page
     * @param {string} [sort] Sorting options by fields
     * @param {Array<string>} [id] List of IDs to filter the services
     * @param {string} [q] Search query string for filtering by name. Supports: - Wildcards (*) for substring matching - Placeholder (?) for single character substitution - Exact match for full names
     * @param {string} [rootId] Filter services by catalog ID (required)
     * @param {boolean} [state] Filter by state (true for active, false for inactive)
     * @param {Array<string>} [fields] Fields to be retrieved as a result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listServices(
      page?: number,
      size?: number,
      sort?: string,
      id?: Array<string>,
      q?: string,
      rootId?: string,
      state?: boolean,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesServiceList>
    > {
      const localVarAxiosArgs = await ServicesApiAxiosParamCreator(
        configuration
      ).listServices(page, size, sort, id, q, rootId, state, fields, options)
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
     * @summary Locate a service by ID
     * @param {string} id ID of the service to be located
     * @param {Array<string>} [fields] Fields to be retrieved as a result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async locateService(
      id: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesLocateServiceResponse>
    > {
      const localVarAxiosArgs = await ServicesApiAxiosParamCreator(
        configuration
      ).locateService(id, fields, options)
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
     * @summary Update an existing service
     * @param {string} id ID of the service to be updated
     * @param {CasesInputService} input Input data for updating the service
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateService(
      id: string,
      input: CasesInputService,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CasesService>
    > {
      const localVarAxiosArgs = await ServicesApiAxiosParamCreator(
        configuration
      ).updateService(id, input, fields, options)
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
     * @summary Update an existing service
     * @param {string} id ID of the service to be updated
     * @param {CasesInputService} input Input data for updating the service
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateService2(
      id: string,
      input: CasesInputService,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CasesService>
    > {
      const localVarAxiosArgs = await ServicesApiAxiosParamCreator(
        configuration
      ).updateService2(id, input, fields, options)
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
 * ServicesApi - factory interface
 * @export
 */
export const ServicesApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create a new service within a catalog
     * @param {CasesInputCreateService} input
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createService(
      input: CasesInputCreateService,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesService> {
      return ServicesApiFp(configuration)
        .createService(input, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Delete a service
     * @param {Array<string>} id ID of the service to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteService(
      id: Array<string>,
      options?: any
    ): AxiosPromise<CasesServiceList> {
      return ServicesApiFp(configuration)
        .deleteService(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Retrieve a list of services or search services within a catalog
     * @param {number} [page] Page number for pagination
     * @param {number} [size] Number of records per page
     * @param {string} [sort] Sorting options by fields
     * @param {Array<string>} [id] List of IDs to filter the services
     * @param {string} [q] Search query string for filtering by name. Supports: - Wildcards (*) for substring matching - Placeholder (?) for single character substitution - Exact match for full names
     * @param {string} [rootId] Filter services by catalog ID (required)
     * @param {boolean} [state] Filter by state (true for active, false for inactive)
     * @param {Array<string>} [fields] Fields to be retrieved as a result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listServices(
      page?: number,
      size?: number,
      sort?: string,
      id?: Array<string>,
      q?: string,
      rootId?: string,
      state?: boolean,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesServiceList> {
      return ServicesApiFp(configuration)
        .listServices(page, size, sort, id, q, rootId, state, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Locate a service by ID
     * @param {string} id ID of the service to be located
     * @param {Array<string>} [fields] Fields to be retrieved as a result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateService(
      id: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesLocateServiceResponse> {
      return ServicesApiFp(configuration)
        .locateService(id, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update an existing service
     * @param {string} id ID of the service to be updated
     * @param {CasesInputService} input Input data for updating the service
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateService(
      id: string,
      input: CasesInputService,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesService> {
      return ServicesApiFp(configuration)
        .updateService(id, input, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update an existing service
     * @param {string} id ID of the service to be updated
     * @param {CasesInputService} input Input data for updating the service
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateService2(
      id: string,
      input: CasesInputService,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesService> {
      return ServicesApiFp(configuration)
        .updateService2(id, input, fields, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ServicesApi - object-oriented interface
 * @export
 * @class ServicesApi
 * @extends {BaseAPI}
 */
export class ServicesApi extends BaseAPI {
  /**
   *
   * @summary Create a new service within a catalog
   * @param {CasesInputCreateService} input
   * @param {Array<string>} [fields]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServicesApi
   */
  public createService(
    input: CasesInputCreateService,
    fields?: Array<string>,
    options?: any
  ) {
    return ServicesApiFp(this.configuration)
      .createService(input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Delete a service
   * @param {Array<string>} id ID of the service to be deleted
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServicesApi
   */
  public deleteService(id: Array<string>, options?: any) {
    return ServicesApiFp(this.configuration)
      .deleteService(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Retrieve a list of services or search services within a catalog
   * @param {number} [page] Page number for pagination
   * @param {number} [size] Number of records per page
   * @param {string} [sort] Sorting options by fields
   * @param {Array<string>} [id] List of IDs to filter the services
   * @param {string} [q] Search query string for filtering by name. Supports: - Wildcards (*) for substring matching - Placeholder (?) for single character substitution - Exact match for full names
   * @param {string} [rootId] Filter services by catalog ID (required)
   * @param {boolean} [state] Filter by state (true for active, false for inactive)
   * @param {Array<string>} [fields] Fields to be retrieved as a result.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServicesApi
   */
  public listServices(
    page?: number,
    size?: number,
    sort?: string,
    id?: Array<string>,
    q?: string,
    rootId?: string,
    state?: boolean,
    fields?: Array<string>,
    options?: any
  ) {
    return ServicesApiFp(this.configuration)
      .listServices(page, size, sort, id, q, rootId, state, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Locate a service by ID
   * @param {string} id ID of the service to be located
   * @param {Array<string>} [fields] Fields to be retrieved as a result.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServicesApi
   */
  public locateService(id: string, fields?: Array<string>, options?: any) {
    return ServicesApiFp(this.configuration)
      .locateService(id, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update an existing service
   * @param {string} id ID of the service to be updated
   * @param {CasesInputService} input Input data for updating the service
   * @param {Array<string>} [fields]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServicesApi
   */
  public updateService(
    id: string,
    input: CasesInputService,
    fields?: Array<string>,
    options?: any
  ) {
    return ServicesApiFp(this.configuration)
      .updateService(id, input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update an existing service
   * @param {string} id ID of the service to be updated
   * @param {CasesInputService} input Input data for updating the service
   * @param {Array<string>} [fields]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServicesApi
   */
  public updateService2(
    id: string,
    input: CasesInputService,
    fields?: Array<string>,
    options?: any
  ) {
    return ServicesApiFp(this.configuration)
      .updateService2(id, input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
