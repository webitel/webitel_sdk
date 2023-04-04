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

import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineMemberCommunicationCreateRequest
 */
export interface EngineMemberCommunicationCreateRequest {
  /**
   *
   * @type {string}
   * @memberof EngineMemberCommunicationCreateRequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineMemberCommunicationCreateRequest
   */
  destination?: string
  /**
   *
   * @type {string}
   * @memberof EngineMemberCommunicationCreateRequest
   */
  display?: string
  /**
   *
   * @type {string}
   * @memberof EngineMemberCommunicationCreateRequest
   */
  dtmf?: string
  /**
   *
   * @type {number}
   * @memberof EngineMemberCommunicationCreateRequest
   */
  priority?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineMemberCommunicationCreateRequest
   */
  resource?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineMemberCommunicationCreateRequest
   */
  stop_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineMemberCommunicationCreateRequest
   */
  type?: EngineLookup
}
