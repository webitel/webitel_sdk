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
import { EngineTriggerEventType } from './engine-trigger-event-type'
import { EngineTriggerObjectType } from './engine-trigger-object-type'
import { EngineTriggerType } from './engine-trigger-type'

/**
 *
 * @export
 * @interface EngineCreateTriggerRequest
 */
export interface EngineCreateTriggerRequest {
  /**
   *
   * @type {string}
   * @memberof EngineCreateTriggerRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateTriggerRequest
   */
  enabled?: boolean
  /**
   *
   * @type {EngineTriggerEventType}
   * @memberof EngineCreateTriggerRequest
   */
  event?: EngineTriggerEventType
  /**
   *
   * @type {string}
   * @memberof EngineCreateTriggerRequest
   */
  expression?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateTriggerRequest
   */
  name?: string
  /**
   *
   * @type {EngineTriggerObjectType}
   * @memberof EngineCreateTriggerRequest
   */
  object?: EngineTriggerObjectType
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateTriggerRequest
   */
  schema?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineCreateTriggerRequest
   */
  timeout?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateTriggerRequest
   */
  timezone?: EngineLookup
  /**
   *
   * @type {EngineTriggerType}
   * @memberof EngineCreateTriggerRequest
   */
  type?: EngineTriggerType
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineCreateTriggerRequest
   */
  variables?: { [key: string]: string }
}
