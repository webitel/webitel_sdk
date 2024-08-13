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

import { ApiGrantAccessRequestV1 } from './api-grant-access-request-v1'

/**
 *
 * @export
 * @interface ApiAccessStoreToggleDefaultAccessBody
 */
export interface ApiAccessStoreToggleDefaultAccessBody {
  /**
   * list of changes ...  [TO] (GRANT/REVOKE)
   * @type {Array<ApiGrantAccessRequestV1>}
   * @memberof ApiAccessStoreToggleDefaultAccessBody
   */
  list?: Array<ApiGrantAccessRequestV1>
  /**
   *
   * @type {object}
   * @memberof ApiAccessStoreToggleDefaultAccessBody
   */
  object?: object
}