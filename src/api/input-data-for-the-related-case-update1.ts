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
import { PrimaryCaseDetails } from './primary-case-details'

/**
 *
 * @export
 * @interface InputDataForTheRelatedCaseUpdate1
 */
export interface InputDataForTheRelatedCaseUpdate1 {
  /**
   *
   * @type {PrimaryCaseDetails}
   * @memberof InputDataForTheRelatedCaseUpdate1
   */
  primary_case?: PrimaryCaseDetails
  /**
   *
   * @type {GeneralLookup}
   * @memberof InputDataForTheRelatedCaseUpdate1
   */
  related_case?: GeneralLookup
  /**
   *
   * @type {CasesRelationType}
   * @memberof InputDataForTheRelatedCaseUpdate1
   */
  relation_type?: CasesRelationType
}