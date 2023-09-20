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
 * @interface EngineCreateMemberBulkItem
 */
export interface EngineCreateMemberBulkItem {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateMemberBulkItem
   */
  agent?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateMemberBulkItem
   */
  bucket?: EngineLookup
  /**
   *
   * @type {Array<EngineMemberCommunicationCreateRequest>}
   * @memberof EngineCreateMemberBulkItem
   */
  communications?: Array<EngineMemberCommunicationCreateRequest>
  /**
   *
   * @type {string}
   * @memberof EngineCreateMemberBulkItem
   */
  expire_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateMemberBulkItem
   */
  min_offering_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateMemberBulkItem
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof EngineCreateMemberBulkItem
   */
  priority?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateMemberBulkItem
   */
  skill?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateMemberBulkItem
   */
  timezone?: EngineLookup
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineCreateMemberBulkItem
   */
  variables?: { [key: string]: string }
}
