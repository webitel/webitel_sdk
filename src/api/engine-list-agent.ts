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

import { EngineAgent } from './engine-agent'

/**
 *
 * @export
 * @interface EngineListAgent
 */
export interface EngineListAgent {
  /**
   *
   * @type {Array<EngineAgent>}
   * @memberof EngineListAgent
   */
  items?: Array<EngineAgent>
  /**
   *
   * @type {boolean}
   * @memberof EngineListAgent
   */
  next?: boolean
}
