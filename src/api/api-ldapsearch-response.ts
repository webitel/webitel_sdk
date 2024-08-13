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

import { ApiLDAPControl } from './api-ldapcontrol'

/**
 *
 * @export
 * @interface ApiLDAPSearchResponse
 */
export interface ApiLDAPSearchResponse {
  /**
   *
   * @type {Array<ApiLDAPControl>}
   * @memberof ApiLDAPSearchResponse
   */
  controls?: Array<ApiLDAPControl>
  /**
   *
   * @type {string}
   * @memberof ApiLDAPSearchResponse
   */
  diagnosticMessage?: string
  /**
   *
   * @type {Array<object>}
   * @memberof ApiLDAPSearchResponse
   */
  entries?: Array<object>
  /**
   *
   * @type {string}
   * @memberof ApiLDAPSearchResponse
   */
  matchedDN?: string
  /**
   *
   * @type {Array<string>}
   * @memberof ApiLDAPSearchResponse
   */
  referral?: Array<string>
  /**
   *
   * @type {number}
   * @memberof ApiLDAPSearchResponse
   */
  resultCode?: number
}