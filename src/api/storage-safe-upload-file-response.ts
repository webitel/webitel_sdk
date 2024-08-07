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

import { SafeUploadFileResponsePart } from './safe-upload-file-response-part'
import { SafeUploadFileResponseProgress } from './safe-upload-file-response-progress'
import { StorageSafeUploadFileResponseMetadata } from './storage-safe-upload-file-response-metadata'

/**
 *
 * @export
 * @interface StorageSafeUploadFileResponse
 */
export interface StorageSafeUploadFileResponse {
  /**
   *
   * @type {StorageSafeUploadFileResponseMetadata}
   * @memberof StorageSafeUploadFileResponse
   */
  metadata?: StorageSafeUploadFileResponseMetadata
  /**
   *
   * @type {SafeUploadFileResponsePart}
   * @memberof StorageSafeUploadFileResponse
   */
  part?: SafeUploadFileResponsePart
  /**
   *
   * @type {SafeUploadFileResponseProgress}
   * @memberof StorageSafeUploadFileResponse
   */
  progress?: SafeUploadFileResponseProgress
}
