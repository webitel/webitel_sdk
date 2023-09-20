// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
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
 * @interface EngineOutboundResourceGroup
 */
export interface EngineOutboundResourceGroup {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineOutboundResourceGroup
   */
  communication?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineOutboundResourceGroup
   */
  created_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineOutboundResourceGroup
   */
  created_by?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineOutboundResourceGroup
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineOutboundResourceGroup
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineOutboundResourceGroup
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineOutboundResourceGroup
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EngineOutboundResourceGroup
   */
  strategy?: string
  /**
   *
   * @type {Array<EngineOutboundResourceTimeRange>}
   * @memberof EngineOutboundResourceGroup
   */
  time?: Array<EngineOutboundResourceTimeRange>
  /**
   *
   * @type {string}
   * @memberof EngineOutboundResourceGroup
   */
  updated_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineOutboundResourceGroup
   */
  updated_by?: EngineLookup
}
