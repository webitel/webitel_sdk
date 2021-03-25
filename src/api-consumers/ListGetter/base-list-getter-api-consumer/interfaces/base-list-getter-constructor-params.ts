import ListGetterResponse from '../../_shared/interfaces/response/list-getter-response'

export default interface BaseListGetterConstructorParams {
  defaultListObject?: object
  listResponseHandler?: (response: ListGetterResponse) => ListGetterResponse
}
