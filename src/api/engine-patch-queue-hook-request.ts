// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.12.0
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
 * @interface EnginePatchQueueHookRequest
 */
export interface EnginePatchQueueHookRequest {
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchQueueHookRequest
   */
  enabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EnginePatchQueueHookRequest
   */
  event?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchQueueHookRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {number}
   * @memberof EnginePatchQueueHookRequest
   */
  id?: number
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchQueueHookRequest
   */
  properties?: Array<string>
  /**
   *
   * @type {number}
   * @memberof EnginePatchQueueHookRequest
   */
  queue_id?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchQueueHookRequest
   */
  schema?: EngineLookup
}
