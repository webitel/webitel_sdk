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

import { EngineCreateOutboundResourceDisplayRequest } from './engine-create-outbound-resource-display-request'

/**
 *
 * @export
 * @interface EngineCreateOutboundResourceDisplayBulkRequest
 */
export interface EngineCreateOutboundResourceDisplayBulkRequest {
  /**
   *
   * @type {Array<EngineCreateOutboundResourceDisplayRequest>}
   * @memberof EngineCreateOutboundResourceDisplayBulkRequest
   */
  items?: Array<EngineCreateOutboundResourceDisplayRequest>
  /**
   *
   * @type {string}
   * @memberof EngineCreateOutboundResourceDisplayBulkRequest
   */
  resource_id?: string
}