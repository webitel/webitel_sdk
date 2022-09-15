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

/**
 *
 * @export
 * @interface EngineCreateTriggerJobRequest
 */
export interface EngineCreateTriggerJobRequest {
  /**
   *
   * @type {number}
   * @memberof EngineCreateTriggerJobRequest
   */
  trigger_id?: number
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineCreateTriggerJobRequest
   */
  variables?: { [key: string]: string }
}