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

import { DefaultDeviceConfigResponseSipDeviceConfig } from './default-device-config-response-sip-device-config'
import { DefaultDeviceConfigResponseWebRTCDeviceConfig } from './default-device-config-response-web-rtcdevice-config'

/**
 *
 * @export
 * @interface EngineDefaultDeviceConfigResponse
 */
export interface EngineDefaultDeviceConfigResponse {
  /**
   *
   * @type {DefaultDeviceConfigResponseSipDeviceConfig}
   * @memberof EngineDefaultDeviceConfigResponse
   */
  sip?: DefaultDeviceConfigResponseSipDeviceConfig
  /**
   *
   * @type {DefaultDeviceConfigResponseWebRTCDeviceConfig}
   * @memberof EngineDefaultDeviceConfigResponse
   */
  webrtc?: DefaultDeviceConfigResponseWebRTCDeviceConfig
}
