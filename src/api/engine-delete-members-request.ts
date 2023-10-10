// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.09.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineFilterBetween } from './engine-filter-between'

/**
 *
 * @export
 * @interface EngineDeleteMembersRequest
 */
export interface EngineDeleteMembersRequest {
  /**
   *
   * @type {Array<number>}
   * @memberof EngineDeleteMembersRequest
   */
  agent_id?: Array<number>
  /**
   *
   * @type {EngineFilterBetween}
   * @memberof EngineDeleteMembersRequest
   */
  attempts?: EngineFilterBetween
  /**
   *
   * @type {Array<number>}
   * @memberof EngineDeleteMembersRequest
   */
  bucket_id?: Array<number>
  /**
   *
   * @type {EngineFilterBetween}
   * @memberof EngineDeleteMembersRequest
   */
  created_at?: EngineFilterBetween
  /**
   *
   * @type {string}
   * @memberof EngineDeleteMembersRequest
   */
  destination?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineDeleteMembersRequest
   */
  id?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof EngineDeleteMembersRequest
   */
  ids?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EngineDeleteMembersRequest
   */
  name?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineDeleteMembersRequest
   */
  numbers?: Array<string>
  /**
   *
   * @type {EngineFilterBetween}
   * @memberof EngineDeleteMembersRequest
   */
  offering_at?: EngineFilterBetween
  /**
   *
   * @type {EngineFilterBetween}
   * @memberof EngineDeleteMembersRequest
   */
  priority?: EngineFilterBetween
  /**
   *
   * @type {string}
   * @memberof EngineDeleteMembersRequest
   */
  q?: string
  /**
   *
   * @type {string}
   * @memberof EngineDeleteMembersRequest
   */
  queue_id?: string
  /**
   *
   * @type {number}
   * @memberof EngineDeleteMembersRequest
   */
  size?: number
  /**
   *
   * @type {string}
   * @memberof EngineDeleteMembersRequest
   */
  sort?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineDeleteMembersRequest
   */
  stop_cause?: Array<string>
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineDeleteMembersRequest
   */
  variables?: { [key: string]: string }
}
