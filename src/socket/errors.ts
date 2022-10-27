export enum TypeErrors {
  RolePermission = 'api.context.permissions.app_error',
  LicencePermission = 'api.context.permissions.license',
}

export interface BaseError {
  code: number
  detail: string
  id: string
  status: string
}

export class DeviceNotFoundError extends Error {
  static id = `device_not_found`
  id: string
  constructor(msg: string) {
    super(msg)
    this.id = DeviceNotFoundError.id
  }
}

// tslint:disable-next-line: max-classes-per-file
export class DeviceNotAllowPermissionError extends Error {
  static id = `device_not_allow`
  id: string
  constructor(msg: string) {
    super(msg)
    this.id = DeviceNotAllowPermissionError.id
  }
}

// tslint:disable-next-line: max-classes-per-file
export class RolePermissionError extends Error {
  static id = TypeErrors.RolePermission
  id: string
  constructor(msg: string) {
    super(msg)
    this.id = RolePermissionError.id
  }
}

// tslint:disable-next-line: max-classes-per-file
export class LicencePermissionError extends Error {
  static id = TypeErrors.LicencePermission
  id: string
  constructor(msg: string) {
    super(msg)
    this.id = LicencePermissionError.id
  }
}
