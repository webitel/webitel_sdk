// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 22.05.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineLookup } from './engine-lookup'

/**
 * Update email profile for gateway
 * @export
 * @interface EnginePatchEmailProfileRequest
 */
export interface EnginePatchEmailProfileRequest {
  /**
   *
   * @type {string}
   * @memberof EnginePatchEmailProfileRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchEmailProfileRequest
   */
  enabled?: boolean
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchEmailProfileRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EnginePatchEmailProfileRequest
   */
  host?: string
  /**
   *
   * @type {string}
   * @memberof EnginePatchEmailProfileRequest
   */
  id: string
  /**
   *
   * @type {number}
   * @memberof EnginePatchEmailProfileRequest
   */
  imap_port?: number
  /**
   *
   * @type {string}
   * @memberof EnginePatchEmailProfileRequest
   */
  login?: string
  /**
   *
   * @type {string}
   * @memberof EnginePatchEmailProfileRequest
   */
  mailbox?: string
  /**
   *
   * @type {string}
   * @memberof EnginePatchEmailProfileRequest
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EnginePatchEmailProfileRequest
   */
  password?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchEmailProfileRequest
   */
  schema?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EnginePatchEmailProfileRequest
   */
  smtp_port?: number
}