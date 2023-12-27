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
 * @interface EngineLoginEmailProfileResponse
 */
export interface EngineLoginEmailProfileResponse {
  /**
   *
   * @type {string}
   * @memberof EngineLoginEmailProfileResponse
   */
  auth_type?: string
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineLoginEmailProfileResponse
   */
  cookie?: { [key: string]: string }
  /**
   *
   * @type {string}
   * @memberof EngineLoginEmailProfileResponse
   */
  redirect_url?: string
}
