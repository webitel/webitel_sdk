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

import { EngineAgentCallStatistics } from './engine-agent-call-statistics'

/**
 *
 * @export
 * @interface EngineAgentCallStatisticsList
 */
export interface EngineAgentCallStatisticsList {
  /**
   *
   * @type {Array<EngineAgentCallStatistics>}
   * @memberof EngineAgentCallStatisticsList
   */
  items?: Array<EngineAgentCallStatistics>
  /**
   *
   * @type {boolean}
   * @memberof EngineAgentCallStatisticsList
   */
  next?: boolean
}
