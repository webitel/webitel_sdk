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

/**
 *
 * @export
 * @interface EnginePatchAgentSkillsRequest
 */
export interface EnginePatchAgentSkillsRequest {
  /**
   *
   * @type {string}
   * @memberof EnginePatchAgentSkillsRequest
   */
  agent_id?: string
  /**
   *
   * @type {number}
   * @memberof EnginePatchAgentSkillsRequest
   */
  capacity?: number
  /**
   *
   * @type {boolean}
   * @memberof EnginePatchAgentSkillsRequest
   */
  enabled?: boolean
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchAgentSkillsRequest
   */
  fields?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchAgentSkillsRequest
   */
  id?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof EnginePatchAgentSkillsRequest
   */
  skill_id?: Array<string>
}
