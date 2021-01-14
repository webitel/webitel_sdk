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
 * @interface EnginePatchOutboundResourceRequest
 */
export interface EnginePatchOutboundResourceRequest {
  /**
   *
   * @type {string}
   * @memberof EnginePatchOutboundResourceRequest
   */
  domain_id?: string
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
