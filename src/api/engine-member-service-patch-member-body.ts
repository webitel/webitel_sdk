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
 * @interface EngineMemberServicePatchMemberBody
 */
export interface EngineMemberServicePatchMemberBody {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineMemberServicePatchMemberBody
   */
  agent?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineMemberServicePatchMemberBody
   */
  attempts?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineMemberServicePatchMemberBody
   */
  bucket?: EngineLookup
  /**
   *
   * @type {Array<EngineMemberCommunicationCreateRequest>}
   * @memberof EngineMemberServicePatchMemberBody
   */
  communications?: Array<EngineMemberCommunicationCreateRequest>
  /**
   *
   * @type {string}
   * @memberof EngineMemberServicePatchMemberBody
   */
  domainId?: string
  /**
   *
   * @type {string}
   * @memberof EngineMemberServicePatchMemberBody
   */
  expireAt?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineMemberServicePatchMemberBody
   */
  fields?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EngineMemberServicePatchMemberBody
   */
  minOfferingAt?: string
  /**
   *
   * @type {string}
   * @memberof EngineMemberServicePatchMemberBody
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof EngineMemberServicePatchMemberBody
   */
  priority?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineMemberServicePatchMemberBody
   */
  skill?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineMemberServicePatchMemberBody
   */
  stopCause?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineMemberServicePatchMemberBody
   */
  timezone?: EngineLookup
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineMemberServicePatchMemberBody
   */
  variables?: { [key: string]: string }
}
