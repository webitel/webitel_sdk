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

import { ApiOrganization } from './api-organization'

/**
 *
 * @export
 * @interface ApiCreateDomainRequest
 */
export interface ApiCreateDomainRequest {
  /**
   *
   * @type {ApiOrganization}
   * @memberof ApiCreateDomainRequest
   */
  organization?: ApiOrganization
  /**
   *
   * @type {string}
   * @memberof ApiCreateDomainRequest
   */
  password?: string
  /**
   *
   * @type {string}
   * @memberof ApiCreateDomainRequest
   */
  superuser?: string
}
