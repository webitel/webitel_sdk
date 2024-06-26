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

import { StorageProviderType } from './storage-provider-type'
import { StorageServiceType } from './storage-service-type'

/**
 *
 * @export
 * @interface StorageUpdateCognitiveProfileRequest
 */
export interface StorageUpdateCognitiveProfileRequest {
  /**
   *
   * @type {boolean}
   * @memberof StorageUpdateCognitiveProfileRequest
   */
  _default?: boolean
  /**
   *
   * @type {string}
   * @memberof StorageUpdateCognitiveProfileRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof StorageUpdateCognitiveProfileRequest
   */
  enabled?: boolean
  /**
   *
   * @type {string}
   * @memberof StorageUpdateCognitiveProfileRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof StorageUpdateCognitiveProfileRequest
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof StorageUpdateCognitiveProfileRequest
   */
  properties?: object
  /**
   *
   * @type {StorageProviderType}
   * @memberof StorageUpdateCognitiveProfileRequest
   */
  provider?: StorageProviderType
  /**
   *
   * @type {StorageServiceType}
   * @memberof StorageUpdateCognitiveProfileRequest
   */
  service?: StorageServiceType
}
