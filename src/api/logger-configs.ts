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

import { LoggerConfig } from './logger-config'

/**
 *
 * @export
 * @interface LoggerConfigs
 */
export interface LoggerConfigs {
  /**
   *
   * @type {Array<LoggerConfig>}
   * @memberof LoggerConfigs
   */
  items?: Array<LoggerConfig>
  /**
   *
   * @type {boolean}
   * @memberof LoggerConfigs
   */
  next?: boolean
  /**
   *
   * @type {number}
   * @memberof LoggerConfigs
   */
  page?: number
}
