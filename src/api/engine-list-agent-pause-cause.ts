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

import { EngineAgentPauseCause } from './engine-agent-pause-cause'

/**
 *
 * @export
 * @interface EngineListAgentPauseCause
 */
export interface EngineListAgentPauseCause {
  /**
   *
   * @type {Array<EngineAgentPauseCause>}
   * @memberof EngineListAgentPauseCause
   */
  items?: Array<EngineAgentPauseCause>
  /**
   *
   * @type {boolean}
   * @memberof EngineListAgentPauseCause
   */
  next?: boolean
}
