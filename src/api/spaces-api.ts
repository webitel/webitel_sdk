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
import { NEWSpaceSourceChanges } from '../api'
// @ts-ignore
import { WebitelKnowledgebaseInputSpace } from '../api'
// @ts-ignore
import { WebitelKnowledgebaseSpace } from '../api'
// @ts-ignore
import { WebitelKnowledgebaseSpaceList } from '../api'
/**
 * SpacesApi - axios parameter creator
 * @export
 */
export const SpacesApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create NEW Space
     * @param {Array<WebitelKnowledgebaseInputSpace>} input NEW Spaces source changes
     * @param {Array<string>} [fields] Source Fields to return into result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSpace: async (
      input: Array<WebitelKnowledgebaseInputSpace>,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling createSpace.'
        )
      }
      const localVarPath = `/spaces`
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
     * @summary Remove Space source
     * @param {string} etag Unique ID of the latest version of a resource.
     * @param {Array<string>} [fields] Fields to be retrieved into result of changes.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSpace: async (
      etag: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'etag' is not null or undefined
      if (etag === null || etag === undefined) {
        throw new RequiredError(
          'etag',
          'Required parameter etag was null or undefined when calling deleteSpace.'
        )
      }
      const localVarPath = `/spaces/{etag}`.replace(
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
     * | Field       | Type  | ----------- | ----  | **----------- READ-ONLY -----------** |  | `id`        | int64  | `ver`       | int32  | `etag`      | string  | **---------- OPERATIONAL ----------** |  | `created_at` | int64(epoch:milli)  | `created_by` | lookup(user)  | `updated_at` | int64(epoch:milli)  | `updated_by` | lookup(user)  | **---------- ATTRIBUTES -----------** |  | `name`      | name!  | `home_page`   | string (home_page)  | `state`       | bool  | `has_children`| bool
     * @param {number} [page]
     * @param {number} [size] Limit of result page records count.   _default(16); limit&#x3D;(size&lt;&#x3D;0?-1:size+1);_  &#x60;&#x60;&#x60;javascript const     default &#x3D; 16   , maximum &#x3D; 32 ;  &#x60;&#x60;&#x60;
     * @param {string} [q] Search term: &#x60;?&#x60; - matches any character &#x60;*&#x60; - matches 0 or more characters Used to query records within a set of &#x60;qin&#x60; fields, eg: name, etc...
     * @param {Array<string>} [sort] Sort result dataset of records by fields. &#x60;&#x60;&#x60; sort ::&#x3D; *( ORDER name )  ORDER  &#x3D; ASC / DESC DESC   &#x3D; \&quot;-\&quot; / \&quot;!\&quot; ASC    &#x3D; [ \&quot;+\&quot; ]   ; Default &#x60;&#x60;&#x60;  Fields available  - &#x60;id&#x60;(seq) - &#x60;domain&#x60;{name} - &#x60;state&#x60;
     * @param {Array<string>} [fields]
     * @param {Array<string>} [id] Records with unique IDentifier(s). Accept: &#x60;id&#x60; -or- &#x60;etag&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSpaces: async (
      page?: number,
      size?: number,
      q?: string,
      sort?: Array<string>,
      fields?: Array<string>,
      id?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/spaces`
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

      if (sort) {
        localVarQueryParameter['sort'] = sort
      }

      if (fields) {
        localVarQueryParameter['fields'] = fields
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
     * @summary Locate spaces source
     * @param {string} etag The Space source IDentifier. Accept: &#x60;etag&#x60; (obsolete+) or &#x60;id&#x60;.
     * @param {Array<string>} [fields] Source Fields to return into result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateSpaces: async (
      etag: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'etag' is not null or undefined
      if (etag === null || etag === undefined) {
        throw new RequiredError(
          'etag',
          'Required parameter etag was null or undefined when calling locateSpaces.'
        )
      }
      const localVarPath = `/spaces/{etag}`.replace(
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
     * @summary NEW Update of the Space source
     * @param {string} etag Unique ID of the latest version of an existing resorce.
     * @param {NEWSpaceSourceChanges} input
     * @param {Array<string>} [fields] Source Fields to return into result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSpace: async (
      etag: string,
      input: NEWSpaceSourceChanges,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'etag' is not null or undefined
      if (etag === null || etag === undefined) {
        throw new RequiredError(
          'etag',
          'Required parameter etag was null or undefined when calling updateSpace.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateSpace.'
        )
      }
      const localVarPath = `/spaces/{etag}`.replace(
        `{${'etag'}}`,
        encodeURIComponent(String(etag))
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
 * SpacesApi - functional programming interface
 * @export
 */
export const SpacesApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create NEW Space
     * @param {Array<WebitelKnowledgebaseInputSpace>} input NEW Spaces source changes
     * @param {Array<string>} [fields] Source Fields to return into result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSpace(
      input: Array<WebitelKnowledgebaseInputSpace>,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelKnowledgebaseSpace>
    > {
      const localVarAxiosArgs = await SpacesApiAxiosParamCreator(
        configuration
      ).createSpace(input, fields, options)
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
     * @summary Remove Space source
     * @param {string} etag Unique ID of the latest version of a resource.
     * @param {Array<string>} [fields] Fields to be retrieved into result of changes.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSpace(
      etag: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelKnowledgebaseSpace>
    > {
      const localVarAxiosArgs = await SpacesApiAxiosParamCreator(
        configuration
      ).deleteSpace(etag, fields, options)
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
     * | Field       | Type  | ----------- | ----  | **----------- READ-ONLY -----------** |  | `id`        | int64  | `ver`       | int32  | `etag`      | string  | **---------- OPERATIONAL ----------** |  | `created_at` | int64(epoch:milli)  | `created_by` | lookup(user)  | `updated_at` | int64(epoch:milli)  | `updated_by` | lookup(user)  | **---------- ATTRIBUTES -----------** |  | `name`      | name!  | `home_page`   | string (home_page)  | `state`       | bool  | `has_children`| bool
     * @param {number} [page]
     * @param {number} [size] Limit of result page records count.   _default(16); limit&#x3D;(size&lt;&#x3D;0?-1:size+1);_  &#x60;&#x60;&#x60;javascript const     default &#x3D; 16   , maximum &#x3D; 32 ;  &#x60;&#x60;&#x60;
     * @param {string} [q] Search term: &#x60;?&#x60; - matches any character &#x60;*&#x60; - matches 0 or more characters Used to query records within a set of &#x60;qin&#x60; fields, eg: name, etc...
     * @param {Array<string>} [sort] Sort result dataset of records by fields. &#x60;&#x60;&#x60; sort ::&#x3D; *( ORDER name )  ORDER  &#x3D; ASC / DESC DESC   &#x3D; \&quot;-\&quot; / \&quot;!\&quot; ASC    &#x3D; [ \&quot;+\&quot; ]   ; Default &#x60;&#x60;&#x60;  Fields available  - &#x60;id&#x60;(seq) - &#x60;domain&#x60;{name} - &#x60;state&#x60;
     * @param {Array<string>} [fields]
     * @param {Array<string>} [id] Records with unique IDentifier(s). Accept: &#x60;id&#x60; -or- &#x60;etag&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSpaces(
      page?: number,
      size?: number,
      q?: string,
      sort?: Array<string>,
      fields?: Array<string>,
      id?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelKnowledgebaseSpaceList>
    > {
      const localVarAxiosArgs = await SpacesApiAxiosParamCreator(
        configuration
      ).listSpaces(page, size, q, sort, fields, id, options)
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
     * @summary Locate spaces source
     * @param {string} etag The Space source IDentifier. Accept: &#x60;etag&#x60; (obsolete+) or &#x60;id&#x60;.
     * @param {Array<string>} [fields] Source Fields to return into result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async locateSpaces(
      etag: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelKnowledgebaseSpace>
    > {
      const localVarAxiosArgs = await SpacesApiAxiosParamCreator(
        configuration
      ).locateSpaces(etag, fields, options)
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
     * @summary NEW Update of the Space source
     * @param {string} etag Unique ID of the latest version of an existing resorce.
     * @param {NEWSpaceSourceChanges} input
     * @param {Array<string>} [fields] Source Fields to return into result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSpace(
      etag: string,
      input: NEWSpaceSourceChanges,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelKnowledgebaseSpace>
    > {
      const localVarAxiosArgs = await SpacesApiAxiosParamCreator(
        configuration
      ).updateSpace(etag, input, fields, options)
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
 * SpacesApi - factory interface
 * @export
 */
export const SpacesApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create NEW Space
     * @param {Array<WebitelKnowledgebaseInputSpace>} input NEW Spaces source changes
     * @param {Array<string>} [fields] Source Fields to return into result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSpace(
      input: Array<WebitelKnowledgebaseInputSpace>,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelKnowledgebaseSpace> {
      return SpacesApiFp(configuration)
        .createSpace(input, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Remove Space source
     * @param {string} etag Unique ID of the latest version of a resource.
     * @param {Array<string>} [fields] Fields to be retrieved into result of changes.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSpace(
      etag: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelKnowledgebaseSpace> {
      return SpacesApiFp(configuration)
        .deleteSpace(etag, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * | Field       | Type  | ----------- | ----  | **----------- READ-ONLY -----------** |  | `id`        | int64  | `ver`       | int32  | `etag`      | string  | **---------- OPERATIONAL ----------** |  | `created_at` | int64(epoch:milli)  | `created_by` | lookup(user)  | `updated_at` | int64(epoch:milli)  | `updated_by` | lookup(user)  | **---------- ATTRIBUTES -----------** |  | `name`      | name!  | `home_page`   | string (home_page)  | `state`       | bool  | `has_children`| bool
     * @param {number} [page]
     * @param {number} [size] Limit of result page records count.   _default(16); limit&#x3D;(size&lt;&#x3D;0?-1:size+1);_  &#x60;&#x60;&#x60;javascript const     default &#x3D; 16   , maximum &#x3D; 32 ;  &#x60;&#x60;&#x60;
     * @param {string} [q] Search term: &#x60;?&#x60; - matches any character &#x60;*&#x60; - matches 0 or more characters Used to query records within a set of &#x60;qin&#x60; fields, eg: name, etc...
     * @param {Array<string>} [sort] Sort result dataset of records by fields. &#x60;&#x60;&#x60; sort ::&#x3D; *( ORDER name )  ORDER  &#x3D; ASC / DESC DESC   &#x3D; \&quot;-\&quot; / \&quot;!\&quot; ASC    &#x3D; [ \&quot;+\&quot; ]   ; Default &#x60;&#x60;&#x60;  Fields available  - &#x60;id&#x60;(seq) - &#x60;domain&#x60;{name} - &#x60;state&#x60;
     * @param {Array<string>} [fields]
     * @param {Array<string>} [id] Records with unique IDentifier(s). Accept: &#x60;id&#x60; -or- &#x60;etag&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSpaces(
      page?: number,
      size?: number,
      q?: string,
      sort?: Array<string>,
      fields?: Array<string>,
      id?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelKnowledgebaseSpaceList> {
      return SpacesApiFp(configuration)
        .listSpaces(page, size, q, sort, fields, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Locate spaces source
     * @param {string} etag The Space source IDentifier. Accept: &#x60;etag&#x60; (obsolete+) or &#x60;id&#x60;.
     * @param {Array<string>} [fields] Source Fields to return into result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateSpaces(
      etag: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelKnowledgebaseSpace> {
      return SpacesApiFp(configuration)
        .locateSpaces(etag, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary NEW Update of the Space source
     * @param {string} etag Unique ID of the latest version of an existing resorce.
     * @param {NEWSpaceSourceChanges} input
     * @param {Array<string>} [fields] Source Fields to return into result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSpace(
      etag: string,
      input: NEWSpaceSourceChanges,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelKnowledgebaseSpace> {
      return SpacesApiFp(configuration)
        .updateSpace(etag, input, fields, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * SpacesApi - object-oriented interface
 * @export
 * @class SpacesApi
 * @extends {BaseAPI}
 */
export class SpacesApi extends BaseAPI {
  /**
   *
   * @summary Create NEW Space
   * @param {Array<WebitelKnowledgebaseInputSpace>} input NEW Spaces source changes
   * @param {Array<string>} [fields] Source Fields to return into result.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public createSpace(
    input: Array<WebitelKnowledgebaseInputSpace>,
    fields?: Array<string>,
    options?: any
  ) {
    return SpacesApiFp(this.configuration)
      .createSpace(input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Remove Space source
   * @param {string} etag Unique ID of the latest version of a resource.
   * @param {Array<string>} [fields] Fields to be retrieved into result of changes.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public deleteSpace(etag: string, fields?: Array<string>, options?: any) {
    return SpacesApiFp(this.configuration)
      .deleteSpace(etag, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * | Field       | Type  | ----------- | ----  | **----------- READ-ONLY -----------** |  | `id`        | int64  | `ver`       | int32  | `etag`      | string  | **---------- OPERATIONAL ----------** |  | `created_at` | int64(epoch:milli)  | `created_by` | lookup(user)  | `updated_at` | int64(epoch:milli)  | `updated_by` | lookup(user)  | **---------- ATTRIBUTES -----------** |  | `name`      | name!  | `home_page`   | string (home_page)  | `state`       | bool  | `has_children`| bool
   * @param {number} [page]
   * @param {number} [size] Limit of result page records count.   _default(16); limit&#x3D;(size&lt;&#x3D;0?-1:size+1);_  &#x60;&#x60;&#x60;javascript const     default &#x3D; 16   , maximum &#x3D; 32 ;  &#x60;&#x60;&#x60;
   * @param {string} [q] Search term: &#x60;?&#x60; - matches any character &#x60;*&#x60; - matches 0 or more characters Used to query records within a set of &#x60;qin&#x60; fields, eg: name, etc...
   * @param {Array<string>} [sort] Sort result dataset of records by fields. &#x60;&#x60;&#x60; sort ::&#x3D; *( ORDER name )  ORDER  &#x3D; ASC / DESC DESC   &#x3D; \&quot;-\&quot; / \&quot;!\&quot; ASC    &#x3D; [ \&quot;+\&quot; ]   ; Default &#x60;&#x60;&#x60;  Fields available  - &#x60;id&#x60;(seq) - &#x60;domain&#x60;{name} - &#x60;state&#x60;
   * @param {Array<string>} [fields]
   * @param {Array<string>} [id] Records with unique IDentifier(s). Accept: &#x60;id&#x60; -or- &#x60;etag&#x60;.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public listSpaces(
    page?: number,
    size?: number,
    q?: string,
    sort?: Array<string>,
    fields?: Array<string>,
    id?: Array<string>,
    options?: any
  ) {
    return SpacesApiFp(this.configuration)
      .listSpaces(page, size, q, sort, fields, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Locate spaces source
   * @param {string} etag The Space source IDentifier. Accept: &#x60;etag&#x60; (obsolete+) or &#x60;id&#x60;.
   * @param {Array<string>} [fields] Source Fields to return into result.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public locateSpaces(etag: string, fields?: Array<string>, options?: any) {
    return SpacesApiFp(this.configuration)
      .locateSpaces(etag, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary NEW Update of the Space source
   * @param {string} etag Unique ID of the latest version of an existing resorce.
   * @param {NEWSpaceSourceChanges} input
   * @param {Array<string>} [fields] Source Fields to return into result.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpacesApi
   */
  public updateSpace(
    etag: string,
    input: NEWSpaceSourceChanges,
    fields?: Array<string>,
    options?: any
  ) {
    return SpacesApiFp(this.configuration)
      .updateSpace(etag, input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
