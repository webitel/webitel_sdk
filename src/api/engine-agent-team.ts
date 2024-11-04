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

import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineAgentTeam
 */
export interface EngineAgentTeam {
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EngineAgentTeam
   */
  admin?: Array<EngineLookup>
  /**
   *
   * @type {number}
   * @memberof EngineAgentTeam
   */
  call_timeout?: number
  /**
   *
   * @type {string}
   * @memberof EngineAgentTeam
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineAgentTeam
   */
  domain_id?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAgentTeam
   */
  forecast_calculation?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineAgentTeam
   */
  id?: string
  /**
   *
   * @type {number}
   * @memberof EngineAgentTeam
   */
  invite_chat_timeout?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentTeam
   */
  max_no_answer?: number
  /**
   *
   * @type {string}
   * @memberof EngineAgentTeam
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof EngineAgentTeam
   */
  no_answer_delay_time?: number
  /**
   *
   * @type {string}
   * @memberof EngineAgentTeam
   */
  strategy?: string
  /**
   *
   * @type {number}
   * @memberof EngineAgentTeam
   */
  task_accept_timeout?: number
  /**
   *
   * @type {string}
   * @memberof EngineAgentTeam
   */
  updated_at?: string
  /**
   *
   * @type {number}
   * @memberof EngineAgentTeam
   */
  wrap_up_time?: number
}
