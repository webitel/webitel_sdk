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
 *
 * @export
 * @interface NEWUpdateOfTheArticleLink1
 */
export interface NEWUpdateOfTheArticleLink1 {
  /**
   * [VALUE]: -------------------------------------- Space ID associated with.
   * @type {string}
   * @memberof NEWUpdateOfTheArticleLink1
   */
  space_id?: string
  /**
   * Indicates the state of the article.
   * @type {boolean}
   * @memberof NEWUpdateOfTheArticleLink1
   */
  state?: boolean
  /**
   * Tags associated with the article.
   * @type {Array<string>}
   * @memberof NEWUpdateOfTheArticleLink1
   */
  tags?: Array<string>
  /**
   * The text content of the article.
   * @type {string}
   * @memberof NEWUpdateOfTheArticleLink1
   */
  text?: string
}
