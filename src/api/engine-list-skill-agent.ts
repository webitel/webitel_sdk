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

import { EngineListSkillAgentListSkillAgg } from './engine-list-skill-agent-list-skill-agg'
import { EngineSkillAgentItem } from './engine-skill-agent-item'

/**
 *
 * @export
 * @interface EngineListSkillAgent
 */
export interface EngineListSkillAgent {
  /**
   *
   * @type {EngineListSkillAgentListSkillAgg}
   * @memberof EngineListSkillAgent
   */
  aggs?: EngineListSkillAgentListSkillAgg
  /**
   *
   * @type {Array<EngineSkillAgentItem>}
   * @memberof EngineListSkillAgent
   */
  items?: Array<EngineSkillAgentItem>
  /**
   *
   * @type {boolean}
   * @memberof EngineListSkillAgent
   */
  next?: boolean
}
