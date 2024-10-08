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
import { WfmPauseTemplateCause } from './wfm-pause-template-cause'

/**
 *
 * @export
 * @interface WfmPauseTemplate
 */
export interface WfmPauseTemplate {
  /**
   *
   * @type {Array<WfmPauseTemplateCause>}
   * @memberof WfmPauseTemplate
   */
  causes?: Array<WfmPauseTemplateCause>
  /**
   *
   * @type {string}
   * @memberof WfmPauseTemplate
   */
  created_at?: string
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmPauseTemplate
   */
  created_by?: WfmLookupEntity
  /**
   *
   * @type {string}
   * @memberof WfmPauseTemplate
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof WfmPauseTemplate
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof WfmPauseTemplate
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof WfmPauseTemplate
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof WfmPauseTemplate
   */
  updated_at?: string
  /**
   *
   * @type {WfmLookupEntity}
   * @memberof WfmPauseTemplate
   */
  updated_by?: WfmLookupEntity
}
