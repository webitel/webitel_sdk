// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.02.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineLookup } from './engine-lookup'
import { EngineTriggerJobState } from './engine-trigger-job-state'

/**
 *
 * @export
 * @interface EngineTriggerJob
 */
export interface EngineTriggerJob {
  /**
   *
   * @type {string}
   * @memberof EngineTriggerJob
   */
  created_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineTriggerJob
   */
  error?: string
  /**
   *
   * @type {string}
   * @memberof EngineTriggerJob
   */
  id?: string
  /**
   *
   * @type {object}
   * @memberof EngineTriggerJob
   */
  parameters?: object
  /**
   *
   * @type {object}
   * @memberof EngineTriggerJob
   */
  result?: object
  /**
   *
   * @type {string}
   * @memberof EngineTriggerJob
   */
  started_at?: string
  /**
   *
   * @type {EngineTriggerJobState}
   * @memberof EngineTriggerJob
   */
  state?: EngineTriggerJobState
  /**
   *
   * @type {string}
   * @memberof EngineTriggerJob
   */
  stopped_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineTriggerJob
   */
  trigger?: EngineLookup
}
