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

import { EngineQueueHook } from './engine-queue-hook'

/**
 *
 * @export
 * @interface EngineListQueueHook
 */
export interface EngineListQueueHook {
  /**
   *
   * @type {Array<EngineQueueHook>}
   * @memberof EngineListQueueHook
   */
  items?: Array<EngineQueueHook>
  /**
   *
   * @type {boolean}
   * @memberof EngineListQueueHook
   */
  next?: boolean
}
