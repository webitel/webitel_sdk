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
 * @interface StorageStartFileTranscriptRequest
 */
export interface StorageStartFileTranscriptRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof StorageStartFileTranscriptRequest
   */
  file_id?: Array<string>
  /**
   *
   * @type {string}
   * @memberof StorageStartFileTranscriptRequest
   */
  locale?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof StorageStartFileTranscriptRequest
   */
  profile?: EngineLookup
  /**
   *
   * @type {Array<string>}
   * @memberof StorageStartFileTranscriptRequest
   */
  uuid?: Array<string>
}
