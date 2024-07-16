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

import { WebitelContactsEvent } from './webitel-contacts-event'

/**
 *
 * @export
 * @interface WebitelContactsDayTimeline
 */
export interface WebitelContactsDayTimeline {
  /**
   *
   * @type {string}
   * @memberof WebitelContactsDayTimeline
   */
  calls_count?: string
  /**
   *
   * @type {string}
   * @memberof WebitelContactsDayTimeline
   */
  chats_count?: string
  /**
   *
   * @type {string}
   * @memberof WebitelContactsDayTimeline
   */
  day_timestamp?: string
  /**
   *
   * @type {string}
   * @memberof WebitelContactsDayTimeline
   */
  emails_count?: string
  /**
   *
   * @type {Array<WebitelContactsEvent>}
   * @memberof WebitelContactsDayTimeline
   */
  items?: Array<WebitelContactsEvent>
}
