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
 * @interface EngineCreateCallAnnotationRequest
 */
export interface EngineCreateCallAnnotationRequest {
  /**
   *
   * @type {string}
   * @memberof EngineCreateCallAnnotationRequest
   */
  call_id?: string
  /**
   *
   * @type {number}
   * @memberof EngineCreateCallAnnotationRequest
   */
  end_sec?: number
  /**
   *
   * @type {string}
   * @memberof EngineCreateCallAnnotationRequest
   */
  note?: string
  /**
   *
   * @type {number}
   * @memberof EngineCreateCallAnnotationRequest
   */
  start_sec?: number
}
