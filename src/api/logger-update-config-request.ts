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
   * @type {boolean}
   * @memberof LoggerUpdateConfigRequest
   */
  enabled?: boolean
  /**
   *
   * @type {string}
   * @memberof LoggerUpdateConfigRequest
   */
  period?: string
  /**
   *
   * @type {number}
   * @memberof LoggerUpdateConfigRequest
   */
  storage_id?: number
}
