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
 * @interface EngineUpdateAgentSkillRequest
 */
export interface EngineUpdateAgentSkillRequest {
  /**
   *
   * @type {string}
   * @memberof EngineUpdateAgentSkillRequest
   */
  agent_id?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateAgentSkillRequest
   */
  capacity?: number
  /**
   *
   * @type {string}
   * @memberof EngineUpdateAgentSkillRequest
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateAgentSkillRequest
   */
  id?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateAgentSkillRequest
   */
  skill?: EngineLookup
}
