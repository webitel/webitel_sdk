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

import { StorageProviderType } from './storage-provider-type'
import { StorageServiceType } from './storage-service-type'

/**
 *
 * @export
 * @interface StoragePatchCognitiveProfileRequest
 */
export interface StoragePatchCognitiveProfileRequest {
  /**
   *
   * @type {boolean}
   * @memberof StoragePatchCognitiveProfileRequest
   */
  _default?: boolean
  /**
   *
   * @type {string}
   * @memberof StoragePatchCognitiveProfileRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof StoragePatchCognitiveProfileRequest
   */
  enabled?: boolean
  /**
   *
   * @type {Array<string>}
   * @memberof StoragePatchCognitiveProfileRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {string}
   * @memberof StoragePatchCognitiveProfileRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof StoragePatchCognitiveProfileRequest
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof StoragePatchCognitiveProfileRequest
   */
  properties?: object
  /**
   *
   * @type {StorageProviderType}
   * @memberof StoragePatchCognitiveProfileRequest
   */
  provider?: StorageProviderType
  /**
   *
   * @type {StorageServiceType}
   * @memberof StoragePatchCognitiveProfileRequest
   */
  service?: StorageServiceType
}
