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
 * @interface WebitelCasesCaseComment
 */
export interface WebitelCasesCaseComment {
  /**
   *
   * @type {GeneralLookup}
   * @memberof WebitelCasesCaseComment
   */
  author?: GeneralLookup
  /**
   * Indicates if the comment can be edited by current user.
   * @type {boolean}
   * @memberof WebitelCasesCaseComment
   */
  can_edit?: boolean
  /**
   * Optional relation to the associated case.
   * @type {string}
   * @memberof WebitelCasesCaseComment
   */
  case_id?: string
  /**
   * Timestamp (in milliseconds) of when the comment was created.
   * @type {string}
   * @memberof WebitelCasesCaseComment
   */
  created_at?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof WebitelCasesCaseComment
   */
  created_by?: GeneralLookup
  /**
   * Indicates if the comment was edited; true if created_at < updated_at.
   * @type {boolean}
   * @memberof WebitelCasesCaseComment
   */
  edited?: boolean
  /**
   *
   * @type {string}
   * @memberof WebitelCasesCaseComment
   */
  etag?: string
  /**
   * Main identifier for read, update, and delete operations.
   * @type {string}
   * @memberof WebitelCasesCaseComment
   */
  id?: string
  /**
   *
   * @type {Array<string>}
   * @memberof WebitelCasesCaseComment
   */
  role_ids?: Array<string>
  /**
   * The content of the comment.
   * @type {string}
   * @memberof WebitelCasesCaseComment
   */
  text?: string
  /**
   * Timestamp (in milliseconds) of the last update.
   * @type {string}
   * @memberof WebitelCasesCaseComment
   */
  updated_at?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof WebitelCasesCaseComment
   */
  updated_by?: GeneralLookup
  /**
   * Version number of the comment, used for concurrency control.
   * @type {number}
   * @memberof WebitelCasesCaseComment
   */
  ver?: number
}
