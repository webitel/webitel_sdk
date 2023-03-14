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

import { EngineAggregateRequest } from './engine-aggregate-request'
import { EngineBoolFilter } from './engine-bool-filter'
import { EngineFilterBetween } from './engine-filter-between'

/**
 *
 * @export
 * @interface EngineAggregateHistoryCallRequest
 */
export interface EngineAggregateHistoryCallRequest {
  /**
   *
   * @type {string}
   * @memberof EngineAggregateHistoryCallRequest
   */
  agent_description?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  agent_id?: Array<string>
  /**
   *
   * @type {Array<EngineAggregateRequest>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  aggs?: Array<EngineAggregateRequest>
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  amd_result?: Array<string>
  /**
   *
   * @type {EngineFilterBetween}
   * @memberof EngineAggregateHistoryCallRequest
   */
  answered_at?: EngineFilterBetween
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  cause?: Array<string>
  /**
   *
   * @type {EngineFilterBetween}
   * @memberof EngineAggregateHistoryCallRequest
   */
  created_at?: EngineFilterBetween
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  dependency_id?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EngineAggregateHistoryCallRequest
   */
  direction?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  directions?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EngineAggregateHistoryCallRequest
   */
  domain_id?: string
  /**
   *
   * @type {EngineFilterBetween}
   * @memberof EngineAggregateHistoryCallRequest
   */
  duration?: EngineFilterBetween
  /**
   *
   * @type {string}
   * @memberof EngineAggregateHistoryCallRequest
   */
  fts?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  gateway_id?: Array<string>
  /**
   *
   * @type {EngineBoolFilter}
   * @memberof EngineAggregateHistoryCallRequest
   */
  has_file?: EngineBoolFilter
  /**
   *
   * @type {EngineBoolFilter}
   * @memberof EngineAggregateHistoryCallRequest
   */
  has_transcript?: EngineBoolFilter
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  id?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  member_id?: Array<string>
  /**
   *
   * @type {boolean}
   * @memberof EngineAggregateHistoryCallRequest
   */
  missed?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineAggregateHistoryCallRequest
   */
  number?: string
  /**
   *
   * @type {number}
   * @memberof EngineAggregateHistoryCallRequest
   */
  page?: number
  /**
   *
   * @type {string}
   * @memberof EngineAggregateHistoryCallRequest
   */
  parent_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineAggregateHistoryCallRequest
   */
  q?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  queue_id?: Array<string>
  /**
   *
   * @type {number}
   * @memberof EngineAggregateHistoryCallRequest
   */
  size?: number
  /**
   *
   * @type {boolean}
   * @memberof EngineAggregateHistoryCallRequest
   */
  skip_parent?: boolean
  /**
   *
   * @type {EngineFilterBetween}
   * @memberof EngineAggregateHistoryCallRequest
   */
  stored_at?: EngineFilterBetween
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  tags?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  team_id?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  transfer_from?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  transfer_to?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateHistoryCallRequest
   */
  user_id?: Array<string>
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineAggregateHistoryCallRequest
   */
  variables?: { [key: string]: string }
}
