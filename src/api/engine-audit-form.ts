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
import { EngineQuestion } from './engine-question'

/**
 *
 * @export
 * @interface EngineAuditForm
 */
export interface EngineAuditForm {
  /**
   *
   * @type {boolean}
   * @memberof EngineAuditForm
   */
  archive?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineAuditForm
   */
  created_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAuditForm
   */
  created_by?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineAuditForm
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineAuditForm
   */
  editable?: boolean
  /**
   *
   * @type {boolean}
   * @memberof EngineAuditForm
   */
  enabled?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineAuditForm
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof EngineAuditForm
   */
  name?: string
  /**
   *
   * @type {Array<EngineQuestion>}
   * @memberof EngineAuditForm
   */
  questions?: Array<EngineQuestion>
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EngineAuditForm
   */
  teams?: Array<EngineLookup>
  /**
   *
   * @type {string}
   * @memberof EngineAuditForm
   */
  updated_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAuditForm
   */
  updated_by?: EngineLookup
}
