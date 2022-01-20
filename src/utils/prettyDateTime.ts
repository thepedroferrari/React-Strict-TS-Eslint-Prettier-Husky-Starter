type DateFormatPreSettings =
  | "dayMonth"
  | "hourMinute"
  | "hourMinuteSecond"
  | "shortDate"
type DateFormat = Record<DateFormatPreSettings, Intl.DateTimeFormatOptions>

export const dateFormat: DateFormat = {
  dayMonth: {
    day: "numeric",
    month: "short",
  },
  hourMinute: {
    hour: "2-digit",
    minute: "2-digit",
  },
  hourMinuteSecond: {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  },
  shortDate: {
    day: "numeric",
    weekday: "short",
    month: "short",
    year: "numeric",
  },
}

export const prettyTime = (date: Date, options: Intl.DateTimeFormatOptions) =>
  date.toLocaleTimeString(navigator.language, options)

export const prettyDate = (date: Date, options: Intl.DateTimeFormatOptions) =>
  date.toLocaleDateString(navigator.language, options)
