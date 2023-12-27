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

import { WebitelContactsLookup } from './webitel-contacts-lookup'

/**
 *
 * @export
 * @interface NEWUpdateOfThePhoneNumberDetails1
 */
export interface NEWUpdateOfThePhoneNumberDetails1 {
  /**
   * The phone number.
   * @type {string}
   * @memberof NEWUpdateOfThePhoneNumberDetails1
   */
  number: string
  /**
   * Indicates whether this phone number is default within other channels of the same type(phone).
   * @type {boolean}
   * @memberof NEWUpdateOfThePhoneNumberDetails1
   */
  primary?: boolean
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof NEWUpdateOfThePhoneNumberDetails1
   */
  type?: WebitelContactsLookup
  /**
   *
   * @type {boolean}
   * @memberof NEWUpdateOfThePhoneNumberDetails1
   */
  verified?: boolean
}
