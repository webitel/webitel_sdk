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

import { EngineRoutingSchemaType } from './engine-routing-schema-type'
import { EngineSchemaTag } from './engine-schema-tag'

/**
 *
 * @export
 * @interface EnginePatchRoutingSchemaRequest
 */
export interface EnginePatchRoutingSchemaRequest {
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchRoutingSchemaRequest
   */
  debug?: boolean
  /**
   *
   * @type {string}
   * @memberof EnginePatchRoutingSchemaRequest
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchRoutingSchemaRequest
   */
  editor?: boolean
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchRoutingSchemaRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EnginePatchRoutingSchemaRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EnginePatchRoutingSchemaRequest
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof EnginePatchRoutingSchemaRequest
   */
  payload?: object
  /**
   *
   * @type {object}
   * @memberof EnginePatchRoutingSchemaRequest
   */
  schema?: object
  /**
   *
   * @type {Array<EngineSchemaTag>}
   * @memberof EnginePatchRoutingSchemaRequest
   */
  tags?: Array<EngineSchemaTag>
  /**
   *
   * @type {EngineRoutingSchemaType}
   * @memberof EnginePatchRoutingSchemaRequest
   */
  type?: EngineRoutingSchemaType
}
