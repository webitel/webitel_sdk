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

import { WfmWorkingCondition } from './wfm-working-condition'

/**
 *
 * @export
 * @interface WfmSearchWorkingConditionResponse
 */
export interface WfmSearchWorkingConditionResponse {
  /**
   *
   * @type {Array<WfmWorkingCondition>}
   * @memberof WfmSearchWorkingConditionResponse
   */
  items?: Array<WfmWorkingCondition>
  /**
   *
   * @type {boolean}
   * @memberof WfmSearchWorkingConditionResponse
   */
  next?: boolean
}
