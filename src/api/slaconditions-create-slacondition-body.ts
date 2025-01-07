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
 * @interface SLAConditionsCreateSLAConditionBody
 */
export interface SLAConditionsCreateSLAConditionBody {
  /**
   *
   * @type {string}
   * @memberof SLAConditionsCreateSLAConditionBody
   */
  name: string
  /**
   *
   * @type {Array<string>}
   * @memberof SLAConditionsCreateSLAConditionBody
   */
  priorities: Array<string>
  /**
   *
   * @type {string}
   * @memberof SLAConditionsCreateSLAConditionBody
   */
  reactionTime: string
  /**
   *
   * @type {string}
   * @memberof SLAConditionsCreateSLAConditionBody
   */
  resolutionTime: string
}