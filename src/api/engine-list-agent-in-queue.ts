// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 22.05.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineAgentInQueue } from './engine-agent-in-queue'

/**
 *
 * @export
 * @interface EngineListAgentInQueue
 */
export interface EngineListAgentInQueue {
  /**
   *
   * @type {Array<EngineAgentInQueue>}
   * @memberof EngineListAgentInQueue
   */
  items?: Array<EngineAgentInQueue>
  /**
   *
   * @type {boolean}
   * @memberof EngineListAgentInQueue
   */
  next?: boolean
}
