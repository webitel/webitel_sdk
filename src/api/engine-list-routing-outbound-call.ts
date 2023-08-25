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

import { EngineRoutingOutboundCallCompact } from './engine-routing-outbound-call-compact'

/**
 *
 * @export
 * @interface EngineListRoutingOutboundCall
 */
export interface EngineListRoutingOutboundCall {
  /**
   *
   * @type {Array<EngineRoutingOutboundCallCompact>}
   * @memberof EngineListRoutingOutboundCall
   */
  items?: Array<EngineRoutingOutboundCallCompact>
  /**
   *
   * @type {boolean}
   * @memberof EngineListRoutingOutboundCall
   */
  next?: boolean
}
