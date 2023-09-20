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
import { EngineQuestion } from './engine-question'

/**
 *
 * @export
 * @interface EnginePatchAuditFormRequest
 */
export interface EnginePatchAuditFormRequest {
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchAuditFormRequest
   */
  archive?: boolean
  /**
   *
   * @type {string}
   * @memberof EnginePatchAuditFormRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchAuditFormRequest
   */
  enabled?: boolean
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchAuditFormRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {number}
   * @memberof EnginePatchAuditFormRequest
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof EnginePatchAuditFormRequest
   */
  name?: string
  /**
   *
   * @type {Array<EngineQuestion>}
   * @memberof EnginePatchAuditFormRequest
   */
  questions?: Array<EngineQuestion>
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EnginePatchAuditFormRequest
   */
  teams?: Array<EngineLookup>
}
