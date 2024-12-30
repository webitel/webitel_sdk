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

import { WfmAgentAbsenceType } from './wfm-agent-absence-type'
import { WfmAgentScheduleShift } from './wfm-agent-schedule-shift'

/**
 *
 * @export
 * @interface WfmAgentSchedule
 */
export interface WfmAgentSchedule {
  /**
   *
   * @type {WfmAgentAbsenceType}
   * @memberof WfmAgentSchedule
   */
  absence?: WfmAgentAbsenceType
  /**
   *
   * @type {string}
   * @memberof WfmAgentSchedule
   */
  date?: string
  /**
   *
   * @type {boolean}
   * @memberof WfmAgentSchedule
   */
  locked?: boolean
  /**
   *
   * @type {WfmAgentScheduleShift}
   * @memberof WfmAgentSchedule
   */
  shift?: WfmAgentScheduleShift
}
