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
 * @interface EngineCreateQueueHookRequest
 */
export interface EngineCreateQueueHookRequest {
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateQueueHookRequest
   */
  enabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineCreateQueueHookRequest
   */
  event?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineCreateQueueHookRequest
   */
  properties?: Array<string>
  /**
   *
   * @type {number}
   * @memberof EngineCreateQueueHookRequest
   */
  queue_id?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateQueueHookRequest
   */
  schema?: EngineLookup
}
