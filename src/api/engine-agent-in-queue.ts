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

import { AgentInQueueAgentsInQueue } from './agent-in-queue-agents-in-queue'
import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineAgentInQueue
 */
export interface EngineAgentInQueue {
  /**
   *
   * @type {number}
   * @memberof EngineAgentInQueue
   */
  active_members?: number
  /**
   *
   * @type {AgentInQueueAgentsInQueue}
   * @memberof EngineAgentInQueue
   */
  agents?: AgentInQueueAgentsInQueue
  /**
   *
   * @type {number}
   * @memberof EngineAgentInQueue
   */
  count_members?: number
  /**
   *
   * @type {boolean}
   * @memberof EngineAgentInQueue
   */
  enabled?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineAgentInQueue
   */
  max_member_limit?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentInQueue
   */
  priority?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAgentInQueue
   */
  queue?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineAgentInQueue
   */
  strategy?: string
  /**
   *
   * @type {number}
   * @memberof EngineAgentInQueue
   */
  type?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentInQueue
   */
  waiting_members?: number
}
