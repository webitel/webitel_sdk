// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 22.05.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineMemberInQueue } from './engine-member-in-queue'

/**
 *
 * @export
 * @interface EngineListMember
 */
export interface EngineListMember {
  /**
   *
   * @type {Array<EngineMemberInQueue>}
   * @memberof EngineListMember
   */
  items?: Array<EngineMemberInQueue>
  /**
   *
   * @type {boolean}
   * @memberof EngineListMember
   */
  next?: boolean
}
