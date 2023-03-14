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

import { EngineOutboundResource } from './engine-outbound-resource'

/**
 *
 * @export
 * @interface EngineListOutboundResource
 */
export interface EngineListOutboundResource {
  /**
   *
   * @type {Array<EngineOutboundResource>}
   * @memberof EngineListOutboundResource
   */
  items?: Array<EngineOutboundResource>
  /**
   *
   * @type {boolean}
   * @memberof EngineListOutboundResource
   */
  next?: boolean
}
