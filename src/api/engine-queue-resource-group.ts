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

/**
 *
 * @export
 * @interface EngineQueueResourceGroup
 */
export interface EngineQueueResourceGroup {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueueResourceGroup
   */
  communication?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineQueueResourceGroup
   */
  id?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueueResourceGroup
   */
  resource_group?: EngineLookup
}
