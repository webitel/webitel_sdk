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
import { EngineTag } from './engine-tag'
import { EngineTaskProcessing } from './engine-task-processing'

/**
 *
 * @export
 * @interface EngineUpdateQueueRequest
 */
export interface EngineUpdateQueueRequest {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  after_schema?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  calendar?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineUpdateQueueRequest
   */
  description?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  dnc_list?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  do_schema?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineUpdateQueueRequest
   */
  domain_id?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateQueueRequest
   */
  enabled?: boolean
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  form_schema?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  grantee?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineUpdateQueueRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateQueueRequest
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof EngineUpdateQueueRequest
   */
  payload?: object
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueRequest
   */
  priority?: number
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateQueueRequest
   */
  processing?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueRequest
   */
  processing_renewal_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueRequest
   */
  processing_sec?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  ringtone?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  schema?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueRequest
   */
  sec_locate_agent?: number
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateQueueRequest
   */
  sticky_agent?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineUpdateQueueRequest
   */
  strategy?: string
  /**
   *
   * @type {Array<EngineTag>}
   * @memberof EngineUpdateQueueRequest
   */
  tags?: Array<EngineTag>
  /**
   *
   * @type {EngineTaskProcessing}
   * @memberof EngineUpdateQueueRequest
   */
  task_processing?: EngineTaskProcessing
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  team?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueRequest
   */
  timeout?: number
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueRequest
   */
  type?: number
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineUpdateQueueRequest
   */
  variables?: { [key: string]: string }
}
