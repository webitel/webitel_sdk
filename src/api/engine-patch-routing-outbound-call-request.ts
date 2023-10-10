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
 * @interface EnginePatchRoutingOutboundCallRequest
 */
export interface EnginePatchRoutingOutboundCallRequest {
  /**
   *
   * @type {string}
   * @memberof EnginePatchRoutingOutboundCallRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchRoutingOutboundCallRequest
   */
  disabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EnginePatchRoutingOutboundCallRequest
   */
  domain_id?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchRoutingOutboundCallRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EnginePatchRoutingOutboundCallRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EnginePatchRoutingOutboundCallRequest
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EnginePatchRoutingOutboundCallRequest
   */
  pattern?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchRoutingOutboundCallRequest
   */
  schema?: EngineLookup
}
