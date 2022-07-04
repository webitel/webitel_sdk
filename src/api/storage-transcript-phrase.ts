// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 22.05.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface StorageTranscriptPhrase
 */
export interface StorageTranscriptPhrase {
  /**
   *
   * @type {number}
   * @memberof StorageTranscriptPhrase
   */
  channel?: number
  /**
   *
   * @type {number}
   * @memberof StorageTranscriptPhrase
   */
  end_sec?: number
  /**
   *
   * @type {string}
   * @memberof StorageTranscriptPhrase
   */
  phrase?: string
  /**
   *
   * @type {number}
   * @memberof StorageTranscriptPhrase
   */
  start_sec?: number
}