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
 * @interface EngineAgentStatusRequest
 */
export interface EngineAgentStatusRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAgentStatusRequest
   */
  channels?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatusRequest
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatusRequest
   */
  id?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineAgentStatusRequest
   */
  on_demand?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatusRequest
   */
  payload?: string
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatusRequest
   */
  status?: string
}
