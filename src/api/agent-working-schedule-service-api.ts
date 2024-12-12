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
import { WfmSearchAgentsWorkingScheduleResponse } from '../api'
/**
 * AgentWorkingScheduleServiceApi - axios parameter creator
 * @export
 */
export const AgentWorkingScheduleServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} workingScheduleId
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAgentsWorkingSchedule: async (
      workingScheduleId: string,
      dateFrom?: string,
      dateTo?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'workingScheduleId' is not null or undefined
      if (workingScheduleId === null || workingScheduleId === undefined) {
        throw new RequiredError(
          'workingScheduleId',
          'Required parameter workingScheduleId was null or undefined when calling searchAgentsWorkingSchedule.'
        )
      }
      const localVarPath = `/wfm/agents/working_schedules/{working_schedule_id}`.replace(
        `{${'working_schedule_id'}}`,
        encodeURIComponent(String(workingScheduleId))
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

      if (dateFrom !== undefined) {
        localVarQueryParameter['date.from'] = dateFrom
      }

      if (dateTo !== undefined) {
        localVarQueryParameter['date.to'] = dateTo
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
 * AgentWorkingScheduleServiceApi - functional programming interface
 * @export
 */
export const AgentWorkingScheduleServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} workingScheduleId
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchAgentsWorkingSchedule(
      workingScheduleId: string,
      dateFrom?: string,
      dateTo?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<WfmSearchAgentsWorkingScheduleResponse>
    > {
      const localVarAxiosArgs = await AgentWorkingScheduleServiceApiAxiosParamCreator(
        configuration
      ).searchAgentsWorkingSchedule(
        workingScheduleId,
        dateFrom,
        dateTo,
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
  }
}

/**
 * AgentWorkingScheduleServiceApi - factory interface
 * @export
 */
export const AgentWorkingScheduleServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {string} workingScheduleId
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAgentsWorkingSchedule(
      workingScheduleId: string,
      dateFrom?: string,
      dateTo?: string,
      options?: any
    ): AxiosPromise<WfmSearchAgentsWorkingScheduleResponse> {
      return AgentWorkingScheduleServiceApiFp(configuration)
        .searchAgentsWorkingSchedule(
          workingScheduleId,
          dateFrom,
          dateTo,
          options
        )
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * AgentWorkingScheduleServiceApi - object-oriented interface
 * @export
 * @class AgentWorkingScheduleServiceApi
 * @extends {BaseAPI}
 */
export class AgentWorkingScheduleServiceApi extends BaseAPI {
  /**
   *
   * @param {string} workingScheduleId
   * @param {string} [dateFrom]
   * @param {string} [dateTo]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AgentWorkingScheduleServiceApi
   */
  public searchAgentsWorkingSchedule(
    workingScheduleId: string,
    dateFrom?: string,
    dateTo?: string,
    options?: any
  ) {
    return AgentWorkingScheduleServiceApiFp(this.configuration)
      .searchAgentsWorkingSchedule(workingScheduleId, dateFrom, dateTo, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
