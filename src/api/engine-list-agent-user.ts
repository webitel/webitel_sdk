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

import { EngineAgentUser } from './engine-agent-user'

/**
 *
 * @export
 * @interface EngineListAgentUser
 */
export interface EngineListAgentUser {
  /**
   *
   * @type {Array<EngineAgentUser>}
   * @memberof EngineListAgentUser
   */
  items?: Array<EngineAgentUser>
  /**
   *
   * @type {boolean}
   * @memberof EngineListAgentUser
   */
  next?: boolean
}
