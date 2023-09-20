// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * A Contact\'s associated Tag. Output purpose only.
 * @export
 * @interface WebitelContactsInputLabel
 */
export interface WebitelContactsInputLabel {
  /**
   * Unique ID of the latest version of an existing resorce.
   * @type {string}
   * @memberof WebitelContactsInputLabel
   */
  etag?: string
  /**
   * REQUIRED. Hashtag value; NOTE: Keep in mind, hashtags are not case-sensitive, but adding capital letters does make them easier to read: #MakeAWish vs. #makeawish.
   * @type {string}
   * @memberof WebitelContactsInputLabel
   */
  label?: string
}
