// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 23.07.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebitelContactsInputComment } from './webitel-contacts-input-comment'
import { WebitelContactsInputEmailAddress } from './webitel-contacts-input-email-address'
import { WebitelContactsInputIMClient } from './webitel-contacts-input-imclient'
import { WebitelContactsInputLabel } from './webitel-contacts-input-label'
import { WebitelContactsInputLanguage } from './webitel-contacts-input-language'
import { WebitelContactsInputManager } from './webitel-contacts-input-manager'
import { WebitelContactsInputName } from './webitel-contacts-input-name'
import { WebitelContactsInputPhoneNumber } from './webitel-contacts-input-phone-number'
import { WebitelContactsInputPhoto } from './webitel-contacts-input-photo'
import { WebitelContactsInputTimezone } from './webitel-contacts-input-timezone'
import { WebitelContactsInputVariable } from './webitel-contacts-input-variable'

/**
 *
 * @export
 * @interface NEWContactSourceChanges
 */
export interface NEWContactSourceChanges {
  /**
   * BIO. Short description about the Contact person. OPTIONAL. Multi-lined text.
   * @type {string}
   * @memberof NEWContactSourceChanges
   */
  about?: string
  /**
   * Publish NEW comment(s) for this Contact.
   * @type {Array<WebitelContactsInputComment>}
   * @memberof NEWContactSourceChanges
   */
  comments?: Array<WebitelContactsInputComment>
  /**
   * The Contact\'s email address(es).
   * @type {Array<WebitelContactsInputEmailAddress>}
   * @memberof NEWContactSourceChanges
   */
  emails?: Array<WebitelContactsInputEmailAddress>
  /**
   * The contact\'s [I]nstant[M]essaging clients.
   * @type {Array<WebitelContactsInputIMClient>}
   * @memberof NEWContactSourceChanges
   */
  imclients?: Array<WebitelContactsInputIMClient>
  /**
   * The Contact\'s associated label(s).
   * @type {Array<WebitelContactsInputLabel>}
   * @memberof NEWContactSourceChanges
   */
  labels?: Array<WebitelContactsInputLabel>
  /**
   * A Contact\'s locale preference(s).
   * @type {Array<WebitelContactsInputLanguage>}
   * @memberof NEWContactSourceChanges
   */
  languages?: Array<WebitelContactsInputLanguage>
  /**
   * The Contact\'s internal manager(s).
   * @type {Array<WebitelContactsInputManager>}
   * @memberof NEWContactSourceChanges
   */
  managers?: Array<WebitelContactsInputManager>
  /**
   *
   * @type {WebitelContactsInputName}
   * @memberof NEWContactSourceChanges
   */
  name?: WebitelContactsInputName
  /**
   * The Contact\'s phone numbers.
   * @type {Array<WebitelContactsInputPhoneNumber>}
   * @memberof NEWContactSourceChanges
   */
  phones?: Array<WebitelContactsInputPhoneNumber>
  /**
   * Output only. The Contact\'s photo(s).
   * @type {Array<WebitelContactsInputPhoto>}
   * @memberof NEWContactSourceChanges
   */
  photos?: Array<WebitelContactsInputPhoto>
  /**
   * The Contact\'s timezone preference(s).
   * @type {Array<WebitelContactsInputTimezone>}
   * @memberof NEWContactSourceChanges
   */
  timezones?: Array<WebitelContactsInputTimezone>
  /**
   * Arbitrary client data that is populated by clients.
   * @type {Array<WebitelContactsInputVariable>}
   * @memberof NEWContactSourceChanges
   */
  variables?: Array<WebitelContactsInputVariable>
}