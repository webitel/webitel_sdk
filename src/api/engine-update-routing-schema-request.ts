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

import { EngineRoutingSchemaType } from './engine-routing-schema-type'
import { EngineSchemaTag } from './engine-schema-tag'

/**
 *
 * @export
 * @interface EngineUpdateRoutingSchemaRequest
 */
export interface EngineUpdateRoutingSchemaRequest {
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateRoutingSchemaRequest
   */
  debug?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineUpdateRoutingSchemaRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateRoutingSchemaRequest
   */
  editor?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineUpdateRoutingSchemaRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateRoutingSchemaRequest
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof EngineUpdateRoutingSchemaRequest
   */
  payload?: object
  /**
   *
   * @type {object}
   * @memberof EngineUpdateRoutingSchemaRequest
   */
  schema?: object
  /**
   *
   * @type {Array<EngineSchemaTag>}
   * @memberof EngineUpdateRoutingSchemaRequest
   */
  tags?: Array<EngineSchemaTag>
  /**
   *
   * @type {EngineRoutingSchemaType}
   * @memberof EngineUpdateRoutingSchemaRequest
   */
  type?: EngineRoutingSchemaType
}
