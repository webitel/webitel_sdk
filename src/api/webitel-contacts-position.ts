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

/**
 * Position details for conditions in the group.
 * @export
 * @interface WebitelContactsPosition
 */
export interface WebitelContactsPosition {
  /**
   * The current position of the condition in the list.
   * @type {string}
   * @memberof WebitelContactsPosition
   */
  current_position?: string
  /**
   * The target position where the condition should be moved.
   * @type {string}
   * @memberof WebitelContactsPosition
   */
  target_position?: string
}