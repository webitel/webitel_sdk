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
import { CasesCaseFileList } from '../api'
// @ts-ignore
import { GooglerpcStatus } from '../api'
/**
 * CaseFilesApi - axios parameter creator
 * @export
 */
export const CaseFilesApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Retrieve a list of files associated with a case
     * @param {string} caseId ID of the case to fetch files for (required).
     * @param {number} [page] The page number to retrieve.
     * @param {number} [size] Number of items per page.
     * @param {string} [q] Search term.
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {Array<string>} [ids] Array of requested id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFiles: async (
      caseId: string,
      page?: number,
      size?: number,
      q?: string,
      fields?: Array<string>,
      ids?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'caseId' is not null or undefined
      if (caseId === null || caseId === undefined) {
        throw new RequiredError(
          'caseId',
          'Required parameter caseId was null or undefined when calling listFiles.'
        )
      }
      const localVarPath = `/cases/{caseId}/files`.replace(
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
  }
}

/**
 * CaseFilesApi - functional programming interface
 * @export
 */
export const CaseFilesApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Retrieve a list of files associated with a case
     * @param {string} caseId ID of the case to fetch files for (required).
     * @param {number} [page] The page number to retrieve.
     * @param {number} [size] Number of items per page.
     * @param {string} [q] Search term.
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {Array<string>} [ids] Array of requested id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listFiles(
      caseId: string,
      page?: number,
      size?: number,
      q?: string,
      fields?: Array<string>,
      ids?: Array<string>,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CasesCaseFileList>
    > {
      const localVarAxiosArgs = await CaseFilesApiAxiosParamCreator(
        configuration
      ).listFiles(caseId, page, size, q, fields, ids, options)
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
 * CaseFilesApi - factory interface
 * @export
 */
export const CaseFilesApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Retrieve a list of files associated with a case
     * @param {string} caseId ID of the case to fetch files for (required).
     * @param {number} [page] The page number to retrieve.
     * @param {number} [size] Number of items per page.
     * @param {string} [q] Search term.
     * @param {Array<string>} [fields] Fields to include in the response.
     * @param {Array<string>} [ids] Array of requested id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFiles(
      caseId: string,
      page?: number,
      size?: number,
      q?: string,
      fields?: Array<string>,
      ids?: Array<string>,
      options?: any
    ): AxiosPromise<CasesCaseFileList> {
      return CaseFilesApiFp(configuration)
        .listFiles(caseId, page, size, q, fields, ids, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * CaseFilesApi - object-oriented interface
 * @export
 * @class CaseFilesApi
 * @extends {BaseAPI}
 */
export class CaseFilesApi extends BaseAPI {
  /**
   *
   * @summary Retrieve a list of files associated with a case
   * @param {string} caseId ID of the case to fetch files for (required).
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] Number of items per page.
   * @param {string} [q] Search term.
   * @param {Array<string>} [fields] Fields to include in the response.
   * @param {Array<string>} [ids] Array of requested id.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CaseFilesApi
   */
  public listFiles(
    caseId: string,
    page?: number,
    size?: number,
    q?: string,
    fields?: Array<string>,
    ids?: Array<string>,
    options?: any
  ) {
    return CaseFilesApiFp(this.configuration)
      .listFiles(caseId, page, size, q, fields, ids, options)
      .then((request) => request(this.axios, this.basePath))
  }
}