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
 * @interface ApiRegistration
 */
export interface ApiRegistration {
  /**
   *
   * @type {string}
   * @memberof ApiRegistration
   */
  callid?: string
  /**
   *
   * @type {string}
   * @memberof ApiRegistration
   */
  contact?: string
  /**
   *
   * @type {ApiDeviceId}
   * @memberof ApiRegistration
   */
  device?: ApiDeviceId
  /**
   *
   * @type {string}
   * @memberof ApiRegistration
   */
  expires_at?: string
  /**
   *
   * @type {string}
   * @memberof ApiRegistration
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof ApiRegistration
   */
  instance?: string
  /**
   *
   * @type {string}
   * @memberof ApiRegistration
   */
  received?: string
  /**
   *
   * @type {string}
   * @memberof ApiRegistration
   */
  register_at?: string
  /**
   *
   * @type {string}
   * @memberof ApiRegistration
   */
  socket?: string
  /**
   *
   * @type {ApiUserId}
   * @memberof ApiRegistration
   */
  user?: ApiUserId
  /**
   *
   * @type {string}
   * @memberof ApiRegistration
   */
  user_agent?: string
}
