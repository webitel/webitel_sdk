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

import { GeneralExtendedLookup } from './general-extended-lookup'
import { GeneralLookup } from './general-lookup'

/**
 *
 * @export
 * @interface CasesCreateServiceRequest
 */
export interface CasesCreateServiceRequest {
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCreateServiceRequest
   */
  assignee?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof CasesCreateServiceRequest
   */
  catalog_id?: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateServiceRequest
   */
  code?: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateServiceRequest
   */
  description?: string
  /**
   *
   * @type {GeneralExtendedLookup}
   * @memberof CasesCreateServiceRequest
   */
  group?: GeneralExtendedLookup
  /**
   *
   * @type {string}
   * @memberof CasesCreateServiceRequest
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof CasesCreateServiceRequest
   */
  root_id?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCreateServiceRequest
   */
  sla?: GeneralLookup
  /**
   *
   * @type {boolean}
   * @memberof CasesCreateServiceRequest
   */
  state?: boolean
}
