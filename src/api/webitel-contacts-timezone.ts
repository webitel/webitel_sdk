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
 * A Contact\'s timezone preference.
 * @export
 * @interface WebitelContactsTimezone
 */
export interface WebitelContactsTimezone {
  /**
   * The user who created this Field.
   * @type {string}
   * @memberof WebitelContactsTimezone
   */
  created_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsTimezone
   */
  created_by?: WebitelContactsLookup
  /**
   * Unique ID of the latest version of the update. This ID changes after any update to the underlying value(s).
   * @type {string}
   * @memberof WebitelContactsTimezone
   */
  etag?: string
  /**
   * The unique ID of the association. Never changes.
   * @type {string}
   * @memberof WebitelContactsTimezone
   */
  id?: string
  /**
   * Indicates whether this association is the default among others of the same type.
   * @type {boolean}
   * @memberof WebitelContactsTimezone
   */
  primary?: boolean
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsTimezone
   */
  timezone?: WebitelContactsLookup
  /**
   * Timestamp(milli) of the last Field update. Take part in Etag generation.
   * @type {string}
   * @memberof WebitelContactsTimezone
   */
  updated_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsTimezone
   */
  updated_by?: WebitelContactsLookup
  /**
   * Version of the latest update. Numeric sequence.
   * @type {number}
   * @memberof WebitelContactsTimezone
   */
  ver?: number
}
