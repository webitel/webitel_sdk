// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.12.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineUpdateEmailProfileRequest
 */
export interface EngineUpdateEmailProfileRequest {
  /**
   *
   * @type {string}
   * @memberof EngineUpdateEmailProfileRequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateEmailProfileRequest
   */
  domain_id?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateEmailProfileRequest
   */
  enabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineUpdateEmailProfileRequest
   */
  host?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateEmailProfileRequest
   */
  id?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateEmailProfileRequest
   */
  imap_port?: number
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
   * @type {number}
   * @memberof EngineUpdateEmailProfileRequest
   */
  smtp_port?: number
}
