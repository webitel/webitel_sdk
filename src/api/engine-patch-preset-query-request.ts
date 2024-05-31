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
 * @interface EnginePatchPresetQueryRequest
 */
export interface EnginePatchPresetQueryRequest {
  /**
   *
   * @type {string}
   * @memberof EnginePatchPresetQueryRequest
   */
  description?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchPresetQueryRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {number}
   * @memberof EnginePatchPresetQueryRequest
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof EnginePatchPresetQueryRequest
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof EnginePatchPresetQueryRequest
   */
  preset?: object
  /**
   *
   * @type {EnginePresetQuerySection}
   * @memberof EnginePatchPresetQueryRequest
   */
  section?: EnginePresetQuerySection
}
