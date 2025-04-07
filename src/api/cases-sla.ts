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

import { GeneralLookup } from './general-lookup'

/**
 *
 * @export
 * @interface CasesSLA
 */
export interface CasesSLA {
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesSLA
   */
  calendar?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof CasesSLA
   */
  created_at?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesSLA
   */
  created_by?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof CasesSLA
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof CasesSLA
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof CasesSLA
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof CasesSLA
   */
  reaction_time?: string
  /**
   *
   * @type {string}
   * @memberof CasesSLA
   */
  resolution_time?: string
  /**
   *
   * @type {string}
   * @memberof CasesSLA
   */
  updated_at?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesSLA
   */
  updated_by?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof CasesSLA
   */
  valid_from?: string
  /**
   *
   * @type {string}
   * @memberof CasesSLA
   */
  valid_to?: string
}
