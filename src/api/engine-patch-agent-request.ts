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

import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EnginePatchAgentRequest
 */
export interface EnginePatchAgentRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchAgentRequest
   */
  allow_channels?: Array<string>
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EnginePatchAgentRequest
   */
  auditor?: Array<EngineLookup>
  /**
   *
   * @type {number}
   * @memberof EnginePatchAgentRequest
   */
  chat_count?: number
  /**
   *
   * @type {string}
   * @memberof EnginePatchAgentRequest
   */
  description?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchAgentRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchAgentRequest
   */
  greeting_media?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EnginePatchAgentRequest
   */
  id?: string
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchAgentRequest
   */
  is_supervisor?: boolean
  /**
   *
   * @type {number}
   * @memberof EnginePatchAgentRequest
   */
  progressive_count?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchAgentRequest
   */
  region?: EngineLookup
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EnginePatchAgentRequest
   */
  supervisor?: Array<EngineLookup>
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchAgentRequest
   */
  team?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchAgentRequest
   */
  user?: EngineLookup
}
