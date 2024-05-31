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
 * @interface StorageFileTranscriptSafeResponse
 */
export interface StorageFileTranscriptSafeResponse {
  /**
   *
   * @type {string}
   * @memberof StorageFileTranscriptSafeResponse
   */
  created_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof StorageFileTranscriptSafeResponse
   */
  file?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof StorageFileTranscriptSafeResponse
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof StorageFileTranscriptSafeResponse
   */
  locale?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof StorageFileTranscriptSafeResponse
   */
  profile?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof StorageFileTranscriptSafeResponse
   */
  transcript?: string
}
