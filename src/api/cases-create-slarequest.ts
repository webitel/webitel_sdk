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

/**
 *
 * @export
 * @interface CasesCreateSLARequest
 */
export interface CasesCreateSLARequest {
  /**
   *
   * @type {string}
   * @memberof CasesCreateSLARequest
   */
  calendarId: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateSLARequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateSLARequest
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateSLARequest
   */
  reactionTime: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateSLARequest
   */
  resolutionTime: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateSLARequest
   */
  validFrom?: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateSLARequest
   */
  validTo?: string
}
