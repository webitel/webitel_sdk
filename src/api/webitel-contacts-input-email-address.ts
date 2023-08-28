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

import { WebitelContactsLookup } from './webitel-contacts-lookup'

/**
 * Input of the Contact\'s email address.
 * @export
 * @interface WebitelContactsInputEmailAddress
 */
export interface WebitelContactsInputEmailAddress {
  /**
   * The email address.
   * @type {string}
   * @memberof WebitelContactsInputEmailAddress
   */
  email: string
  /**
   * Unique ID of the latest version of an existing resorce.
   * @type {string}
   * @memberof WebitelContactsInputEmailAddress
   */
  etag?: string
  /**
   * Indicates whether this phone number is default within other channels of the same type(phone).
   * @type {boolean}
   * @memberof WebitelContactsInputEmailAddress
   */
  primary?: boolean
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsInputEmailAddress
   */
  type?: WebitelContactsLookup
  /**
   *
   * @type {boolean}
   * @memberof WebitelContactsInputEmailAddress
   */
  verified?: boolean
}