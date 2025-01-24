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

import { WebitelProtoDataField } from './webitel-proto-data-field'
import { WebitelProtoDataIndex } from './webitel-proto-data-index'

/**
 *
 * @export
 * @interface WebitelProtoDataInputDictionary
 */
export interface WebitelProtoDataInputDictionary {
  /**
   *
   * @type {string}
   * @memberof WebitelProtoDataInputDictionary
   */
  about?: string
  /**
   *
   * @type {boolean}
   * @memberof WebitelProtoDataInputDictionary
   */
  administered?: boolean
  /**
   * Required. Display [fields.id] key. Used as [lookup].name setting for this [struct] type.
   * @type {string}
   * @memberof WebitelProtoDataInputDictionary
   */
  display?: string
  /**
   *
   * @type {Array<WebitelProtoDataField>}
   * @memberof WebitelProtoDataInputDictionary
   */
  fields?: Array<WebitelProtoDataField>
  /**
   * INDEX fields.
   * @type {{ [key: string]: WebitelProtoDataIndex; }}
   * @memberof WebitelProtoDataInputDictionary
   */
  indexes?: { [key: string]: WebitelProtoDataIndex }
  /**
   * A User-friendly [type.id] name ; lang: specific.
   * @type {string}
   * @memberof WebitelProtoDataInputDictionary
   */
  name?: string
  /**
   * Required. Primary [fields.id] key. Used as [lookup].id setting for this [struct] type.
   * @type {string}
   * @memberof WebitelProtoDataInputDictionary
   */
  primary?: string
  /**
   * string id = 1; // The [type] name (singular form), e.g.: `country`.  Repository (dataset) name (plural form), e.g.: `countries`.
   * @type {string}
   * @memberof WebitelProtoDataInputDictionary
   */
  repo?: string
}
