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

/**
 *
 * @export
 * @interface EngineQueueHook
 */
export interface EngineQueueHook {
  /**
   *
   * @type {boolean}
   * @memberof EngineQueueHook
   */
  enabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineQueueHook
   */
  event?: string
  /**
   *
   * @type {number}
   * @memberof EngineQueueHook
   */
  id?: number
  /**
   *
   * @type {Array<string>}
   * @memberof EngineQueueHook
   */
  properties?: Array<string>
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueueHook
   */
  schema?: EngineLookup
}
