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
 * @interface EngineCreateOutboundResourceRequest
 */
export interface EngineCreateOutboundResourceRequest {
  /**
   *
   * @type {string}
   * @memberof EngineCreateOutboundResourceRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateOutboundResourceRequest
   */
  enabled?: boolean
  /**
   *
   * @type {Array<string>}
   * @memberof EngineCreateOutboundResourceRequest
   */
  error_ids?: Array<string>
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateOutboundResourceRequest
   */
  gateway?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineCreateOutboundResourceRequest
   */
  limit?: number
  /**
   *
   * @type {number}
   * @memberof EngineCreateOutboundResourceRequest
   */
  max_successively_errors?: number
  /**
   *
   * @type {string}
   * @memberof EngineCreateOutboundResourceRequest
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateOutboundResourceRequest
   */
  number?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineCreateOutboundResourceRequest
   */
  patterns?: Array<string>
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateOutboundResourceRequest
   */
  reserve?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineCreateOutboundResourceRequest
   */
  rps?: number
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineCreateOutboundResourceRequest
   */
  variables?: { [key: string]: string }
}
