// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
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
 * @interface EngineUpdateQueueSkillRequest
 */
export interface EngineUpdateQueueSkillRequest {
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EngineUpdateQueueSkillRequest
   */
  buckets?: Array<EngineLookup>
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateQueueSkillRequest
   */
  enabled?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueSkillRequest
   */
  id?: number
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueSkillRequest
   */
  lvl?: number
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueSkillRequest
   */
  max_capacity?: number
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueSkillRequest
   */
  min_capacity?: number
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueSkillRequest
   */
  queue_id?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueSkillRequest
   */
  skill?: EngineLookup
}
