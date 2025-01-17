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

import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineQuickReply
 */
export interface EngineQuickReply {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQuickReply
   */
  article?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineQuickReply
   */
  created_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQuickReply
   */
  created_by?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineQuickReply
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof EngineQuickReply
   */
  name?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQuickReply
   */
  queue?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQuickReply
   */
  team?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineQuickReply
   */
  text?: string
  /**
   *
   * @type {string}
   * @memberof EngineQuickReply
   */
  updated_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQuickReply
   */
  updated_by?: EngineLookup
}
