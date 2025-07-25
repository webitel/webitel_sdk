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
 * @interface EngineMemberServiceCreateMemberBody
 */
export interface EngineMemberServiceCreateMemberBody {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineMemberServiceCreateMemberBody
   */
  agent?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineMemberServiceCreateMemberBody
   */
  bucket?: EngineLookup
  /**
   *
   * @type {Array<EngineMemberCommunicationCreateRequest>}
   * @memberof EngineMemberServiceCreateMemberBody
   */
  communications?: Array<EngineMemberCommunicationCreateRequest>
  /**
   *
   * @type {string}
   * @memberof EngineMemberServiceCreateMemberBody
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineMemberServiceCreateMemberBody
   */
  expire_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineMemberServiceCreateMemberBody
   */
  min_offering_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineMemberServiceCreateMemberBody
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof EngineMemberServiceCreateMemberBody
   */
  priority?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineMemberServiceCreateMemberBody
   */
  skill?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineMemberServiceCreateMemberBody
   */
  timezone?: EngineLookup
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineMemberServiceCreateMemberBody
   */
  variables?: { [key: string]: string }
}
