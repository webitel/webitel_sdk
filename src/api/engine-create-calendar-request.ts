// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.02.0
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
 * @interface EngineCreateCalendarRequest
 */
export interface EngineCreateCalendarRequest {
  /**
   *
   * @type {Array<EngineAcceptOfDay>}
   * @memberof EngineCreateCalendarRequest
   */
  accepts?: Array<EngineAcceptOfDay>
  /**
   *
   * @type {string}
   * @memberof EngineCreateCalendarRequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateCalendarRequest
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateCalendarRequest
   */
  end_at?: string
  /**
   *
   * @type {Array<EngineExceptDate>}
   * @memberof EngineCreateCalendarRequest
   */
  excepts?: Array<EngineExceptDate>
  /**
   *
   * @type {string}
   * @memberof EngineCreateCalendarRequest
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateCalendarRequest
   */
  start_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateCalendarRequest
   */
  timezone?: EngineLookup
}
