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
 * A contact\'s name. If the name is a mononym, the family name is empty.  Inspired: https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims https://developers.google.com/people/api/rest/v1/people#name
 * @export
 * @interface WebitelContactsName
 */
export interface WebitelContactsName {
  /**
   * REQUIRED. End-User\'s full name in displayable form including all name parts, possibly including titles and suffixes, ordered according to the End-User\'s locale and preferences.
   * @type {string}
   * @memberof WebitelContactsName
   */
  common_name?: string
  /**
   *
   * @type {string}
   * @memberof WebitelContactsName
   */
  family_name?: string
  /**
   *
   * @type {string}
   * @memberof WebitelContactsName
   */
  given_name?: string
  /**
   * OPTIONAL. Middle name(s) of the End-User. Note that in some cultures, people can have multiple middle names; all can be present, with the names being separated by space characters. Also note that in some cultures, middle names are not used.
   * @type {string}
   * @memberof WebitelContactsName
   */
  middle_name?: string
  /**
   * Indicate whether Contact, as a Person, realy owns this associated name.
   * @type {boolean}
   * @memberof WebitelContactsName
   */
  verified?: boolean
}
