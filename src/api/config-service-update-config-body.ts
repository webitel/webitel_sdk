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

import { LoggerLookup } from './logger-lookup'

/**
 *
 * @export
 * @interface ConfigServiceUpdateConfigBody
 */
export interface ConfigServiceUpdateConfigBody {
  /**
   *
   * @type {number}
   * @memberof ConfigServiceUpdateConfigBody
   */
  days_to_store?: number
  /**
   *
   * @type {string}
   * @memberof ConfigServiceUpdateConfigBody
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof ConfigServiceUpdateConfigBody
   */
  enabled?: boolean
  /**
   *
   * @type {number}
   * @memberof ConfigServiceUpdateConfigBody
   */
  period?: number
  /**
   *
   * @type {LoggerLookup}
   * @memberof ConfigServiceUpdateConfigBody
   */
  storage?: LoggerLookup
}
