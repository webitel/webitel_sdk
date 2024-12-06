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
import { InlineObject4 } from '../api'
// @ts-ignore
import { WfmReadAgentWorkingConditionsResponse } from '../api'
// @ts-ignore
import { WfmUpdateAgentWorkingConditionsResponse } from '../api'
/**
 * AgentWorkingConditionsServiceApi - axios parameter creator
 * @export
 */
export const AgentWorkingConditionsServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} agentId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readAgentWorkingConditions: async (
      agentId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'agentId' is not null or undefined
      if (agentId === null || agentId === undefined) {
        throw new RequiredError(
          'agentId',
          'Required parameter agentId was null or undefined when calling readAgentWorkingConditions.'
        )
      }
      const localVarPath = `/wfm/agents/{agent_id}/conditions`.replace(
        `{${'agent_id'}}`,
        encodeURIComponent(String(agentId))
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
     *
     * @param {string} agentId
     * @param {InlineObject4} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAgentWorkingConditions: async (
      agentId: string,
      body: InlineObject4,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'agentId' is not null or undefined
      if (agentId === null || agentId === undefined) {
        throw new RequiredError(
          'agentId',
          'Required parameter agentId was null or undefined when calling updateAgentWorkingConditions.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateAgentWorkingConditions.'
        )
      }
      const localVarPath = `/wfm/agents/{agent_id}/conditions`.replace(
        `{${'agent_id'}}`,
        encodeURIComponent(String(agentId))
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
 * AgentWorkingConditionsServiceApi - functional programming interface
 * @export
 */
export const AgentWorkingConditionsServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} agentId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readAgentWorkingConditions(
      agentId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WfmReadAgentWorkingConditionsResponse>
    > {
      const localVarAxiosArgs = await AgentWorkingConditionsServiceApiAxiosParamCreator(
        configuration
      ).readAgentWorkingConditions(agentId, options)
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
     * @param {string} agentId
     * @param {InlineObject4} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateAgentWorkingConditions(
      agentId: string,
      body: InlineObject4,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WfmUpdateAgentWorkingConditionsResponse>
    > {
      const localVarAxiosArgs = await AgentWorkingConditionsServiceApiAxiosParamCreator(
        configuration
      ).updateAgentWorkingConditions(agentId, body, options)
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
 * AgentWorkingConditionsServiceApi - factory interface
 * @export
 */
export const AgentWorkingConditionsServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {string} agentId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readAgentWorkingConditions(
      agentId: string,
      options?: any
    ): AxiosPromise<WfmReadAgentWorkingConditionsResponse> {
      return AgentWorkingConditionsServiceApiFp(configuration)
        .readAgentWorkingConditions(agentId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} agentId
     * @param {InlineObject4} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAgentWorkingConditions(
      agentId: string,
      body: InlineObject4,
      options?: any
    ): AxiosPromise<WfmUpdateAgentWorkingConditionsResponse> {
      return AgentWorkingConditionsServiceApiFp(configuration)
        .updateAgentWorkingConditions(agentId, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * AgentWorkingConditionsServiceApi - object-oriented interface
 * @export
 * @class AgentWorkingConditionsServiceApi
 * @extends {BaseAPI}
 */
export class AgentWorkingConditionsServiceApi extends BaseAPI {
  /**
   *
   * @param {string} agentId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentWorkingConditionsServiceApi
   */
  public readAgentWorkingConditions(agentId: string, options?: any) {
    return AgentWorkingConditionsServiceApiFp(this.configuration)
      .readAgentWorkingConditions(agentId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {string} agentId
   * @param {InlineObject4} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentWorkingConditionsServiceApi
   */
  public updateAgentWorkingConditions(
    agentId: string,
    body: InlineObject4,
    options?: any
  ) {
    return AgentWorkingConditionsServiceApiFp(this.configuration)
      .updateAgentWorkingConditions(agentId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
