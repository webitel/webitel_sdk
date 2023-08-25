// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface CreateCallRequestCallSettings
 */
export interface CreateCallRequestCallSettings {
  /**
   *
   * @type {boolean}
   * @memberof CreateCallRequestCallSettings
   */
  audio?: boolean
  /**
   *
   * @type {boolean}
   * @memberof CreateCallRequestCallSettings
   */
  cancel_distribute?: boolean
  /**
   *
   * @type {boolean}
   * @memberof CreateCallRequestCallSettings
   */
  disable_auto_answer?: boolean
  /**
   *
   * @type {boolean}
   * @memberof CreateCallRequestCallSettings
   */
  disable_stun?: boolean
  /**
   *
   * @type {string}
   * @memberof CreateCallRequestCallSettings
   */
  display?: string
  /**
   *
   * @type {boolean}
   * @memberof CreateCallRequestCallSettings
   */
  hide_number?: boolean
  /**
   *
   * @type {boolean}
   * @memberof CreateCallRequestCallSettings
   */
  is_online?: boolean
  /**
   *
   * @type {boolean}
   * @memberof CreateCallRequestCallSettings
   */
  record?: boolean
  /**
   *
   * @type {boolean}
   * @memberof CreateCallRequestCallSettings
   */
  screen?: boolean
  /**
   *
   * @type {number}
   * @memberof CreateCallRequestCallSettings
   */
  timeout?: number
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof CreateCallRequestCallSettings
   */
  variables?: { [key: string]: string }
  /**
   *
   * @type {boolean}
   * @memberof CreateCallRequestCallSettings
   */
  video?: boolean
}
