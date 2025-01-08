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

import { CasesService } from './cases-service'
import { GeneralLookup } from './general-lookup'

/**
 *
 * @export
 * @interface CasesCatalog
 */
export interface CasesCatalog {
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCatalog
   */
  close_reason?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof CasesCatalog
   */
  code?: string
  /**
   *
   * @type {string}
   * @memberof CasesCatalog
   */
  created_at?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCatalog
   */
  created_by?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof CasesCatalog
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof CasesCatalog
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof CasesCatalog
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof CasesCatalog
   */
  prefix?: string
  /**
   *
   * @type {boolean}
   * @memberof CasesCatalog
   */
  searched?: boolean
  /**
   *
   * @type {Array<CasesService>}
   * @memberof CasesCatalog
   */
  service?: Array<CasesService>
  /**
   *
   * @type {Array<GeneralLookup>}
   * @memberof CasesCatalog
   */
  skills?: Array<GeneralLookup>
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCatalog
   */
  sla?: GeneralLookup
  /**
   *
   * @type {boolean}
   * @memberof CasesCatalog
   */
  state?: boolean
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCatalog
   */
  status?: GeneralLookup
  /**
   *
   * @type {Array<GeneralLookup>}
   * @memberof CasesCatalog
   */
  teams?: Array<GeneralLookup>
  /**
   *
   * @type {string}
   * @memberof CasesCatalog
   */
  updated_at?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCatalog
   */
  updated_by?: GeneralLookup
}
