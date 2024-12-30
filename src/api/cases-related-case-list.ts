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

import { CasesRelatedCase } from './cases-related-case'

/**
 * Paginated list of related cases.
 * @export
 * @interface CasesRelatedCaseList
 */
export interface CasesRelatedCaseList {
  /**
   * List of related cases on the current page.
   * @type {Array<CasesRelatedCase>}
   * @memberof CasesRelatedCaseList
   */
  data?: Array<CasesRelatedCase>
  /**
   * Flag to indicate if more pages are available.
   * @type {boolean}
   * @memberof CasesRelatedCaseList
   */
  next?: boolean
  /**
   * Current page number.
   * @type {string}
   * @memberof CasesRelatedCaseList
   */
  page?: string
}
