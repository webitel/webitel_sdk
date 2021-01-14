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

import { EngineEndpoint } from './engine-endpoint'
import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineActiveCall
 */
export interface EngineActiveCall {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineActiveCall
   */
  agent?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  answered_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  app_id?: string
  /**
   *
   * @type {number}
   * @memberof EngineActiveCall
   */
  bill_sec?: number
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  bridged_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  created_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  destination?: string
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  direction?: string
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  display?: string
  /**
   *
   * @type {number}
   * @memberof EngineActiveCall
   */
  duration?: number
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  extension?: string
  /**
   *
   * @type {EngineEndpoint}
   * @memberof EngineActiveCall
   */
  from?: EngineEndpoint
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineActiveCall
   */
  gateway?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineActiveCall
   */
  hold_sec?: number
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  joined_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  leaving_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineActiveCall
   */
  member?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  parent_id?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineActiveCall
   */
  queue?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  queue_bridged_at?: string
  /**
   *
   * @type {number}
   * @memberof EngineActiveCall
   */
  queue_duration_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineActiveCall
   */
  queue_wait_sec?: number
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  reporting_at?: string
  /**
   *
   * @type {number}
   * @memberof EngineActiveCall
   */
  reporting_sec?: number
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  state?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineActiveCall
   */
  team?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  timestamp?: string
  /**
   *
   * @type {EngineEndpoint}
   * @memberof EngineActiveCall
   */
  to?: EngineEndpoint
  /**
   *
   * @type {string}
   * @memberof EngineActiveCall
   */
  type?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineActiveCall
   */
  user?: EngineLookup
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineActiveCall
   */
  variables?: { [key: string]: string }
  /**
   *
   * @type {number}
   * @memberof EngineActiveCall
   */
  wait_sec?: number
}
