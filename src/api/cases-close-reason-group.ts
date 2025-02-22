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

import { GeneralLookup } from './general-lookup'

/**
 *
 * @export
 * @interface CasesCloseReasonGroup
 */
export interface CasesCloseReasonGroup {
  /**
   *
   * @type {string}
   * @memberof CasesCloseReasonGroup
   */
  created_at?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCloseReasonGroup
   */
  created_by?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof CasesCloseReasonGroup
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof CasesCloseReasonGroup
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof CasesCloseReasonGroup
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof CasesCloseReasonGroup
   */
  updated_at?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCloseReasonGroup
   */
  updated_by?: GeneralLookup
}
