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

import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineMemberCommunication
 */
export interface EngineMemberCommunication {
  /**
   *
   * @type {number}
   * @memberof EngineMemberCommunication
   */
  attempts?: number
  /**
   *
   * @type {string}
   * @memberof EngineMemberCommunication
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineMemberCommunication
   */
  destination?: string
  /**
   *
   * @type {string}
   * @memberof EngineMemberCommunication
   */
  display?: string
  /**
   *
   * @type {string}
   * @memberof EngineMemberCommunication
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineMemberCommunication
   */
  last_activity_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineMemberCommunication
   */
  last_cause?: string
  /**
   *
   * @type {number}
   * @memberof EngineMemberCommunication
   */
  priority?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineMemberCommunication
   */
  resource?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineMemberCommunication
   */
  state?: number
  /**
   *
   * @type {string}
   * @memberof EngineMemberCommunication
   */
  stop_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineMemberCommunication
   */
  type?: EngineLookup
}
