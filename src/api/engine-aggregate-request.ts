// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.09.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AggregateRequestGroup } from './aggregate-request-group'

/**
 *
 * @export
 * @interface EngineAggregateRequest
 */
export interface EngineAggregateRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateRequest
   */
  avg?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateRequest
   */
  count?: Array<string>
  /**
   *
   * @type {Array<AggregateRequestGroup>}
   * @memberof EngineAggregateRequest
   */
  group?: Array<AggregateRequestGroup>
  /**
   *
   * @type {number}
   * @memberof EngineAggregateRequest
   */
  limit?: number
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateRequest
   */
  max?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateRequest
   */
  min?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EngineAggregateRequest
   */
  name?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateRequest
   */
  sort?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAggregateRequest
   */
  sum?: Array<string>
}
