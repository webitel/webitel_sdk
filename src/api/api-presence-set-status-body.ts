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

import { Int64Id1UserId } from './int64-id1-user-id'

/**
 *
 * @export
 * @interface ApiPresenceSetStatusBody
 */
export interface ApiPresenceSetStatusBody {
  /**
   *
   * @type {Array<string>}
   * @memberof ApiPresenceSetStatusBody
   */
  fields?: Array<string>
  /**
   *
   * @type {Int64Id1UserId}
   * @memberof ApiPresenceSetStatusBody
   */
  publish?: Int64Id1UserId
}