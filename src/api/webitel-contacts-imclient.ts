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

import { WebitelContactsLookup } from './webitel-contacts-lookup'

/**
 * A contact\'s [I]nstant[M]essaging client.
 * @export
 * @interface WebitelContactsIMClient
 */
export interface WebitelContactsIMClient {
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsIMClient
   */
  app?: WebitelContactsLookup
  /**
   * The user who created this Field.
   * @type {string}
   * @memberof WebitelContactsIMClient
   */
  created_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsIMClient
   */
  created_by?: WebitelContactsLookup
  /**
   * Unique ID of the latest version of the update. This ID changes after any update to the underlying value(s).
   * @type {string}
   * @memberof WebitelContactsIMClient
   */
  etag?: string
  /**
   * The unique ID of the association. Never changes.
   * @type {string}
   * @memberof WebitelContactsIMClient
   */
  id?: string
  /**
   * Timestamp(milli) of the last Field update. Take part in Etag generation.
   * @type {string}
   * @memberof WebitelContactsIMClient
   */
  updated_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsIMClient
   */
  updated_by?: WebitelContactsLookup
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsIMClient
   */
  user?: WebitelContactsLookup
  /**
   * Version of the latest update. Numeric sequence.
   * @type {number}
   * @memberof WebitelContactsIMClient
   */
  ver?: number
  /**
   * [Via] App(-specific) peer(-id) to connect[from] the IM client.
   * @type {string}
   * @memberof WebitelContactsIMClient
   */
  via?: string
}
