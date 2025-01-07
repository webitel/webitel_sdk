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

import { CasesFile } from './cases-file'

/**
 * Contains a list of case files with pagination.
 * @export
 * @interface CasesCaseFileList
 */
export interface CasesCaseFileList {
  /**
   * List of case files.
   * @type {Array<CasesFile>}
   * @memberof CasesCaseFileList
   */
  items?: Array<CasesFile>
  /**
   * Indicator if there is a next page.
   * @type {boolean}
   * @memberof CasesCaseFileList
   */
  next?: boolean
  /**
   * Current page number.
   * @type {string}
   * @memberof CasesCaseFileList
   */
  page?: string
}