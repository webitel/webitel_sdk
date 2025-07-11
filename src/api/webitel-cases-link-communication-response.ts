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

import { WebitelCasesCaseCommunication } from './webitel-cases-case-communication'

/**
 * Response message after linking communications to a case.
 * @export
 * @interface WebitelCasesLinkCommunicationResponse
 */
export interface WebitelCasesLinkCommunicationResponse {
  /**
   * List of linked communications.
   * @type {Array<WebitelCasesCaseCommunication>}
   * @memberof WebitelCasesLinkCommunicationResponse
   */
  data?: Array<WebitelCasesCaseCommunication>
}
