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

import { WfmAgentScheduleShift } from './wfm-agent-schedule-shift'
import { WfmFilterBetween } from './wfm-filter-between'
import { WfmLookupEntity } from './wfm-lookup-entity'

/**
 *
 * @export
 * @interface InlineObject2
 */
export interface InlineObject2 {
  /**
   *
   * @type {Array<WfmLookupEntity>}
   * @memberof InlineObject2
   */
  agents?: Array<WfmLookupEntity>
  /**
   *
   * @type {WfmFilterBetween}
   * @memberof InlineObject2
   */
  date?: WfmFilterBetween
  /**
   * Map key is a day of week: 0 - Sunday, ..., 6 - Saturday.
   * @type {{ [key: string]: WfmAgentScheduleShift; }}
   * @memberof InlineObject2
   */
  items?: { [key: string]: WfmAgentScheduleShift }
}
