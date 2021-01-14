// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.12.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineSkill } from './engine-skill'

/**
 *
 * @export
 * @interface EngineListSkill
 */
export interface EngineListSkill {
  /**
   *
   * @type {Array<EngineSkill>}
   * @memberof EngineListSkill
   */
  items?: Array<EngineSkill>
  /**
   *
   * @type {boolean}
   * @memberof EngineListSkill
   */
  next?: boolean
}
