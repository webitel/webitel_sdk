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

import { WebitelContactsCommentList } from './webitel-contacts-comment-list'
import { WebitelContactsContactGroupList } from './webitel-contacts-contact-group-list'
import { WebitelContactsEmailList } from './webitel-contacts-email-list'
import { WebitelContactsIMClientList } from './webitel-contacts-imclient-list'
import { WebitelContactsLabelList } from './webitel-contacts-label-list'
import { WebitelContactsLanguageList } from './webitel-contacts-language-list'
import { WebitelContactsLookup } from './webitel-contacts-lookup'
import { WebitelContactsManagerList } from './webitel-contacts-manager-list'
import { WebitelContactsName } from './webitel-contacts-name'
import { WebitelContactsPhoneList } from './webitel-contacts-phone-list'
import { WebitelContactsPhotoList } from './webitel-contacts-photo-list'
import { WebitelContactsTimezoneList } from './webitel-contacts-timezone-list'
import { WebitelContactsVariableList } from './webitel-contacts-variable-list'

/**
 * The Contact principal source. OUTPUT purpose only.
 * @export
 * @interface WebitelContactsContact
 */
export interface WebitelContactsContact {
  /**
   * BIO. Short description about the Contact person. OPTIONAL. Multi-lined text.
   * @type {string}
   * @memberof WebitelContactsContact
   */
  about?: string
  /**
   *
   * @type {WebitelContactsCommentList}
   * @memberof WebitelContactsContact
   */
  comments?: WebitelContactsCommentList
  /**
   *
   * @type {string}
   * @memberof WebitelContactsContact
   */
  created_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsContact
   */
  created_by?: WebitelContactsLookup
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsContact
   */
  domain?: WebitelContactsLookup
  /**
   *
   * @type {WebitelContactsEmailList}
   * @memberof WebitelContactsContact
   */
  emails?: WebitelContactsEmailList
  /**
   * Unique ID of the latest version of the update. This ID changes after any update to the underlying value(s).
   * @type {string}
   * @memberof WebitelContactsContact
   */
  etag?: string
  /**
   *
   * @type {WebitelContactsContactGroupList}
   * @memberof WebitelContactsContact
   */
  groups?: WebitelContactsContactGroupList
  /**
   * The unique ID of the association. Never changes.
   * @type {string}
   * @memberof WebitelContactsContact
   */
  id?: string
  /**
   *
   * @type {WebitelContactsIMClientList}
   * @memberof WebitelContactsContact
   */
  imclients?: WebitelContactsIMClientList
  /**
   *
   * @type {WebitelContactsLabelList}
   * @memberof WebitelContactsContact
   */
  labels?: WebitelContactsLabelList
  /**
   *
   * @type {WebitelContactsLanguageList}
   * @memberof WebitelContactsContact
   */
  languages?: WebitelContactsLanguageList
  /**
   *
   * @type {WebitelContactsManagerList}
   * @memberof WebitelContactsContact
   */
  managers?: WebitelContactsManagerList
  /**
   * [R]ecord[b]ased[A]ccess[C]ontrol mode granted.
   * @type {string}
   * @memberof WebitelContactsContact
   */
  mode?: string
  /**
   *
   * @type {WebitelContactsName}
   * @memberof WebitelContactsContact
   */
  name?: WebitelContactsName
  /**
   *
   * @type {WebitelContactsPhoneList}
   * @memberof WebitelContactsContact
   */
  phones?: WebitelContactsPhoneList
  /**
   *
   * @type {WebitelContactsPhotoList}
   * @memberof WebitelContactsContact
   */
  photos?: WebitelContactsPhotoList
  /**
   *
   * @type {WebitelContactsTimezoneList}
   * @memberof WebitelContactsContact
   */
  timezones?: WebitelContactsTimezoneList
  /**
   *
   * @type {string}
   * @memberof WebitelContactsContact
   */
  updated_at?: string
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsContact
   */
  updated_by?: WebitelContactsLookup
  /**
   *
   * @type {WebitelContactsLookup}
   * @memberof WebitelContactsContact
   */
  user?: WebitelContactsLookup
  /**
   *
   * @type {WebitelContactsVariableList}
   * @memberof WebitelContactsContact
   */
  variables?: WebitelContactsVariableList
  /**
   * READONLY. Operational attributes Version of the latest update. Numeric sequence.
   * @type {number}
   * @memberof WebitelContactsContact
   */
  ver?: number
}
