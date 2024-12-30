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
import { CasesCreateInputRelatedCase } from '../api'
// @ts-ignore
import { CasesInputRelatedCase } from '../api'
// @ts-ignore
import { CasesRelatedCase } from '../api'
// @ts-ignore
import { CasesRelatedCaseList } from '../api'
// @ts-ignore
import { GooglerpcStatus } from '../api'
/**
 * RelatedCasesApi - axios parameter creator
 * @export
 */
export const RelatedCasesApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create a new related case
     * @param {string} primaryCaseId Primary case details.
     * @param {CasesCreateInputRelatedCase} input Input data for the related case.
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRelatedCase: async (
      primaryCaseId: string,
      input: CasesCreateInputRelatedCase,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'primaryCaseId' is not null or undefined
      if (primaryCaseId === null || primaryCaseId === undefined) {
        throw new RequiredError(
          'primaryCaseId',
          'Required parameter primaryCaseId was null or undefined when calling createRelatedCase.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling createRelatedCase.'
        )
      }
      const localVarPath = `/cases/{primaryCaseId}/related`.replace(
        `{${'primaryCaseId'}}`,
        encodeURIComponent(String(primaryCaseId))
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
     * @summary Delete a specific related case
     * @param {string} id Identifier of the related case to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRelatedCase: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteRelatedCase.'
        )
      }
      const localVarPath = `/cases/related/{id}`.replace(
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
     * @summary List all related cases for a specific case
     * @param {string} primaryCaseId Primary Case ID for which related cases are requested.
     * @param {number} [page] Page number for pagination.
     * @param {number} [size] Number of related cases per page.
     * @param {string} [q] Query string for search.
     * @param {string} [sort] Sorting order.
     * @param {Array<string>} [fields] Fields to return for each related case.
     * @param {Array<string>} [ids] Filter by ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listRelatedCases: async (
      primaryCaseId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      ids?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'primaryCaseId' is not null or undefined
      if (primaryCaseId === null || primaryCaseId === undefined) {
        throw new RequiredError(
          'primaryCaseId',
          'Required parameter primaryCaseId was null or undefined when calling listRelatedCases.'
        )
      }
      const localVarPath = `/cases/{primaryCaseId}/related`.replace(
        `{${'primaryCaseId'}}`,
        encodeURIComponent(String(primaryCaseId))
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

      if (ids) {
        localVarQueryParameter['ids'] = ids
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
     * @summary Retrieve a specific related case by ID
     * @param {string} id Identifier of the related case.
     * @param {Array<string>} [fields] Fields to return in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateRelatedCase: async (
      id: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling locateRelatedCase.'
        )
      }
      const localVarPath = `/cases/related/{id}`.replace(
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
     * @summary Update an existing related case
     * @param {string} id Identifier of the related case to update.
     * @param {CasesInputRelatedCase} input Input data for the related case update.
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRelatedCase: async (
      id: string,
      input: CasesInputRelatedCase,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateRelatedCase.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateRelatedCase.'
        )
      }
      const localVarPath = `/cases/related/{id}`.replace(
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
     * @summary Update an existing related case
     * @param {string} id Identifier of the related case to update.
     * @param {CasesInputRelatedCase} input Input data for the related case update.
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRelatedCase2: async (
      id: string,
      input: CasesInputRelatedCase,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateRelatedCase2.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateRelatedCase2.'
        )
      }
      const localVarPath = `/cases/related/{id}`.replace(
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
 * RelatedCasesApi - functional programming interface
 * @export
 */
export const RelatedCasesApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create a new related case
     * @param {string} primaryCaseId Primary case details.
     * @param {CasesCreateInputRelatedCase} input Input data for the related case.
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRelatedCase(
      primaryCaseId: string,
      input: CasesCreateInputRelatedCase,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesRelatedCase>
    > {
      const localVarAxiosArgs = await RelatedCasesApiAxiosParamCreator(
        configuration
      ).createRelatedCase(primaryCaseId, input, fields, options)
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
     * @summary Delete a specific related case
     * @param {string} id Identifier of the related case to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteRelatedCase(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesRelatedCase>
    > {
      const localVarAxiosArgs = await RelatedCasesApiAxiosParamCreator(
        configuration
      ).deleteRelatedCase(id, options)
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
     * @summary List all related cases for a specific case
     * @param {string} primaryCaseId Primary Case ID for which related cases are requested.
     * @param {number} [page] Page number for pagination.
     * @param {number} [size] Number of related cases per page.
     * @param {string} [q] Query string for search.
     * @param {string} [sort] Sorting order.
     * @param {Array<string>} [fields] Fields to return for each related case.
     * @param {Array<string>} [ids] Filter by ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listRelatedCases(
      primaryCaseId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      ids?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesRelatedCaseList>
    > {
      const localVarAxiosArgs = await RelatedCasesApiAxiosParamCreator(
        configuration
      ).listRelatedCases(
        primaryCaseId,
        page,
        size,
        q,
        sort,
        fields,
        ids,
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
     * @summary Retrieve a specific related case by ID
     * @param {string} id Identifier of the related case.
     * @param {Array<string>} [fields] Fields to return in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async locateRelatedCase(
      id: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesRelatedCase>
    > {
      const localVarAxiosArgs = await RelatedCasesApiAxiosParamCreator(
        configuration
      ).locateRelatedCase(id, fields, options)
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
     * @summary Update an existing related case
     * @param {string} id Identifier of the related case to update.
     * @param {CasesInputRelatedCase} input Input data for the related case update.
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateRelatedCase(
      id: string,
      input: CasesInputRelatedCase,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesRelatedCase>
    > {
      const localVarAxiosArgs = await RelatedCasesApiAxiosParamCreator(
        configuration
      ).updateRelatedCase(id, input, fields, options)
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
     * @summary Update an existing related case
     * @param {string} id Identifier of the related case to update.
     * @param {CasesInputRelatedCase} input Input data for the related case update.
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateRelatedCase2(
      id: string,
      input: CasesInputRelatedCase,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesRelatedCase>
    > {
      const localVarAxiosArgs = await RelatedCasesApiAxiosParamCreator(
        configuration
      ).updateRelatedCase2(id, input, fields, options)
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
 * RelatedCasesApi - factory interface
 * @export
 */
export const RelatedCasesApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create a new related case
     * @param {string} primaryCaseId Primary case details.
     * @param {CasesCreateInputRelatedCase} input Input data for the related case.
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRelatedCase(
      primaryCaseId: string,
      input: CasesCreateInputRelatedCase,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesRelatedCase> {
      return RelatedCasesApiFp(configuration)
        .createRelatedCase(primaryCaseId, input, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Delete a specific related case
     * @param {string} id Identifier of the related case to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRelatedCase(
      id: string,
      options?: any
    ): AxiosPromise<CasesRelatedCase> {
      return RelatedCasesApiFp(configuration)
        .deleteRelatedCase(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary List all related cases for a specific case
     * @param {string} primaryCaseId Primary Case ID for which related cases are requested.
     * @param {number} [page] Page number for pagination.
     * @param {number} [size] Number of related cases per page.
     * @param {string} [q] Query string for search.
     * @param {string} [sort] Sorting order.
     * @param {Array<string>} [fields] Fields to return for each related case.
     * @param {Array<string>} [ids] Filter by ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listRelatedCases(
      primaryCaseId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      ids?: Array<string>,
      options?: any
    ): AxiosPromise<CasesRelatedCaseList> {
      return RelatedCasesApiFp(configuration)
        .listRelatedCases(
          primaryCaseId,
          page,
          size,
          q,
          sort,
          fields,
          ids,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Retrieve a specific related case by ID
     * @param {string} id Identifier of the related case.
     * @param {Array<string>} [fields] Fields to return in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateRelatedCase(
      id: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesRelatedCase> {
      return RelatedCasesApiFp(configuration)
        .locateRelatedCase(id, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update an existing related case
     * @param {string} id Identifier of the related case to update.
     * @param {CasesInputRelatedCase} input Input data for the related case update.
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRelatedCase(
      id: string,
      input: CasesInputRelatedCase,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesRelatedCase> {
      return RelatedCasesApiFp(configuration)
        .updateRelatedCase(id, input, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update an existing related case
     * @param {string} id Identifier of the related case to update.
     * @param {CasesInputRelatedCase} input Input data for the related case update.
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRelatedCase2(
      id: string,
      input: CasesInputRelatedCase,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesRelatedCase> {
      return RelatedCasesApiFp(configuration)
        .updateRelatedCase2(id, input, fields, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * RelatedCasesApi - object-oriented interface
 * @export
 * @class RelatedCasesApi
 * @extends {BaseAPI}
 */
export class RelatedCasesApi extends BaseAPI {
  /**
   *
   * @summary Create a new related case
   * @param {string} primaryCaseId Primary case details.
   * @param {CasesCreateInputRelatedCase} input Input data for the related case.
   * @param {Array<string>} [fields] Fields to include in the response.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RelatedCasesApi
   */
  public createRelatedCase(
    primaryCaseId: string,
    input: CasesCreateInputRelatedCase,
    fields?: Array<string>,
    options?: any
  ) {
    return RelatedCasesApiFp(this.configuration)
      .createRelatedCase(primaryCaseId, input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Delete a specific related case
   * @param {string} id Identifier of the related case to delete.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RelatedCasesApi
   */
  public deleteRelatedCase(id: string, options?: any) {
    return RelatedCasesApiFp(this.configuration)
      .deleteRelatedCase(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary List all related cases for a specific case
   * @param {string} primaryCaseId Primary Case ID for which related cases are requested.
   * @param {number} [page] Page number for pagination.
   * @param {number} [size] Number of related cases per page.
   * @param {string} [q] Query string for search.
   * @param {string} [sort] Sorting order.
   * @param {Array<string>} [fields] Fields to return for each related case.
   * @param {Array<string>} [ids] Filter by ids
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RelatedCasesApi
   */
  public listRelatedCases(
    primaryCaseId: string,
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    ids?: Array<string>,
    options?: any
  ) {
    return RelatedCasesApiFp(this.configuration)
      .listRelatedCases(
        primaryCaseId,
        page,
        size,
        q,
        sort,
        fields,
        ids,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Retrieve a specific related case by ID
   * @param {string} id Identifier of the related case.
   * @param {Array<string>} [fields] Fields to return in the response.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RelatedCasesApi
   */
  public locateRelatedCase(id: string, fields?: Array<string>, options?: any) {
    return RelatedCasesApiFp(this.configuration)
      .locateRelatedCase(id, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update an existing related case
   * @param {string} id Identifier of the related case to update.
   * @param {CasesInputRelatedCase} input Input data for the related case update.
   * @param {Array<string>} [fields] Fields to include in the response.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RelatedCasesApi
   */
  public updateRelatedCase(
    id: string,
    input: CasesInputRelatedCase,
    fields?: Array<string>,
    options?: any
  ) {
    return RelatedCasesApiFp(this.configuration)
      .updateRelatedCase(id, input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update an existing related case
   * @param {string} id Identifier of the related case to update.
   * @param {CasesInputRelatedCase} input Input data for the related case update.
   * @param {Array<string>} [fields] Fields to include in the response.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RelatedCasesApi
   */
  public updateRelatedCase2(
    id: string,
    input: CasesInputRelatedCase,
    fields?: Array<string>,
    options?: any
  ) {
    return RelatedCasesApiFp(this.configuration)
      .updateRelatedCase2(id, input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
