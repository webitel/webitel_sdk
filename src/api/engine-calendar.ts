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
 * @interface EngineCalendar
 */
export interface EngineCalendar {
  /**
   *
   * @type {Array<EngineAcceptOfDay>}
   * @memberof EngineCalendar
   */
  accepts?: Array<EngineAcceptOfDay>
  /**
   *
   * @type {string}
   * @memberof EngineCalendar
   */
  created_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCalendar
   */
  created_by?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineCalendar
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineCalendar
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineCalendar
   */
  end_at?: string
  /**
   *
   * @type {Array<EngineExceptDate>}
   * @memberof EngineCalendar
   */
  excepts?: Array<EngineExceptDate>
  /**
   *
   * @type {string}
   * @memberof EngineCalendar
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineCalendar
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EngineCalendar
   */
  start_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCalendar
   */
  timezone?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineCalendar
   */
  updated_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCalendar
   */
  updated_by?: EngineLookup
}
