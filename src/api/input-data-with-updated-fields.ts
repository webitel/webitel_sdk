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

import { CasesCloseInfo } from './cases-close-info'
import { CasesInputCaseComment } from './cases-input-case-comment'
import { CasesInputCaseLink } from './cases-input-case-link'
import { CasesInputRelatedCase } from './cases-input-related-case'
import { CasesRateInfo } from './cases-rate-info'
import { GeneralLookup } from './general-lookup'

/**
 *
 * @export
 * @interface InputDataWithUpdatedFields
 */
export interface InputDataWithUpdatedFields {
  /**
   *
   * @type {GeneralLookup}
   * @memberof InputDataWithUpdatedFields
   */
  assignee?: GeneralLookup
  /**
   *
   * @type {CasesCloseInfo}
   * @memberof InputDataWithUpdatedFields
   */
  close?: CasesCloseInfo
  /**
   *
   * @type {GeneralLookup}
   * @memberof InputDataWithUpdatedFields
   */
  closeReason?: GeneralLookup
  /**
   *
   * @type {Array<CasesInputCaseComment>}
   * @memberof InputDataWithUpdatedFields
   */
  comments?: Array<CasesInputCaseComment>
  /**
   *
   * @type {string}
   * @memberof InputDataWithUpdatedFields
   */
  contactInfo?: string
  /**
   *
   * @type {string}
   * @memberof InputDataWithUpdatedFields
   */
  description?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof InputDataWithUpdatedFields
   */
  group?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof InputDataWithUpdatedFields
   */
  impacted?: GeneralLookup
  /**
   *
   * @type {Array<CasesInputCaseLink>}
   * @memberof InputDataWithUpdatedFields
   */
  links?: Array<CasesInputCaseLink>
  /**
   *
   * @type {string}
   * @memberof InputDataWithUpdatedFields
   */
  name?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof InputDataWithUpdatedFields
   */
  priority?: GeneralLookup
  /**
   *
   * @type {CasesRateInfo}
   * @memberof InputDataWithUpdatedFields
   */
  rate?: CasesRateInfo
  /**
   *
   * @type {Array<CasesInputRelatedCase>}
   * @memberof InputDataWithUpdatedFields
   */
  related?: Array<CasesInputRelatedCase>
  /**
   *
   * @type {GeneralLookup}
   * @memberof InputDataWithUpdatedFields
   */
  reporter?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof InputDataWithUpdatedFields
   */
  service?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof InputDataWithUpdatedFields
   */
  source?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof InputDataWithUpdatedFields
   */
  status?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof InputDataWithUpdatedFields
   */
  subject?: string
}