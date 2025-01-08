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

import { CasesCaseCommunicationsTypes } from './cases-case-communications-types'

/**
 * Represents input data for creating or linking a communication.
 * @export
 * @interface CasesInputCaseCommunication
 */
export interface CasesInputCaseCommunication {
  /**
   * External communication ID.
   * @type {string}
   * @memberof CasesInputCaseCommunication
   */
  communication_id?: string
  /**
   *
   * @type {CasesCaseCommunicationsTypes}
   * @memberof CasesInputCaseCommunication
   */
  communication_type?: CasesCaseCommunicationsTypes
}
