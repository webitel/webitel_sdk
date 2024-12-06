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
 * @interface WebitelContactsCondition
 */
export interface WebitelContactsCondition {
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsCondition
   */
  assignee?: WebitelContactsLookup
  /**
   * The timestamp (in milliseconds) of when the condition was created.
   * @type {string}
   * @memberof WebitelContactsCondition
   */
  created_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsCondition
   */
  created_by?: WebitelContactsLookup
  /**
   * The query or condition expression used to evaluate the group.
   * @type {string}
   * @memberof WebitelContactsCondition
   */
  expression?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsCondition
   */
  group?: WebitelContactsLookup
  /**
   * The unique ID of the condition.
   * @type {string}
   * @memberof WebitelContactsCondition
   */
  id?: string
  /**
   * The timestamp (in milliseconds) of the last update.
   * @type {string}
   * @memberof WebitelContactsCondition
   */
  updated_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsCondition
   */
  updated_by?: WebitelContactsLookup
}
