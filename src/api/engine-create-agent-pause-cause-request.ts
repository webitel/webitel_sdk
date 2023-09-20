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
 * @interface EngineCreateAgentPauseCauseRequest
 */
export interface EngineCreateAgentPauseCauseRequest {
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateAgentPauseCauseRequest
   */
  allow_admin?: boolean
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateAgentPauseCauseRequest
   */
  allow_agent?: boolean
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateAgentPauseCauseRequest
   */
  allow_supervisor?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineCreateAgentPauseCauseRequest
   */
  description?: string
  /**
   *
   * @type {number}
   * @memberof EngineCreateAgentPauseCauseRequest
   */
  limit_min?: number
  /**
   *
   * @type {string}
   * @memberof EngineCreateAgentPauseCauseRequest
   */
  name?: string
}
