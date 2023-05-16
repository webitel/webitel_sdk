// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.02.0
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
 * @interface EngineUpdatePresetQueryRequest
 */
export interface EngineUpdatePresetQueryRequest {
  /**
   *
   * @type {string}
   * @memberof EngineUpdatePresetQueryRequest
   */
  description?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdatePresetQueryRequest
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof EngineUpdatePresetQueryRequest
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof EngineUpdatePresetQueryRequest
   */
  preset?: object
  /**
   *
   * @type {EnginePresetQuerySection}
   * @memberof EngineUpdatePresetQueryRequest
   */
  section?: EnginePresetQuerySection
}