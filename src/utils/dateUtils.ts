export const getEndOfDayTime = (date:Date) => {
  date.setHours(23,59,59)
  return date
}

export const getBeginningOfDay = (date:Date) => {
  date.setHours(0,0,0)
  return date
}
