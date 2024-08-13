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

import { ApiAccessRule } from './api-access-rule'

/**
 *
 * @export
 * @interface ApiListAccessResponseV1
 */
export interface ApiListAccessResponseV1 {
  /**
   *
   * @type {Array<ApiAccessRule>}
   * @memberof ApiListAccessResponseV1
   */
  items?: Array<ApiAccessRule>
  /**
   *
   * @type {boolean}
   * @memberof ApiListAccessResponseV1
   */
  next?: boolean
  /**
   *
   * @type {number}
   * @memberof ApiListAccessResponseV1
   */
  page?: number
}