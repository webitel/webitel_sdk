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

import { WebitelContactsLookup } from './webitel-contacts-lookup'

/**
 *
 * @export
 * @interface WebitelContactsDynamicCondition
 */
export interface WebitelContactsDynamicCondition {
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsDynamicCondition
   */
  assignee?: WebitelContactsLookup
  /**
   * The query or condition expression used to evaluate the group.
   * @type {string}
   * @memberof WebitelContactsDynamicCondition
   */
  expression?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsDynamicCondition
   */
  group?: WebitelContactsLookup
  /**
   * The unique ID of the condition.
   * @type {string}
   * @memberof WebitelContactsDynamicCondition
   */
  id?: string
}
