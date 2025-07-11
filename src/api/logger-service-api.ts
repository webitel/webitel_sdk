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
import { LoggerLogs } from '../api'
// @ts-ignore
import { RpcStatus } from '../api'
/**
 * LoggerServiceApi - axios parameter creator
 * @export
 */
export const LoggerServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {number} configId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<string>} [userId]
     * @param {Array<'default_no_action' | 'create' | 'update' | 'read' | 'delete'>} [action]
     * @param {string} [userIp]
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchLogByConfigId: async (
      configId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      userId?: Array<string>,
      action?: Array<
        'default_no_action' | 'create' | 'update' | 'read' | 'delete'
      >,
      userIp?: string,
      dateFrom?: string,
      dateTo?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'configId' is not null or undefined
      if (configId === null || configId === undefined) {
        throw new RequiredError(
          'configId',
          'Required parameter configId was null or undefined when calling searchLogByConfigId.'
        )
      }
      const localVarPath = `/logger/config/{config_id}/logs`.replace(
        `{${'config_id'}}`,
        encodeURIComponent(String(configId))
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

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (userId) {
        localVarQueryParameter['user_id'] = userId
      }

      if (action) {
        localVarQueryParameter['action'] = action
      }

      if (userIp !== undefined) {
        localVarQueryParameter['user_ip'] = userIp
      }

      if (dateFrom !== undefined) {
        localVarQueryParameter['date_from'] = dateFrom
      }

      if (dateTo !== undefined) {
        localVarQueryParameter['date_to'] = dateTo
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
     * @param {'cc_queue' | 'schema' | 'users' | 'devices' | 'calendars' | 'cc_list' | 'cc_team' | 'cc_agent' | 'cc_resource' | 'cc_resource_group' | 'chat_bots' | 'cases' | 'contacts' | 'cc_list_number' | 'case_comments' | 'record_file'} object SPECIFIC filter
     * @param {number} recordId REQUIRED filter
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<'default_no_action' | 'create' | 'update' | 'read' | 'delete'>} [action] GENERAL filters
     * @param {Array<string>} [userId]
     * @param {string} [userIp]
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchLogByRecordId: async (
      object:
        | 'cc_queue'
        | 'schema'
        | 'users'
        | 'devices'
        | 'calendars'
        | 'cc_list'
        | 'cc_team'
        | 'cc_agent'
        | 'cc_resource'
        | 'cc_resource_group'
        | 'chat_bots'
        | 'cases'
        | 'contacts'
        | 'cc_list_number'
        | 'case_comments'
        | 'record_file',
      recordId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      action?: Array<
        'default_no_action' | 'create' | 'update' | 'read' | 'delete'
      >,
      userId?: Array<string>,
      userIp?: string,
      dateFrom?: string,
      dateTo?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'object' is not null or undefined
      if (object === null || object === undefined) {
        throw new RequiredError(
          'object',
          'Required parameter object was null or undefined when calling searchLogByRecordId.'
        )
      }
      // verify required parameter 'recordId' is not null or undefined
      if (recordId === null || recordId === undefined) {
        throw new RequiredError(
          'recordId',
          'Required parameter recordId was null or undefined when calling searchLogByRecordId.'
        )
      }
      const localVarPath = `/logger/{object}/record/{record_id}/logs`
        .replace(`{${'object'}}`, encodeURIComponent(String(object)))
        .replace(`{${'record_id'}}`, encodeURIComponent(String(recordId)))
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

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (action) {
        localVarQueryParameter['action'] = action
      }

      if (userId) {
        localVarQueryParameter['user_id'] = userId
      }

      if (userIp !== undefined) {
        localVarQueryParameter['user_ip'] = userIp
      }

      if (dateFrom !== undefined) {
        localVarQueryParameter['date_from'] = dateFrom
      }

      if (dateTo !== undefined) {
        localVarQueryParameter['date_to'] = dateTo
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
     * @param {number} userId REQUIRED filter
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<string>} [objectId] SPECIFIC filter
     * @param {Array<'default_no_action' | 'create' | 'update' | 'read' | 'delete'>} [action] GENERAL filters
     * @param {string} [userIp]
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchLogByUserId: async (
      userId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      objectId?: Array<string>,
      action?: Array<
        'default_no_action' | 'create' | 'update' | 'read' | 'delete'
      >,
      userIp?: string,
      dateFrom?: string,
      dateTo?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'userId' is not null or undefined
      if (userId === null || userId === undefined) {
        throw new RequiredError(
          'userId',
          'Required parameter userId was null or undefined when calling searchLogByUserId.'
        )
      }
      const localVarPath = `/logger/user/{user_id}/logs`.replace(
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

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (size !== undefined) {
        localVarQueryParameter['size'] = size
      }

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (objectId) {
        localVarQueryParameter['object_id'] = objectId
      }

      if (action) {
        localVarQueryParameter['action'] = action
      }

      if (userIp !== undefined) {
        localVarQueryParameter['user_ip'] = userIp
      }

      if (dateFrom !== undefined) {
        localVarQueryParameter['date_from'] = dateFrom
      }

      if (dateTo !== undefined) {
        localVarQueryParameter['date_to'] = dateTo
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
 * LoggerServiceApi - functional programming interface
 * @export
 */
export const LoggerServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @param {number} configId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<string>} [userId]
     * @param {Array<'default_no_action' | 'create' | 'update' | 'read' | 'delete'>} [action]
     * @param {string} [userIp]
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchLogByConfigId(
      configId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      userId?: Array<string>,
      action?: Array<
        'default_no_action' | 'create' | 'update' | 'read' | 'delete'
      >,
      userIp?: string,
      dateFrom?: string,
      dateTo?: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoggerLogs>
    > {
      const localVarAxiosArgs = await LoggerServiceApiAxiosParamCreator(
        configuration
      ).searchLogByConfigId(
        configId,
        page,
        size,
        q,
        sort,
        fields,
        userId,
        action,
        userIp,
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
    /**
     *
     * @param {'cc_queue' | 'schema' | 'users' | 'devices' | 'calendars' | 'cc_list' | 'cc_team' | 'cc_agent' | 'cc_resource' | 'cc_resource_group' | 'chat_bots' | 'cases' | 'contacts' | 'cc_list_number' | 'case_comments' | 'record_file'} object SPECIFIC filter
     * @param {number} recordId REQUIRED filter
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<'default_no_action' | 'create' | 'update' | 'read' | 'delete'>} [action] GENERAL filters
     * @param {Array<string>} [userId]
     * @param {string} [userIp]
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchLogByRecordId(
      object:
        | 'cc_queue'
        | 'schema'
        | 'users'
        | 'devices'
        | 'calendars'
        | 'cc_list'
        | 'cc_team'
        | 'cc_agent'
        | 'cc_resource'
        | 'cc_resource_group'
        | 'chat_bots'
        | 'cases'
        | 'contacts'
        | 'cc_list_number'
        | 'case_comments'
        | 'record_file',
      recordId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      action?: Array<
        'default_no_action' | 'create' | 'update' | 'read' | 'delete'
      >,
      userId?: Array<string>,
      userIp?: string,
      dateFrom?: string,
      dateTo?: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoggerLogs>
    > {
      const localVarAxiosArgs = await LoggerServiceApiAxiosParamCreator(
        configuration
      ).searchLogByRecordId(
        object,
        recordId,
        page,
        size,
        q,
        sort,
        fields,
        action,
        userId,
        userIp,
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
    /**
     *
     * @param {number} userId REQUIRED filter
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<string>} [objectId] SPECIFIC filter
     * @param {Array<'default_no_action' | 'create' | 'update' | 'read' | 'delete'>} [action] GENERAL filters
     * @param {string} [userIp]
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchLogByUserId(
      userId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      objectId?: Array<string>,
      action?: Array<
        'default_no_action' | 'create' | 'update' | 'read' | 'delete'
      >,
      userIp?: string,
      dateFrom?: string,
      dateTo?: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoggerLogs>
    > {
      const localVarAxiosArgs = await LoggerServiceApiAxiosParamCreator(
        configuration
      ).searchLogByUserId(
        userId,
        page,
        size,
        q,
        sort,
        fields,
        objectId,
        action,
        userIp,
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
 * LoggerServiceApi - factory interface
 * @export
 */
export const LoggerServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {number} configId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<string>} [userId]
     * @param {Array<'default_no_action' | 'create' | 'update' | 'read' | 'delete'>} [action]
     * @param {string} [userIp]
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchLogByConfigId(
      configId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      userId?: Array<string>,
      action?: Array<
        'default_no_action' | 'create' | 'update' | 'read' | 'delete'
      >,
      userIp?: string,
      dateFrom?: string,
      dateTo?: string,
      options?: any
    ): AxiosPromise<LoggerLogs> {
      return LoggerServiceApiFp(configuration)
        .searchLogByConfigId(
          configId,
          page,
          size,
          q,
          sort,
          fields,
          userId,
          action,
          userIp,
          dateFrom,
          dateTo,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {'cc_queue' | 'schema' | 'users' | 'devices' | 'calendars' | 'cc_list' | 'cc_team' | 'cc_agent' | 'cc_resource' | 'cc_resource_group' | 'chat_bots' | 'cases' | 'contacts' | 'cc_list_number' | 'case_comments' | 'record_file'} object SPECIFIC filter
     * @param {number} recordId REQUIRED filter
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<'default_no_action' | 'create' | 'update' | 'read' | 'delete'>} [action] GENERAL filters
     * @param {Array<string>} [userId]
     * @param {string} [userIp]
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchLogByRecordId(
      object:
        | 'cc_queue'
        | 'schema'
        | 'users'
        | 'devices'
        | 'calendars'
        | 'cc_list'
        | 'cc_team'
        | 'cc_agent'
        | 'cc_resource'
        | 'cc_resource_group'
        | 'chat_bots'
        | 'cases'
        | 'contacts'
        | 'cc_list_number'
        | 'case_comments'
        | 'record_file',
      recordId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      action?: Array<
        'default_no_action' | 'create' | 'update' | 'read' | 'delete'
      >,
      userId?: Array<string>,
      userIp?: string,
      dateFrom?: string,
      dateTo?: string,
      options?: any
    ): AxiosPromise<LoggerLogs> {
      return LoggerServiceApiFp(configuration)
        .searchLogByRecordId(
          object,
          recordId,
          page,
          size,
          q,
          sort,
          fields,
          action,
          userId,
          userIp,
          dateFrom,
          dateTo,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {number} userId REQUIRED filter
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [sort]
     * @param {Array<string>} [fields]
     * @param {Array<string>} [objectId] SPECIFIC filter
     * @param {Array<'default_no_action' | 'create' | 'update' | 'read' | 'delete'>} [action] GENERAL filters
     * @param {string} [userIp]
     * @param {string} [dateFrom]
     * @param {string} [dateTo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchLogByUserId(
      userId: number,
      page?: number,
      size?: number,
      q?: string,
      sort?: string,
      fields?: Array<string>,
      objectId?: Array<string>,
      action?: Array<
        'default_no_action' | 'create' | 'update' | 'read' | 'delete'
      >,
      userIp?: string,
      dateFrom?: string,
      dateTo?: string,
      options?: any
    ): AxiosPromise<LoggerLogs> {
      return LoggerServiceApiFp(configuration)
        .searchLogByUserId(
          userId,
          page,
          size,
          q,
          sort,
          fields,
          objectId,
          action,
          userIp,
          dateFrom,
          dateTo,
          options
        )
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * LoggerServiceApi - object-oriented interface
 * @export
 * @class LoggerServiceApi
 * @extends {BaseAPI}
 */
export class LoggerServiceApi extends BaseAPI {
  /**
   *
   * @param {number} configId
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<string>} [userId]
   * @param {Array<'default_no_action' | 'create' | 'update' | 'read' | 'delete'>} [action]
   * @param {string} [userIp]
   * @param {string} [dateFrom]
   * @param {string} [dateTo]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoggerServiceApi
   */
  public searchLogByConfigId(
    configId: number,
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    userId?: Array<string>,
    action?: Array<
      'default_no_action' | 'create' | 'update' | 'read' | 'delete'
    >,
    userIp?: string,
    dateFrom?: string,
    dateTo?: string,
    options?: any
  ) {
    return LoggerServiceApiFp(this.configuration)
      .searchLogByConfigId(
        configId,
        page,
        size,
        q,
        sort,
        fields,
        userId,
        action,
        userIp,
        dateFrom,
        dateTo,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {'cc_queue' | 'schema' | 'users' | 'devices' | 'calendars' | 'cc_list' | 'cc_team' | 'cc_agent' | 'cc_resource' | 'cc_resource_group' | 'chat_bots' | 'cases' | 'contacts' | 'cc_list_number' | 'case_comments' | 'record_file'} object SPECIFIC filter
   * @param {number} recordId REQUIRED filter
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<'default_no_action' | 'create' | 'update' | 'read' | 'delete'>} [action] GENERAL filters
   * @param {Array<string>} [userId]
   * @param {string} [userIp]
   * @param {string} [dateFrom]
   * @param {string} [dateTo]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoggerServiceApi
   */
  public searchLogByRecordId(
    object:
      | 'cc_queue'
      | 'schema'
      | 'users'
      | 'devices'
      | 'calendars'
      | 'cc_list'
      | 'cc_team'
      | 'cc_agent'
      | 'cc_resource'
      | 'cc_resource_group'
      | 'chat_bots'
      | 'cases'
      | 'contacts'
      | 'cc_list_number'
      | 'case_comments'
      | 'record_file',
    recordId: number,
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    action?: Array<
      'default_no_action' | 'create' | 'update' | 'read' | 'delete'
    >,
    userId?: Array<string>,
    userIp?: string,
    dateFrom?: string,
    dateTo?: string,
    options?: any
  ) {
    return LoggerServiceApiFp(this.configuration)
      .searchLogByRecordId(
        object,
        recordId,
        page,
        size,
        q,
        sort,
        fields,
        action,
        userId,
        userIp,
        dateFrom,
        dateTo,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {number} userId REQUIRED filter
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [sort]
   * @param {Array<string>} [fields]
   * @param {Array<string>} [objectId] SPECIFIC filter
   * @param {Array<'default_no_action' | 'create' | 'update' | 'read' | 'delete'>} [action] GENERAL filters
   * @param {string} [userIp]
   * @param {string} [dateFrom]
   * @param {string} [dateTo]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoggerServiceApi
   */
  public searchLogByUserId(
    userId: number,
    page?: number,
    size?: number,
    q?: string,
    sort?: string,
    fields?: Array<string>,
    objectId?: Array<string>,
    action?: Array<
      'default_no_action' | 'create' | 'update' | 'read' | 'delete'
    >,
    userIp?: string,
    dateFrom?: string,
    dateTo?: string,
    options?: any
  ) {
    return LoggerServiceApiFp(this.configuration)
      .searchLogByUserId(
        userId,
        page,
        size,
        q,
        sort,
        fields,
        objectId,
        action,
        userIp,
        dateFrom,
        dateTo,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }
}
