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

import { ApiUserAccessToken } from './api-user-access-token'

/**
 *
 * @export
 * @interface ApiUserAccessTokenList
 */
export interface ApiUserAccessTokenList {
  /**
   *
   * @type {Array<ApiUserAccessToken>}
   * @memberof ApiUserAccessTokenList
   */
  items?: Array<ApiUserAccessToken>
  /**
   *
   * @type {boolean}
   * @memberof ApiUserAccessTokenList
   */
  next?: boolean
  /**
   *
   * @type {number}
   * @memberof ApiUserAccessTokenList
   */
  page?: number
  /**
   *
   * @type {string}
   * @memberof ApiUserAccessTokenList
   */
  size?: string
}