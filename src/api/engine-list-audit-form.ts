// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 24.04.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineAuditForm } from './engine-audit-form'

/**
 *
 * @export
 * @interface EngineListAuditForm
 */
export interface EngineListAuditForm {
  /**
   *
   * @type {Array<EngineAuditForm>}
   * @memberof EngineListAuditForm
   */
  items?: Array<EngineAuditForm>
  /**
   *
   * @type {boolean}
   * @memberof EngineListAuditForm
   */
  next?: boolean
}
