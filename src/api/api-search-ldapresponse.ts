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

import { ApiLDAPCatalog } from './api-ldapcatalog'

/**
 *
 * @export
 * @interface ApiSearchLDAPResponse
 */
export interface ApiSearchLDAPResponse {
  /**
   *
   * @type {Array<ApiLDAPCatalog>}
   * @memberof ApiSearchLDAPResponse
   */
  items?: Array<ApiLDAPCatalog>
  /**
   *
   * @type {boolean}
   * @memberof ApiSearchLDAPResponse
   */
  next?: boolean
  /**
   *
   * @type {number}
   * @memberof ApiSearchLDAPResponse
   */
  page?: number
}