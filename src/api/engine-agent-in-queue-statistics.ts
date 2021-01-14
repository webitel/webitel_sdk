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

import { AgentInQueueStatisticsAgentInQueueStatisticsItem } from './agent-in-queue-statistics-agent-in-queue-statistics-item'
import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineAgentInQueueStatistics
 */
export interface EngineAgentInQueueStatistics {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAgentInQueueStatistics
   */
  queue?: EngineLookup
  /**
   *
   * @type {Array<AgentInQueueStatisticsAgentInQueueStatisticsItem>}
   * @memberof EngineAgentInQueueStatistics
   */
  statistics?: Array<AgentInQueueStatisticsAgentInQueueStatisticsItem>
}
