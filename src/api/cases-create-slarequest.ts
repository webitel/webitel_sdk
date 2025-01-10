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
 * @interface CasesCreateSLARequest
 */
export interface CasesCreateSLARequest {
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCreateSLARequest
   */
  calendar?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof CasesCreateSLARequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateSLARequest
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateSLARequest
   */
  reaction_time: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateSLARequest
   */
  resolution_time: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateSLARequest
   */
  valid_from?: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateSLARequest
   */
  valid_to?: string
}
