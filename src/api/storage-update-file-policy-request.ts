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

import { StorageUploadFileChannel } from './storage-upload-file-channel'

/**
 *
 * @export
 * @interface StorageUpdateFilePolicyRequest
 */
export interface StorageUpdateFilePolicyRequest {
  /**
   *
   * @type {Array<StorageUploadFileChannel>}
   * @memberof StorageUpdateFilePolicyRequest
   */
  channels?: Array<StorageUploadFileChannel>
  /**
   *
   * @type {string}
   * @memberof StorageUpdateFilePolicyRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof StorageUpdateFilePolicyRequest
   */
  enabled?: boolean
  /**
   *
   * @type {boolean}
   * @memberof StorageUpdateFilePolicyRequest
   */
  encrypt?: boolean
  /**
   *
   * @type {number}
   * @memberof StorageUpdateFilePolicyRequest
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof StorageUpdateFilePolicyRequest
   */
  max_upload_size?: string
  /**
   *
   * @type {Array<string>}
   * @memberof StorageUpdateFilePolicyRequest
   */
  mime_types?: Array<string>
  /**
   *
   * @type {string}
   * @memberof StorageUpdateFilePolicyRequest
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof StorageUpdateFilePolicyRequest
   */
  retention_days?: number
  /**
   *
   * @type {string}
   * @memberof StorageUpdateFilePolicyRequest
   */
  speed_download?: string
  /**
   *
   * @type {string}
   * @memberof StorageUpdateFilePolicyRequest
   */
  speed_upload?: string
}
