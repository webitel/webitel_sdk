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

/**
 * Peer contact.
 * @export
 * @interface WebitelChatPeer
 */
export interface WebitelChatPeer {
  /**
   * Contact unique **ID**entifier. Contact **type**-specific string.
   * @type {string}
   * @memberof WebitelChatPeer
   */
  id?: string
  /**
   * Contact display **name**.
   * @type {string}
   * @memberof WebitelChatPeer
   */
  name?: string
  /**
   * Contact **type** provider.
   * @type {string}
   * @memberof WebitelChatPeer
   */
  type?: string
}
