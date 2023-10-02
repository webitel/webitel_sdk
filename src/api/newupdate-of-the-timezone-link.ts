// tslint:disable
/**
 * Webitel API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebitelContactsLookup } from './webitel-contacts-lookup'

/**
 *
 * @export
 * @interface NEWUpdateOfTheTimezoneLink
 */
export interface NEWUpdateOfTheTimezoneLink {
  /**
   * Indicates whether this association must be default among others.
   * @type {boolean}
   * @memberof NEWUpdateOfTheTimezoneLink
   */
  primary?: boolean
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof NEWUpdateOfTheTimezoneLink
   */
  timezone?: WebitelContactsLookup
}
