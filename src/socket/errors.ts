export class DeviceNotFoundError extends Error {
  static id = `device_not_found`
  id: string
  constructor(msg: string) {
    super(msg)
    this.id = DeviceNotFoundError.id
  }

  // get id() {
  //   return DeviceNotFoundError.id
  // }
}
