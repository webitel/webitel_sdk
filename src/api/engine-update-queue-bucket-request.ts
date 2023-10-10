// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.09.0
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
 * @interface EngineUpdateQueueBucketRequest
 */
export interface EngineUpdateQueueBucketRequest {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueBucketRequest
   */
  bucket?: EngineLookup
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateQueueBucketRequest
   */
  disabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineUpdateQueueBucketRequest
   */
  id?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueBucketRequest
   */
  priority?: number
  /**
   *
   * @type {string}
   * @memberof EngineUpdateQueueBucketRequest
   */
  queue_id?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueBucketRequest
   */
  ratio?: number
}
