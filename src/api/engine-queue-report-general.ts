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

import { EngineLookup } from './engine-lookup'
import { EngineQueueReportGeneralAgentStatus } from './engine-queue-report-general-agent-status'

/**
 *
 * @export
 * @interface EngineQueueReportGeneral
 */
export interface EngineQueueReportGeneral {
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  abandoned?: number
  /**
   *
   * @type {EngineQueueReportGeneralAgentStatus}
   * @memberof EngineQueueReportGeneral
   */
  agent_status?: EngineQueueReportGeneralAgentStatus
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  attempts?: number
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  avg_aht_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  avg_asa_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  avg_awt_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  avg_wrap_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  bridged?: number
  /**
   *
   * @type {string}
   * @memberof EngineQueueReportGeneral
   */
  count?: string
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  missed?: number
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  processed?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueueReportGeneral
   */
  queue?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  sl20?: number
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  sl30?: number
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  sum_bill_sec?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueueReportGeneral
   */
  team?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  transferred?: number
  /**
   *
   * @type {number}
   * @memberof EngineQueueReportGeneral
   */
  waiting?: number
}
