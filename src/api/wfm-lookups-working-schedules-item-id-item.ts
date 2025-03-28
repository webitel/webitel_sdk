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

import { WfmLookupEntity } from './wfm-lookup-entity'
import { WfmWorkingScheduleState } from './wfm-working-schedule-state'

/**
 *
 * @export
 * @interface WfmLookupsWorkingSchedulesItemIdItem
 */
export interface WfmLookupsWorkingSchedulesItemIdItem {
  /**
   *
   * @type {Array<WfmLookupEntity>}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  agents?: Array<WfmLookupEntity>
  /**
   *
   * @type {boolean}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  block_outside_activity?: boolean
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  calendar?: WfmLookupEntity
  /**
   *
   * @type {string}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  created_at?: string
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  created_by?: WfmLookupEntity
  /**
   *
   * @type {string}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  end_date_at?: string
  /**
   *
   * @type {string}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  end_time_at?: string
  /**
   *
   * @type {Array<WfmLookupEntity>}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  extra_skills?: Array<WfmLookupEntity>
  /**
   *
   * @type {string}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  start_date_at?: string
  /**
   *
   * @type {string}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  start_time_at?: string
  /**
   *
   * @type {WfmWorkingScheduleState}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  state?: WfmWorkingScheduleState
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  team?: WfmLookupEntity
  /**
   *
   * @type {string}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  total_agents?: string
  /**
   *
   * @type {string}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  updated_at?: string
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmLookupsWorkingSchedulesItemIdItem
   */
  updated_by?: WfmLookupEntity
}
