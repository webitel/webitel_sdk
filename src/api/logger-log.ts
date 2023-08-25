// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LoggerLookup } from './logger-lookup'

/**
 *
 * @export
 * @interface LoggerLog
 */
export interface LoggerLog {
  /**
   *
   * @type {string}
   * @memberof LoggerLog
   */
  action?: string
  /**
   *
   * @type {number}
   * @memberof LoggerLog
   */
  config_id?: number
  /**
   *
   * @type {string}
   * @memberof LoggerLog
   */
  date?: string
  /**
   *
   * @type {number}
   * @memberof LoggerLog
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof LoggerLog
   */
  new_state?: string
  /**
   *
   * @type {LoggerLookup}
   * @memberof LoggerLog
   */
  user?: LoggerLookup
  /**
   *
   * @type {string}
   * @memberof LoggerLog
   */
  user_ip?: string
}
