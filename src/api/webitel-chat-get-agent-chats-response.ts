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

import { WebitelChatAgentChat } from './webitel-chat-agent-chat'

/**
 *
 * @export
 * @interface WebitelChatGetAgentChatsResponse
 */
export interface WebitelChatGetAgentChatsResponse {
  /**
   *
   * @type {Array<WebitelChatAgentChat>}
   * @memberof WebitelChatGetAgentChatsResponse
   */
  items?: Array<WebitelChatAgentChat>
  /**
   *
   * @type {boolean}
   * @memberof WebitelChatGetAgentChatsResponse
   */
  next?: boolean
  /**
   *
   * @type {number}
   * @memberof WebitelChatGetAgentChatsResponse
   */
  page?: number
}
