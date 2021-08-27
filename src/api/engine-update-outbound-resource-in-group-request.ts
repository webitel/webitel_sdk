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
 * @interface EngineUpdateOutboundResourceInGroupRequest
 */
export interface EngineUpdateOutboundResourceInGroupRequest {
  /**
   *
   * @type {string}
   * @memberof EngineUpdateOutboundResourceInGroupRequest
   */
  group_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateOutboundResourceInGroupRequest
   */
  id?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateOutboundResourceInGroupRequest
   */
  priority?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateOutboundResourceInGroupRequest
   */
  reserve_resource?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateOutboundResourceInGroupRequest
   */
  resource?: EngineLookup
}
