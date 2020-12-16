// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2019.0.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineCallFile } from './engine-call-file'
import { EngineEndpoint } from './engine-endpoint'
import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineHistoryCall
 */
export interface EngineHistoryCall {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineHistoryCall
   */
  agent?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  answered_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  app_id?: string
  /**
   *
   * @type {number}
   * @memberof EngineHistoryCall
   */
  bill_sec?: number
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  bridged_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  cause?: string
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  created_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  destination?: string
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  direction?: string
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  display?: string
  /**
   *
   * @type {number}
   * @memberof EngineHistoryCall
   */
  duration?: number
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  extension?: string
  /**
   *
   * @type {Array<EngineCallFile>}
   * @memberof EngineHistoryCall
   */
  files?: Array<EngineCallFile>
  /**
   *
   * @type {EngineEndpoint}
   * @memberof EngineHistoryCall
   */
  from?: EngineEndpoint
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineHistoryCall
   */
  gateway?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  hangup_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  hangup_by?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineHistoryCall
   */
  has_children?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineHistoryCall
   */
  hold_sec?: number
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  joined_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  leaving_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineHistoryCall
   */
  member?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  parent_id?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineHistoryCall
   */
  queue?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  queue_bridged_at?: string
  /**
   *
   * @type {number}
   * @memberof EngineHistoryCall
   */
  queue_duration_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineHistoryCall
   */
  queue_wait_sec?: number
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  reporting_at?: string
  /**
   *
   * @type {number}
   * @memberof EngineHistoryCall
   */
  reporting_sec?: number
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  result?: string
  /**
   *
   * @type {number}
   * @memberof EngineHistoryCall
   */
  sip_code?: number
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  stored_at?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineHistoryCall
   */
  tags?: Array<string>
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineHistoryCall
   */
  team?: EngineLookup
  /**
   *
   * @type {EngineEndpoint}
   * @memberof EngineHistoryCall
   */
  to?: EngineEndpoint
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  transfer_from?: string
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  transfer_to?: string
  /**
   *
   * @type {string}
   * @memberof EngineHistoryCall
   */
  type?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineHistoryCall
   */
  user?: EngineLookup
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineHistoryCall
   */
  variables?: { [key: string]: string }
  /**
   *
   * @type {number}
   * @memberof EngineHistoryCall
   */
  wait_sec?: number
}