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

import { CasesCaseCommunication } from './cases-case-communication'

/**
 * Response message for listing communications linked to a case.
 * @export
 * @interface CasesListCommunicationsResponse
 */
export interface CasesListCommunicationsResponse {
  /**
   * List of communications.
   * @type {Array<CasesCaseCommunication>}
   * @memberof CasesListCommunicationsResponse
   */
  data?: Array<CasesCaseCommunication>
  /**
   *
   * @type {boolean}
   * @memberof CasesListCommunicationsResponse
   */
  next?: boolean
  /**
   * Current page number.
   * @type {number}
   * @memberof CasesListCommunicationsResponse
   */
  page?: number
}
