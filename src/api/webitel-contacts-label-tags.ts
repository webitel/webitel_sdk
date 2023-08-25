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

import { WebitelContactsLabelInfo } from './webitel-contacts-label-info'
import { WebitelContactsLookup } from './webitel-contacts-lookup'

/**
 * LabelTags dataset list of label\'s info.
 * @export
 * @interface WebitelContactsLabelTags
 */
export interface WebitelContactsLabelTags {
  /**
   *
   * @type {Array<WebitelContactsLabelInfo>}
   * @memberof WebitelContactsLabelTags
   */
  labels?: Array<WebitelContactsLabelInfo>
  /**
   *
   * @type {boolean}
   * @memberof WebitelContactsLabelTags
   */
  next?: boolean
  /**
   * Page number of partial result.
   * @type {number}
   * @memberof WebitelContactsLabelTags
   */
  page?: number
  /**
   *
   * @type {Array<WebitelContactsLookup>}
   * @memberof WebitelContactsLabelTags
   */
  sources?: Array<WebitelContactsLookup>
}
