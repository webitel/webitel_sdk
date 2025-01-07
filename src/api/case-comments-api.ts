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
import { CasesCaseComment } from '../api'
// @ts-ignore
import { CasesCaseCommentList } from '../api'
// @ts-ignore
import { CasesInputCaseComment } from '../api'
// @ts-ignore
import { DataForTheCommentToUpdate } from '../api'
// @ts-ignore
import { DataForTheCommentToUpdate1 } from '../api'
// @ts-ignore
import { GooglerpcStatus } from '../api'
/**
 * CaseCommentsApi - axios parameter creator
 * @export
 */
export const CaseCommentsApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Delete a specific comment by its id
     * @param {string} id Identifier of the comment to delete.
     * @param {Array<string>} [fields] Fields to return after deletion.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteComment: async (
      id: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteComment.'
        )
      }
      const localVarPath = `/cases/comments/{id}`.replace(
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
     * @summary Retrieve a list of comments associated with a specific case
     * @param {string} caseId Etag or ID of the case for which comments are requested.
     * @param {number} [page] Page number for pagination.
     * @param {number} [size] Number of comments per page.
     * @param {string} [q] Query string for search.
     * @param {Array<string>} [ids] Array of requested id.
     * @param {string} [sort] Sorting order.
     * @param {Array<string>} [fields] Fields to return for each comment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listComments: async (
      caseId: string,
      page?: number,
      size?: number,
      q?: string,
      ids?: Array<string>,
      sort?: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseId' is not null or undefined
      if (caseId === null || caseId === undefined) {
        throw new RequiredError(
          'caseId',
          'Required parameter caseId was null or undefined when calling listComments.'
        )
      }
      const localVarPath = `/cases/{caseId}/comments`.replace(
        `{${'caseId'}}`,
        encodeURIComponent(String(caseId))
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
     * @summary Retrieve a specific comment by its id
     * @param {string} id Identifier of the comment to retrieve.
     * @param {Array<string>} [fields] Specific fields to return for the comment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateComment: async (
      id: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling locateComment.'
        )
      }
      const localVarPath = `/cases/comments/{id}`.replace(
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
     * @summary Publish comment into a specific case
     * @param {string} caseId Etag or ID of the case to which comments belong.
     * @param {CasesInputCaseComment} input Comment to publish.
     * @param {Array<string>} [fields] Result fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishComment: async (
      caseId: string,
      input: CasesInputCaseComment,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseId' is not null or undefined
      if (caseId === null || caseId === undefined) {
        throw new RequiredError(
          'caseId',
          'Required parameter caseId was null or undefined when calling publishComment.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling publishComment.'
        )
      }
      const localVarPath = `/cases/{caseId}/comments`.replace(
        `{${'caseId'}}`,
        encodeURIComponent(String(caseId))
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
     * @summary Update a specific comment by its id
     * @param {string} inputId Identifier for the comment.
     * @param {DataForTheCommentToUpdate} input
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateComment: async (
      inputId: string,
      input: DataForTheCommentToUpdate,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'inputId' is not null or undefined
      if (inputId === null || inputId === undefined) {
        throw new RequiredError(
          'inputId',
          'Required parameter inputId was null or undefined when calling updateComment.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateComment.'
        )
      }
      const localVarPath = `/cases/comments/{input.id}`.replace(
        `{${'input.id'}}`,
        encodeURIComponent(String(inputId))
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
     * @summary Update a specific comment by its id
     * @param {string} inputId Identifier for the comment.
     * @param {DataForTheCommentToUpdate1} input
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateComment2: async (
      inputId: string,
      input: DataForTheCommentToUpdate1,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'inputId' is not null or undefined
      if (inputId === null || inputId === undefined) {
        throw new RequiredError(
          'inputId',
          'Required parameter inputId was null or undefined when calling updateComment2.'
        )
      }
      // verify required parameter 'input' is not null or undefined
      if (input === null || input === undefined) {
        throw new RequiredError(
          'input',
          'Required parameter input was null or undefined when calling updateComment2.'
        )
      }
      const localVarPath = `/cases/comments/{input.id}`.replace(
        `{${'input.id'}}`,
        encodeURIComponent(String(inputId))
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
 * CaseCommentsApi - functional programming interface
 * @export
 */
export const CaseCommentsApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Delete a specific comment by its id
     * @param {string} id Identifier of the comment to delete.
     * @param {Array<string>} [fields] Fields to return after deletion.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteComment(
      id: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesCaseComment>
    > {
      const localVarAxiosArgs = await CaseCommentsApiAxiosParamCreator(
        configuration
      ).deleteComment(id, fields, options)
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
     * @summary Retrieve a list of comments associated with a specific case
     * @param {string} caseId Etag or ID of the case for which comments are requested.
     * @param {number} [page] Page number for pagination.
     * @param {number} [size] Number of comments per page.
     * @param {string} [q] Query string for search.
     * @param {Array<string>} [ids] Array of requested id.
     * @param {string} [sort] Sorting order.
     * @param {Array<string>} [fields] Fields to return for each comment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listComments(
      caseId: string,
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
      ) => AxiosPromise<CasesCaseCommentList>
    > {
      const localVarAxiosArgs = await CaseCommentsApiAxiosParamCreator(
        configuration
      ).listComments(caseId, page, size, q, ids, sort, fields, options)
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
     * @summary Retrieve a specific comment by its id
     * @param {string} id Identifier of the comment to retrieve.
     * @param {Array<string>} [fields] Specific fields to return for the comment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async locateComment(
      id: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesCaseComment>
    > {
      const localVarAxiosArgs = await CaseCommentsApiAxiosParamCreator(
        configuration
      ).locateComment(id, fields, options)
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
     * @summary Publish comment into a specific case
     * @param {string} caseId Etag or ID of the case to which comments belong.
     * @param {CasesInputCaseComment} input Comment to publish.
     * @param {Array<string>} [fields] Result fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async publishComment(
      caseId: string,
      input: CasesInputCaseComment,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesCaseComment>
    > {
      const localVarAxiosArgs = await CaseCommentsApiAxiosParamCreator(
        configuration
      ).publishComment(caseId, input, fields, options)
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
     * @summary Update a specific comment by its id
     * @param {string} inputId Identifier for the comment.
     * @param {DataForTheCommentToUpdate} input
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateComment(
      inputId: string,
      input: DataForTheCommentToUpdate,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesCaseComment>
    > {
      const localVarAxiosArgs = await CaseCommentsApiAxiosParamCreator(
        configuration
      ).updateComment(inputId, input, fields, options)
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
     * @summary Update a specific comment by its id
     * @param {string} inputId Identifier for the comment.
     * @param {DataForTheCommentToUpdate1} input
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateComment2(
      inputId: string,
      input: DataForTheCommentToUpdate1,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesCaseComment>
    > {
      const localVarAxiosArgs = await CaseCommentsApiAxiosParamCreator(
        configuration
      ).updateComment2(inputId, input, fields, options)
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
 * CaseCommentsApi - factory interface
 * @export
 */
export const CaseCommentsApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Delete a specific comment by its id
     * @param {string} id Identifier of the comment to delete.
     * @param {Array<string>} [fields] Fields to return after deletion.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteComment(
      id: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesCaseComment> {
      return CaseCommentsApiFp(configuration)
        .deleteComment(id, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Retrieve a list of comments associated with a specific case
     * @param {string} caseId Etag or ID of the case for which comments are requested.
     * @param {number} [page] Page number for pagination.
     * @param {number} [size] Number of comments per page.
     * @param {string} [q] Query string for search.
     * @param {Array<string>} [ids] Array of requested id.
     * @param {string} [sort] Sorting order.
     * @param {Array<string>} [fields] Fields to return for each comment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listComments(
      caseId: string,
      page?: number,
      size?: number,
      q?: string,
      ids?: Array<string>,
      sort?: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesCaseCommentList> {
      return CaseCommentsApiFp(configuration)
        .listComments(caseId, page, size, q, ids, sort, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Retrieve a specific comment by its id
     * @param {string} id Identifier of the comment to retrieve.
     * @param {Array<string>} [fields] Specific fields to return for the comment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locateComment(
      id: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesCaseComment> {
      return CaseCommentsApiFp(configuration)
        .locateComment(id, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Publish comment into a specific case
     * @param {string} caseId Etag or ID of the case to which comments belong.
     * @param {CasesInputCaseComment} input Comment to publish.
     * @param {Array<string>} [fields] Result fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishComment(
      caseId: string,
      input: CasesInputCaseComment,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesCaseComment> {
      return CaseCommentsApiFp(configuration)
        .publishComment(caseId, input, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update a specific comment by its id
     * @param {string} inputId Identifier for the comment.
     * @param {DataForTheCommentToUpdate} input
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateComment(
      inputId: string,
      input: DataForTheCommentToUpdate,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesCaseComment> {
      return CaseCommentsApiFp(configuration)
        .updateComment(inputId, input, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update a specific comment by its id
     * @param {string} inputId Identifier for the comment.
     * @param {DataForTheCommentToUpdate1} input
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateComment2(
      inputId: string,
      input: DataForTheCommentToUpdate1,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesCaseComment> {
      return CaseCommentsApiFp(configuration)
        .updateComment2(inputId, input, fields, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * CaseCommentsApi - object-oriented interface
 * @export
 * @class CaseCommentsApi
 * @extends {BaseAPI}
 */
export class CaseCommentsApi extends BaseAPI {
  /**
   *
   * @summary Delete a specific comment by its id
   * @param {string} id Identifier of the comment to delete.
   * @param {Array<string>} [fields] Fields to return after deletion.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseCommentsApi
   */
  public deleteComment(id: string, fields?: Array<string>, options?: any) {
    return CaseCommentsApiFp(this.configuration)
      .deleteComment(id, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Retrieve a list of comments associated with a specific case
   * @param {string} caseId Etag or ID of the case for which comments are requested.
   * @param {number} [page] Page number for pagination.
   * @param {number} [size] Number of comments per page.
   * @param {string} [q] Query string for search.
   * @param {Array<string>} [ids] Array of requested id.
   * @param {string} [sort] Sorting order.
   * @param {Array<string>} [fields] Fields to return for each comment.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseCommentsApi
   */
  public listComments(
    caseId: string,
    page?: number,
    size?: number,
    q?: string,
    ids?: Array<string>,
    sort?: string,
    fields?: Array<string>,
    options?: any
  ) {
    return CaseCommentsApiFp(this.configuration)
      .listComments(caseId, page, size, q, ids, sort, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Retrieve a specific comment by its id
   * @param {string} id Identifier of the comment to retrieve.
   * @param {Array<string>} [fields] Specific fields to return for the comment.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseCommentsApi
   */
  public locateComment(id: string, fields?: Array<string>, options?: any) {
    return CaseCommentsApiFp(this.configuration)
      .locateComment(id, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Publish comment into a specific case
   * @param {string} caseId Etag or ID of the case to which comments belong.
   * @param {CasesInputCaseComment} input Comment to publish.
   * @param {Array<string>} [fields] Result fields to include in the response.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseCommentsApi
   */
  public publishComment(
    caseId: string,
    input: CasesInputCaseComment,
    fields?: Array<string>,
    options?: any
  ) {
    return CaseCommentsApiFp(this.configuration)
      .publishComment(caseId, input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update a specific comment by its id
   * @param {string} inputId Identifier for the comment.
   * @param {DataForTheCommentToUpdate} input
   * @param {Array<string>} [fields] Fields to include in the response.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseCommentsApi
   */
  public updateComment(
    inputId: string,
    input: DataForTheCommentToUpdate,
    fields?: Array<string>,
    options?: any
  ) {
    return CaseCommentsApiFp(this.configuration)
      .updateComment(inputId, input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update a specific comment by its id
   * @param {string} inputId Identifier for the comment.
   * @param {DataForTheCommentToUpdate1} input
   * @param {Array<string>} [fields] Fields to include in the response.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseCommentsApi
   */
  public updateComment2(
    inputId: string,
    input: DataForTheCommentToUpdate1,
    fields?: Array<string>,
    options?: any
  ) {
    return CaseCommentsApiFp(this.configuration)
      .updateComment2(inputId, input, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }
}