const LOCALE = "cs"

function namesOfWeekdays() {
  return Array.from(Array(7), (_, i) =>
    new Date(0, i).toLocaleDateString(LOCALE, { weekday: "long" })
  )
}

function namesOfMonths() {
  return Array.from(Array(12), (_, i) =>
    new Date(0, i).toLocaleDateString(LOCALE, { month: "long" })
  )
}

function localizeDateTimeField(field) {
  return new Intl.DisplayNames(LOCALE, { type: "dateTimeField" }).of(field)
}

console.log(namesOfWeekdays())

console.log(namesOfMonths())

console.log(
  ["minute", "hour", "day", "month", "year"].map(localizeDateTimeField)
)
