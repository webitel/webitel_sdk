// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 22.05.0
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
import { EngineDefaultDeviceConfigResponse } from '../api'
// @ts-ignore
import { RuntimeError } from '../api'
/**
 * UserHelperServiceApi - axios parameter creator
 * @export
 */
export const UserHelperServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    defaultDeviceConfig: async (
      type: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'type' is not null or undefined
      if (type === null || type === undefined) {
        throw new RequiredError(
          'type',
          'Required parameter type was null or undefined when calling defaultDeviceConfig.'
        )
      }
      const localVarPath = `/user/device/config/{type}`.replace(
        `{${'type'}}`,
        encodeURIComponent(String(type))
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
 * UserHelperServiceApi - functional programming interface
 * @export
 */
export const UserHelperServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {string} type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async defaultDeviceConfig(
      type: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineDefaultDeviceConfigResponse>
    > {
      const localVarAxiosArgs = await UserHelperServiceApiAxiosParamCreator(
        configuration
      ).defaultDeviceConfig(type, options)
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
 * UserHelperServiceApi - factory interface
 * @export
 */
export const UserHelperServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {string} type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    defaultDeviceConfig(
      type: string,
      options?: any
    ): AxiosPromise<EngineDefaultDeviceConfigResponse> {
      return UserHelperServiceApiFp(configuration)
        .defaultDeviceConfig(type, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * UserHelperServiceApi - object-oriented interface
 * @export
 * @class UserHelperServiceApi
 * @extends {BaseAPI}
 */
export class UserHelperServiceApi extends BaseAPI {
  /**
   *
   * @param {string} type
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserHelperServiceApi
   */
  public defaultDeviceConfig(type: string, options?: any) {
    return UserHelperServiceApiFp(this.configuration)
      .defaultDeviceConfig(type, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
