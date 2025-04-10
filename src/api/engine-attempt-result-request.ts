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
 * @interface EngineAttemptResultRequest
 */
export interface EngineAttemptResultRequest {
  /**
   *
   * @type {number}
   * @memberof EngineAttemptResultRequest
   */
  agent_id?: number
  /**
   *
   * @type {string}
   * @memberof EngineAttemptResultRequest
   */
  attempt_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttemptResultRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineAttemptResultRequest
   */
  display?: boolean
  /**
   *
   * @type {boolean}
   * @memberof EngineAttemptResultRequest
   */
  exclude_current_communication?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineAttemptResultRequest
   */
  expire_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttemptResultRequest
   */
  member_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttemptResultRequest
   */
  min_offering_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttemptResultRequest
   */
  next_member_id?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineAttemptResultRequest
   */
  only_current_communication?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineAttemptResultRequest
   */
  queue_id?: number
  /**
   *
   * @type {string}
   * @memberof EngineAttemptResultRequest
   */
  status?: string
  /**
   *
   * @type {string}
   * @memberof EngineAttemptResultRequest
   */
  transfer_queue_id?: string
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineAttemptResultRequest
   */
  variables?: { [key: string]: string }
  /**
   *
   * @type {number}
   * @memberof EngineAttemptResultRequest
   */
  wait_between_retries?: number
}
