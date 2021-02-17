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
 * @interface EngineCreateAgentTeamRequest
 */
export interface EngineCreateAgentTeamRequest {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateAgentTeamRequest
   */
  administrator?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineCreateAgentTeamRequest
   */
  call_timeout?: number
  /**
   *
   * @type {string}
   * @memberof EngineCreateAgentTeamRequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateAgentTeamRequest
   */
  domain_id?: string
  /**
   *
   * @type {number}
   * @memberof EngineCreateAgentTeamRequest
   */
  max_no_answer?: number
  /**
   *
   * @type {string}
   * @memberof EngineCreateAgentTeamRequest
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof EngineCreateAgentTeamRequest
   */
  no_answer_delay_time?: number
  /**
   *
   * @type {string}
   * @memberof EngineCreateAgentTeamRequest
   */
  strategy?: string
  /**
   *
   * @type {number}
   * @memberof EngineCreateAgentTeamRequest
   */
  wrap_up_time?: number
}
