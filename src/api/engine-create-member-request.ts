// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineLookup } from './engine-lookup'
import { EngineMemberCommunicationCreateRequest } from './engine-member-communication-create-request'

/**
 *
 * @export
 * @interface EngineCreateMemberRequest
 */
export interface EngineCreateMemberRequest {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateMemberRequest
   */
  agent?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateMemberRequest
   */
  bucket?: EngineLookup
  /**
   *
   * @type {Array<EngineMemberCommunicationCreateRequest>}
   * @memberof EngineCreateMemberRequest
   */
  communications?: Array<EngineMemberCommunicationCreateRequest>
  /**
   *
   * @type {string}
   * @memberof EngineCreateMemberRequest
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateMemberRequest
   */
  expire_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateMemberRequest
   */
  min_offering_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateMemberRequest
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof EngineCreateMemberRequest
   */
  priority?: number
  /**
   *
   * @type {string}
   * @memberof EngineCreateMemberRequest
   */
  queue_id?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateMemberRequest
   */
  skill?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateMemberRequest
   */
  timezone?: EngineLookup
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineCreateMemberRequest
   */
  variables?: { [key: string]: string }
}
