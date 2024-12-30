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
 * @interface WfmAgentSchedulePause
 */
export interface WfmAgentSchedulePause {
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmAgentSchedulePause
   */
  cause?: WfmLookupEntity
  /**
   *
   * @type {string}
   * @memberof WfmAgentSchedulePause
   */
  created_at?: string
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmAgentSchedulePause
   */
  created_by?: WfmLookupEntity
  /**
   *
   * @type {string}
   * @memberof WfmAgentSchedulePause
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof WfmAgentSchedulePause
   */
  end?: string
  /**
   *
   * @type {string}
   * @memberof WfmAgentSchedulePause
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof WfmAgentSchedulePause
   */
  start?: string
  /**
   *
   * @type {string}
   * @memberof WfmAgentSchedulePause
   */
  updated_at?: string
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmAgentSchedulePause
   */
  updated_by?: WfmLookupEntity
}
