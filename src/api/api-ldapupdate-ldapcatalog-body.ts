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

import { LDAPCatalogChanges } from './ldapcatalog-changes'

/**
 *
 * @export
 * @interface ApiLDAPUpdateLDAPCatalogBody
 */
export interface ApiLDAPUpdateLDAPCatalogBody {
  /**
   *
   * @type {LDAPCatalogChanges}
   * @memberof ApiLDAPUpdateLDAPCatalogBody
   */
  catalog?: LDAPCatalogChanges
  /**
   *
   * @type {Array<string>}
   * @memberof ApiLDAPUpdateLDAPCatalogBody
   */
  fields?: Array<string>
}