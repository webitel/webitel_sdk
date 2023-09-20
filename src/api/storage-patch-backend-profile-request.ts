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
 *
 * @export
 * @interface StoragePatchBackendProfileRequest
 */
export interface StoragePatchBackendProfileRequest {
  /**
   *
   * @type {string}
   * @memberof StoragePatchBackendProfileRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof StoragePatchBackendProfileRequest
   */
  disabled?: boolean
  /**
   *
   * @type {string}
   * @memberof StoragePatchBackendProfileRequest
   */
  domain_id?: string
  /**
   *
   * @type {number}
   * @memberof StoragePatchBackendProfileRequest
   */
  expire_days?: number
  /**
   *
   * @type {Array<string>}
   * @memberof StoragePatchBackendProfileRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {string}
   * @memberof StoragePatchBackendProfileRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof StoragePatchBackendProfileRequest
   */
  max_size?: string
  /**
   *
   * @type {string}
   * @memberof StoragePatchBackendProfileRequest
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof StoragePatchBackendProfileRequest
   */
  priority?: number
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof StoragePatchBackendProfileRequest
   */
  properties?: { [key: string]: string }
}
