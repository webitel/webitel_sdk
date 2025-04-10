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

import { WfmAgentScheduleShiftPause } from './wfm-agent-schedule-shift-pause'
import { WfmAgentScheduleShiftSkill } from './wfm-agent-schedule-shift-skill'
import { WfmLookupEntity } from './wfm-lookup-entity'

/**
 *
 * @export
 * @interface WfmAgentScheduleShift
 */
export interface WfmAgentScheduleShift {
  /**
   *
   * @type {string}
   * @memberof WfmAgentScheduleShift
   */
  created_at?: string
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmAgentScheduleShift
   */
  created_by?: WfmLookupEntity
  /**
   *
   * @type {string}
   * @memberof WfmAgentScheduleShift
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof WfmAgentScheduleShift
   */
  end?: string
  /**
   *
   * @type {string}
   * @memberof WfmAgentScheduleShift
   */
  id?: string
  /**
   *
   * @type {Array<WfmAgentScheduleShiftPause>}
   * @memberof WfmAgentScheduleShift
   */
  pauses?: Array<WfmAgentScheduleShiftPause>
  /**
   *
   * @type {Array<WfmAgentScheduleShiftSkill>}
   * @memberof WfmAgentScheduleShift
   */
  skills?: Array<WfmAgentScheduleShiftSkill>
  /**
   *
   * @type {string}
   * @memberof WfmAgentScheduleShift
   */
  start?: string
  /**
   *
   * @type {string}
   * @memberof WfmAgentScheduleShift
   */
  updated_at?: string
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmAgentScheduleShift
   */
  updated_by?: WfmLookupEntity
}
