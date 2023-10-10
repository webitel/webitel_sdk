// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.09.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { StorageMediaFile } from './storage-media-file'

/**
 *
 * @export
 * @interface StorageListMedia
 */
export interface StorageListMedia {
  /**
   *
   * @type {Array<StorageMediaFile>}
   * @memberof StorageListMedia
   */
  items?: Array<StorageMediaFile>
  /**
   *
   * @type {boolean}
   * @memberof StorageListMedia
   */
  next?: boolean
}
