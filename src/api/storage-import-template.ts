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

import { EngineLookup } from './engine-lookup'
import { StorageImportSourceType } from './storage-import-source-type'

/**
 *
 * @export
 * @interface StorageImportTemplate
 */
export interface StorageImportTemplate {
  /**
   *
   * @type {string}
   * @memberof StorageImportTemplate
   */
  description?: string
  /**
   *
   * @type {number}
   * @memberof StorageImportTemplate
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof StorageImportTemplate
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof StorageImportTemplate
   */
  parameters?: object
  /**
   *
   * @type {EngineLookup}
   * @memberof StorageImportTemplate
   */
  source?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof StorageImportTemplate
   */
  source_id?: string
  /**
   *
   * @type {StorageImportSourceType}
   * @memberof StorageImportTemplate
   */
  source_type?: StorageImportSourceType
}
