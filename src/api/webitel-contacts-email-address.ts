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
 * The Contact\'s email address.
 * @export
 * @interface WebitelContactsEmailAddress
 */
export interface WebitelContactsEmailAddress {
  /**
   * The user who created this Field.
   * @type {string}
   * @memberof WebitelContactsEmailAddress
   */
  created_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsEmailAddress
   */
  created_by?: WebitelContactsLookup
  /**
   * The email address.
   * @type {string}
   * @memberof WebitelContactsEmailAddress
   */
  email?: string
  /**
   * Unique ID of the latest version of the update. This ID changes after any update to the underlying value(s).
   * @type {string}
   * @memberof WebitelContactsEmailAddress
   */
  etag?: string
  /**
   * The unique ID of the association. Never changes.
   * @type {string}
   * @memberof WebitelContactsEmailAddress
   */
  id?: string
  /**
   * Indicates whether this phone number is default within other channels of the same type(phone).
   * @type {boolean}
   * @memberof WebitelContactsEmailAddress
   */
  primary?: boolean
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsEmailAddress
   */
  type?: WebitelContactsLookup
  /**
   * Timestamp(milli) of the last Field update. Take part in Etag generation.
   * @type {string}
   * @memberof WebitelContactsEmailAddress
   */
  updated_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsEmailAddress
   */
  updated_by?: WebitelContactsLookup
  /**
   * Version of the latest update. Numeric sequence.
   * @type {number}
   * @memberof WebitelContactsEmailAddress
   */
  ver?: number
  /**
   *
   * @type {boolean}
   * @memberof WebitelContactsEmailAddress
   */
  verified?: boolean
}
