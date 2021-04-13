import GetterResponse from '../../_shared/interfaces/response/getter-response'

export default interface BaseGetterConstructorParams {
  defaultSingleObject?: object
  itemResponseHandler?: (response: GetterResponse) => GetterResponse
}
