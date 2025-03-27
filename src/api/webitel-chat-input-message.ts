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

import { WebitelChatInputFile } from './webitel-chat-input-file'
import { WebitelChatInputKeyboard } from './webitel-chat-input-keyboard'

/**
 *
 * @export
 * @interface WebitelChatInputMessage
 */
export interface WebitelChatInputMessage {
  /**
   *
   * @type {WebitelChatInputFile}
   * @memberof WebitelChatInputMessage
   */
  file?: WebitelChatInputFile
  /**
   *
   * @type {WebitelChatInputKeyboard}
   * @memberof WebitelChatInputMessage
   */
  keyboard?: WebitelChatInputKeyboard
  /**
   *
   * @type {string}
   * @memberof WebitelChatInputMessage
   */
  text?: string
}
