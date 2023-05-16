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
 * @interface EngineCreateSkillAgentRequest
 */
export interface EngineCreateSkillAgentRequest {
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EngineCreateSkillAgentRequest
   */
  agent?: Array<EngineLookup>
  /**
   *
   * @type {number}
   * @memberof EngineCreateSkillAgentRequest
   */
  capacity?: number
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateSkillAgentRequest
   */
  enabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineCreateSkillAgentRequest
   */
  skill_id?: string
}