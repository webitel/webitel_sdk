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
 * @interface EnginePatchQueueBucketRequest
 */
export interface EnginePatchQueueBucketRequest {
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchQueueBucketRequest
   */
  bucket?: EngineLookup
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchQueueBucketRequest
   */
  disabled?: boolean
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchQueueBucketRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EnginePatchQueueBucketRequest
   */
  id?: string
  /**
   *
   * @type {number}
   * @memberof EnginePatchQueueBucketRequest
   */
  priority?: number
  /**
   *
   * @type {string}
   * @memberof EnginePatchQueueBucketRequest
   */
  queue_id?: string
  /**
   *
   * @type {number}
   * @memberof EnginePatchQueueBucketRequest
   */
  ratio?: number
}
