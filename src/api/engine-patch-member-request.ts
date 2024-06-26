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

import { EngineLookup } from './engine-lookup'
import { EngineMemberCommunicationCreateRequest } from './engine-member-communication-create-request'

/**
 *
 * @export
 * @interface EnginePatchMemberRequest
 */
export interface EnginePatchMemberRequest {
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchMemberRequest
   */
  agent?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EnginePatchMemberRequest
   */
  attempts?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchMemberRequest
   */
  bucket?: EngineLookup
  /**
   *
   * @type {Array<EngineMemberCommunicationCreateRequest>}
   * @memberof EnginePatchMemberRequest
   */
  communications?: Array<EngineMemberCommunicationCreateRequest>
  /**
   *
   * @type {string}
   * @memberof EnginePatchMemberRequest
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EnginePatchMemberRequest
   */
  expire_at?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchMemberRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EnginePatchMemberRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EnginePatchMemberRequest
   */
  min_offering_at?: string
  /**
   *
   * @type {string}
   * @memberof EnginePatchMemberRequest
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof EnginePatchMemberRequest
   */
  priority?: number
  /**
   *
   * @type {string}
   * @memberof EnginePatchMemberRequest
   */
  queue_id?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchMemberRequest
   */
  skill?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EnginePatchMemberRequest
   */
  stop_cause?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchMemberRequest
   */
  timezone?: EngineLookup
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EnginePatchMemberRequest
   */
  variables?: { [key: string]: string }
}
