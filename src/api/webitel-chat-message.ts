// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebitelChatChat } from './webitel-chat-chat'
import { WebitelChatFile } from './webitel-chat-file'
import { WebitelChatPeer } from './webitel-chat-peer'

/**
 * Chat Message.
 * @export
 * @interface WebitelChatMessage
 */
export interface WebitelChatMessage {
  /**
   *
   * @type {WebitelChatChat}
   * @memberof WebitelChatMessage
   */
  chat?: WebitelChatChat
  /**
   * Context. Variables. Environment.
   * @type {{ [key: string]: string; }}
   * @memberof WebitelChatMessage
   */
  context?: { [key: string]: string }
  /**
   * Timestamp when this message was sent (published).
   * @type {string}
   * @memberof WebitelChatMessage
   */
  date?: string
  /**
   * Timestamp when this message was last edited.
   * @type {string}
   * @memberof WebitelChatMessage
   */
  edit?: string
  /**
   *
   * @type {WebitelChatFile}
   * @memberof WebitelChatMessage
   */
  file?: WebitelChatFile
  /**
   *
   * @type {WebitelChatPeer}
   * @memberof WebitelChatMessage
   */
  from?: WebitelChatPeer
  /**
   * Unique message identifier inside this chat.
   * @type {string}
   * @memberof WebitelChatMessage
   */
  id?: string
  /**
   *
   * @type {WebitelChatChat}
   * @memberof WebitelChatMessage
   */
  sender?: WebitelChatChat
  /**
   * Message Text.
   * @type {string}
   * @memberof WebitelChatMessage
   */
  text?: string
}
