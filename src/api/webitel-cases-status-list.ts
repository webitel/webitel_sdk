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

import { WebitelCasesStatus } from './webitel-cases-status'

/**
 *
 * @export
 * @interface WebitelCasesStatusList
 */
export interface WebitelCasesStatusList {
  /**
   *
   * @type {Array<WebitelCasesStatus>}
   * @memberof WebitelCasesStatusList
   */
  items?: Array<WebitelCasesStatus>
  /**
   *
   * @type {boolean}
   * @memberof WebitelCasesStatusList
   */
  next?: boolean
  /**
   *
   * @type {number}
   * @memberof WebitelCasesStatusList
   */
  page?: number
}
