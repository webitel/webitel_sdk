// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2019.0.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineListCommunication } from './engine-list-communication'

/**
 *
 * @export
 * @interface EngineListOfListCommunication
 */
export interface EngineListOfListCommunication {
  /**
   *
   * @type {Array<EngineListCommunication>}
   * @memberof EngineListOfListCommunication
   */
  items?: Array<EngineListCommunication>
  /**
   *
   * @type {boolean}
   * @memberof EngineListOfListCommunication
   */
  next?: boolean
}