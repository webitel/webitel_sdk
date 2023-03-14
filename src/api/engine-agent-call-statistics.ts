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

/**
 *
 * @export
 * @interface EngineAgentCallStatistics
 */
export interface EngineAgentCallStatistics {
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  abandoned?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  avg_hold_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  avg_talk_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  chat_accepts?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  chat_aht?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  count?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  handles?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  max_hold_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  max_talk_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  min_hold_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  min_talk_sec?: number
  /**
   *
   * @type {string}
   * @memberof EngineAgentCallStatistics
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  occupancy?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  sum_hold_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  sum_talk_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentCallStatistics
   */
  utilization?: number
}
