// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.09.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineCommunicationType } from './engine-communication-type'

/**
 *
 * @export
 * @interface EngineListCommunicationType
 */
export interface EngineListCommunicationType {
  /**
   *
   * @type {Array<EngineCommunicationType>}
   * @memberof EngineListCommunicationType
   */
  items?: Array<EngineCommunicationType>
  /**
   *
   * @type {boolean}
   * @memberof EngineListCommunicationType
   */
  next?: boolean
}
