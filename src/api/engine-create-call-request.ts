// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.09.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CreateCallRequestCallSettings } from './create-call-request-call-settings'
import { EngineCreateCallRequestEndpointRequest } from './engine-create-call-request-endpoint-request'

/**
 *
 * @export
 * @interface EngineCreateCallRequest
 */
export interface EngineCreateCallRequest {
  /**
   *
   * @type {string}
   * @memberof EngineCreateCallRequest
   */
  destination?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateCallRequest
   */
  domain_id?: string
  /**
   *
   * @type {EngineCreateCallRequestEndpointRequest}
   * @memberof EngineCreateCallRequest
   */
  from?: EngineCreateCallRequestEndpointRequest
  /**
   *
   * @type {CreateCallRequestCallSettings}
   * @memberof EngineCreateCallRequest
   */
  params?: CreateCallRequestCallSettings
  /**
   *
   * @type {EngineCreateCallRequestEndpointRequest}
   * @memberof EngineCreateCallRequest
   */
  to?: EngineCreateCallRequestEndpointRequest
}
