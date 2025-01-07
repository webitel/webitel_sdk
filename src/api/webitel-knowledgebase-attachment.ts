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

import { WebitelKnowledgebaseLookup } from './webitel-knowledgebase-lookup'

/**
 *
 * @export
 * @interface WebitelKnowledgebaseAttachment
 */
export interface WebitelKnowledgebaseAttachment {
  /**
   * The unique ID of the association. Never changes.
   * @type {string}
   * @memberof WebitelKnowledgebaseAttachment
   */
  id?: string
  /**
   * The size of the attachment.
   * @type {number}
   * @memberof WebitelKnowledgebaseAttachment
   */
  size?: number
  /**
   * The title of the article.
   * @type {string}
   * @memberof WebitelKnowledgebaseAttachment
   */
  title?: string
  /**
   *
   * @type {WebitelKnowledgebaseLookup}
   * @memberof WebitelKnowledgebaseAttachment
   */
  uploaded_by?: WebitelKnowledgebaseLookup
}