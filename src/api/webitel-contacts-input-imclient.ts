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
 * Input of the contact IM client.
 * @export
 * @interface WebitelContactsInputIMClient
 */
export interface WebitelContactsInputIMClient {
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsInputIMClient
   */
  app?: WebitelContactsLookup
  /**
   * Unique ID of the latest version of an existing resorce.
   * @type {string}
   * @memberof WebitelContactsInputIMClient
   */
  etag?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsInputIMClient
   */
  user: WebitelContactsLookup
  /**
   * [Via] App(-specific) peer(-id) to connect[from] the IM client.
   * @type {string}
   * @memberof WebitelContactsInputIMClient
   */
  via?: string
}
