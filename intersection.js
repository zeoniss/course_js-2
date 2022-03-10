export const intersection = (Object1, Object2) => {
  const firstObjectKeys = Object.keys(Object1)

  return firstObjectKeys.reduce((accumulator = {}, key) => {
    if (Object1[key] === Object2[key]) {
      accumulator = {
        ...accumulator,
        [key]: Object1[key],
      }
    }

    return accumulator
  }, {})
}
