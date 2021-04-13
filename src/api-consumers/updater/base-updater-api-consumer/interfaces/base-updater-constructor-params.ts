export default interface BaseUpdaterConstructorParams {
  fieldsToSend?: string[]
  preRequestHandler?(createdItem: object): object
}
