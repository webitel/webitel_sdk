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
import { ApiGenerateUserTfaKeyResponse } from '../api'
// @ts-ignore
import { ApiGetUserTfaKeyResponse } from '../api'
/**
 * TwoFactorAuthenticationApi - axios parameter creator
 * @export
 */
export const TwoFactorAuthenticationApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary GenerateUserTfaKey generates new or regenerates secret for the concrete user
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateUserTfaKey: async (
      userId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'userId' is not null or undefined
      if (userId === null || userId === undefined) {
        throw new RequiredError(
          'userId',
          'Required parameter userId was null or undefined when calling generateUserTfaKey.'
        )
      }
      const localVarPath = `/users/{user_id}/2fa`.replace(
        `{${'user_id'}}`,
        encodeURIComponent(String(userId))
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
     * @summary GetUserTfaKey locates the secret for user and returns it as a TOTP url
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserTfaKey: async (
      userId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'userId' is not null or undefined
      if (userId === null || userId === undefined) {
        throw new RequiredError(
          'userId',
          'Required parameter userId was null or undefined when calling getUserTfaKey.'
        )
      }
      const localVarPath = `/users/{user_id}/2fa`.replace(
        `{${'user_id'}}`,
        encodeURIComponent(String(userId))
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
  }
}

/**
 * TwoFactorAuthenticationApi - functional programming interface
 * @export
 */
export const TwoFactorAuthenticationApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary GenerateUserTfaKey generates new or regenerates secret for the concrete user
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async generateUserTfaKey(
      userId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ApiGenerateUserTfaKeyResponse>
    > {
      const localVarAxiosArgs = await TwoFactorAuthenticationApiAxiosParamCreator(
        configuration
      ).generateUserTfaKey(userId, options)
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
     * @summary GetUserTfaKey locates the secret for user and returns it as a TOTP url
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserTfaKey(
      userId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ApiGetUserTfaKeyResponse>
    > {
      const localVarAxiosArgs = await TwoFactorAuthenticationApiAxiosParamCreator(
        configuration
      ).getUserTfaKey(userId, options)
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
 * TwoFactorAuthenticationApi - factory interface
 * @export
 */
export const TwoFactorAuthenticationApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary GenerateUserTfaKey generates new or regenerates secret for the concrete user
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateUserTfaKey(
      userId: string,
      options?: any
    ): AxiosPromise<ApiGenerateUserTfaKeyResponse> {
      return TwoFactorAuthenticationApiFp(configuration)
        .generateUserTfaKey(userId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary GetUserTfaKey locates the secret for user and returns it as a TOTP url
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserTfaKey(
      userId: string,
      options?: any
    ): AxiosPromise<ApiGetUserTfaKeyResponse> {
      return TwoFactorAuthenticationApiFp(configuration)
        .getUserTfaKey(userId, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * TwoFactorAuthenticationApi - object-oriented interface
 * @export
 * @class TwoFactorAuthenticationApi
 * @extends {BaseAPI}
 */
export class TwoFactorAuthenticationApi extends BaseAPI {
  /**
   *
   * @summary GenerateUserTfaKey generates new or regenerates secret for the concrete user
   * @param {string} userId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TwoFactorAuthenticationApi
   */
  public generateUserTfaKey(userId: string, options?: any) {
    return TwoFactorAuthenticationApiFp(this.configuration)
      .generateUserTfaKey(userId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary GetUserTfaKey locates the secret for user and returns it as a TOTP url
   * @param {string} userId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TwoFactorAuthenticationApi
   */
  public getUserTfaKey(userId: string, options?: any) {
    return TwoFactorAuthenticationApiFp(this.configuration)
      .getUserTfaKey(userId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}