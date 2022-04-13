export class DeviceNotFoundError extends Error {
  static id = `device_not_found`
  constructor(msg: string) {
    super(msg)
  }

  get id() {
    return DeviceNotFoundError.id
  }
}
