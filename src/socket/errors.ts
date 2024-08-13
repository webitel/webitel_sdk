/**
 * Перелік можливих типів помилок.
 */
export enum TypeErrors {
  RolePermission = 'api.context.permissions.app_error',
  LicencePermission = 'api.context.permissions.license',
  PauseNotAllow = 'app.agent.set_pause.not_allow',
}

/**
 * Базовий інтерфейс для всіх помилок.
 */
export interface BaseError {
  /**
   * Код помилки.
   * @type {number}
   */
  code: number

  /**
   * Деталі помилки.
   * @type {string}
   */
  detail: string

  /**
   * Ідентифікатор помилки.
   * @type {string}
   */
  id: string

  /**
   * Статус помилки.
   * @type {string}
   */
  status: string
}

/**
 * Помилка, яка виникає, коли пристрій не знайдено.
 * @extends Error
 */
// tslint:max-classes-per-file
export class DeviceNotFoundError extends Error {
  /**
   * Статичний ідентифікатор для типу помилки.
   * @type {string}
   */
  static id = `device_not_found`

  /**
   * Ідентифікатор конкретного екземпляра помилки.
   * @type {string}
   */
  id: string

  /**
   * Конструктор для створення нового екземпляра DeviceNotFoundError.
   *
   * @param {string} msg - Повідомлення про помилку.
   */
  constructor(msg: string) {
    super(msg)
    this.id = DeviceNotFoundError.id
  }
}

/**
 * Користувацький клас помилки, що представляє помилку дозволу "Пристрій не дозволено".
 * Ця помилка викликається, коли пристрій не має необхідних дозволів.
 *
 * @extends Error
 */
// tslint:disable-next-line: max-classes-per-file
export class DeviceNotAllowPermissionError extends Error {
  /**
   * Статичний ідентифікатор для типу помилки.
   * @type {string}
   */
  static id = `device_not_allow`

  /**
   * Ідентифікатор для конкретного екземпляра помилки.
   * @type {string}
   */
  id: string

  /**
   * Конструктор для створення нового екземпляра DeviceNotAllowPermissionError.
   *
   * @param {string} msg - Повідомлення про помилку.
   */
  constructor(msg: string) {
    super(msg)
    this.id = DeviceNotAllowPermissionError.id
  }
}

/**
 * Користувацький клас помилки, що представляє помилку дозволу "Роль не дозволена".
 * Ця помилка викликається, коли роль не має необхідних дозволів.
 *
 * @extends Error
 */
// tslint:disable-next-line: max-classes-per-file
export class RolePermissionError extends Error {
  /**
   * Статичний ідентифікатор для типу помилки.
   * @type {string}
   */
  static id = TypeErrors.RolePermission

  /**
   * Ідентифікатор для конкретного екземпляра помилки.
   * @type {string}
   */
  id: string

  /**
   * Конструктор для створення нового екземпляра RolePermissionError.
   *
   * @param {string} msg - Повідомлення про помилку.
   */
  constructor(msg: string) {
    super(msg)
    this.id = RolePermissionError.id
  }
}

/**
 * Користувацький клас помилки, що представляє помилку дозволу "Ліцензія не дозволена".
 * Ця помилка викликається, коли ліцензія не має необхідних дозволів.
 *
 * @extends Error
 */
// tslint:disable-next-line: max-classes-per-file
export class LicencePermissionError extends Error {
  /**
   * Статичний ідентифікатор для типу помилки.
   * @type {string}
   */
  static id = TypeErrors.LicencePermission

  /**
   * Ідентифікатор для конкретного екземпляра помилки.
   * @type {string}
   */
  id: string

  /**
   * Конструктор для створення нового екземпляра LicencePermissionError.
   *
   * @param {string} msg - Повідомлення про помилку.
   */
  constructor(msg: string) {
    super(msg)
    this.id = LicencePermissionError.id
  }
}

/**
 * Користувацький клас помилки, що представляє помилку "Пауза не дозволена".
 * Ця помилка викликається, коли встановлення паузи не дозволено.
 *
 * @extends Error
 */
// tslint:disable-next-line: max-classes-per-file
export class PauseNotAllowedError extends Error {
  /**
   * Статичний ідентифікатор для типу помилки.
   * @type {string}
   */
  static id = TypeErrors.PauseNotAllow

  /**
   * Ідентифікатор для конкретного екземпляра помилки.
   * @type {string}
   */
  id: string

  /**
   * Конструктор для створення нового екземпляра PauseNotAllowedError.
   *
   * @param {string} msg - Повідомлення про помилку.
   */
  constructor(msg: string) {
    super(msg)
    this.id = PauseNotAllowedError.id
  }
}
