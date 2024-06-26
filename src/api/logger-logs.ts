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

import { LoggerLog } from './logger-log'

/**
 *
 * @export
 * @interface LoggerLogs
 */
export interface LoggerLogs {
  /**
   *
   * @type {Array<LoggerLog>}
   * @memberof LoggerLogs
   */
  items?: Array<LoggerLog>
  /**
   *
   * @type {boolean}
   * @memberof LoggerLogs
   */
  next?: boolean
  /**
   *
   * @type {number}
   * @memberof LoggerLogs
   */
  page?: number
}
