// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineTrigger } from './engine-trigger'

/**
 *
 * @export
 * @interface EngineListTrigger
 */
export interface EngineListTrigger {
  /**
   *
   * @type {Array<EngineTrigger>}
   * @memberof EngineListTrigger
   */
  items?: Array<EngineTrigger>
  /**
   *
   * @type {boolean}
   * @memberof EngineListTrigger
   */
  next?: boolean
}
