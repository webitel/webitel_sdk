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

import { WebitelContactsInputDynamicCondition } from './webitel-contacts-input-dynamic-condition'
import { WebitelContactsLookup } from './webitel-contacts-lookup'

/**
 * Request message for creating a new dynamic group.
 * @export
 * @interface WebitelContactsCreateDynamicGroupRequest
 */
export interface WebitelContactsCreateDynamicGroupRequest {
  /**
   * Input details for the dynamic group.
   * @type {Array<WebitelContactsInputDynamicCondition>}
   * @memberof WebitelContactsCreateDynamicGroupRequest
   */
  condition?: Array<WebitelContactsInputDynamicCondition>
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsCreateDynamicGroupRequest
   */
  default_group?: WebitelContactsLookup
  /**
   * The description of the dynamic group.
   * @type {string}
   * @memberof WebitelContactsCreateDynamicGroupRequest
   */
  description?: string
  /**
   * Enabled status of the dynamic group: active/inactive.
   * @type {boolean}
   * @memberof WebitelContactsCreateDynamicGroupRequest
   */
  enabled?: boolean
  /**
   * The name of the dynamic group.
   * @type {string}
   * @memberof WebitelContactsCreateDynamicGroupRequest
   */
  name: string
}
