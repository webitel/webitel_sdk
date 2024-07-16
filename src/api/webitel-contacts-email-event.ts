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

import { WebitelContactsAttachment } from './webitel-contacts-attachment'
import { WebitelContactsLookup } from './webitel-contacts-lookup'

/**
 *
 * @export
 * @interface WebitelContactsEmailEvent
 */
export interface WebitelContactsEmailEvent {
  /**
   *
   * @type {Array<WebitelContactsAttachment>}
   * @memberof WebitelContactsEmailEvent
   */
  attachments?: Array<WebitelContactsAttachment>
  /**
   *
   * @type {string}
   * @memberof WebitelContactsEmailEvent
   */
  body?: string
  /**
   *
   * @type {Array<string>}
   * @memberof WebitelContactsEmailEvent
   */
  cc?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof WebitelContactsEmailEvent
   */
  from?: Array<string>
  /**
   *
   * @type {string}
   * @memberof WebitelContactsEmailEvent
   */
  html?: string
  /**
   *
   * @type {string}
   * @memberof WebitelContactsEmailEvent
   */
  id?: string
  /**
   *
   * @type {boolean}
   * @memberof WebitelContactsEmailEvent
   */
  is_detailed?: boolean
  /**
   *
   * @type {boolean}
   * @memberof WebitelContactsEmailEvent
   */
  is_inbound?: boolean
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsEmailEvent
   */
  owner?: WebitelContactsLookup
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsEmailEvent
   */
  profile?: WebitelContactsLookup
  /**
   *
   * @type {Array<string>}
   * @memberof WebitelContactsEmailEvent
   */
  sender?: Array<string>
  /**
   *
   * @type {string}
   * @memberof WebitelContactsEmailEvent
   */
  subject?: string
  /**
   *
   * @type {Array<string>}
   * @memberof WebitelContactsEmailEvent
   */
  to?: Array<string>
}
