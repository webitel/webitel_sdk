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

/**
 *
 * @export
 * @interface EngineUpdateAgentPauseCauseRequest
 */
export interface EngineUpdateAgentPauseCauseRequest {
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateAgentPauseCauseRequest
   */
  allow_admin?: boolean
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateAgentPauseCauseRequest
   */
  allow_agent?: boolean
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateAgentPauseCauseRequest
   */
  allow_supervisor?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineUpdateAgentPauseCauseRequest
   */
  description?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateAgentPauseCauseRequest
   */
  id?: number
  /**
   *
   * @type {number}
   * @memberof EngineUpdateAgentPauseCauseRequest
   */
  limit_min?: number
  /**
   *
   * @type {string}
   * @memberof EngineUpdateAgentPauseCauseRequest
   */
  name?: string
}
