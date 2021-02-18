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
 * @interface EnginePatchAgentSkillRequest
 */
export interface EnginePatchAgentSkillRequest {
  /**
   *
   * @type {string}
   * @memberof EnginePatchAgentSkillRequest
   */
  agent_id?: string
  /**
   *
   * @type {number}
   * @memberof EnginePatchAgentSkillRequest
   */
  capacity?: number
  /**
   *
   * @type {string}
   * @memberof EnginePatchAgentSkillRequest
   */
  domain_id?: string
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchAgentSkillRequest
   */
  enabled?: boolean
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchAgentSkillRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EnginePatchAgentSkillRequest
   */
  id?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchAgentSkillRequest
   */
  skill?: EngineLookup
}
