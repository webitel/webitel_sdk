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

import { WebitelContactsContact } from './webitel-contacts-contact'

/**
 * Contact dataset.
 * @export
 * @interface WebitelContactsContactList
 */
export interface WebitelContactsContactList {
  /**
   * Contact(s) dataset page.
   * @type {Array<WebitelContactsContact>}
   * @memberof WebitelContactsContactList
   */
  data?: Array<WebitelContactsContact>
  /**
   *
   * @type {boolean}
   * @memberof WebitelContactsContactList
   */
  next?: boolean
  /**
   * The page number of the partial result.
   * @type {number}
   * @memberof WebitelContactsContactList
   */
  page?: number
}
