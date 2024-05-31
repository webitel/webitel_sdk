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

import { ApiDeviceId } from './api-device-id'
import { ApiUserId } from './api-user-id'

/**
 *
 * @export
 * @interface ApiDeviceAudit
 */
export interface ApiDeviceAudit {
  /**
   *
   * @type {ApiDeviceId}
   * @memberof ApiDeviceAudit
   */
  device?: ApiDeviceId
  /**
   *
   * @type {string}
   * @memberof ApiDeviceAudit
   */
  hotdesk?: string
  /**
   *
   * @type {string}
   * @memberof ApiDeviceAudit
   */
  logged_in?: string
  /**
   *
   * @type {string}
   * @memberof ApiDeviceAudit
   */
  logged_out?: string
  /**
   *
   * @type {ApiUserId}
   * @memberof ApiDeviceAudit
   */
  user?: ApiUserId
}
