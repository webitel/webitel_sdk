// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
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
 * @interface EngineSkillAgentItem
 */
export interface EngineSkillAgentItem {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineSkillAgentItem
   */
  agent?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineSkillAgentItem
   */
  capacity?: number
  /**
   *
   * @type {boolean}
   * @memberof EngineSkillAgentItem
   */
  enabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineSkillAgentItem
   */
  id?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineSkillAgentItem
   */
  skill?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineSkillAgentItem
   */
  team?: EngineLookup
}
