// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.12.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface EnginePatchAgentPauseCauseRequest
 */
export interface EnginePatchAgentPauseCauseRequest {
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchAgentPauseCauseRequest
   */
  allow_admin?: boolean
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchAgentPauseCauseRequest
   */
  allow_agent?: boolean
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchAgentPauseCauseRequest
   */
  allow_supervisor?: boolean
  /**
   *
   * @type {string}
   * @memberof EnginePatchAgentPauseCauseRequest
   */
  description?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchAgentPauseCauseRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {number}
   * @memberof EnginePatchAgentPauseCauseRequest
   */
  id?: number
  /**
   *
   * @type {number}
   * @memberof EnginePatchAgentPauseCauseRequest
   */
  limit_min?: number
  /**
   *
   * @type {string}
   * @memberof EnginePatchAgentPauseCauseRequest
   */
  name?: string
}
