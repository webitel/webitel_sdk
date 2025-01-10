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
import { GeneralLookup } from './general-lookup'

/**
 * Input for creating or updating a related case.
 * @export
 * @interface CasesInputRelatedCase
 */
export interface CasesInputRelatedCase {
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesInputRelatedCase
   */
  primary_case?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesInputRelatedCase
   */
  related_case?: GeneralLookup
  /**
   *
   * @type {CasesRelationType}
   * @memberof CasesInputRelatedCase
   */
  relation_type?: CasesRelationType
}
