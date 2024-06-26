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
 * @interface EngineUpdateQueueHookRequest
 */
export interface EngineUpdateQueueHookRequest {
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateQueueHookRequest
   */
  enabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineUpdateQueueHookRequest
   */
  event?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueHookRequest
   */
  id?: number
  /**
   *
   * @type {Array<string>}
   * @memberof EngineUpdateQueueHookRequest
   */
  properties?: Array<string>
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueHookRequest
   */
  queue_id?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueHookRequest
   */
  schema?: EngineLookup
}
