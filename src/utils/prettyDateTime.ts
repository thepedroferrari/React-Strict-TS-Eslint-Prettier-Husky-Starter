type DateFormatPreSettings =
  | "dayMonth"
  | "hourMinute"
  | "hourMinuteSecond"
  | "shortDate"
type DateFormat = Record<DateFormatPreSettings, Intl.DateTimeFormatOptions>

export const dateFormat: DateFormat = Object.freeze({
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
})

/**
 * @param date Date
 * @param options Intl.DateTimeFormatOptions
 * @param language Navigator["language"]
 * @fires date.toLocaleTimeString
 * @emits O(1)
 * @returns string
 */
export const prettyTime = (
  date: Date,
  options: Intl.DateTimeFormatOptions,
  language: Navigator["language"] = navigator.language,
) => date.toLocaleTimeString(language, options)

/**
 * @param date Date
 * @param options Intl.DateTimeFormatOptions
 * @param language Navigator["language"]
 * @fires date.toLocaleDateString
 * @emits O(1)
 * @returns string
 */
export const prettyDate = (
  date: Date,
  options: Intl.DateTimeFormatOptions,
  language: Navigator["language"] = navigator.language,
) => date.toLocaleDateString(language, options)
