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

import { WebitelChatButtonRow } from './webitel-chat-button-row'

/**
 *
 * @export
 * @interface WebitelChatReplyMarkup
 */
export interface WebitelChatReplyMarkup {
  /**
   *
   * @type {Array<WebitelChatButtonRow>}
   * @memberof WebitelChatReplyMarkup
   */
  buttons?: Array<WebitelChatButtonRow>
  /**
   * An option used to block input to force the user to respond with one of the buttons.
   * @type {boolean}
   * @memberof WebitelChatReplyMarkup
   */
  no_input?: boolean
}
