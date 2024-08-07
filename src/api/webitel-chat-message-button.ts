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

import { WebitelChatMessageButtonRequest } from './webitel-chat-message-button-request'

/**
 *
 * @export
 * @interface WebitelChatMessageButton
 */
export interface WebitelChatMessageButton {
  /**
   * Postback/Callback data.
   * @type {string}
   * @memberof WebitelChatMessageButton
   */
  code?: string
  /**
   *
   * @type {WebitelChatMessageButtonRequest}
   * @memberof WebitelChatMessageButton
   */
  share?: WebitelChatMessageButtonRequest
  /**
   * Caption to display.
   * @type {string}
   * @memberof WebitelChatMessageButton
   */
  text?: string
  /**
   * URL to navigate to ..
   * @type {string}
   * @memberof WebitelChatMessageButton
   */
  url?: string
}
