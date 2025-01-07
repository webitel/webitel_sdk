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
import { CasesLinkCommunicationResponse } from '../api'
// @ts-ignore
import { CasesListCommunicationsResponse } from '../api'
// @ts-ignore
import { CasesUnlinkCommunicationResponse } from '../api'
// @ts-ignore
import { GooglerpcStatus } from '../api'
/**
 * CaseCommunicationsApi - axios parameter creator
 * @export
 */
export const CaseCommunicationsApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Links a communication to a specific case.
     * @param {string} caseId Case identifier.
     * @param {Array<string>} [fields] List of fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    linkCommunication: async (
      caseId: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseId' is not null or undefined
      if (caseId === null || caseId === undefined) {
        throw new RequiredError(
          'caseId',
          'Required parameter caseId was null or undefined when calling linkCommunication.'
        )
      }
      const localVarPath = `/cases/{caseId}/communication`.replace(
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
     * @summary Lists all communications linked to a specific case. Currently a feature for future development.
     * @param {string} caseId Case identifier.
     * @param {Array<string>} [fields] List of fields to include in the response.
     * @param {string} [q] Query string for filtering results.
     * @param {number} [size] Number of records per page.
     * @param {number} [page] Page number for pagination.
     * @param {string} [sort] Sorting order.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCommunications: async (
      caseId: string,
      fields?: Array<string>,
      q?: string,
      size?: number,
      page?: number,
      sort?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseId' is not null or undefined
      if (caseId === null || caseId === undefined) {
        throw new RequiredError(
          'caseId',
          'Required parameter caseId was null or undefined when calling listCommunications.'
        )
      }
      const localVarPath = `/cases/{caseId}/communication`.replace(
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

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      if (size !== undefined) {
        localVarQueryParameter['size'] = size
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
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
     * @summary Unlinks a communication from a specific case.
     * @param {string} caseId
     * @param {string} id Communication identifier.
     * @param {Array<string>} [fields] List of fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unlinkCommunication: async (
      caseId: string,
      id: string,
      fields?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseId' is not null or undefined
      if (caseId === null || caseId === undefined) {
        throw new RequiredError(
          'caseId',
          'Required parameter caseId was null or undefined when calling unlinkCommunication.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling unlinkCommunication.'
        )
      }
      const localVarPath = `/cases/{caseId}/communication/{id}`
        .replace(`{${'caseId'}}`, encodeURIComponent(String(caseId)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
  }
}

/**
 * CaseCommunicationsApi - functional programming interface
 * @export
 */
export const CaseCommunicationsApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Links a communication to a specific case.
     * @param {string} caseId Case identifier.
     * @param {Array<string>} [fields] List of fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async linkCommunication(
      caseId: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesLinkCommunicationResponse>
    > {
      const localVarAxiosArgs = await CaseCommunicationsApiAxiosParamCreator(
        configuration
      ).linkCommunication(caseId, fields, options)
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
     * @summary Lists all communications linked to a specific case. Currently a feature for future development.
     * @param {string} caseId Case identifier.
     * @param {Array<string>} [fields] List of fields to include in the response.
     * @param {string} [q] Query string for filtering results.
     * @param {number} [size] Number of records per page.
     * @param {number} [page] Page number for pagination.
     * @param {string} [sort] Sorting order.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listCommunications(
      caseId: string,
      fields?: Array<string>,
      q?: string,
      size?: number,
      page?: number,
      sort?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesListCommunicationsResponse>
    > {
      const localVarAxiosArgs = await CaseCommunicationsApiAxiosParamCreator(
        configuration
      ).listCommunications(caseId, fields, q, size, page, sort, options)
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
     * @summary Unlinks a communication from a specific case.
     * @param {string} caseId
     * @param {string} id Communication identifier.
     * @param {Array<string>} [fields] List of fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async unlinkCommunication(
      caseId: string,
      id: string,
      fields?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesUnlinkCommunicationResponse>
    > {
      const localVarAxiosArgs = await CaseCommunicationsApiAxiosParamCreator(
        configuration
      ).unlinkCommunication(caseId, id, fields, options)
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
 * CaseCommunicationsApi - factory interface
 * @export
 */
export const CaseCommunicationsApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Links a communication to a specific case.
     * @param {string} caseId Case identifier.
     * @param {Array<string>} [fields] List of fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    linkCommunication(
      caseId: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesLinkCommunicationResponse> {
      return CaseCommunicationsApiFp(configuration)
        .linkCommunication(caseId, fields, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Lists all communications linked to a specific case. Currently a feature for future development.
     * @param {string} caseId Case identifier.
     * @param {Array<string>} [fields] List of fields to include in the response.
     * @param {string} [q] Query string for filtering results.
     * @param {number} [size] Number of records per page.
     * @param {number} [page] Page number for pagination.
     * @param {string} [sort] Sorting order.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCommunications(
      caseId: string,
      fields?: Array<string>,
      q?: string,
      size?: number,
      page?: number,
      sort?: string,
      options?: any
    ): AxiosPromise<CasesListCommunicationsResponse> {
      return CaseCommunicationsApiFp(configuration)
        .listCommunications(caseId, fields, q, size, page, sort, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Unlinks a communication from a specific case.
     * @param {string} caseId
     * @param {string} id Communication identifier.
     * @param {Array<string>} [fields] List of fields to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unlinkCommunication(
      caseId: string,
      id: string,
      fields?: Array<string>,
      options?: any
    ): AxiosPromise<CasesUnlinkCommunicationResponse> {
      return CaseCommunicationsApiFp(configuration)
        .unlinkCommunication(caseId, id, fields, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * CaseCommunicationsApi - object-oriented interface
 * @export
 * @class CaseCommunicationsApi
 * @extends {BaseAPI}
 */
export class CaseCommunicationsApi extends BaseAPI {
  /**
   *
   * @summary Links a communication to a specific case.
   * @param {string} caseId Case identifier.
   * @param {Array<string>} [fields] List of fields to include in the response.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseCommunicationsApi
   */
  public linkCommunication(
    caseId: string,
    fields?: Array<string>,
    options?: any
  ) {
    return CaseCommunicationsApiFp(this.configuration)
      .linkCommunication(caseId, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Lists all communications linked to a specific case. Currently a feature for future development.
   * @param {string} caseId Case identifier.
   * @param {Array<string>} [fields] List of fields to include in the response.
   * @param {string} [q] Query string for filtering results.
   * @param {number} [size] Number of records per page.
   * @param {number} [page] Page number for pagination.
   * @param {string} [sort] Sorting order.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseCommunicationsApi
   */
  public listCommunications(
    caseId: string,
    fields?: Array<string>,
    q?: string,
    size?: number,
    page?: number,
    sort?: string,
    options?: any
  ) {
    return CaseCommunicationsApiFp(this.configuration)
      .listCommunications(caseId, fields, q, size, page, sort, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Unlinks a communication from a specific case.
   * @param {string} caseId
   * @param {string} id Communication identifier.
   * @param {Array<string>} [fields] List of fields to include in the response.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseCommunicationsApi
   */
  public unlinkCommunication(
    caseId: string,
    id: string,
    fields?: Array<string>,
    options?: any
  ) {
    return CaseCommunicationsApiFp(this.configuration)
      .unlinkCommunication(caseId, id, fields, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
