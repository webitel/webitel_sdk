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
 * Message representing SLA timing information.
 * @export
 * @interface CasesTimingInfo
 */
export interface CasesTimingInfo {
  /**
   * Difference between actual and planned reaction time.
   * @type {string}
   * @memberof CasesTimingInfo
   */
  differenceInReaction?: string
  /**
   * Difference between actual and planned resolution time.
   * @type {string}
   * @memberof CasesTimingInfo
   */
  differenceInResolve?: string
  /**
   * Actual reaction timestamp (in milliseconds).
   * @type {string}
   * @memberof CasesTimingInfo
   */
  reactedAt?: string
  /**
   * Actual resolution timestamp (in milliseconds).
   * @type {string}
   * @memberof CasesTimingInfo
   */
  resolvedAt?: string
}