// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.02.0
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
 * @interface EngineCreateAgentSkillRequest
 */
export interface EngineCreateAgentSkillRequest {
  /**
   *
   * @type {string}
   * @memberof EngineCreateAgentSkillRequest
   */
  agent_id?: string
  /**
   *
   * @type {number}
   * @memberof EngineCreateAgentSkillRequest
   */
  capacity?: number
  /**
   *
   * @type {string}
   * @memberof EngineCreateAgentSkillRequest
   */
  domain_id?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateAgentSkillRequest
   */
  enabled?: boolean
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateAgentSkillRequest
   */
  skill?: EngineLookup
}
