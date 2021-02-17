// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.12.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface EngineAttemptCallbackRequest
 */
export interface EngineAttemptCallbackRequest {
  /**
   *
   * @type {number}
   * @memberof EngineAttemptCallbackRequest
   */
  agent_id?: number
  /**
   *
   * @type {string}
   * @memberof EngineAttemptCallbackRequest
   */
  attempt_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttemptCallbackRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineAttemptCallbackRequest
   */
  display?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineAttemptCallbackRequest
   */
  expire_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttemptCallbackRequest
   */
  min_offering_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttemptCallbackRequest
   */
  status?: string
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineAttemptCallbackRequest
   */
  variables?: { [key: string]: string }
}
