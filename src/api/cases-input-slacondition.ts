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
 * @interface CasesInputSLACondition
 */
export interface CasesInputSLACondition {
  /**
   *
   * @type {string}
   * @memberof CasesInputSLACondition
   */
  name?: string
  /**
   *
   * @type {Array<string>}
   * @memberof CasesInputSLACondition
   */
  priorities?: Array<string>
  /**
   *
   * @type {string}
   * @memberof CasesInputSLACondition
   */
  reactionTime?: string
  /**
   *
   * @type {string}
   * @memberof CasesInputSLACondition
   */
  resolutionTime?: string
  /**
   *
   * @type {string}
   * @memberof CasesInputSLACondition
   */
  slaId?: string
}
