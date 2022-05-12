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

import { EngineAgentSkillItem } from './engine-agent-skill-item'

/**
 *
 * @export
 * @interface EngineListAgentSkill
 */
export interface EngineListAgentSkill {
  /**
   *
   * @type {Array<EngineAgentSkillItem>}
   * @memberof EngineListAgentSkill
   */
  items?: Array<EngineAgentSkillItem>
  /**
   *
   * @type {boolean}
   * @memberof EngineListAgentSkill
   */
  next?: boolean
}
