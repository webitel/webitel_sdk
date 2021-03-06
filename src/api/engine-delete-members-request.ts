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
 * @interface EngineDeleteMembersRequest
 */
export interface EngineDeleteMembersRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof EngineDeleteMembersRequest
   */
  bucket_id?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EngineDeleteMembersRequest
   */
  domain_id?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineDeleteMembersRequest
   */
  ids?: Array<string>
  /**
   *
   * @type {string}
   * @memberof EngineDeleteMembersRequest
   */
  queue_id?: string
  /**
   *
   * @type {Array<string>}
   * @memberof EngineDeleteMembersRequest
   */
  stop_cause?: Array<string>
}
