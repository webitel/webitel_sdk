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

import { EnginePresetQuerySection } from './engine-preset-query-section'

/**
 *
 * @export
 * @interface EngineCreatePresetQueryRequest
 */
export interface EngineCreatePresetQueryRequest {
  /**
   *
   * @type {string}
   * @memberof EngineCreatePresetQueryRequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreatePresetQueryRequest
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof EngineCreatePresetQueryRequest
   */
  preset?: object
  /**
   *
   * @type {EnginePresetQuerySection}
   * @memberof EngineCreatePresetQueryRequest
   */
  section?: EnginePresetQuerySection
}
