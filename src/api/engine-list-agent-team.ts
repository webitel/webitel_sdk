// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.09.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineAgentTeam } from './engine-agent-team'

/**
 *
 * @export
 * @interface EngineListAgentTeam
 */
export interface EngineListAgentTeam {
  /**
   *
   * @type {Array<EngineAgentTeam>}
   * @memberof EngineListAgentTeam
   */
  items?: Array<EngineAgentTeam>
  /**
   *
   * @type {boolean}
   * @memberof EngineListAgentTeam
   */
  next?: boolean
}
