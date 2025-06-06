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
 * @interface EngineTriggerServiceUpdateTriggerBody
 */
export interface EngineTriggerServiceUpdateTriggerBody {
  /**
   *
   * @type {string}
   * @memberof EngineTriggerServiceUpdateTriggerBody
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineTriggerServiceUpdateTriggerBody
   */
  enabled?: boolean
  /**
   *
   * @type {EngineTriggerEventType}
   * @memberof EngineTriggerServiceUpdateTriggerBody
   */
  event?: EngineTriggerEventType
  /**
   *
   * @type {string}
   * @memberof EngineTriggerServiceUpdateTriggerBody
   */
  expression?: string
  /**
   *
   * @type {string}
   * @memberof EngineTriggerServiceUpdateTriggerBody
   */
  name?: string
  /**
   *
   * @type {EngineTriggerObjectType}
   * @memberof EngineTriggerServiceUpdateTriggerBody
   */
  object?: EngineTriggerObjectType
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineTriggerServiceUpdateTriggerBody
   */
  schema?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineTriggerServiceUpdateTriggerBody
   */
  timeout?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineTriggerServiceUpdateTriggerBody
   */
  timezone?: EngineLookup
  /**
   *
   * @type {EngineTriggerType}
   * @memberof EngineTriggerServiceUpdateTriggerBody
   */
  type?: EngineTriggerType
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineTriggerServiceUpdateTriggerBody
   */
  variables?: { [key: string]: string }
}
