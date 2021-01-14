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
 * @interface AgentInQueueStatisticsAgentInQueueStatisticsItem
 */
export interface AgentInQueueStatisticsAgentInQueueStatisticsItem {
  /**
   *
   * @type {EngineLookup}
   * @memberof AgentInQueueStatisticsAgentInQueueStatisticsItem
   */
  bucket?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof AgentInQueueStatisticsAgentInQueueStatisticsItem
   */
  member_waiting?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof AgentInQueueStatisticsAgentInQueueStatisticsItem
   */
  skill?: EngineLookup
}
