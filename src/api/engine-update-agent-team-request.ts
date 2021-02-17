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
 * @interface EngineUpdateAgentTeamRequest
 */
export interface EngineUpdateAgentTeamRequest {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateAgentTeamRequest
   */
  administrator?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineUpdateAgentTeamRequest
   */
  call_timeout?: number
  /**
   *
   * @type {string}
   * @memberof EngineUpdateAgentTeamRequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateAgentTeamRequest
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateAgentTeamRequest
   */
  id?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateAgentTeamRequest
   */
  max_no_answer?: number
  /**
   *
   * @type {string}
   * @memberof EngineUpdateAgentTeamRequest
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateAgentTeamRequest
   */
  no_answer_delay_time?: number
  /**
   *
   * @type {string}
   * @memberof EngineUpdateAgentTeamRequest
   */
  strategy?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateAgentTeamRequest
   */
  wrap_up_time?: number
}
