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
import { WfmLookupEntity } from './wfm-lookup-entity'

/**
 *
 * @export
 * @interface WfmAgentsItemAgentIdAbsencesItemAbsenceIdItemAbsence
 */
export interface WfmAgentsItemAgentIdAbsencesItemAbsenceIdItemAbsence {
  /**
   *
   * @type {string}
   * @memberof WfmAgentsItemAgentIdAbsencesItemAbsenceIdItemAbsence
   */
  absent_at?: string
  /**
   *
   * @type {string}
   * @memberof WfmAgentsItemAgentIdAbsencesItemAbsenceIdItemAbsence
   */
  created_at?: string
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmAgentsItemAgentIdAbsencesItemAbsenceIdItemAbsence
   */
  created_by?: WfmLookupEntity
  /**
   *
   * @type {string}
   * @memberof WfmAgentsItemAgentIdAbsencesItemAbsenceIdItemAbsence
   */
  domain_id?: string
  /**
   *
   * @type {WfmAgentAbsenceType}
   * @memberof WfmAgentsItemAgentIdAbsencesItemAbsenceIdItemAbsence
   */
  type_id?: WfmAgentAbsenceType
  /**
   *
   * @type {string}
   * @memberof WfmAgentsItemAgentIdAbsencesItemAbsenceIdItemAbsence
   */
  updated_at?: string
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmAgentsItemAgentIdAbsencesItemAbsenceIdItemAbsence
   */
  updated_by?: WfmLookupEntity
}