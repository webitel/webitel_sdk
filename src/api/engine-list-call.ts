// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineActiveCall } from './engine-active-call'

/**
 *
 * @export
 * @interface EngineListCall
 */
export interface EngineListCall {
  /**
   *
   * @type {Array<EngineActiveCall>}
   * @memberof EngineListCall
   */
  items?: Array<EngineActiveCall>
  /**
   *
   * @type {boolean}
   * @memberof EngineListCall
   */
  next?: boolean
}
