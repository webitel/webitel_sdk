// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.12.0
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
 * @interface EngineList
 */
export interface EngineList {
  /**
   *
   * @type {string}
   * @memberof EngineList
   */
  count?: string
  /**
   *
   * @type {string}
   * @memberof EngineList
   */
  created_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineList
   */
  created_by?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineList
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineList
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineList
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineList
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EngineList
   */
  updated_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineList
   */
  updated_by?: EngineLookup
}
