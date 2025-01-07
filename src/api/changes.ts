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
 * @interface Changes
 */
export interface Changes {
  /**
   *
   * @type {GeneralLookup}
   * @memberof Changes
   */
  assignee?: GeneralLookup
  /**
   *
   * @type {CasesCloseInfo}
   * @memberof Changes
   */
  close?: CasesCloseInfo
  /**
   *
   * @type {GeneralLookup}
   * @memberof Changes
   */
  closeReason?: GeneralLookup
  /**
   *
   * @type {Array<CasesInputCaseComment>}
   * @memberof Changes
   */
  comments?: Array<CasesInputCaseComment>
  /**
   *
   * @type {string}
   * @memberof Changes
   */
  contactInfo?: string
  /**
   *
   * @type {string}
   * @memberof Changes
   */
  description?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof Changes
   */
  group?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof Changes
   */
  impacted?: GeneralLookup
  /**
   *
   * @type {Array<CasesInputCaseLink>}
   * @memberof Changes
   */
  links?: Array<CasesInputCaseLink>
  /**
   *
   * @type {string}
   * @memberof Changes
   */
  name?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof Changes
   */
  priority?: GeneralLookup
  /**
   *
   * @type {CasesRateInfo}
   * @memberof Changes
   */
  rate?: CasesRateInfo
  /**
   *
   * @type {Array<CasesInputRelatedCase>}
   * @memberof Changes
   */
  related?: Array<CasesInputRelatedCase>
  /**
   *
   * @type {GeneralLookup}
   * @memberof Changes
   */
  reporter?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof Changes
   */
  service?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof Changes
   */
  source?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof Changes
   */
  status?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof Changes
   */
  subject?: string
}