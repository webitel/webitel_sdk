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

import { EngineCommunicationChannels } from './engine-communication-channels'

/**
 *
 * @export
 * @interface EnginePatchCommunicationTypeRequest
 */
export interface EnginePatchCommunicationTypeRequest {
  /**
   *
   * @type {EngineCommunicationChannels}
   * @memberof EnginePatchCommunicationTypeRequest
   */
  channel?: EngineCommunicationChannels
  /**
   *
   * @type {string}
   * @memberof EnginePatchCommunicationTypeRequest
   */
  code?: string
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchCommunicationTypeRequest
   */
  _default?: boolean
  /**
   *
   * @type {string}
   * @memberof EnginePatchCommunicationTypeRequest
   */
  description?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchCommunicationTypeRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EnginePatchCommunicationTypeRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EnginePatchCommunicationTypeRequest
   */
  name?: string
}
