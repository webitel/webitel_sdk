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
 * Represents a comment associated with a case.
 * @export
 * @interface CasesCaseComment
 */
export interface CasesCaseComment {
  /**
   * Optional relation to the associated case.
   * @type {string}
   * @memberof CasesCaseComment
   */
  caseId?: string
  /**
   * Timestamp (in milliseconds) of when the comment was created.
   * @type {string}
   * @memberof CasesCaseComment
   */
  createdAt?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCaseComment
   */
  createdBy?: GeneralLookup
  /**
   * Indicates if the comment was edited; true if created_at < updated_at.
   * @type {boolean}
   * @memberof CasesCaseComment
   */
  edited?: boolean
  /**
   * Main identifier for read, update, and delete operations.
   * @type {string}
   * @memberof CasesCaseComment
   */
  id?: string
  /**
   * The content of the comment.
   * @type {string}
   * @memberof CasesCaseComment
   */
  text?: string
  /**
   * Timestamp (in milliseconds) of the last update.
   * @type {string}
   * @memberof CasesCaseComment
   */
  updatedAt?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCaseComment
   */
  updatedBy?: GeneralLookup
  /**
   * Version number of the comment, used for concurrency control.
   * @type {number}
   * @memberof CasesCaseComment
   */
  ver?: number
}
