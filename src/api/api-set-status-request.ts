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

import { ApiUserPresence } from './api-user-presence'

/**
 *
 * @export
 * @interface ApiSetStatusRequest
 */
export interface ApiSetStatusRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof ApiSetStatusRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {ApiUserPresence}
   * @memberof ApiSetStatusRequest
   */
  publish?: ApiUserPresence
}
