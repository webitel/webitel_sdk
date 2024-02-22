// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.12.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineEmailAuthType } from './engine-email-auth-type'
import { EngineEmailProfileParams } from './engine-email-profile-params'
import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineUpdateEmailProfileRequest
 */
export interface EngineUpdateEmailProfileRequest {
  /**
   *
   * @type {EngineEmailAuthType}
   * @memberof EngineUpdateEmailProfileRequest
   */
  auth_type?: EngineEmailAuthType
  /**
   *
   * @type {string}
   * @memberof EngineUpdateEmailProfileRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateEmailProfileRequest
   */
  enabled?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineUpdateEmailProfileRequest
   */
  fetch_interval?: number
  /**
   *
   * @type {string}
   * @memberof EngineUpdateEmailProfileRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateEmailProfileRequest
   */
  imap_host?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateEmailProfileRequest
   */
  imap_port?: number
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateEmailProfileRequest
   */
  listen?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineUpdateEmailProfileRequest
   */
  login?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateEmailProfileRequest
   */
  mailbox?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateEmailProfileRequest
   */
  name?: string
  /**
   *
   * @type {EngineEmailProfileParams}
   * @memberof EngineUpdateEmailProfileRequest
   */
  params?: EngineEmailProfileParams
  /**
   *
   * @type {string}
   * @memberof EngineUpdateEmailProfileRequest
   */
  password?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateEmailProfileRequest
   */
  schema?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineUpdateEmailProfileRequest
   */
  smtp_host?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateEmailProfileRequest
   */
  smtp_port?: number
}
