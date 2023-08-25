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
 * @interface EngineCreateQueueBucketRequest
 */
export interface EngineCreateQueueBucketRequest {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateQueueBucketRequest
   */
  bucket?: EngineLookup
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateQueueBucketRequest
   */
  disabled?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineCreateQueueBucketRequest
   */
  priority?: number
  /**
   *
   * @type {string}
   * @memberof EngineCreateQueueBucketRequest
   */
  queue_id?: string
  /**
   *
   * @type {number}
   * @memberof EngineCreateQueueBucketRequest
   */
  ratio?: number
}
