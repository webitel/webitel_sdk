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

import { EngineLookup } from './engine-lookup'
import { EngineOutboundResourceParameters } from './engine-outbound-resource-parameters'

/**
 *
 * @export
 * @interface EnginePatchOutboundResourceRequest
 */
export interface EnginePatchOutboundResourceRequest {
  /**
   *
   * @type {string}
   * @memberof EnginePatchOutboundResourceRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchOutboundResourceRequest
   */
  enabled?: boolean
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchOutboundResourceRequest
   */
  error_ids?: Array<string>
  /**
   *
   * @type {number}
   * @memberof EnginePatchOutboundResourceRequest
   */
  failure_dial_delay?: number
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchOutboundResourceRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchOutboundResourceRequest
   */
  gateway?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EnginePatchOutboundResourceRequest
   */
  id?: string
  /**
   *
   * @type {number}
   * @memberof EnginePatchOutboundResourceRequest
   */
  limit?: number
  /**
   *
   * @type {number}
   * @memberof EnginePatchOutboundResourceRequest
   */
  max_successively_errors?: number
  /**
   *
   * @type {string}
   * @memberof EnginePatchOutboundResourceRequest
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EnginePatchOutboundResourceRequest
   */
  number?: string
  /**
   *
   * @type {EngineOutboundResourceParameters}
   * @memberof EnginePatchOutboundResourceRequest
   */
  parameters?: EngineOutboundResourceParameters
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchOutboundResourceRequest
   */
  patterns?: Array<string>
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchOutboundResourceRequest
   */
  reserve?: boolean
  /**
   *
   * @type {number}
   * @memberof EnginePatchOutboundResourceRequest
   */
  rps?: number
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EnginePatchOutboundResourceRequest
   */
  variables?: { [key: string]: string }
}
