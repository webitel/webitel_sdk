// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.12.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

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
   * @type {string}
   * @memberof EnginePatchRoutingSchemaRequest
   */
  domain_id?: string
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
   * @type {number}
   * @memberof EnginePatchRoutingSchemaRequest
   */
  type?: number
}
