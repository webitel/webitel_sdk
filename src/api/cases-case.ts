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

import { CasesCaseCommentList } from './cases-case-comment-list'
import { CasesCaseFileList } from './cases-case-file-list'
import { CasesCaseLinkList } from './cases-case-link-list'
import { CasesPriority } from './cases-priority'
import { CasesRelatedCaseList } from './cases-related-case-list'
import { CasesSourceTypeLookup } from './cases-source-type-lookup'
import { CasesStatusCondition } from './cases-status-condition'
import { GeneralExtendedLookup } from './general-extended-lookup'
import { GeneralLookup } from './general-lookup'

/**
 * Message representing a case.
 * @export
 * @interface CasesCase
 */
export interface CasesCase {
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCase
   */
  assignee?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCase
   */
  author?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCase
   */
  close_reason?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCase
   */
  close_reason_group?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof CasesCase
   */
  close_result?: string
  /**
   *
   * @type {CasesCaseCommentList}
   * @memberof CasesCase
   */
  comments?: CasesCaseCommentList
  /**
   * Contact information for the case.
   * @type {string}
   * @memberof CasesCase
   */
  contact_info?: string
  /**
   * Creation timestamp (in milliseconds since Unix epoch).
   * @type {string}
   * @memberof CasesCase
   */
  created_at?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCase
   */
  created_by?: GeneralLookup
  /**
   * Custom data extension fields ..
   * @type {object}
   * @memberof CasesCase
   */
  custom?: object
  /**
   * Detailed description of the case.
   * @type {string}
   * @memberof CasesCase
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof CasesCase
   */
  difference_in_reaction?: string
  /**
   *
   * @type {string}
   * @memberof CasesCase
   */
  difference_in_resolve?: string
  /**
   * Unique etag identifier.
   * @type {string}
   * @memberof CasesCase
   */
  etag?: string
  /**
   *
   * @type {CasesCaseFileList}
   * @memberof CasesCase
   */
  files?: CasesCaseFileList
  /**
   *
   * @type {GeneralExtendedLookup}
   * @memberof CasesCase
   */
  group?: GeneralExtendedLookup
  /**
   * Unique case ID.
   * @type {string}
   * @memberof CasesCase
   */
  id?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCase
   */
  impacted?: GeneralLookup
  /**
   *
   * @type {CasesCaseLinkList}
   * @memberof CasesCase
   */
  links?: CasesCaseLinkList
  /**
   * Name of the case (may serve as an ID in docs).
   * @type {string}
   * @memberof CasesCase
   */
  name?: string
  /**
   * Planned reaction time (in milliseconds).
   * @type {string}
   * @memberof CasesCase
   */
  planned_reaction_at?: string
  /**
   * Planned resolution time (in milliseconds).
   * @type {string}
   * @memberof CasesCase
   */
  planned_resolve_at?: string
  /**
   *
   * @type {CasesPriority}
   * @memberof CasesCase
   */
  priority?: CasesPriority
  /**
   *
   * @type {string}
   * @memberof CasesCase
   */
  rating?: string
  /**
   *
   * @type {string}
   * @memberof CasesCase
   */
  rating_comment?: string
  /**
   *
   * @type {string}
   * @memberof CasesCase
   */
  reacted_at?: string
  /**
   *
   * @type {CasesRelatedCaseList}
   * @memberof CasesCase
   */
  related?: CasesRelatedCaseList
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCase
   */
  reporter?: GeneralLookup
  /**
   *
   * @type {string}
   * @memberof CasesCase
   */
  resolved_at?: string
  /**
   *
   * @type {Array<string>}
   * @memberof CasesCase
   */
  role_ids?: Array<string>
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCase
   */
  service?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCase
   */
  sla?: GeneralLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCase
   */
  sla_condition?: GeneralLookup
  /**
   *
   * @type {CasesSourceTypeLookup}
   * @memberof CasesCase
   */
  source?: CasesSourceTypeLookup
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCase
   */
  status?: GeneralLookup
  /**
   *
   * @type {CasesStatusCondition}
   * @memberof CasesCase
   */
  status_condition?: CasesStatusCondition
  /**
   * Subject of the case.
   * @type {string}
   * @memberof CasesCase
   */
  subject?: string
  /**
   * Last update timestamp (in milliseconds since Unix epoch).
   * @type {string}
   * @memberof CasesCase
   */
  updated_at?: string
  /**
   *
   * @type {GeneralLookup}
   * @memberof CasesCase
   */
  updated_by?: GeneralLookup
  /**
   * Version number of the case.
   * @type {number}
   * @memberof CasesCase
   */
  ver?: number
}
