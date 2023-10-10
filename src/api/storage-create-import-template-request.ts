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

import { EngineLookup } from './engine-lookup'
import { StorageImportSourceType } from './storage-import-source-type'

/**
 * Create import template for CSV
 * @export
 * @interface StorageCreateImportTemplateRequest
 */
export interface StorageCreateImportTemplateRequest {
  /**
   *
   * @type {string}
   * @memberof StorageCreateImportTemplateRequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof StorageCreateImportTemplateRequest
   */
  name: string
  /**
   *
   * @type {object}
   * @memberof StorageCreateImportTemplateRequest
   */
  parameters: object
  /**
   *
   * @type {EngineLookup}
   * @memberof StorageCreateImportTemplateRequest
   */
  source?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof StorageCreateImportTemplateRequest
   */
  source_id: string
  /**
   *
   * @type {StorageImportSourceType}
   * @memberof StorageCreateImportTemplateRequest
   */
  source_type?: StorageImportSourceType
}
