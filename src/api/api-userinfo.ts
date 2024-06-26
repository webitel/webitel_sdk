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

import { ApiLicenseUser } from './api-license-user'
import { ApiObjclass } from './api-objclass'
import { ApiObjectId } from './api-object-id'
import { ApiPermission } from './api-permission'

/**
 *
 * @export
 * @interface ApiUserinfo
 */
export interface ApiUserinfo {
  /**
   *
   * @type {string}
   * @memberof ApiUserinfo
   */
  dc?: string
  /**
   *
   * @type {string}
   * @memberof ApiUserinfo
   */
  domain?: string
  /**
   *
   * @type {string}
   * @memberof ApiUserinfo
   */
  expires_at?: string
  /**
   *
   * @type {string}
   * @memberof ApiUserinfo
   */
  extension?: string
  /**
   *
   * @type {Array<ApiLicenseUser>}
   * @memberof ApiUserinfo
   */
  license?: Array<ApiLicenseUser>
  /**
   *
   * @type {string}
   * @memberof ApiUserinfo
   */
  name?: string
  /**
   *
   * @type {Array<ApiPermission>}
   * @memberof ApiUserinfo
   */
  permissions?: Array<ApiPermission>
  /**
   *
   * @type {string}
   * @memberof ApiUserinfo
   */
  preferred_username?: string
  /**
   *
   * @type {Array<ApiObjectId>}
   * @memberof ApiUserinfo
   */
  roles?: Array<ApiObjectId>
  /**
   *
   * @type {Array<ApiObjclass>}
   * @memberof ApiUserinfo
   */
  scope?: Array<ApiObjclass>
  /**
   *
   * @type {string}
   * @memberof ApiUserinfo
   */
  updated_at?: string
  /**
   *
   * @type {string}
   * @memberof ApiUserinfo
   */
  user_id?: string
  /**
   *
   * @type {string}
   * @memberof ApiUserinfo
   */
  username?: string
}
