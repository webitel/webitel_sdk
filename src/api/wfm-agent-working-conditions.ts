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

/**
 *
 * @export
 * @interface WfmAgentWorkingConditions
 */
export interface WfmAgentWorkingConditions {
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmAgentWorkingConditions
   */
  pause_template?: WfmLookupEntity
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmAgentWorkingConditions
   */
  working_condition?: WfmLookupEntity
}
