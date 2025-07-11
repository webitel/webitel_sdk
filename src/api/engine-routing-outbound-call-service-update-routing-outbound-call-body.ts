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

import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineRoutingOutboundCallServiceUpdateRoutingOutboundCallBody
 */
export interface EngineRoutingOutboundCallServiceUpdateRoutingOutboundCallBody {
  /**
   *
   * @type {string}
   * @memberof EngineRoutingOutboundCallServiceUpdateRoutingOutboundCallBody
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineRoutingOutboundCallServiceUpdateRoutingOutboundCallBody
   */
  disabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineRoutingOutboundCallServiceUpdateRoutingOutboundCallBody
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineRoutingOutboundCallServiceUpdateRoutingOutboundCallBody
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EngineRoutingOutboundCallServiceUpdateRoutingOutboundCallBody
   */
  pattern?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineRoutingOutboundCallServiceUpdateRoutingOutboundCallBody
   */
  schema?: EngineLookup
}
