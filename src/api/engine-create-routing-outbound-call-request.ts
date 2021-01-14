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
 * @interface EngineCreateRoutingOutboundCallRequest
 */
export interface EngineCreateRoutingOutboundCallRequest {
  /**
   *
   * @type {string}
   * @memberof EngineCreateRoutingOutboundCallRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateRoutingOutboundCallRequest
   */
  disabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineCreateRoutingOutboundCallRequest
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateRoutingOutboundCallRequest
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateRoutingOutboundCallRequest
   */
  pattern?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateRoutingOutboundCallRequest
   */
  schema?: EngineLookup
}
