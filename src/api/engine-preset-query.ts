// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
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
 * @interface EnginePresetQuery
 */
export interface EnginePresetQuery {
  /**
   *
   * @type {string}
   * @memberof EnginePresetQuery
   */
  created_at?: string
  /**
   *
   * @type {string}
   * @memberof EnginePresetQuery
   */
  description?: string
  /**
   *
   * @type {number}
   * @memberof EnginePresetQuery
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof EnginePresetQuery
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof EnginePresetQuery
   */
  preset?: object
  /**
   *
   * @type {EnginePresetQuerySection}
   * @memberof EnginePresetQuery
   */
  section?: EnginePresetQuerySection
  /**
   *
   * @type {string}
   * @memberof EnginePresetQuery
   */
  updated_at?: string
}
