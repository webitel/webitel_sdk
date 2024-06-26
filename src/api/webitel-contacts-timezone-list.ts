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

import { WebitelContactsTimezone } from './webitel-contacts-timezone'

/**
 * Timezone dataset. NOTE: Edge represents connection between two nodes. So this ContactTimezones.data are always subordinate to some contact.id.
 * @export
 * @interface WebitelContactsTimezoneList
 */
export interface WebitelContactsTimezoneList {
  /**
   * Timezone dataset page.
   * @type {Array<WebitelContactsTimezone>}
   * @memberof WebitelContactsTimezoneList
   */
  data?: Array<WebitelContactsTimezone>
  /**
   *
   * @type {boolean}
   * @memberof WebitelContactsTimezoneList
   */
  next?: boolean
  /**
   * The page number of the partial result.
   * @type {number}
   * @memberof WebitelContactsTimezoneList
   */
  page?: number
}
