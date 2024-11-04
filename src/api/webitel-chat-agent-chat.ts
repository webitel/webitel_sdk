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

import { WebitelChatMessage } from './webitel-chat-message'
import { WebitelChatPeer } from './webitel-chat-peer'

/**
 *
 * @export
 * @interface WebitelChatAgentChat
 */
export interface WebitelChatAgentChat {
  /**
   *
   * @type {string}
   * @memberof WebitelChatAgentChat
   */
  close_reason?: string
  /**
   *
   * @type {string}
   * @memberof WebitelChatAgentChat
   */
  closed_at?: string
  /**
   *
   * @type {WebitelChatPeer}
   * @memberof WebitelChatAgentChat
   */
  contact?: WebitelChatPeer
  /**
   *
   * @type {WebitelChatPeer}
   * @memberof WebitelChatAgentChat
   */
  gateway?: WebitelChatPeer
  /**
   *
   * @type {string}
   * @memberof WebitelChatAgentChat
   */
  id?: string
  /**
   *
   * @type {WebitelChatMessage}
   * @memberof WebitelChatAgentChat
   */
  last_message?: WebitelChatMessage
  /**
   *
   * @type {WebitelChatPeer}
   * @memberof WebitelChatAgentChat
   */
  queue?: WebitelChatPeer
  /**
   *
   * @type {string}
   * @memberof WebitelChatAgentChat
   */
  started_at?: string
  /**
   *
   * @type {string}
   * @memberof WebitelChatAgentChat
   */
  title?: string
  /**
   *
   * @type {boolean}
   * @memberof WebitelChatAgentChat
   */
  unprocessed_close?: boolean
}
