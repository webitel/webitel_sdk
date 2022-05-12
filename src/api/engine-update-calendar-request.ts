// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 22.05.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineAcceptOfDay } from './engine-accept-of-day'
import { EngineExceptDate } from './engine-except-date'
import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineUpdateCalendarRequest
 */
export interface EngineUpdateCalendarRequest {
  /**
   *
   * @type {Array<EngineAcceptOfDay>}
   * @memberof EngineUpdateCalendarRequest
   */
  accepts?: Array<EngineAcceptOfDay>
  /**
   *
   * @type {string}
   * @memberof EngineUpdateCalendarRequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateCalendarRequest
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateCalendarRequest
   */
  end_at?: string
  /**
   *
   * @type {Array<EngineExceptDate>}
   * @memberof EngineUpdateCalendarRequest
   */
  excepts?: Array<EngineExceptDate>
  /**
   *
   * @type {string}
   * @memberof EngineUpdateCalendarRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateCalendarRequest
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateCalendarRequest
   */
  start_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateCalendarRequest
   */
  timezone?: EngineLookup
}
