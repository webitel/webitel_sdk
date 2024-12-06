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

import { WebitelContactsDynamicGroup } from './webitel-contacts-dynamic-group'

/**
 * A list of Dynamic Groups.
 * @export
 * @interface WebitelContactsDynamicGroupList
 */
export interface WebitelContactsDynamicGroupList {
  /**
   * List of dynamic groups.
   * @type {Array<WebitelContactsDynamicGroup>}
   * @memberof WebitelContactsDynamicGroupList
   */
  items?: Array<WebitelContactsDynamicGroup>
  /**
   * Have more records.
   * @type {boolean}
   * @memberof WebitelContactsDynamicGroupList
   */
  next?: boolean
  /**
   * Page number of the partial result.
   * @type {number}
   * @memberof WebitelContactsDynamicGroupList
   */
  page?: number
}
