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

import { CasesCallEvent } from './cases-call-event'
import { CasesCaseTimelineEventType } from './cases-case-timeline-event-type'
import { CasesChatEvent } from './cases-chat-event'
import { CasesEmailEvent } from './cases-email-event'

/**
 *
 * @export
 * @interface CasesEvent
 */
export interface CasesEvent {
  /**
   *
   * @type {CasesCallEvent}
   * @memberof CasesEvent
   */
  call?: CasesCallEvent
  /**
   *
   * @type {CasesChatEvent}
   * @memberof CasesEvent
   */
  chat?: CasesChatEvent
  /**
   *
   * @type {string}
   * @memberof CasesEvent
   */
  created_at?: string
  /**
   *
   * @type {CasesEmailEvent}
   * @memberof CasesEvent
   */
  email?: CasesEmailEvent
  /**
   *
   * @type {CasesCaseTimelineEventType}
   * @memberof CasesEvent
   */
  type?: CasesCaseTimelineEventType
}
