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
import { CasesCase } from '../api'
// @ts-ignore
import { CasesCaseList } from '../api'
// @ts-ignore
import { CasesInputCreateCase } from '../api'
// @ts-ignore
import { Changes } from '../api'
// @ts-ignore
import { Changes1 } from '../api'
// @ts-ignore
import { GooglerpcStatus } from '../api'
/**
 * CasesApi - axios parameter creator
 * @export
 */
export const CasesApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary on create, we should accept service and all parameters that correspond to it, priority have the fields that were directly set from the front-end and if they are empty we should fill them from service (we can\'t change the SLA and SLA conditions) etag doesn\'t play any role on this API
     * @param {CasesInputCreateCase} input
     * @param {Array<string>} [fields] Result fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCase: async (
      input: CasesInputCreateCase,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling createCase.'
        )
      }
      const localVarPath = `/cases`
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
     * @summary on delete, we should require etag, to understand if user has right version of the case also will be deleted all objects connected to the case, such as comments, related cases, links and files
     * @param {string} etag identifier of the object
     * @param {Array<string>} [fields] fields to return in deleted object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCase: async (
      etag: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'etag' is not null or undefined
      if (etag === null || etag === undefined) {
        throw new RequiredError(
          'etag',
          'Required parameter etag was null or undefined when calling deleteCase.'
        )
      }
      const localVarPath = `/cases/{etag}`.replace(
        `{${'etag'}}`,
        encodeURIComponent(String(etag))
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
     * @param {string} etag
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateCase: async (
      etag: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'etag' is not null or undefined
      if (etag === null || etag === undefined) {
        throw new RequiredError(
          'etag',
          'Required parameter etag was null or undefined when calling locateCase.'
        )
      }
      const localVarPath = `/cases/{etag}`.replace(
        `{${'etag'}}`,
        encodeURIComponent(String(etag))
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
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q] covered by filters?
     * @param {Array<string>} [qin]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchCases: async (
      page?: number,
      size?: number,
      q?: string,
      qin?: Array<string>,
      sort?: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/cases`
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

      if (qin) {
        localVarQueryParameter['qin'] = qin
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
     * @summary on update, we should be able to accept service and all parameters that correspond to it, if service and corresponding to it fields were changed simultaneously then priority have service and dependent fields set from the service automatically (we can\'t change the SLA, SLA conditions ) etag is required to update the true version of the case
     * @param {string} inputEtag
     * @param {Changes} input
     * @param {Array<string>} [fields] fields to return in resulting object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCase: async (
      inputEtag: string,
      input: Changes,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'inputEtag' is not null or undefined
      if (inputEtag === null || inputEtag === undefined) {
        throw new RequiredError(
          'inputEtag',
          'Required parameter inputEtag was null or undefined when calling updateCase.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateCase.'
        )
      }
      const localVarPath = `/cases/{input.etag}`.replace(
        `{${'input.etag'}}`,
        encodeURIComponent(String(inputEtag))
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
     * @summary on update, we should be able to accept service and all parameters that correspond to it, if service and corresponding to it fields were changed simultaneously then priority have service and dependent fields set from the service automatically (we can\'t change the SLA, SLA conditions ) etag is required to update the true version of the case
     * @param {string} inputEtag
     * @param {Changes1} input
     * @param {Array<string>} [fields] fields to return in resulting object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCase2: async (
      inputEtag: string,
      input: Changes1,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'inputEtag' is not null or undefined
      if (inputEtag === null || inputEtag === undefined) {
        throw new RequiredError(
          'inputEtag',
          'Required parameter inputEtag was null or undefined when calling updateCase2.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateCase2.'
        )
      }
      const localVarPath = `/cases/{input.etag}`.replace(
        `{${'input.etag'}}`,
        encodeURIComponent(String(inputEtag))
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
 * CasesApi - functional programming interface
 * @export
 */
export const CasesApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary on create, we should accept service and all parameters that correspond to it, priority have the fields that were directly set from the front-end and if they are empty we should fill them from service (we can\'t change the SLA and SLA conditions) etag doesn\'t play any role on this API
     * @param {CasesInputCreateCase} input
     * @param {Array<string>} [fields] Result fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCase(
      input: CasesInputCreateCase,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CasesCase>
    > {
      const localVarAxiosArgs = await CasesApiAxiosParamCreator(
        configuration
      ).createCase(input, fields, options)
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
     * @summary on delete, we should require etag, to understand if user has right version of the case also will be deleted all objects connected to the case, such as comments, related cases, links and files
     * @param {string} etag identifier of the object
     * @param {Array<string>} [fields] fields to return in deleted object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteCase(
      etag: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CasesCase>
    > {
      const localVarAxiosArgs = await CasesApiAxiosParamCreator(
        configuration
      ).deleteCase(etag, fields, options)
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
     * @param {string} etag
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async locateCase(
      etag: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CasesCase>
    > {
      const localVarAxiosArgs = await CasesApiAxiosParamCreator(
        configuration
      ).locateCase(etag, fields, options)
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
     * @param {string} [q] covered by filters?
     * @param {Array<string>} [qin]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchCases(
      page?: number,
      size?: number,
      q?: string,
      qin?: Array<string>,
      sort?: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CasesCaseList>
    > {
      const localVarAxiosArgs = await CasesApiAxiosParamCreator(
        configuration
      ).searchCases(page, size, q, qin, sort, fields, options)
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
     * @summary on update, we should be able to accept service and all parameters that correspond to it, if service and corresponding to it fields were changed simultaneously then priority have service and dependent fields set from the service automatically (we can\'t change the SLA, SLA conditions ) etag is required to update the true version of the case
     * @param {string} inputEtag
     * @param {Changes} input
     * @param {Array<string>} [fields] fields to return in resulting object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateCase(
      inputEtag: string,
      input: Changes,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CasesCase>
    > {
      const localVarAxiosArgs = await CasesApiAxiosParamCreator(
        configuration
      ).updateCase(inputEtag, input, fields, options)
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
     * @summary on update, we should be able to accept service and all parameters that correspond to it, if service and corresponding to it fields were changed simultaneously then priority have service and dependent fields set from the service automatically (we can\'t change the SLA, SLA conditions ) etag is required to update the true version of the case
     * @param {string} inputEtag
     * @param {Changes1} input
     * @param {Array<string>} [fields] fields to return in resulting object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateCase2(
      inputEtag: string,
      input: Changes1,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CasesCase>
    > {
      const localVarAxiosArgs = await CasesApiAxiosParamCreator(
        configuration
      ).updateCase2(inputEtag, input, fields, options)
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
 * CasesApi - factory interface
 * @export
 */
export const CasesApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary on create, we should accept service and all parameters that correspond to it, priority have the fields that were directly set from the front-end and if they are empty we should fill them from service (we can\'t change the SLA and SLA conditions) etag doesn\'t play any role on this API
     * @param {CasesInputCreateCase} input
     * @param {Array<string>} [fields] Result fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCase(
      input: CasesInputCreateCase,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesCase> {
      return CasesApiFp(configuration)
        .createCase(input, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary on delete, we should require etag, to understand if user has right version of the case also will be deleted all objects connected to the case, such as comments, related cases, links and files
     * @param {string} etag identifier of the object
     * @param {Array<string>} [fields] fields to return in deleted object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCase(
      etag: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesCase> {
      return CasesApiFp(configuration)
        .deleteCase(etag, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} etag
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateCase(
      etag: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesCase> {
      return CasesApiFp(configuration)
        .locateCase(etag, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q] covered by filters?
     * @param {Array<string>} [qin]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchCases(
      page?: number,
      size?: number,
      q?: string,
      qin?: Array<string>,
      sort?: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesCaseList> {
      return CasesApiFp(configuration)
        .searchCases(page, size, q, qin, sort, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary on update, we should be able to accept service and all parameters that correspond to it, if service and corresponding to it fields were changed simultaneously then priority have service and dependent fields set from the service automatically (we can\'t change the SLA, SLA conditions ) etag is required to update the true version of the case
     * @param {string} inputEtag
     * @param {Changes} input
     * @param {Array<string>} [fields] fields to return in resulting object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCase(
      inputEtag: string,
      input: Changes,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesCase> {
      return CasesApiFp(configuration)
        .updateCase(inputEtag, input, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary on update, we should be able to accept service and all parameters that correspond to it, if service and corresponding to it fields were changed simultaneously then priority have service and dependent fields set from the service automatically (we can\'t change the SLA, SLA conditions ) etag is required to update the true version of the case
     * @param {string} inputEtag
     * @param {Changes1} input
     * @param {Array<string>} [fields] fields to return in resulting object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCase2(
      inputEtag: string,
      input: Changes1,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesCase> {
      return CasesApiFp(configuration)
        .updateCase2(inputEtag, input, fields, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * CasesApi - object-oriented interface
 * @export
 * @class CasesApi
 * @extends {BaseAPI}
 */
export class CasesApi extends BaseAPI {
  /**
   *
   * @summary on create, we should accept service and all parameters that correspond to it, priority have the fields that were directly set from the front-end and if they are empty we should fill them from service (we can\'t change the SLA and SLA conditions) etag doesn\'t play any role on this API
   * @param {CasesInputCreateCase} input
   * @param {Array<string>} [fields] Result fields to include in the response.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CasesApi
   */
  public createCase(
    input: CasesInputCreateCase,
    fields?: Array<string>,
    options?: any
  ) {
    return CasesApiFp(this.configuration)
      .createCase(input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary on delete, we should require etag, to understand if user has right version of the case also will be deleted all objects connected to the case, such as comments, related cases, links and files
   * @param {string} etag identifier of the object
   * @param {Array<string>} [fields] fields to return in deleted object
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CasesApi
   */
  public deleteCase(etag: string, fields?: Array<string>, options?: any) {
    return CasesApiFp(this.configuration)
      .deleteCase(etag, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} etag
   * @param {Array<string>} [fields]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CasesApi
   */
  public locateCase(etag: string, fields?: Array<string>, options?: any) {
    return CasesApiFp(this.configuration)
      .locateCase(etag, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q] covered by filters?
   * @param {Array<string>} [qin]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CasesApi
   */
  public searchCases(
    page?: number,
    size?: number,
    q?: string,
    qin?: Array<string>,
    sort?: string,
    fields?: Array<string>,
    options?: any
  ) {
    return CasesApiFp(this.configuration)
      .searchCases(page, size, q, qin, sort, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary on update, we should be able to accept service and all parameters that correspond to it, if service and corresponding to it fields were changed simultaneously then priority have service and dependent fields set from the service automatically (we can\'t change the SLA, SLA conditions ) etag is required to update the true version of the case
   * @param {string} inputEtag
   * @param {Changes} input
   * @param {Array<string>} [fields] fields to return in resulting object
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CasesApi
   */
  public updateCase(
    inputEtag: string,
    input: Changes,
    fields?: Array<string>,
    options?: any
  ) {
    return CasesApiFp(this.configuration)
      .updateCase(inputEtag, input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary on update, we should be able to accept service and all parameters that correspond to it, if service and corresponding to it fields were changed simultaneously then priority have service and dependent fields set from the service automatically (we can\'t change the SLA, SLA conditions ) etag is required to update the true version of the case
   * @param {string} inputEtag
   * @param {Changes1} input
   * @param {Array<string>} [fields] fields to return in resulting object
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CasesApi
   */
  public updateCase2(
    inputEtag: string,
    input: Changes1,
    fields?: Array<string>,
    options?: any
  ) {
    return CasesApiFp(this.configuration)
      .updateCase2(inputEtag, input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
