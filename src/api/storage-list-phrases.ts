// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { StorageTranscriptPhrase } from './storage-transcript-phrase'

/**
 *
 * @export
 * @interface StorageListPhrases
 */
export interface StorageListPhrases {
  /**
   *
   * @type {Array<StorageTranscriptPhrase>}
   * @memberof StorageListPhrases
   */
  items?: Array<StorageTranscriptPhrase>
  /**
   *
   * @type {boolean}
   * @memberof StorageListPhrases
   */
  next?: boolean
}
