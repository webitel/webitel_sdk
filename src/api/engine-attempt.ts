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

import { EngineLookup } from './engine-lookup'
import { EngineMemberCommunication } from './engine-member-communication'

/**
 *
 * @export
 * @interface EngineAttempt
 */
export interface EngineAttempt {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAttempt
   */
  agent?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  agent_call_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  bridged_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAttempt
   */
  bucket?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  channel?: string
  /**
   *
   * @type {EngineMemberCommunication}
   * @memberof EngineAttempt
   */
  destination?: EngineMemberCommunication
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  display?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  joined_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  last_state_change?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  leaving_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAttempt
   */
  list?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAttempt
   */
  member?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  member_call_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  offering_at?: string
  /**
   *
   * @type {number}
   * @memberof EngineAttempt
   */
  position?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAttempt
   */
  queue?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  reporting_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAttempt
   */
  resource?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  result?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  state?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttempt
   */
  timeout?: string
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineAttempt
   */
  variables?: { [key: string]: string }
}
