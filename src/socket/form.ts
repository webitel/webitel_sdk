/**
 * Інтерфейс, що представляє форму (Form).
 *
 * @interface Form
 * @property {string} id - Унікальний ідентифікатор форми.
 * @property {object[]} actions - Масив дій, пов'язаних з формою.
 * @property {object} view - Об'єкт, що представляє вигляд форми.
 */
export interface Form {
  id: string
  actions: object[]
  view: object
  fields?: Map<string, string>
}

/**
 * Інтерфейс, що представляє дію форми (FormAction).
 *
 * @interface FormAction
 * @property {string} action - Тип дії.
 * @property {Map<string, string>} [fields] - Поля, пов'язані з дією у вигляді мапи.
 */
export interface FormAction {
  action: string
  fields?: Map<string, string>
}
