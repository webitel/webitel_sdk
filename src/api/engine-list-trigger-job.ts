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

import { EngineTriggerJob } from './engine-trigger-job'

/**
 *
 * @export
 * @interface EngineListTriggerJob
 */
export interface EngineListTriggerJob {
  /**
   *
   * @type {Array<EngineTriggerJob>}
   * @memberof EngineListTriggerJob
   */
  items?: Array<EngineTriggerJob>
  /**
   *
   * @type {boolean}
   * @memberof EngineListTriggerJob
   */
  next?: boolean
}
