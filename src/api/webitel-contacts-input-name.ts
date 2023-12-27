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

/**
 *
 * @export
 * @interface WebitelContactsInputName
 */
export interface WebitelContactsInputName {
  /**
   * REQUIRED. End-User\'s full name in displayable form including all name parts, possibly including titles and suffixes, ordered according to the End-User\'s locale and preferences.
   * @type {string}
   * @memberof WebitelContactsInputName
   */
  common_name?: string
  /**
   *
   * @type {string}
   * @memberof WebitelContactsInputName
   */
  family_name?: string
  /**
   *
   * @type {string}
   * @memberof WebitelContactsInputName
   */
  given_name?: string
  /**
   * OPTIONAL. Middle name(s) of the End-User. Note that in some cultures, people can have multiple middle names; all can be present, with the names being separated by space characters. Also note that in some cultures, middle names are not used.
   * @type {string}
   * @memberof WebitelContactsInputName
   */
  middle_name?: string
  /**
   * Indicate whether Contact, as a Person, realy owns this associated name.
   * @type {boolean}
   * @memberof WebitelContactsInputName
   */
  verified?: boolean
}
