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
import { EngineTriggerType } from './engine-trigger-type'

/**
 *
 * @export
 * @interface EngineUpdateTriggerRequest
 */
export interface EngineUpdateTriggerRequest {
  /**
   *
   * @type {string}
   * @memberof EngineUpdateTriggerRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateTriggerRequest
   */
  enabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineUpdateTriggerRequest
   */
  expression?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateTriggerRequest
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof EngineUpdateTriggerRequest
   */
  name?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateTriggerRequest
   */
  schema?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineUpdateTriggerRequest
   */
  timeout?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateTriggerRequest
   */
  timezone?: EngineLookup
  /**
   *
   * @type {EngineTriggerType}
   * @memberof EngineUpdateTriggerRequest
   */
  type?: EngineTriggerType
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineUpdateTriggerRequest
   */
  variables?: { [key: string]: string }
}
