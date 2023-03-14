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

import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineUpdateRegionRequest
 */
export interface EngineUpdateRegionRequest {
  /**
   *
   * @type {string}
   * @memberof EngineUpdateRegionRequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateRegionRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateRegionRequest
   */
  name?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateRegionRequest
   */
  timezone?: EngineLookup
}
