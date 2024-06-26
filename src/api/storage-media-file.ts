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
 * @interface StorageMediaFile
 */
export interface StorageMediaFile {
  /**
   *
   * @type {string}
   * @memberof StorageMediaFile
   */
  created_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof StorageMediaFile
   */
  created_by?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof StorageMediaFile
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof StorageMediaFile
   */
  mime_type?: string
  /**
   *
   * @type {string}
   * @memberof StorageMediaFile
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof StorageMediaFile
   */
  size?: string
  /**
   *
   * @type {string}
   * @memberof StorageMediaFile
   */
  updated_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof StorageMediaFile
   */
  updated_by?: EngineLookup
}
