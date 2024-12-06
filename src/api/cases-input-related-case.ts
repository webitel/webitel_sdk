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

import { CasesCase } from './cases-case'
import { CasesRelationType } from './cases-relation-type'

/**
 *
 * @export
 * @interface CasesInputRelatedCase
 */
export interface CasesInputRelatedCase {
  /**
   *
   * @type {string}
   * @memberof CasesInputRelatedCase
   */
  etag?: string
  /**
   *
   * @type {CasesCase}
   * @memberof CasesInputRelatedCase
   */
  relatedTo?: CasesCase
  /**
   *
   * @type {CasesRelationType}
   * @memberof CasesInputRelatedCase
   */
  relationType?: CasesRelationType
}
