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

import { StorageUploadStatusCode } from './storage-upload-status-code'

/**
 *
 * @export
 * @interface StorageUploadFileResponse
 */
export interface StorageUploadFileResponse {
  /**
   *
   * @type {StorageUploadStatusCode}
   * @memberof StorageUploadFileResponse
   */
  code?: StorageUploadStatusCode
  /**
   *
   * @type {string}
   * @memberof StorageUploadFileResponse
   */
  file_id?: string
  /**
   *
   * @type {string}
   * @memberof StorageUploadFileResponse
   */
  file_url?: string
  /**
   *
   * @type {string}
   * @memberof StorageUploadFileResponse
   */
  size?: string
}
