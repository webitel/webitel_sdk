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

import { EngineLookup } from './engine-lookup'
import { EngineTaskProcessing } from './engine-task-processing'

/**
 *
 * @export
 * @interface EngineQueue
 */
export interface EngineQueue {
  /**
   *
   * @type {number}
   * @memberof EngineQueue
   */
  active?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueue
   */
  after_schema?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueue
   */
  calendar?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineQueue
   */
  count?: number
  /**
   *
   * @type {string}
   * @memberof EngineQueue
   */
  created_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueue
   */
  created_by?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineQueue
   */
  description?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueue
   */
  dnc_list?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueue
   */
  do_schema?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineQueue
   */
  domain_id?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineQueue
   */
  enabled?: boolean
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueue
   */
  form_schema?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueue
   */
  grantee?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineQueue
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineQueue
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof EngineQueue
   */
  payload?: object
  /**
   *
   * @type {number}
   * @memberof EngineQueue
   */
  priority?: number
  /**
   *
   * @type {boolean}
   * @memberof EngineQueue
   */
  processing?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineQueue
   */
  processing_renewal_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineQueue
   */
  processing_sec?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueue
   */
  ringtone?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueue
   */
  schema?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineQueue
   */
  sec_locate_agent?: number
  /**
   *
   * @type {boolean}
   * @memberof EngineQueue
   */
  sticky_agent?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineQueue
   */
  strategy?: string
  /**
   *
   * @type {EngineTaskProcessing}
   * @memberof EngineQueue
   */
  task_processing?: EngineTaskProcessing
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueue
   */
  team?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineQueue
   */
  timeout?: number
  /**
   *
   * @type {number}
   * @memberof EngineQueue
   */
  type?: number
  /**
   *
   * @type {string}
   * @memberof EngineQueue
   */
  updated_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueue
   */
  updated_by?: EngineLookup
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineQueue
   */
  variables?: { [key: string]: string }
  /**
   *
   * @type {number}
   * @memberof EngineQueue
   */
  waiting?: number
}
