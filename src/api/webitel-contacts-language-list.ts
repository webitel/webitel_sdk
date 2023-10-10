// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.09.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebitelContactsLanguage } from './webitel-contacts-language'

/**
 * LabelsData NOTE: Edge represents connection between two nodes. So this ContactLabels.data are always subordinate to some contact.id.
 * @export
 * @interface WebitelContactsLanguageList
 */
export interface WebitelContactsLanguageList {
  /**
   * Page of the Contact\'s Language(s) dataset.
   * @type {Array<WebitelContactsLanguage>}
   * @memberof WebitelContactsLanguageList
   */
  data?: Array<WebitelContactsLanguage>
  /**
   *
   * @type {boolean}
   * @memberof WebitelContactsLanguageList
   */
  next?: boolean
  /**
   * Page number of partial result dataset records.
   * @type {number}
   * @memberof WebitelContactsLanguageList
   */
  page?: number
}
