// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.02.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * An input of the Contact\'s language.
 * @export
 * @interface WebitelContactsInputLanguage
 */
export interface WebitelContactsInputLanguage {
  /**
   * Unique ID of the latest version of an existing association.
   * @type {string}
   * @memberof WebitelContactsInputLanguage
   */
  etag: string
  /**
   * Indicates whether this association must be default among others of the same type.
   * @type {boolean}
   * @memberof WebitelContactsInputLanguage
   */
  primary?: boolean
  /**
   *
   * @type {string}
   * @memberof WebitelContactsInputLanguage
   */
  tag?: string
}
