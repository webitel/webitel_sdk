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

import { WebitelChatChatMessage } from './webitel-chat-chat-message'
import { WebitelChatChatPeer } from './webitel-chat-chat-peer'
import { WebitelChatContactChat } from './webitel-chat-contact-chat'

/**
 *
 * @export
 * @interface WebitelChatGetContactChatHistoryResponse
 */
export interface WebitelChatGetContactChatHistoryResponse {
  /**
   *
   * @type {Array<WebitelChatContactChat>}
   * @memberof WebitelChatGetContactChatHistoryResponse
   */
  chats?: Array<WebitelChatContactChat>
  /**
   * Dataset page of messages.
   * @type {Array<WebitelChatChatMessage>}
   * @memberof WebitelChatGetContactChatHistoryResponse
   */
  messages?: Array<WebitelChatChatMessage>
  /**
   *
   * @type {boolean}
   * @memberof WebitelChatGetContactChatHistoryResponse
   */
  next?: boolean
  /**
   * Dataset page number.
   * @type {number}
   * @memberof WebitelChatGetContactChatHistoryResponse
   */
  page?: number
  /**
   *
   * @type {Array<WebitelChatChatPeer>}
   * @memberof WebitelChatGetContactChatHistoryResponse
   */
  peers?: Array<WebitelChatChatPeer>
}
