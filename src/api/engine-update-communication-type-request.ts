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

import { EngineCommunicationChannels } from './engine-communication-channels'

/**
 *
 * @export
 * @interface EngineUpdateCommunicationTypeRequest
 */
export interface EngineUpdateCommunicationTypeRequest {
  /**
   *
   * @type {EngineCommunicationChannels}
   * @memberof EngineUpdateCommunicationTypeRequest
   */
  channel?: EngineCommunicationChannels
  /**
   *
   * @type {string}
   * @memberof EngineUpdateCommunicationTypeRequest
   */
  code?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateCommunicationTypeRequest
   */
  _default?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineUpdateCommunicationTypeRequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateCommunicationTypeRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateCommunicationTypeRequest
   */
  name?: string
}
