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
import { ApiObjectId } from './api-object-id'
import { ApiPermission } from './api-permission'
import { ApiUserId } from './api-user-id'
import { ApiUserPresence } from './api-user-presence'

/**
 * User profile.
 * @export
 * @interface ApiUser
 */
export interface ApiUser {
  /**
   *
   * @type {string}
   * @memberof ApiUser
   */
  created_at?: string
  /**
   *
   * @type {ApiUserId}
   * @memberof ApiUser
   */
  created_by?: ApiUserId
  /**
   *
   * @type {string}
   * @memberof ApiUser
   */
  deleted_at?: string
  /**
   *
   * @type {ApiUserId}
   * @memberof ApiUser
   */
  deleted_by?: ApiUserId
  /**
   *
   * @type {ApiObjectId}
   * @memberof ApiUser
   */
  device?: ApiObjectId
  /**
   * [editable] list of unique `regular` devices, attached to this user
   * @type {Array<ApiObjectId>}
   * @memberof ApiUser
   */
  devices?: Array<ApiObjectId>
  /**
   *
   * @type {string}
   * @memberof ApiUser
   */
  email?: string
  /**
   *
   * @type {string}
   * @memberof ApiUser
   */
  extension?: string
  /**
   *
   * @type {Array<ApiObjectId>}
   * @memberof ApiUser
   */
  hotdesks?: Array<ApiObjectId>
  /**
   *
   * @type {string}
   * @memberof ApiUser
   */
  id?: string
  /**
   *
   * @type {Array<ApiLicenseUser>}
   * @memberof ApiUser
   */
  license?: Array<ApiLicenseUser>
  /**
   *
   * @type {string}
   * @memberof ApiUser
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof ApiUser
   */
  password?: string
  /**
   *
   * @type {Array<ApiPermission>}
   * @memberof ApiUser
   */
  permissions?: Array<ApiPermission>
  /**
   *
   * @type {ApiUserPresence}
   * @memberof ApiUser
   */
  presence?: ApiUserPresence
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ApiUser
   */
  profile?: { [key: string]: string }
  /**
   *
   * @type {Array<ApiObjectId>}
   * @memberof ApiUser
   */
  roles?: Array<ApiObjectId>
  /**
   *
   * @type {string}
   * @memberof ApiUser
   */
  totp_url?: string
  /**
   *
   * @type {string}
   * @memberof ApiUser
   */
  updated_at?: string
  /**
   *
   * @type {ApiUserId}
   * @memberof ApiUser
   */
  updated_by?: ApiUserId
  /**
   *
   * @type {string}
   * @memberof ApiUser
   */
  username?: string
}
