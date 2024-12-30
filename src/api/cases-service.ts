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
 * @interface CasesService
 */
export interface CasesService {
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesService
   */
  assignee?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof CasesService
   */
  catalogId?: string
  /**
   *
   * @type {string}
   * @memberof CasesService
   */
  code?: string
  /**
   *
   * @type {string}
   * @memberof CasesService
   */
  createdAt?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesService
   */
  createdBy?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof CasesService
   */
  description?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesService
   */
  group?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof CasesService
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof CasesService
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof CasesService
   */
  rootId?: string
  /**
   *
   * @type {boolean}
   * @memberof CasesService
   */
  searched?: boolean
  /**
   *
   * @type {Array<CasesService>}
   * @memberof CasesService
   */
  service?: Array<CasesService>
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesService
   */
  sla?: GeneralLookup
  /**
   *
   * @type {boolean}
   * @memberof CasesService
   */
  state?: boolean
  /**
   *
   * @type {string}
   * @memberof CasesService
   */
  updatedAt?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesService
   */
  updatedBy?: GeneralLookup
}
