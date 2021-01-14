// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.12.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface StorageUpdateBackendProfileRequest
 */
export interface StorageUpdateBackendProfileRequest {
  /**
   *
   * @type {string}
   * @memberof StorageUpdateBackendProfileRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof StorageUpdateBackendProfileRequest
   */
  disabled?: boolean
  /**
   *
   * @type {string}
   * @memberof StorageUpdateBackendProfileRequest
   */
  domain_id?: string
  /**
   *
   * @type {number}
   * @memberof StorageUpdateBackendProfileRequest
   */
  expire_days?: number
  /**
   *
   * @type {string}
   * @memberof StorageUpdateBackendProfileRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof StorageUpdateBackendProfileRequest
   */
  max_size?: string
  /**
   *
   * @type {string}
   * @memberof StorageUpdateBackendProfileRequest
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof StorageUpdateBackendProfileRequest
   */
  priority?: number
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof StorageUpdateBackendProfileRequest
   */
  properties?: { [key: string]: string }
}
