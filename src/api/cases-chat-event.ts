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

import { GeneralExtendedLookup } from './general-extended-lookup'
import { GeneralLookup } from './general-lookup'

/**
 *
 * @export
 * @interface CasesChatEvent
 */
export interface CasesChatEvent {
  /**
   *
   * @type {string}
   * @memberof CasesChatEvent
   */
  closedAt?: string
  /**
   *
   * @type {string}
   * @memberof CasesChatEvent
   */
  duration?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesChatEvent
   */
  flowScheme?: GeneralLookup
  /**
   *
   * @type {GeneralExtendedLookup}
   * @memberof CasesChatEvent
   */
  gateway?: GeneralExtendedLookup
  /**
   *
   * @type {string}
   * @memberof CasesChatEvent
   */
  id?: string
  /**
   *
   * @type {boolean}
   * @memberof CasesChatEvent
   */
  isDetailed?: boolean
  /**
   *
   * @type {boolean}
   * @memberof CasesChatEvent
   */
  isInbound?: boolean
  /**
   *
   * @type {boolean}
   * @memberof CasesChatEvent
   */
  isMissed?: boolean
  /**
   *
   * @type {Array<GeneralLookup>}
   * @memberof CasesChatEvent
   */
  participants?: Array<GeneralLookup>
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesChatEvent
   */
  queue?: GeneralLookup
}