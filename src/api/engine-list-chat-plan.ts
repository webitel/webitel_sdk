// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.12.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineChatPlan } from './engine-chat-plan'

/**
 *
 * @export
 * @interface EngineListChatPlan
 */
export interface EngineListChatPlan {
  /**
   *
   * @type {Array<EngineChatPlan>}
   * @memberof EngineListChatPlan
   */
  items?: Array<EngineChatPlan>
  /**
   *
   * @type {boolean}
   * @memberof EngineListChatPlan
   */
  next?: boolean
}
