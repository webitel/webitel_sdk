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
 *
 * @export
 * @interface StorageCreateBackendProfileRequest
 */
export interface StorageCreateBackendProfileRequest {
  /**
   *
   * @type {string}
   * @memberof StorageCreateBackendProfileRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof StorageCreateBackendProfileRequest
   */
  disabled?: boolean
  /**
   *
   * @type {string}
   * @memberof StorageCreateBackendProfileRequest
   */
  domain_id?: string
  /**
   *
   * @type {number}
   * @memberof StorageCreateBackendProfileRequest
   */
  expire_days?: number
  /**
   *
   * @type {string}
   * @memberof StorageCreateBackendProfileRequest
   */
  max_size?: string
  /**
   *
   * @type {string}
   * @memberof StorageCreateBackendProfileRequest
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof StorageCreateBackendProfileRequest
   */
  priority?: number
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof StorageCreateBackendProfileRequest
   */
  properties?: { [key: string]: string }
  /**
   *
   * @type {string}
   * @memberof StorageCreateBackendProfileRequest
   */
  type?: string
}
