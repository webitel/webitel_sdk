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
 * @interface EngineAgentPauseCause
 */
export interface EngineAgentPauseCause {
  /**
   *
   * @type {boolean}
   * @memberof EngineAgentPauseCause
   */
  allow_admin?: boolean
  /**
   *
   * @type {boolean}
   * @memberof EngineAgentPauseCause
   */
  allow_agent?: boolean
  /**
   *
   * @type {boolean}
   * @memberof EngineAgentPauseCause
   */
  allow_supervisor?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineAgentPauseCause
   */
  created_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAgentPauseCause
   */
  created_by?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineAgentPauseCause
   */
  description?: string
  /**
   *
   * @type {number}
   * @memberof EngineAgentPauseCause
   */
  id?: number
  /**
   *
   * @type {number}
   * @memberof EngineAgentPauseCause
   */
  limit_min?: number
  /**
   *
   * @type {string}
   * @memberof EngineAgentPauseCause
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EngineAgentPauseCause
   */
  updated_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAgentPauseCause
   */
  updated_by?: EngineLookup
}
