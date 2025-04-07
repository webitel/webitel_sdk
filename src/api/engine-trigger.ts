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
 * @interface EngineTrigger
 */
export interface EngineTrigger {
  /**
   *
   * @type {string}
   * @memberof EngineTrigger
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineTrigger
   */
  enabled?: boolean
  /**
   *
   * @type {EngineTriggerEventType}
   * @memberof EngineTrigger
   */
  event?: EngineTriggerEventType
  /**
   *
   * @type {string}
   * @memberof EngineTrigger
   */
  expression?: string
  /**
   *
   * @type {number}
   * @memberof EngineTrigger
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof EngineTrigger
   */
  name?: string
  /**
   *
   * @type {EngineTriggerObjectType}
   * @memberof EngineTrigger
   */
  object?: EngineTriggerObjectType
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineTrigger
   */
  schema?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineTrigger
   */
  timeout?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineTrigger
   */
  timezone?: EngineLookup
  /**
   *
   * @type {EngineTriggerType}
   * @memberof EngineTrigger
   */
  type?: EngineTriggerType
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineTrigger
   */
  variables?: { [key: string]: string }
}
