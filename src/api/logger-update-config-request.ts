// tslint:disable
/**
 * Webitel API
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
 * @interface LoggerUpdateConfigRequest
 */
export interface LoggerUpdateConfigRequest {
  /**
   *
   * @type {number}
   * @memberof LoggerUpdateConfigRequest
   */
  config_id?: number
  /**
   *
   * @type {number}
   * @memberof LoggerUpdateConfigRequest
   */
  days_to_store?: number
  /**
   *
   * @type {string}
   * @memberof LoggerUpdateConfigRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof LoggerUpdateConfigRequest
   */
  enabled?: boolean
  /**
   *
   * @type {number}
   * @memberof LoggerUpdateConfigRequest
   */
  period?: number
  /**
   *
   * @type {LoggerLookup}
   * @memberof LoggerUpdateConfigRequest
   */
  storage?: LoggerLookup
}
