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
import { ApiCreateDomainRequest } from '../api'
// @ts-ignore
import { ApiDomainsUpdateDomainBody } from '../api'
// @ts-ignore
import { ApiReadDomainResponse } from '../api'
// @ts-ignore
import { ApiSearchDomainsResponse } from '../api'
// @ts-ignore
import { ApiUpdateDomainResponse } from '../api'
/**
 * DomainsApi - axios parameter creator
 * @export
 */
export const DomainsApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {ApiCreateDomainRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDomain: async (
      body: ApiCreateDomainRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createDomain.'
        )
      }
      const localVarPath = `/domains`
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
     * @param {string} [domain]
     * @param {string} [dc]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDomain: async (
      domain?: string,
      dc?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/domain`
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

      if (domain !== undefined) {
        localVarQueryParameter['domain'] = domain
      }

      if (dc !== undefined) {
        localVarQueryParameter['dc'] = dc
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
     * @param {string} dc
     * @param {string} [domain]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDomain2: async (
      dc: string,
      domain?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'dc' is not null or undefined
      if (dc === null || dc === undefined) {
        throw new RequiredError(
          'dc',
          'Required parameter dc was null or undefined when calling deleteDomain2.'
        )
      }
      const localVarPath = `/domains/{dc}`.replace(
        `{${'dc'}}`,
        encodeURIComponent(String(dc))
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

      if (domain !== undefined) {
        localVarQueryParameter['domain'] = domain
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
     * @param {string} [domain]
     * @param {string} [dc]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readDomain: async (
      domain?: string,
      dc?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/domain`
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

      if (domain !== undefined) {
        localVarQueryParameter['domain'] = domain
      }

      if (dc !== undefined) {
        localVarQueryParameter['dc'] = dc
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
     * @param {string} dc
     * @param {string} [domain]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readDomain2: async (
      dc: string,
      domain?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'dc' is not null or undefined
      if (dc === null || dc === undefined) {
        throw new RequiredError(
          'dc',
          'Required parameter dc was null or undefined when calling readDomain2.'
        )
      }
      const localVarPath = `/domains/{dc}`.replace(
        `{${'dc'}}`,
        encodeURIComponent(String(dc))
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

      if (domain !== undefined) {
        localVarQueryParameter['domain'] = domain
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
     * @param {string} [domain] like
     * @param {Array<string>} [fields] attrs
     * @param {Array<string>} [sort]
     * @param {string} [page]
     * @param {string} [size]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchDomains: async (
      domain?: string,
      fields?: Array<string>,
      sort?: Array<string>,
      page?: string,
      size?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/domains`
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

      if (domain !== undefined) {
        localVarQueryParameter['domain'] = domain
      }

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (sort) {
        localVarQueryParameter['sort'] = sort
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (size !== undefined) {
        localVarQueryParameter['size'] = size
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
     * @param {string} domainDc component
     * @param {ApiDomainsUpdateDomainBody} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDomain: async (
      domainDc: string,
      body: ApiDomainsUpdateDomainBody,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'domainDc' is not null or undefined
      if (domainDc === null || domainDc === undefined) {
        throw new RequiredError(
          'domainDc',
          'Required parameter domainDc was null or undefined when calling updateDomain.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateDomain.'
        )
      }
      const localVarPath = `/domains/{domain.dc}`.replace(
        `{${'domain.dc'}}`,
        encodeURIComponent(String(domainDc))
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
    /**
     *
     * @param {string} domainDc component
     * @param {ApiDomainsUpdateDomainBody} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDomain2: async (
      domainDc: string,
      body: ApiDomainsUpdateDomainBody,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'domainDc' is not null or undefined
      if (domainDc === null || domainDc === undefined) {
        throw new RequiredError(
          'domainDc',
          'Required parameter domainDc was null or undefined when calling updateDomain2.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateDomain2.'
        )
      }
      const localVarPath = `/domains/{domain.dc}`.replace(
        `{${'domain.dc'}}`,
        encodeURIComponent(String(domainDc))
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
  }
}

/**
 * DomainsApi - functional programming interface
 * @export
 */
export const DomainsApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {ApiCreateDomainRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createDomain(
      body: ApiCreateDomainRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs = await DomainsApiAxiosParamCreator(
        configuration
      ).createDomain(body, options)
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
     * @param {string} [domain]
     * @param {string} [dc]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteDomain(
      domain?: string,
      dc?: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs = await DomainsApiAxiosParamCreator(
        configuration
      ).deleteDomain(domain, dc, options)
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
     * @param {string} dc
     * @param {string} [domain]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteDomain2(
      dc: string,
      domain?: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs = await DomainsApiAxiosParamCreator(
        configuration
      ).deleteDomain2(dc, domain, options)
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
     * @param {string} [domain]
     * @param {string} [dc]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readDomain(
      domain?: string,
      dc?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ApiReadDomainResponse>
    > {
      const localVarAxiosArgs = await DomainsApiAxiosParamCreator(
        configuration
      ).readDomain(domain, dc, options)
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
     * @param {string} dc
     * @param {string} [domain]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readDomain2(
      dc: string,
      domain?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ApiReadDomainResponse>
    > {
      const localVarAxiosArgs = await DomainsApiAxiosParamCreator(
        configuration
      ).readDomain2(dc, domain, options)
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
     * @param {string} [domain] like
     * @param {Array<string>} [fields] attrs
     * @param {Array<string>} [sort]
     * @param {string} [page]
     * @param {string} [size]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchDomains(
      domain?: string,
      fields?: Array<string>,
      sort?: Array<string>,
      page?: string,
      size?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ApiSearchDomainsResponse>
    > {
      const localVarAxiosArgs = await DomainsApiAxiosParamCreator(
        configuration
      ).searchDomains(domain, fields, sort, page, size, options)
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
     * @param {string} domainDc component
     * @param {ApiDomainsUpdateDomainBody} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDomain(
      domainDc: string,
      body: ApiDomainsUpdateDomainBody,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ApiUpdateDomainResponse>
    > {
      const localVarAxiosArgs = await DomainsApiAxiosParamCreator(
        configuration
      ).updateDomain(domainDc, body, options)
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
     * @param {string} domainDc component
     * @param {ApiDomainsUpdateDomainBody} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDomain2(
      domainDc: string,
      body: ApiDomainsUpdateDomainBody,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ApiUpdateDomainResponse>
    > {
      const localVarAxiosArgs = await DomainsApiAxiosParamCreator(
        configuration
      ).updateDomain2(domainDc, body, options)
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
 * DomainsApi - factory interface
 * @export
 */
export const DomainsApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {ApiCreateDomainRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDomain(
      body: ApiCreateDomainRequest,
      options?: any
    ): AxiosPromise<object> {
      return DomainsApiFp(configuration)
        .createDomain(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} [domain]
     * @param {string} [dc]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDomain(
      domain?: string,
      dc?: string,
      options?: any
    ): AxiosPromise<object> {
      return DomainsApiFp(configuration)
        .deleteDomain(domain, dc, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} dc
     * @param {string} [domain]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDomain2(
      dc: string,
      domain?: string,
      options?: any
    ): AxiosPromise<object> {
      return DomainsApiFp(configuration)
        .deleteDomain2(dc, domain, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} [domain]
     * @param {string} [dc]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readDomain(
      domain?: string,
      dc?: string,
      options?: any
    ): AxiosPromise<ApiReadDomainResponse> {
      return DomainsApiFp(configuration)
        .readDomain(domain, dc, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} dc
     * @param {string} [domain]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readDomain2(
      dc: string,
      domain?: string,
      options?: any
    ): AxiosPromise<ApiReadDomainResponse> {
      return DomainsApiFp(configuration)
        .readDomain2(dc, domain, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} [domain] like
     * @param {Array<string>} [fields] attrs
     * @param {Array<string>} [sort]
     * @param {string} [page]
     * @param {string} [size]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchDomains(
      domain?: string,
      fields?: Array<string>,
      sort?: Array<string>,
      page?: string,
      size?: string,
      options?: any
    ): AxiosPromise<ApiSearchDomainsResponse> {
      return DomainsApiFp(configuration)
        .searchDomains(domain, fields, sort, page, size, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} domainDc component
     * @param {ApiDomainsUpdateDomainBody} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDomain(
      domainDc: string,
      body: ApiDomainsUpdateDomainBody,
      options?: any
    ): AxiosPromise<ApiUpdateDomainResponse> {
      return DomainsApiFp(configuration)
        .updateDomain(domainDc, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} domainDc component
     * @param {ApiDomainsUpdateDomainBody} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDomain2(
      domainDc: string,
      body: ApiDomainsUpdateDomainBody,
      options?: any
    ): AxiosPromise<ApiUpdateDomainResponse> {
      return DomainsApiFp(configuration)
        .updateDomain2(domainDc, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * DomainsApi - object-oriented interface
 * @export
 * @class DomainsApi
 * @extends {BaseAPI}
 */
export class DomainsApi extends BaseAPI {
  /**
   *
   * @param {ApiCreateDomainRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public createDomain(body: ApiCreateDomainRequest, options?: any) {
    return DomainsApiFp(this.configuration)
      .createDomain(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} [domain]
   * @param {string} [dc]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public deleteDomain(domain?: string, dc?: string, options?: any) {
    return DomainsApiFp(this.configuration)
      .deleteDomain(domain, dc, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} dc
   * @param {string} [domain]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public deleteDomain2(dc: string, domain?: string, options?: any) {
    return DomainsApiFp(this.configuration)
      .deleteDomain2(dc, domain, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} [domain]
   * @param {string} [dc]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public readDomain(domain?: string, dc?: string, options?: any) {
    return DomainsApiFp(this.configuration)
      .readDomain(domain, dc, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} dc
   * @param {string} [domain]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public readDomain2(dc: string, domain?: string, options?: any) {
    return DomainsApiFp(this.configuration)
      .readDomain2(dc, domain, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} [domain] like
   * @param {Array<string>} [fields] attrs
   * @param {Array<string>} [sort]
   * @param {string} [page]
   * @param {string} [size]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public searchDomains(
    domain?: string,
    fields?: Array<string>,
    sort?: Array<string>,
    page?: string,
    size?: string,
    options?: any
  ) {
    return DomainsApiFp(this.configuration)
      .searchDomains(domain, fields, sort, page, size, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} domainDc component
   * @param {ApiDomainsUpdateDomainBody} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public updateDomain(
    domainDc: string,
    body: ApiDomainsUpdateDomainBody,
    options?: any
  ) {
    return DomainsApiFp(this.configuration)
      .updateDomain(domainDc, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} domainDc component
   * @param {ApiDomainsUpdateDomainBody} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public updateDomain2(
    domainDc: string,
    body: ApiDomainsUpdateDomainBody,
    options?: any
  ) {
    return DomainsApiFp(this.configuration)
      .updateDomain2(domainDc, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}