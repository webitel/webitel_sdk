// sanitizer removes unused fields from data
const sanitizer = (item: object, fieldsToSend: string[]) =>
  Object.keys(item).reduce((sanitizedItem, key) => {
    if (fieldsToSend.indexOf(key) === -1) return sanitizedItem

    return {
      ...sanitizedItem,
      // @ts-ignore
      [key]: item[key],
    }
  }, {})

export default sanitizer
