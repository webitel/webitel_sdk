// tslint:disable
/**
 * Webitel API
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
 * The Contact\'s phone number.
 * @export
 * @interface WebitelContactsPhoneNumber
 */
export interface WebitelContactsPhoneNumber {
  /**
   * The user who created this Field.
   * @type {string}
   * @memberof WebitelContactsPhoneNumber
   */
  created_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsPhoneNumber
   */
  created_by?: WebitelContactsLookup
  /**
   * Unique ID of the latest version of the update. This ID changes after any update to the underlying value(s).
   * @type {string}
   * @memberof WebitelContactsPhoneNumber
   */
  etag?: string
  /**
   * The unique ID of the association. Never changes.
   * @type {string}
   * @memberof WebitelContactsPhoneNumber
   */
  id?: string
  /**
   * The phone number.
   * @type {string}
   * @memberof WebitelContactsPhoneNumber
   */
  number?: string
  /**
   * Indicates whether this phone number is default within other channels of the same type(phone).
   * @type {boolean}
   * @memberof WebitelContactsPhoneNumber
   */
  primary?: boolean
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsPhoneNumber
   */
  type?: WebitelContactsLookup
  /**
   * Timestamp(milli) of the last Field update. Take part in Etag generation.
   * @type {string}
   * @memberof WebitelContactsPhoneNumber
   */
  updated_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsPhoneNumber
   */
  updated_by?: WebitelContactsLookup
  /**
   * Version of the latest update. Numeric sequence.
   * @type {number}
   * @memberof WebitelContactsPhoneNumber
   */
  ver?: number
  /**
   *
   * @type {boolean}
   * @memberof WebitelContactsPhoneNumber
   */
  verified?: boolean
}
