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
 * @interface EngineUpdateAuditFormRequest
 */
export interface EngineUpdateAuditFormRequest {
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateAuditFormRequest
   */
  archive?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineUpdateAuditFormRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateAuditFormRequest
   */
  enabled?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineUpdateAuditFormRequest
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof EngineUpdateAuditFormRequest
   */
  name?: string
  /**
   *
   * @type {Array<EngineQuestion>}
   * @memberof EngineUpdateAuditFormRequest
   */
  questions?: Array<EngineQuestion>
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EngineUpdateAuditFormRequest
   */
  teams?: Array<EngineLookup>
}
