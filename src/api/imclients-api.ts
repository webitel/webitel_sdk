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
import { WebitelContactsIMClientList } from '../api'
/**
 * IMClientsApi - axios parameter creator
 * @export
 */
export const IMClientsApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} contactId
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteIMClient: async (
      contactId: string,
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'contactId' is not null or undefined
      if (contactId === null || contactId === undefined) {
        throw new RequiredError(
          'contactId',
          'Required parameter contactId was null or undefined when calling deleteIMClient.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteIMClient.'
        )
      }
      const localVarPath = `/contacts/{contact_id}/imclients/{id}`
        .replace(`{${'contact_id'}}`, encodeURIComponent(String(contactId)))
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
     * @summary Search IM client links
     * @param {string} contactId Link contact ID.
     * @param {number} [page] Page number of result dataset records. offset &#x3D; (page*size)
     * @param {number} [size] Size count of records on result page. limit &#x3D; (size++)
     * @param {string} [q] Search term: IMClient. &#x60;?&#x60; - matches any one character &#x60;*&#x60; - matches 0 or more characters Search fields: {user,app}
     * @param {Array<string>} [sort] Sort the result according to fields.
     * @param {Array<string>} [fields] Fields to be retrieved into result.
     * @param {Array<string>} [id] Link(s) with unique ID only.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listIMClients: async (
      contactId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: Array<string>,
      fields?: Array<string>,
      id?: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'contactId' is not null or undefined
      if (contactId === null || contactId === undefined) {
        throw new RequiredError(
          'contactId',
          'Required parameter contactId was null or undefined when calling listIMClients.'
        )
      }
      const localVarPath = `/contacts/{contact_id}/imclients`.replace(
        `{${'contact_id'}}`,
        encodeURIComponent(String(contactId))
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
  }
}

/**
 * IMClientsApi - functional programming interface
 * @export
 */
export const IMClientsApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {string} contactId
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteIMClient(
      contactId: string,
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs = await IMClientsApiAxiosParamCreator(
        configuration
      ).deleteIMClient(contactId, id, options)
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
     * @summary Search IM client links
     * @param {string} contactId Link contact ID.
     * @param {number} [page] Page number of result dataset records. offset &#x3D; (page*size)
     * @param {number} [size] Size count of records on result page. limit &#x3D; (size++)
     * @param {string} [q] Search term: IMClient. &#x60;?&#x60; - matches any one character &#x60;*&#x60; - matches 0 or more characters Search fields: {user,app}
     * @param {Array<string>} [sort] Sort the result according to fields.
     * @param {Array<string>} [fields] Fields to be retrieved into result.
     * @param {Array<string>} [id] Link(s) with unique ID only.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listIMClients(
      contactId: string,
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
      ) => AxiosPromise<WebitelContactsIMClientList>
    > {
      const localVarAxiosArgs = await IMClientsApiAxiosParamCreator(
        configuration
      ).listIMClients(contactId, page, size, q, sort, fields, id, options)
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
 * IMClientsApi - factory interface
 * @export
 */
export const IMClientsApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {string} contactId
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteIMClient(
      contactId: string,
      id: string,
      options?: any
    ): AxiosPromise<object> {
      return IMClientsApiFp(configuration)
        .deleteIMClient(contactId, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Search IM client links
     * @param {string} contactId Link contact ID.
     * @param {number} [page] Page number of result dataset records. offset &#x3D; (page*size)
     * @param {number} [size] Size count of records on result page. limit &#x3D; (size++)
     * @param {string} [q] Search term: IMClient. &#x60;?&#x60; - matches any one character &#x60;*&#x60; - matches 0 or more characters Search fields: {user,app}
     * @param {Array<string>} [sort] Sort the result according to fields.
     * @param {Array<string>} [fields] Fields to be retrieved into result.
     * @param {Array<string>} [id] Link(s) with unique ID only.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listIMClients(
      contactId: string,
      page?: number,
      size?: number,
      q?: string,
      sort?: Array<string>,
      fields?: Array<string>,
      id?: Array<string>,
      options?: any
    ): AxiosPromise<WebitelContactsIMClientList> {
      return IMClientsApiFp(configuration)
        .listIMClients(contactId, page, size, q, sort, fields, id, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * IMClientsApi - object-oriented interface
 * @export
 * @class IMClientsApi
 * @extends {BaseAPI}
 */
export class IMClientsApi extends BaseAPI {
  /**
   *
   * @param {string} contactId
   * @param {string} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IMClientsApi
   */
  public deleteIMClient(contactId: string, id: string, options?: any) {
    return IMClientsApiFp(this.configuration)
      .deleteIMClient(contactId, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Search IM client links
   * @param {string} contactId Link contact ID.
   * @param {number} [page] Page number of result dataset records. offset &#x3D; (page*size)
   * @param {number} [size] Size count of records on result page. limit &#x3D; (size++)
   * @param {string} [q] Search term: IMClient. &#x60;?&#x60; - matches any one character &#x60;*&#x60; - matches 0 or more characters Search fields: {user,app}
   * @param {Array<string>} [sort] Sort the result according to fields.
   * @param {Array<string>} [fields] Fields to be retrieved into result.
   * @param {Array<string>} [id] Link(s) with unique ID only.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IMClientsApi
   */
  public listIMClients(
    contactId: string,
    page?: number,
    size?: number,
    q?: string,
    sort?: Array<string>,
    fields?: Array<string>,
    id?: Array<string>,
    options?: any
  ) {
    return IMClientsApiFp(this.configuration)
      .listIMClients(contactId, page, size, q, sort, fields, id, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
