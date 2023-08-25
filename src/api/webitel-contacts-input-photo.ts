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

/**
 * Input of the photo.
 * @export
 * @interface WebitelContactsInputPhoto
 */
export interface WebitelContactsInputPhoto {
  /**
   * Unique ID of the latest version of an existing association.
   * @type {string}
   * @memberof WebitelContactsInputPhoto
   */
  etag?: string
  /**
   *
   * @type {string}
   * @memberof WebitelContactsInputPhoto
   */
  photo_id?: string
  /**
   *
   * @type {string}
   * @memberof WebitelContactsInputPhoto
   */
  photo_url?: string
  /**
   * True if the photo is a default photo; false if the photo is a user-provided photo.
   * @type {boolean}
   * @memberof WebitelContactsInputPhoto
   */
  primary?: boolean
}
