export default interface BasePatcherConstructorParams {
  fieldsToSend?: string[]
  preRequestHandler?(createdItem: object): object
}
