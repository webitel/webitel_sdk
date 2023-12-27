// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.12.0
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
 * @interface LoggerCreateConfigRequest
 */
export interface LoggerCreateConfigRequest {
  /**
   *
   * @type {number}
   * @memberof LoggerCreateConfigRequest
   */
  days_to_store?: number
  /**
   *
   * @type {string}
   * @memberof LoggerCreateConfigRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof LoggerCreateConfigRequest
   */
  enabled?: boolean
  /**
   *
   * @type {LoggerLookup}
   * @memberof LoggerCreateConfigRequest
   */
  object?: LoggerLookup
  /**
   *
   * @type {number}
   * @memberof LoggerCreateConfigRequest
   */
  period?: number
  /**
   *
   * @type {LoggerLookup}
   * @memberof LoggerCreateConfigRequest
   */
  storage?: LoggerLookup
}