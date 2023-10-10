// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.09.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebitelContactsLookup } from './webitel-contacts-lookup'

/**
 * Manager. The Contact\'s responsible User.
 * @export
 * @interface WebitelContactsManager
 */
export interface WebitelContactsManager {
  /**
   * The user who created this Field.
   * @type {string}
   * @memberof WebitelContactsManager
   */
  created_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsManager
   */
  created_by?: WebitelContactsLookup
  /**
   * Unique ID of the latest version of the update. This ID changes after any update to the underlying value(s).
   * @type {string}
   * @memberof WebitelContactsManager
   */
  etag?: string
  /**
   * The unique ID of the association. Never changes.
   * @type {string}
   * @memberof WebitelContactsManager
   */
  id?: string
  /**
   * Indicates whether this association is the default among others of the same type.
   * @type {boolean}
   * @memberof WebitelContactsManager
   */
  primary?: boolean
  /**
   * Timestamp(milli) of the last Field update. Take part in Etag generation.
   * @type {string}
   * @memberof WebitelContactsManager
   */
  updated_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsManager
   */
  updated_by?: WebitelContactsLookup
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsManager
   */
  user?: WebitelContactsLookup
  /**
   * Version of the latest update. Numeric sequence.
   * @type {number}
   * @memberof WebitelContactsManager
   */
  ver?: number
}
