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

import { WebitelChatChat } from './webitel-chat-chat'
import { WebitelChatMessage } from './webitel-chat-message'
import { WebitelChatPeer } from './webitel-chat-peer'

/**
 *
 * @export
 * @interface WebitelChatChatMessages
 */
export interface WebitelChatChatMessages {
  /**
   *
   * @type {Array<WebitelChatChat>}
   * @memberof WebitelChatChatMessages
   */
  chats?: Array<WebitelChatChat>
  /**
   * Dataset page of messages.
   * @type {Array<WebitelChatMessage>}
   * @memberof WebitelChatChatMessages
   */
  messages?: Array<WebitelChatMessage>
  /**
   *
   * @type {boolean}
   * @memberof WebitelChatChatMessages
   */
  next?: boolean
  /**
   * Dataset page number.
   * @type {number}
   * @memberof WebitelChatChatMessages
   */
  page?: number
  /**
   *
   * @type {Array<WebitelChatPeer>}
   * @memberof WebitelChatChatMessages
   */
  peers?: Array<WebitelChatPeer>
}
