// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.12.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineLookup } from './engine-lookup'
import { EngineOutboundResourceTimeRange } from './engine-outbound-resource-time-range'

/**
 *
 * @export
 * @interface EngineCreateOutboundResourceGroupRequest
 */
export interface EngineCreateOutboundResourceGroupRequest {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateOutboundResourceGroupRequest
   */
  communication?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineCreateOutboundResourceGroupRequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateOutboundResourceGroupRequest
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateOutboundResourceGroupRequest
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateOutboundResourceGroupRequest
   */
  strategy?: string
  /**
   *
   * @type {Array<EngineOutboundResourceTimeRange>}
   * @memberof EngineCreateOutboundResourceGroupRequest
   */
  time?: Array<EngineOutboundResourceTimeRange>
}
