// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.12.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineTimezone } from './engine-timezone'

/**
 *
 * @export
 * @interface EngineListTimezoneResponse
 */
export interface EngineListTimezoneResponse {
  /**
   *
   * @type {Array<EngineTimezone>}
   * @memberof EngineListTimezoneResponse
   */
  items?: Array<EngineTimezone>
  /**
   *
   * @type {boolean}
   * @memberof EngineListTimezoneResponse
   */
  next?: boolean
}
