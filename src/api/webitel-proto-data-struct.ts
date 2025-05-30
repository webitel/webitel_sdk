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
import { WebitelProtoDataLookupValue } from './webitel-proto-data-lookup-value'

/**
 * Type of the Structure.  int64 dc = 0;
 * @export
 * @interface WebitelProtoDataStruct
 */
export interface WebitelProtoDataStruct {
  /**
   * Optional. Short description.
   * @type {string}
   * @memberof WebitelProtoDataStruct
   */
  about?: string
  /**
   *
   * @type {boolean}
   * @memberof WebitelProtoDataStruct
   */
  administered?: boolean
  /**
   *
   * @type {string}
   * @memberof WebitelProtoDataStruct
   */
  created_at?: string
  /**
   *
   * @type {WebitelProtoDataLookupValue}
   * @memberof WebitelProtoDataStruct
   */
  created_by?: WebitelProtoDataLookupValue
  /**
   * Required. Display [fields.id] key. Used as [lookup].name setting for this [struct] type.
   * @type {string}
   * @memberof WebitelProtoDataStruct
   */
  display?: string
  /**
   * // Extension fields type.  Extension extension = 23;
   * @type {boolean}
   * @memberof WebitelProtoDataStruct
   */
  extendable?: boolean
  /**
   * Fields of the struct type.
   * @type {Array<WebitelProtoDataField>}
   * @memberof WebitelProtoDataStruct
   */
  fields?: Array<WebitelProtoDataField>
  /**
   * Deprecated. Use `repo` instead. The [type] name (singular form), e.g.: `country`.
   * @type {string}
   * @memberof WebitelProtoDataStruct
   */
  id?: string
  /**
   * INDEX fields.  Extension extension = 15;
   * @type {{ [key: string]: WebitelProtoDataIndex; }}
   * @memberof WebitelProtoDataStruct
   */
  indexes?: { [key: string]: WebitelProtoDataIndex }
  /**
   * A User-friendly [id] name ; lang: specific.
   * @type {string}
   * @memberof WebitelProtoDataStruct
   */
  name?: string
  /**
   * Readonly. RbAC objclass identity.
   * @type {string}
   * @memberof WebitelProtoDataStruct
   */
  objclass?: string
  /**
   * Readonly. Relative path to access the dataset APIs, e.g.: `dictionaries/countries`.
   * @type {string}
   * @memberof WebitelProtoDataStruct
   */
  path?: string
  /**
   * Required. Primary [fields.id] key. Used as [lookup].id setting for this [struct] type.
   * @type {string}
   * @memberof WebitelProtoDataStruct
   */
  primary?: string
  /**
   *
   * @type {boolean}
   * @memberof WebitelProtoDataStruct
   */
  readonly?: boolean
  /**
   * Repository (dataset) name (plural form), e.g.: `countries`.
   * @type {string}
   * @memberof WebitelProtoDataStruct
   */
  repo?: string
  /**
   *
   * @type {string}
   * @memberof WebitelProtoDataStruct
   */
  updated_at?: string
  /**
   *
   * @type {WebitelProtoDataLookupValue}
   * @memberof WebitelProtoDataStruct
   */
  updated_by?: WebitelProtoDataLookupValue
}
