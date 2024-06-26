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

/**
 *
 * @export
 * @interface ApiPresenceStatus
 */
export interface ApiPresenceStatus {
  /**
   *
   * @type {string}
   * @memberof ApiPresenceStatus
   */
  app?: string
  /**
   *
   * @type {boolean}
   * @memberof ApiPresenceStatus
   */
  closed?: boolean
  /**
   *
   * @type {string}
   * @memberof ApiPresenceStatus
   */
  contact?: string
  /**
   *
   * @type {string}
   * @memberof ApiPresenceStatus
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof ApiPresenceStatus
   */
  expires?: string
  /**
   * [required] tuple unique id; <track>
   * @type {string}
   * @memberof ApiPresenceStatus
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof ApiPresenceStatus
   */
  note?: string
  /**
   *
   * @type {number}
   * @memberof ApiPresenceStatus
   */
  open?: number
  /**
   * // FIXME: well-known types ?   repeated Dialog  call = 9;   repeated Sipreg  sip = 9;   repeated Websock wss = 9;
   * @type {Array<ApiPresenceStatus>}
   * @memberof ApiPresenceStatus
   */
  presence?: Array<ApiPresenceStatus>
  /**
   *
   * @type {number}
   * @memberof ApiPresenceStatus
   */
  priority?: number
  /**
   *
   * @type {string}
   * @memberof ApiPresenceStatus
   */
  sequence?: string
  /**
   *
   * @type {string}
   * @memberof ApiPresenceStatus
   */
  status?: string
  /**
   *
   * @type {string}
   * @memberof ApiPresenceStatus
   */
  timestamp?: string
}
