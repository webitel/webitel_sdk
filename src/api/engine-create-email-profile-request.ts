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

import { EngineLookup } from './engine-lookup'

/**
 * Create email profile for gateway
 * @export
 * @interface EngineCreateEmailProfileRequest
 */
export interface EngineCreateEmailProfileRequest {
  /**
   *
   * @type {string}
   * @memberof EngineCreateEmailProfileRequest
   */
  auth_type?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateEmailProfileRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateEmailProfileRequest
   */
  enabled?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineCreateEmailProfileRequest
   */
  fetch_interval: number
  /**
   *
   * @type {string}
   * @memberof EngineCreateEmailProfileRequest
   */
  imap_host: string
  /**
   *
   * @type {number}
   * @memberof EngineCreateEmailProfileRequest
   */
  imap_port: number
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateEmailProfileRequest
   */
  listen?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineCreateEmailProfileRequest
   */
  login: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateEmailProfileRequest
   */
  mailbox: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateEmailProfileRequest
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateEmailProfileRequest
   */
  password?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateEmailProfileRequest
   */
  schema: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineCreateEmailProfileRequest
   */
  smtp_host: string
  /**
   *
   * @type {number}
   * @memberof EngineCreateEmailProfileRequest
   */
  smtp_port: number
}
