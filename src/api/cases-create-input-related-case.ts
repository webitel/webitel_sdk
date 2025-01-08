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

import { CasesRelationType } from './cases-relation-type'

/**
 * Input for creating a related case.
 * @export
 * @interface CasesCreateInputRelatedCase
 */
export interface CasesCreateInputRelatedCase {
  /**
   * Related case details.
   * @type {string}
   * @memberof CasesCreateInputRelatedCase
   */
  related_case_id?: string
  /**
   *
   * @type {CasesRelationType}
   * @memberof CasesCreateInputRelatedCase
   */
  relation_type?: CasesRelationType
}
