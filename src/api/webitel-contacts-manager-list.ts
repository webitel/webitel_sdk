// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.02.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebitelContactsManager } from './webitel-contacts-manager'

/**
 * Manager dataset.
 * @export
 * @interface WebitelContactsManagerList
 */
export interface WebitelContactsManagerList {
  /**
   * Manager dataset page.
   * @type {Array<WebitelContactsManager>}
   * @memberof WebitelContactsManagerList
   */
  data?: Array<WebitelContactsManager>
  /**
   *
   * @type {boolean}
   * @memberof WebitelContactsManagerList
   */
  next?: boolean
  /**
   * The page number of the partial result.
   * @type {number}
   * @memberof WebitelContactsManagerList
   */
  page?: number
}
