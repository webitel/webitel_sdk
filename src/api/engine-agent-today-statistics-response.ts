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

/**
 *
 * @export
 * @interface EngineAgentTodayStatisticsResponse
 */
export interface EngineAgentTodayStatisticsResponse {
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  available?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  avg_hold_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  avg_talk_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  call_abandoned?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  call_handled?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  call_inbound?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  call_missed?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  chat_accepts?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  chat_aht?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  occupancy?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  online?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  processing?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  queue_talk_sec?: number
  /**
   *
   * @type {string}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  score_count?: string
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  score_optional_avg?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  score_optional_sum?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  score_required_avg?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  score_required_sum?: number
  /**
   *
   * @type {string}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  sum_talk_sec?: string
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  task_accepts?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  utilization?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTodayStatisticsResponse
   */
  voice_mail?: number
}
