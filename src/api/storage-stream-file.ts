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

import { StorageStreamFileMetadata } from './storage-stream-file-metadata'

/**
 *
 * @export
 * @interface StorageStreamFile
 */
export interface StorageStreamFile {
  /**
   *
   * @type {string}
   * @memberof StorageStreamFile
   */
  chunk?: string
  /**
   *
   * @type {StorageStreamFileMetadata}
   * @memberof StorageStreamFile
   */
  metadata?: StorageStreamFileMetadata
}
