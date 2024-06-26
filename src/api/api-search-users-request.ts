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

import { ApiSearchUsersRequestPresence } from './api-search-users-request-presence'

/**
 *
 * @export
 * @interface ApiSearchUsersRequest
 */
export interface ApiSearchUsersRequest {
  /**
   * filter: include \'deleted\' ALSO ! (inactive)
   * @type {boolean}
   * @memberof ApiSearchUsersRequest
   */
  any?: boolean
  /**
   *
   * @type {boolean}
   * @memberof ApiSearchUsersRequest
   */
  deleted?: boolean
  /**
   *
   * @type {string}
   * @memberof ApiSearchUsersRequest
   */
  extension?: string
  /**
   * select: output (fields,...)
   * @type {Array<string>}
   * @memberof ApiSearchUsersRequest
   */
  fields?: Array<string>
  /**
   * filter: .id = any({id}...)
   * @type {Array<string>}
   * @memberof ApiSearchUsersRequest
   */
  id?: Array<string>
  /**
   *
   * @type {string}
   * @memberof ApiSearchUsersRequest
   */
  name?: string
  /**
   *
   * @type {Array<string>}
   * @memberof ApiSearchUsersRequest
   */
  not_id?: Array<string>
  /**
   *
   * @type {number}
   * @memberof ApiSearchUsersRequest
   */
  page?: number
  /**
   *
   * @type {ApiSearchUsersRequestPresence}
   * @memberof ApiSearchUsersRequest
   */
  presence?: ApiSearchUsersRequestPresence
  /**
   * filter: (.name|.username|.extension|.status) ILIKE \'{q}\'
   * @type {string}
   * @memberof ApiSearchUsersRequest
   */
  q?: string
  /**
   *
   * @type {number}
   * @memberof ApiSearchUsersRequest
   */
  size?: number
  /**
   *
   * @type {Array<string>}
   * @memberof ApiSearchUsersRequest
   */
  sort?: Array<string>
  /**
   *
   * @type {string}
   * @memberof ApiSearchUsersRequest
   */
  status?: string
  /**
   *
   * @type {string}
   * @memberof ApiSearchUsersRequest
   */
  username?: string
}
