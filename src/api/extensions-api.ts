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
import { WebitelProtoDataInputExtension } from '../api'
// @ts-ignore
import { WebitelProtoDataStruct } from '../api'
// @ts-ignore
import { WebitelProtoDataStructList } from '../api'
/**
 * ExtensionsApi - axios parameter creator
 * @export
 */
export const ExtensionsApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     * returns (Extension) {
     * @summary Create type extension.
     * @param {string} repo SUPER &#x60;types.repo&#x60; to extend, e.g.: &#x60;contacts&#x60;. Lookup: GET /types?extendable&#x3D;true
     * @param {WebitelProtoDataInputExtension} input Extension type fields.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createType: async (
      repo: string,
      input: WebitelProtoDataInputExtension,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'repo' is not null or undefined
      if (repo === null || repo === undefined) {
        throw new RequiredError(
          'repo',
          'Required parameter repo was null or undefined when calling createType.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling createType.'
        )
      }
      const localVarPath = `/types/extensions/{repo}`.replace(
        `{${'repo'}}`,
        encodeURIComponent(String(repo))
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
     * returns (ExtensionList) {
     * @summary Delete extension for types.
     * @param {Array<string>} repo &#x60;type.repo&#x60;
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteType: async (
      repo: Array<string>,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'repo' is not null or undefined
      if (repo === null || repo === undefined) {
        throw new RequiredError(
          'repo',
          'Required parameter repo was null or undefined when calling deleteType.'
        )
      }
      const localVarPath = `/types/extensions/{repo}`.replace(
        `{${'repo'}}`,
        encodeURIComponent(String(repo))
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
     * returns (ExtensionList) {
     * @summary Delete extension for types.
     * @param {Array<string>} [fields]
     * @param {Array<string>} [repo] &#x60;type.repo&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteType2: async (
      fields?: Array<string>,
      repo?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/types/extensions`
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

      if (repo) {
        localVarQueryParameter['repo'] = repo
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
     * returns (Extension) {
     * @summary Type extension details.
     * @param {string} repo &#x60;type.repo&#x60;  id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateType: async (
      repo: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'repo' is not null or undefined
      if (repo === null || repo === undefined) {
        throw new RequiredError(
          'repo',
          'Required parameter repo was null or undefined when calling locateType.'
        )
      }
      const localVarPath = `/types/extensions/{repo}`.replace(
        `{${'repo'}}`,
        encodeURIComponent(String(repo))
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
     * (ExtensionList) {
     * @summary Search for type extensions.
     * @param {number} [size] Number of result records (per page). Default: 16.
     * @param {number} [page] Page number of result set of records. Default: 1.
     * @param {Array<string>} [sort] Sort result dataset of records by fields. &#x60;&#x60;&#x60; sort ::&#x3D; *( ORDER name )  ORDER  &#x3D; ASC / DESC DESC   &#x3D; \&quot;-\&quot; / \&quot;!\&quot; ASC    &#x3D; [ \&quot;+\&quot; ]   ; Default &#x60;&#x60;&#x60;  Fields available  - &#x60;id&#x60;(seq) - &#x60;domain&#x60;{name} - &#x60;created_at&#x60; - &#x60;created_by&#x60;{name} - &#x60;updated_at&#x60; - &#x60;updated_by&#x60;{name}  Use ?fields&#x3D;&#x60;field.sort()&#x60; option to sort Edge fields.
     * @param {Array<string>} [fields] Fields [Q]uery to build result dataset record. &#x60;&#x60;&#x60; fields ::&#x3D; field [ *( \&quot;,\&quot; field ) ] field  ::&#x3D; name [ *( func ) ] [ inner ] inner  ::&#x3D; \&quot;{\&quot; fields \&quot;}\&quot; funcs  ::&#x3D; *( func ) func   ::&#x3D; \&quot;.\&quot; name \&quot;(\&quot; [ args ] \&quot;)\&quot; name   ::&#x3D; ALPHA / DIGIT / USCORE  ALPHA    &#x3D; %x41-5A / %x61-7A  ; \&quot;A\&quot;-\&quot;Z\&quot; / \&quot;a\&quot;-\&quot;z\&quot; DIGIT    &#x3D; %x30-39            ; \&quot;0\&quot;-\&quot;9\&quot; USCORE   &#x3D; %x5F ; underscore  ; \&quot;_\&quot; &#x60;&#x60;&#x60;
     * @param {string} [q] Search term: &#x60;?&#x60; - matches any character &#x60;*&#x60; - matches 0 or more characters e.g.: name,emails{type},labels etc...
     * @param {Array<string>} [id] extension.type.id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchType: async (
      size?: number,
      page?: number,
      sort?: Array<string>,
      fields?: Array<string>,
      q?: string,
      id?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/types/extensions`
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

      if (size !== undefined) {
        localVarQueryParameter['size'] = size
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (sort) {
        localVarQueryParameter['sort'] = sort
      }

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
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
     * returns (Extension) {
     * @summary Update type extension.
     * @param {string} repo &#x60;type.repo&#x60;
     * @param {WebitelProtoDataInputExtension} input
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateType: async (
      repo: string,
      input: WebitelProtoDataInputExtension,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'repo' is not null or undefined
      if (repo === null || repo === undefined) {
        throw new RequiredError(
          'repo',
          'Required parameter repo was null or undefined when calling updateType.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateType.'
        )
      }
      const localVarPath = `/types/extensions/{repo}`.replace(
        `{${'repo'}}`,
        encodeURIComponent(String(repo))
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
 * ExtensionsApi - functional programming interface
 * @export
 */
export const ExtensionsApiFp = function(configuration?: Configuration) {
  return {
    /**
     * returns (Extension) {
     * @summary Create type extension.
     * @param {string} repo SUPER &#x60;types.repo&#x60; to extend, e.g.: &#x60;contacts&#x60;. Lookup: GET /types?extendable&#x3D;true
     * @param {WebitelProtoDataInputExtension} input Extension type fields.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createType(
      repo: string,
      input: WebitelProtoDataInputExtension,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelProtoDataStruct>
    > {
      const localVarAxiosArgs = await ExtensionsApiAxiosParamCreator(
        configuration
      ).createType(repo, input, options)
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
     * returns (ExtensionList) {
     * @summary Delete extension for types.
     * @param {Array<string>} repo &#x60;type.repo&#x60;
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteType(
      repo: Array<string>,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelProtoDataStructList>
    > {
      const localVarAxiosArgs = await ExtensionsApiAxiosParamCreator(
        configuration
      ).deleteType(repo, fields, options)
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
     * returns (ExtensionList) {
     * @summary Delete extension for types.
     * @param {Array<string>} [fields]
     * @param {Array<string>} [repo] &#x60;type.repo&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteType2(
      fields?: Array<string>,
      repo?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelProtoDataStructList>
    > {
      const localVarAxiosArgs = await ExtensionsApiAxiosParamCreator(
        configuration
      ).deleteType2(fields, repo, options)
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
     * returns (Extension) {
     * @summary Type extension details.
     * @param {string} repo &#x60;type.repo&#x60;  id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async locateType(
      repo: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelProtoDataStruct>
    > {
      const localVarAxiosArgs = await ExtensionsApiAxiosParamCreator(
        configuration
      ).locateType(repo, options)
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
     * (ExtensionList) {
     * @summary Search for type extensions.
     * @param {number} [size] Number of result records (per page). Default: 16.
     * @param {number} [page] Page number of result set of records. Default: 1.
     * @param {Array<string>} [sort] Sort result dataset of records by fields. &#x60;&#x60;&#x60; sort ::&#x3D; *( ORDER name )  ORDER  &#x3D; ASC / DESC DESC   &#x3D; \&quot;-\&quot; / \&quot;!\&quot; ASC    &#x3D; [ \&quot;+\&quot; ]   ; Default &#x60;&#x60;&#x60;  Fields available  - &#x60;id&#x60;(seq) - &#x60;domain&#x60;{name} - &#x60;created_at&#x60; - &#x60;created_by&#x60;{name} - &#x60;updated_at&#x60; - &#x60;updated_by&#x60;{name}  Use ?fields&#x3D;&#x60;field.sort()&#x60; option to sort Edge fields.
     * @param {Array<string>} [fields] Fields [Q]uery to build result dataset record. &#x60;&#x60;&#x60; fields ::&#x3D; field [ *( \&quot;,\&quot; field ) ] field  ::&#x3D; name [ *( func ) ] [ inner ] inner  ::&#x3D; \&quot;{\&quot; fields \&quot;}\&quot; funcs  ::&#x3D; *( func ) func   ::&#x3D; \&quot;.\&quot; name \&quot;(\&quot; [ args ] \&quot;)\&quot; name   ::&#x3D; ALPHA / DIGIT / USCORE  ALPHA    &#x3D; %x41-5A / %x61-7A  ; \&quot;A\&quot;-\&quot;Z\&quot; / \&quot;a\&quot;-\&quot;z\&quot; DIGIT    &#x3D; %x30-39            ; \&quot;0\&quot;-\&quot;9\&quot; USCORE   &#x3D; %x5F ; underscore  ; \&quot;_\&quot; &#x60;&#x60;&#x60;
     * @param {string} [q] Search term: &#x60;?&#x60; - matches any character &#x60;*&#x60; - matches 0 or more characters e.g.: name,emails{type},labels etc...
     * @param {Array<string>} [id] extension.type.id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchType(
      size?: number,
      page?: number,
      sort?: Array<string>,
      fields?: Array<string>,
      q?: string,
      id?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelProtoDataStructList>
    > {
      const localVarAxiosArgs = await ExtensionsApiAxiosParamCreator(
        configuration
      ).searchType(size, page, sort, fields, q, id, options)
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
     * returns (Extension) {
     * @summary Update type extension.
     * @param {string} repo &#x60;type.repo&#x60;
     * @param {WebitelProtoDataInputExtension} input
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateType(
      repo: string,
      input: WebitelProtoDataInputExtension,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelProtoDataStruct>
    > {
      const localVarAxiosArgs = await ExtensionsApiAxiosParamCreator(
        configuration
      ).updateType(repo, input, options)
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
 * ExtensionsApi - factory interface
 * @export
 */
export const ExtensionsApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * returns (Extension) {
     * @summary Create type extension.
     * @param {string} repo SUPER &#x60;types.repo&#x60; to extend, e.g.: &#x60;contacts&#x60;. Lookup: GET /types?extendable&#x3D;true
     * @param {WebitelProtoDataInputExtension} input Extension type fields.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createType(
      repo: string,
      input: WebitelProtoDataInputExtension,
      options?: any
    ): AxiosPromise<WebitelProtoDataStruct> {
      return ExtensionsApiFp(configuration)
        .createType(repo, input, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * returns (ExtensionList) {
     * @summary Delete extension for types.
     * @param {Array<string>} repo &#x60;type.repo&#x60;
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteType(
      repo: Array<string>,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelProtoDataStructList> {
      return ExtensionsApiFp(configuration)
        .deleteType(repo, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * returns (ExtensionList) {
     * @summary Delete extension for types.
     * @param {Array<string>} [fields]
     * @param {Array<string>} [repo] &#x60;type.repo&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteType2(
      fields?: Array<string>,
      repo?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelProtoDataStructList> {
      return ExtensionsApiFp(configuration)
        .deleteType2(fields, repo, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * returns (Extension) {
     * @summary Type extension details.
     * @param {string} repo &#x60;type.repo&#x60;  id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateType(
      repo: string,
      options?: any
    ): AxiosPromise<WebitelProtoDataStruct> {
      return ExtensionsApiFp(configuration)
        .locateType(repo, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * (ExtensionList) {
     * @summary Search for type extensions.
     * @param {number} [size] Number of result records (per page). Default: 16.
     * @param {number} [page] Page number of result set of records. Default: 1.
     * @param {Array<string>} [sort] Sort result dataset of records by fields. &#x60;&#x60;&#x60; sort ::&#x3D; *( ORDER name )  ORDER  &#x3D; ASC / DESC DESC   &#x3D; \&quot;-\&quot; / \&quot;!\&quot; ASC    &#x3D; [ \&quot;+\&quot; ]   ; Default &#x60;&#x60;&#x60;  Fields available  - &#x60;id&#x60;(seq) - &#x60;domain&#x60;{name} - &#x60;created_at&#x60; - &#x60;created_by&#x60;{name} - &#x60;updated_at&#x60; - &#x60;updated_by&#x60;{name}  Use ?fields&#x3D;&#x60;field.sort()&#x60; option to sort Edge fields.
     * @param {Array<string>} [fields] Fields [Q]uery to build result dataset record. &#x60;&#x60;&#x60; fields ::&#x3D; field [ *( \&quot;,\&quot; field ) ] field  ::&#x3D; name [ *( func ) ] [ inner ] inner  ::&#x3D; \&quot;{\&quot; fields \&quot;}\&quot; funcs  ::&#x3D; *( func ) func   ::&#x3D; \&quot;.\&quot; name \&quot;(\&quot; [ args ] \&quot;)\&quot; name   ::&#x3D; ALPHA / DIGIT / USCORE  ALPHA    &#x3D; %x41-5A / %x61-7A  ; \&quot;A\&quot;-\&quot;Z\&quot; / \&quot;a\&quot;-\&quot;z\&quot; DIGIT    &#x3D; %x30-39            ; \&quot;0\&quot;-\&quot;9\&quot; USCORE   &#x3D; %x5F ; underscore  ; \&quot;_\&quot; &#x60;&#x60;&#x60;
     * @param {string} [q] Search term: &#x60;?&#x60; - matches any character &#x60;*&#x60; - matches 0 or more characters e.g.: name,emails{type},labels etc...
     * @param {Array<string>} [id] extension.type.id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchType(
      size?: number,
      page?: number,
      sort?: Array<string>,
      fields?: Array<string>,
      q?: string,
      id?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelProtoDataStructList> {
      return ExtensionsApiFp(configuration)
        .searchType(size, page, sort, fields, q, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * returns (Extension) {
     * @summary Update type extension.
     * @param {string} repo &#x60;type.repo&#x60;
     * @param {WebitelProtoDataInputExtension} input
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateType(
      repo: string,
      input: WebitelProtoDataInputExtension,
      options?: any
    ): AxiosPromise<WebitelProtoDataStruct> {
      return ExtensionsApiFp(configuration)
        .updateType(repo, input, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ExtensionsApi - object-oriented interface
 * @export
 * @class ExtensionsApi
 * @extends {BaseAPI}
 */
export class ExtensionsApi extends BaseAPI {
  /**
   * returns (Extension) {
   * @summary Create type extension.
   * @param {string} repo SUPER &#x60;types.repo&#x60; to extend, e.g.: &#x60;contacts&#x60;. Lookup: GET /types?extendable&#x3D;true
   * @param {WebitelProtoDataInputExtension} input Extension type fields.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionsApi
   */
  public createType(
    repo: string,
    input: WebitelProtoDataInputExtension,
    options?: any
  ) {
    return ExtensionsApiFp(this.configuration)
      .createType(repo, input, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * returns (ExtensionList) {
   * @summary Delete extension for types.
   * @param {Array<string>} repo &#x60;type.repo&#x60;
   * @param {Array<string>} [fields]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionsApi
   */
  public deleteType(
    repo: Array<string>,
    fields?: Array<string>,
    options?: any
  ) {
    return ExtensionsApiFp(this.configuration)
      .deleteType(repo, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * returns (ExtensionList) {
   * @summary Delete extension for types.
   * @param {Array<string>} [fields]
   * @param {Array<string>} [repo] &#x60;type.repo&#x60;
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionsApi
   */
  public deleteType2(
    fields?: Array<string>,
    repo?: Array<string>,
    options?: any
  ) {
    return ExtensionsApiFp(this.configuration)
      .deleteType2(fields, repo, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * returns (Extension) {
   * @summary Type extension details.
   * @param {string} repo &#x60;type.repo&#x60;  id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionsApi
   */
  public locateType(repo: string, options?: any) {
    return ExtensionsApiFp(this.configuration)
      .locateType(repo, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * (ExtensionList) {
   * @summary Search for type extensions.
   * @param {number} [size] Number of result records (per page). Default: 16.
   * @param {number} [page] Page number of result set of records. Default: 1.
   * @param {Array<string>} [sort] Sort result dataset of records by fields. &#x60;&#x60;&#x60; sort ::&#x3D; *( ORDER name )  ORDER  &#x3D; ASC / DESC DESC   &#x3D; \&quot;-\&quot; / \&quot;!\&quot; ASC    &#x3D; [ \&quot;+\&quot; ]   ; Default &#x60;&#x60;&#x60;  Fields available  - &#x60;id&#x60;(seq) - &#x60;domain&#x60;{name} - &#x60;created_at&#x60; - &#x60;created_by&#x60;{name} - &#x60;updated_at&#x60; - &#x60;updated_by&#x60;{name}  Use ?fields&#x3D;&#x60;field.sort()&#x60; option to sort Edge fields.
   * @param {Array<string>} [fields] Fields [Q]uery to build result dataset record. &#x60;&#x60;&#x60; fields ::&#x3D; field [ *( \&quot;,\&quot; field ) ] field  ::&#x3D; name [ *( func ) ] [ inner ] inner  ::&#x3D; \&quot;{\&quot; fields \&quot;}\&quot; funcs  ::&#x3D; *( func ) func   ::&#x3D; \&quot;.\&quot; name \&quot;(\&quot; [ args ] \&quot;)\&quot; name   ::&#x3D; ALPHA / DIGIT / USCORE  ALPHA    &#x3D; %x41-5A / %x61-7A  ; \&quot;A\&quot;-\&quot;Z\&quot; / \&quot;a\&quot;-\&quot;z\&quot; DIGIT    &#x3D; %x30-39            ; \&quot;0\&quot;-\&quot;9\&quot; USCORE   &#x3D; %x5F ; underscore  ; \&quot;_\&quot; &#x60;&#x60;&#x60;
   * @param {string} [q] Search term: &#x60;?&#x60; - matches any character &#x60;*&#x60; - matches 0 or more characters e.g.: name,emails{type},labels etc...
   * @param {Array<string>} [id] extension.type.id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionsApi
   */
  public searchType(
    size?: number,
    page?: number,
    sort?: Array<string>,
    fields?: Array<string>,
    q?: string,
    id?: Array<string>,
    options?: any
  ) {
    return ExtensionsApiFp(this.configuration)
      .searchType(size, page, sort, fields, q, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * returns (Extension) {
   * @summary Update type extension.
   * @param {string} repo &#x60;type.repo&#x60;
   * @param {WebitelProtoDataInputExtension} input
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionsApi
   */
  public updateType(
    repo: string,
    input: WebitelProtoDataInputExtension,
    options?: any
  ) {
    return ExtensionsApiFp(this.configuration)
      .updateType(repo, input, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
