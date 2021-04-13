export default interface BaseCreatorConstructorParams {
  fieldsToSend?: string[]
  preRequestHandler?(createdItem: object): object
}
