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

import { EngineEavesdropCallRequestEndpointRequest } from './engine-eavesdrop-call-request-endpoint-request'

/**
 *
 * @export
 * @interface EngineCallServiceEavesdropCallBody
 */
export interface EngineCallServiceEavesdropCallBody {
  /**
   *
   * @type {string}
   * @memberof EngineCallServiceEavesdropCallBody
   */
  app_id?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineCallServiceEavesdropCallBody
   */
  control?: boolean
  /**
   *
   * @type {EngineEavesdropCallRequestEndpointRequest}
   * @memberof EngineCallServiceEavesdropCallBody
   */
  from?: EngineEavesdropCallRequestEndpointRequest
  /**
   *
   * @type {boolean}
   * @memberof EngineCallServiceEavesdropCallBody
   */
  listen_a?: boolean
  /**
   *
   * @type {boolean}
   * @memberof EngineCallServiceEavesdropCallBody
   */
  listen_b?: boolean
  /**
   *
   * @type {boolean}
   * @memberof EngineCallServiceEavesdropCallBody
   */
  whisper_a?: boolean
  /**
   *
   * @type {boolean}
   * @memberof EngineCallServiceEavesdropCallBody
   */
  whisper_b?: boolean
}
