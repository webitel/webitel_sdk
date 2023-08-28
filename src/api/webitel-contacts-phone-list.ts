// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebitelContactsPhoneNumber } from './webitel-contacts-phone-number'

/**
 * PhoneNumber dataset.
 * @export
 * @interface WebitelContactsPhoneList
 */
export interface WebitelContactsPhoneList {
  /**
   * PhoneNumber dataset page.
   * @type {Array<WebitelContactsPhoneNumber>}
   * @memberof WebitelContactsPhoneList
   */
  data?: Array<WebitelContactsPhoneNumber>
  /**
   *
   * @type {boolean}
   * @memberof WebitelContactsPhoneList
   */
  next?: boolean
  /**
   * The page number of the partial result.
   * @type {number}
   * @memberof WebitelContactsPhoneList
   */
  page?: number
}