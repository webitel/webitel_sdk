// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebitelContactsCommentFormatCodeblock } from './webitel-contacts-comment-format-codeblock'
import { WebitelContactsCommentFormatLink } from './webitel-contacts-comment-format-link'

/**
 *
 * @export
 * @interface WebitelContactsCommentFormat
 */
export interface WebitelContactsCommentFormat {
  /**
   *
   * @type {object}
   * @memberof WebitelContactsCommentFormat
   */
  bold?: object
  /**
   *
   * @type {WebitelContactsCommentFormatCodeblock}
   * @memberof WebitelContactsCommentFormat
   */
  codeblock?: WebitelContactsCommentFormatCodeblock
  /**
   *
   * @type {object}
   * @memberof WebitelContactsCommentFormat
   */
  italic?: object
  /**
   * Length text runes count.
   * @type {number}
   * @memberof WebitelContactsCommentFormat
   */
  length?: number
  /**
   *
   * @type {WebitelContactsCommentFormatLink}
   * @memberof WebitelContactsCommentFormat
   */
  link?: WebitelContactsCommentFormatLink
  /**
   *
   * @type {object}
   * @memberof WebitelContactsCommentFormat
   */
  monospace?: object
  /**
   * Offset text runes count.
   * @type {number}
   * @memberof WebitelContactsCommentFormat
   */
  offset?: number
  /**
   *
   * @type {object}
   * @memberof WebitelContactsCommentFormat
   */
  strikethrough?: object
  /**
   *
   * @type {object}
   * @memberof WebitelContactsCommentFormat
   */
  underline?: object
}