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
import { GoogleRpcStatus } from '../api'
// @ts-ignore
import { InlineObject } from '../api'
// @ts-ignore
import { InlineObject1 } from '../api'
// @ts-ignore
import { WebitelCasesCaseLink } from '../api'
// @ts-ignore
import { WebitelCasesCaseLinkList } from '../api'
/**
 * CaseLinksApi - axios parameter creator
 * @export
 */
export const CaseLinksApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} caseEtag new comment link
     * @param {Array<string>} [fields] result fields needed on the front-end for each comment
     * @param {string} [inputEtag]
     * @param {string} [inputUrl]
     * @param {string} [inputName]
     * @param {string} [inputUserIDId]
     * @param {string} [inputUserIDName]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLink: async (
      caseEtag: string,
      fields?: Array<string>,
      inputEtag?: string,
      inputUrl?: string,
      inputName?: string,
      inputUserIDId?: string,
      inputUserIDName?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseEtag' is not null or undefined
      if (caseEtag === null || caseEtag === undefined) {
        throw new RequiredError(
          'caseEtag',
          'Required parameter caseEtag was null or undefined when calling createLink.'
        )
      }
      const localVarPath = `/cases/{case_etag}/links`.replace(
        `{${'case_etag'}}`,
        encodeURIComponent(String(caseEtag))
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

      if (inputEtag !== undefined) {
        localVarQueryParameter['input.etag'] = inputEtag
      }

      if (inputUrl !== undefined) {
        localVarQueryParameter['input.url'] = inputUrl
      }

      if (inputName !== undefined) {
        localVarQueryParameter['input.name'] = inputName
      }

      if (inputUserIDId !== undefined) {
        localVarQueryParameter['input.userID.id'] = inputUserIDId
      }

      if (inputUserIDName !== undefined) {
        localVarQueryParameter['input.userID.name'] = inputUserIDName
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
     * @param {string} caseEtag
     * @param {string} etag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteLink: async (
      caseEtag: string,
      etag: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseEtag' is not null or undefined
      if (caseEtag === null || caseEtag === undefined) {
        throw new RequiredError(
          'caseEtag',
          'Required parameter caseEtag was null or undefined when calling deleteLink.'
        )
      }
      // verify required parameter 'etag' is not null or undefined
      if (etag === null || etag === undefined) {
        throw new RequiredError(
          'etag',
          'Required parameter etag was null or undefined when calling deleteLink.'
        )
      }
      const localVarPath = `/cases/{case_etag}/links/{etag}`
        .replace(`{${'case_etag'}}`, encodeURIComponent(String(caseEtag)))
        .replace(`{${'etag'}}`, encodeURIComponent(String(etag)))
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
     * @summary With Case
     * @param {string} caseEtag
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {Array<string>} [ids]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLinks: async (
      caseEtag: string,
      page?: number,
      size?: number,
      q?: string,
      ids?: Array<string>,
      sort?: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseEtag' is not null or undefined
      if (caseEtag === null || caseEtag === undefined) {
        throw new RequiredError(
          'caseEtag',
          'Required parameter caseEtag was null or undefined when calling listLinks.'
        )
      }
      const localVarPath = `/cases/{case_etag}/links`.replace(
        `{${'case_etag'}}`,
        encodeURIComponent(String(caseEtag))
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

      if (ids) {
        localVarQueryParameter['ids'] = ids
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
     * @param {string} caseEtag
     * @param {string} etag (id allowed)
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateLink: async (
      caseEtag: string,
      etag: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseEtag' is not null or undefined
      if (caseEtag === null || caseEtag === undefined) {
        throw new RequiredError(
          'caseEtag',
          'Required parameter caseEtag was null or undefined when calling locateLink.'
        )
      }
      // verify required parameter 'etag' is not null or undefined
      if (etag === null || etag === undefined) {
        throw new RequiredError(
          'etag',
          'Required parameter etag was null or undefined when calling locateLink.'
        )
      }
      const localVarPath = `/cases/{case_etag}/links/{etag}`
        .replace(`{${'case_etag'}}`, encodeURIComponent(String(caseEtag)))
        .replace(`{${'etag'}}`, encodeURIComponent(String(etag)))
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
     * @param {string} caseEtag
     * @param {string} inputEtag
     * @param {InlineObject} input
     * @param {Array<string>} [fields] on return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLink: async (
      caseEtag: string,
      inputEtag: string,
      input: InlineObject,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseEtag' is not null or undefined
      if (caseEtag === null || caseEtag === undefined) {
        throw new RequiredError(
          'caseEtag',
          'Required parameter caseEtag was null or undefined when calling updateLink.'
        )
      }
      // verify required parameter 'inputEtag' is not null or undefined
      if (inputEtag === null || inputEtag === undefined) {
        throw new RequiredError(
          'inputEtag',
          'Required parameter inputEtag was null or undefined when calling updateLink.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateLink.'
        )
      }
      const localVarPath = `/cases/{case_etag}/links/{input.etag}`
        .replace(`{${'case_etag'}}`, encodeURIComponent(String(caseEtag)))
        .replace(`{${'input.etag'}}`, encodeURIComponent(String(inputEtag)))
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
     * @param {string} caseEtag
     * @param {string} inputEtag
     * @param {InlineObject1} input
     * @param {Array<string>} [fields] on return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLink2: async (
      caseEtag: string,
      inputEtag: string,
      input: InlineObject1,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseEtag' is not null or undefined
      if (caseEtag === null || caseEtag === undefined) {
        throw new RequiredError(
          'caseEtag',
          'Required parameter caseEtag was null or undefined when calling updateLink2.'
        )
      }
      // verify required parameter 'inputEtag' is not null or undefined
      if (inputEtag === null || inputEtag === undefined) {
        throw new RequiredError(
          'inputEtag',
          'Required parameter inputEtag was null or undefined when calling updateLink2.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateLink2.'
        )
      }
      const localVarPath = `/cases/{case_etag}/links/{input.etag}`
        .replace(`{${'case_etag'}}`, encodeURIComponent(String(caseEtag)))
        .replace(`{${'input.etag'}}`, encodeURIComponent(String(inputEtag)))
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
 * CaseLinksApi - functional programming interface
 * @export
 */
export const CaseLinksApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {string} caseEtag new comment link
     * @param {Array<string>} [fields] result fields needed on the front-end for each comment
     * @param {string} [inputEtag]
     * @param {string} [inputUrl]
     * @param {string} [inputName]
     * @param {string} [inputUserIDId]
     * @param {string} [inputUserIDName]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createLink(
      caseEtag: string,
      fields?: Array<string>,
      inputEtag?: string,
      inputUrl?: string,
      inputName?: string,
      inputUserIDId?: string,
      inputUserIDName?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelCasesCaseLink>
    > {
      const localVarAxiosArgs = await CaseLinksApiAxiosParamCreator(
        configuration
      ).createLink(
        caseEtag,
        fields,
        inputEtag,
        inputUrl,
        inputName,
        inputUserIDId,
        inputUserIDName,
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
     * @param {string} caseEtag
     * @param {string} etag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteLink(
      caseEtag: string,
      etag: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelCasesCaseLink>
    > {
      const localVarAxiosArgs = await CaseLinksApiAxiosParamCreator(
        configuration
      ).deleteLink(caseEtag, etag, options)
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
     * @summary With Case
     * @param {string} caseEtag
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {Array<string>} [ids]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listLinks(
      caseEtag: string,
      page?: number,
      size?: number,
      q?: string,
      ids?: Array<string>,
      sort?: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelCasesCaseLinkList>
    > {
      const localVarAxiosArgs = await CaseLinksApiAxiosParamCreator(
        configuration
      ).listLinks(caseEtag, page, size, q, ids, sort, fields, options)
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
     * @param {string} caseEtag
     * @param {string} etag (id allowed)
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async locateLink(
      caseEtag: string,
      etag: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelCasesCaseLink>
    > {
      const localVarAxiosArgs = await CaseLinksApiAxiosParamCreator(
        configuration
      ).locateLink(caseEtag, etag, fields, options)
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
     * @param {string} caseEtag
     * @param {string} inputEtag
     * @param {InlineObject} input
     * @param {Array<string>} [fields] on return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateLink(
      caseEtag: string,
      inputEtag: string,
      input: InlineObject,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelCasesCaseLink>
    > {
      const localVarAxiosArgs = await CaseLinksApiAxiosParamCreator(
        configuration
      ).updateLink(caseEtag, inputEtag, input, fields, options)
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
     * @param {string} caseEtag
     * @param {string} inputEtag
     * @param {InlineObject1} input
     * @param {Array<string>} [fields] on return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateLink2(
      caseEtag: string,
      inputEtag: string,
      input: InlineObject1,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WebitelCasesCaseLink>
    > {
      const localVarAxiosArgs = await CaseLinksApiAxiosParamCreator(
        configuration
      ).updateLink2(caseEtag, inputEtag, input, fields, options)
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
 * CaseLinksApi - factory interface
 * @export
 */
export const CaseLinksApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {string} caseEtag new comment link
     * @param {Array<string>} [fields] result fields needed on the front-end for each comment
     * @param {string} [inputEtag]
     * @param {string} [inputUrl]
     * @param {string} [inputName]
     * @param {string} [inputUserIDId]
     * @param {string} [inputUserIDName]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLink(
      caseEtag: string,
      fields?: Array<string>,
      inputEtag?: string,
      inputUrl?: string,
      inputName?: string,
      inputUserIDId?: string,
      inputUserIDName?: string,
      options?: any
    ): AxiosPromise<WebitelCasesCaseLink> {
      return CaseLinksApiFp(configuration)
        .createLink(
          caseEtag,
          fields,
          inputEtag,
          inputUrl,
          inputName,
          inputUserIDId,
          inputUserIDName,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} caseEtag
     * @param {string} etag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteLink(
      caseEtag: string,
      etag: string,
      options?: any
    ): AxiosPromise<WebitelCasesCaseLink> {
      return CaseLinksApiFp(configuration)
        .deleteLink(caseEtag, etag, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary With Case
     * @param {string} caseEtag
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {Array<string>} [ids]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLinks(
      caseEtag: string,
      page?: number,
      size?: number,
      q?: string,
      ids?: Array<string>,
      sort?: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelCasesCaseLinkList> {
      return CaseLinksApiFp(configuration)
        .listLinks(caseEtag, page, size, q, ids, sort, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} caseEtag
     * @param {string} etag (id allowed)
     * @param {Array<string>} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateLink(
      caseEtag: string,
      etag: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelCasesCaseLink> {
      return CaseLinksApiFp(configuration)
        .locateLink(caseEtag, etag, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} caseEtag
     * @param {string} inputEtag
     * @param {InlineObject} input
     * @param {Array<string>} [fields] on return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLink(
      caseEtag: string,
      inputEtag: string,
      input: InlineObject,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelCasesCaseLink> {
      return CaseLinksApiFp(configuration)
        .updateLink(caseEtag, inputEtag, input, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} caseEtag
     * @param {string} inputEtag
     * @param {InlineObject1} input
     * @param {Array<string>} [fields] on return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLink2(
      caseEtag: string,
      inputEtag: string,
      input: InlineObject1,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelCasesCaseLink> {
      return CaseLinksApiFp(configuration)
        .updateLink2(caseEtag, inputEtag, input, fields, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * CaseLinksApi - object-oriented interface
 * @export
 * @class CaseLinksApi
 * @extends {BaseAPI}
 */
export class CaseLinksApi extends BaseAPI {
  /**
   *
   * @param {string} caseEtag new comment link
   * @param {Array<string>} [fields] result fields needed on the front-end for each comment
   * @param {string} [inputEtag]
   * @param {string} [inputUrl]
   * @param {string} [inputName]
   * @param {string} [inputUserIDId]
   * @param {string} [inputUserIDName]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseLinksApi
   */
  public createLink(
    caseEtag: string,
    fields?: Array<string>,
    inputEtag?: string,
    inputUrl?: string,
    inputName?: string,
    inputUserIDId?: string,
    inputUserIDName?: string,
    options?: any
  ) {
    return CaseLinksApiFp(this.configuration)
      .createLink(
        caseEtag,
        fields,
        inputEtag,
        inputUrl,
        inputName,
        inputUserIDId,
        inputUserIDName,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} caseEtag
   * @param {string} etag
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseLinksApi
   */
  public deleteLink(caseEtag: string, etag: string, options?: any) {
    return CaseLinksApiFp(this.configuration)
      .deleteLink(caseEtag, etag, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary With Case
   * @param {string} caseEtag
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {Array<string>} [ids]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseLinksApi
   */
  public listLinks(
    caseEtag: string,
    page?: number,
    size?: number,
    q?: string,
    ids?: Array<string>,
    sort?: string,
    fields?: Array<string>,
    options?: any
  ) {
    return CaseLinksApiFp(this.configuration)
      .listLinks(caseEtag, page, size, q, ids, sort, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} caseEtag
   * @param {string} etag (id allowed)
   * @param {Array<string>} [fields]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseLinksApi
   */
  public locateLink(
    caseEtag: string,
    etag: string,
    fields?: Array<string>,
    options?: any
  ) {
    return CaseLinksApiFp(this.configuration)
      .locateLink(caseEtag, etag, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} caseEtag
   * @param {string} inputEtag
   * @param {InlineObject} input
   * @param {Array<string>} [fields] on return
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseLinksApi
   */
  public updateLink(
    caseEtag: string,
    inputEtag: string,
    input: InlineObject,
    fields?: Array<string>,
    options?: any
  ) {
    return CaseLinksApiFp(this.configuration)
      .updateLink(caseEtag, inputEtag, input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} caseEtag
   * @param {string} inputEtag
   * @param {InlineObject1} input
   * @param {Array<string>} [fields] on return
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseLinksApi
   */
  public updateLink2(
    caseEtag: string,
    inputEtag: string,
    input: InlineObject1,
    fields?: Array<string>,
    options?: any
  ) {
    return CaseLinksApiFp(this.configuration)
      .updateLink2(caseEtag, inputEtag, input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
