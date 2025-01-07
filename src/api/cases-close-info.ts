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
 * Message representing close information for a case.
 * @export
 * @interface CasesCloseInfo
 */
export interface CasesCloseInfo {
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCloseInfo
   */
  closeReason?: GeneralLookup
  /**
   * Result or reason for closing the case.
   * @type {string}
   * @memberof CasesCloseInfo
   */
  closeResult?: string
}