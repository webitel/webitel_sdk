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

import { EngineOutboundResourceViewGroup } from './engine-outbound-resource-view-group'

/**
 *
 * @export
 * @interface EngineListOutboundResourceGroup
 */
export interface EngineListOutboundResourceGroup {
  /**
   *
   * @type {Array<EngineOutboundResourceViewGroup>}
   * @memberof EngineListOutboundResourceGroup
   */
  items?: Array<EngineOutboundResourceViewGroup>
  /**
   *
   * @type {boolean}
   * @memberof EngineListOutboundResourceGroup
   */
  next?: boolean
}
