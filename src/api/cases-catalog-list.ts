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

import { CasesCatalog } from './cases-catalog'

/**
 *
 * @export
 * @interface CasesCatalogList
 */
export interface CasesCatalogList {
  /**
   *
   * @type {Array<CasesCatalog>}
   * @memberof CasesCatalogList
   */
  items?: Array<CasesCatalog>
  /**
   *
   * @type {boolean}
   * @memberof CasesCatalogList
   */
  next?: boolean
  /**
   *
   * @type {number}
   * @memberof CasesCatalogList
   */
  page?: number
}
