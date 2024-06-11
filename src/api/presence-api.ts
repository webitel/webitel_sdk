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
import { ApiPresenceSetStatusBody } from '../api'
// @ts-ignore
import { ApiPresenceStatus } from '../api'
// @ts-ignore
import { ApiSetStatusRequest } from '../api'
/**
 * PresenceApi - axios parameter creator
 * @export
 */
export const PresenceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     * (UserPresence) {
     * @summary set(presence) (notify, error)
     * @param {string} publishId [required] user identity
     * @param {ApiPresenceSetStatusBody} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setStatus: async (
      publishId: string,
      body: ApiPresenceSetStatusBody,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'publishId' is not null or undefined
      if (publishId === null || publishId === undefined) {
        throw new RequiredError(
          'publishId',
          'Required parameter publishId was null or undefined when calling setStatus.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling setStatus.'
        )
      }
      const localVarPath = `/users/{publish.id}/presence`.replace(
        `{${'publish.id'}}`,
        encodeURIComponent(String(publishId))
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
    /**
     * (UserPresence) {
     * @summary set(presence) (notify, error)
     * @param {ApiSetStatusRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setStatus2: async (
      body: ApiSetStatusRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling setStatus2.'
        )
      }
      const localVarPath = `/presence`
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
 * PresenceApi - functional programming interface
 * @export
 */
export const PresenceApiFp = function(configuration?: Configuration) {
  return {
    /**
     * (UserPresence) {
     * @summary set(presence) (notify, error)
     * @param {string} publishId [required] user identity
     * @param {ApiPresenceSetStatusBody} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async setStatus(
      publishId: string,
      body: ApiPresenceSetStatusBody,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ApiPresenceStatus>
    > {
      const localVarAxiosArgs = await PresenceApiAxiosParamCreator(
        configuration
      ).setStatus(publishId, body, options)
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
     * (UserPresence) {
     * @summary set(presence) (notify, error)
     * @param {ApiSetStatusRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async setStatus2(
      body: ApiSetStatusRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ApiPresenceStatus>
    > {
      const localVarAxiosArgs = await PresenceApiAxiosParamCreator(
        configuration
      ).setStatus2(body, options)
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
 * PresenceApi - factory interface
 * @export
 */
export const PresenceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * (UserPresence) {
     * @summary set(presence) (notify, error)
     * @param {string} publishId [required] user identity
     * @param {ApiPresenceSetStatusBody} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setStatus(
      publishId: string,
      body: ApiPresenceSetStatusBody,
      options?: any
    ): AxiosPromise<ApiPresenceStatus> {
      return PresenceApiFp(configuration)
        .setStatus(publishId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * (UserPresence) {
     * @summary set(presence) (notify, error)
     * @param {ApiSetStatusRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setStatus2(
      body: ApiSetStatusRequest,
      options?: any
    ): AxiosPromise<ApiPresenceStatus> {
      return PresenceApiFp(configuration)
        .setStatus2(body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * PresenceApi - object-oriented interface
 * @export
 * @class PresenceApi
 * @extends {BaseAPI}
 */
export class PresenceApi extends BaseAPI {
  /**
   * (UserPresence) {
   * @summary set(presence) (notify, error)
   * @param {string} publishId [required] user identity
   * @param {ApiPresenceSetStatusBody} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PresenceApi
   */
  public setStatus(
    publishId: string,
    body: ApiPresenceSetStatusBody,
    options?: any
  ) {
    return PresenceApiFp(this.configuration)
      .setStatus(publishId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * (UserPresence) {
   * @summary set(presence) (notify, error)
   * @param {ApiSetStatusRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PresenceApi
   */
  public setStatus2(body: ApiSetStatusRequest, options?: any) {
    return PresenceApiFp(this.configuration)
      .setStatus2(body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
