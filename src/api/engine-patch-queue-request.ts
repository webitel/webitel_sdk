// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2019.0.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EnginePatchQueueRequest
 */
export interface EnginePatchQueueRequest {
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchQueueRequest
   */
  after_schema?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchQueueRequest
   */
  calendar?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EnginePatchQueueRequest
   */
  description?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchQueueRequest
   */
  dnc_list?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchQueueRequest
   */
  do_schema?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EnginePatchQueueRequest
   */
  domain_id?: string
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchQueueRequest
   */
  enabled?: boolean
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchQueueRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EnginePatchQueueRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EnginePatchQueueRequest
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof EnginePatchQueueRequest
   */
  payload?: object
  /**
   *
   * @type {number}
   * @memberof EnginePatchQueueRequest
   */
  priority?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchQueueRequest
   */
  ringtone?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchQueueRequest
   */
  schema?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EnginePatchQueueRequest
   */
  sec_locate_agent?: number
  /**
   *
   * @type {string}
   * @memberof EnginePatchQueueRequest
   */
  strategy?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EnginePatchQueueRequest
   */
  team?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EnginePatchQueueRequest
   */
  timeout?: number
  /**
   *
   * @type {number}
   * @memberof EnginePatchQueueRequest
   */
  type?: number
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EnginePatchQueueRequest
   */
  variables?: { [key: string]: string }
}