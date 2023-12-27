// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.12.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebitelContactsLabel } from './webitel-contacts-label'

/**
 * LabelList dataset. NOTE: Edge represents connection between two nodes. So this ContactLabels.data are always subordinate to some contact.id.
 * @export
 * @interface WebitelContactsLabelList
 */
export interface WebitelContactsLabelList {
  /**
   * Label(s) dataset page.
   * @type {Array<WebitelContactsLabel>}
   * @memberof WebitelContactsLabelList
   */
  data?: Array<WebitelContactsLabel>
  /**
   *
   * @type {boolean}
   * @memberof WebitelContactsLabelList
   */
  next?: boolean
  /**
   * Page number of partial result.
   * @type {number}
   * @memberof WebitelContactsLabelList
   */
  page?: number
}
