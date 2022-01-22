import { dateFormat, prettyDate, prettyTime } from "utils/prettyDateTime"

describe("Tests if prettyDate gives a valid date with correct language format", () => {
  const date = new Date(0)

  it("returns a valid date for different languages", () => {
    expect(prettyDate(date, dateFormat.dayMonth, "sv-SE")).toBe("1 jan.")
    expect(prettyDate(date, dateFormat.dayMonth, "en-GB")).toBe("1 Jan")
    expect(prettyDate(date, dateFormat.dayMonth, "en-US")).toBe("Jan 1")
    expect(prettyDate(date, dateFormat.dayMonth, "pt-BR")).toBe("1 de jan.")
    expect(prettyDate(date, dateFormat.dayMonth, "pt-PT")).toBe("1/01")
    expect(prettyDate(date, dateFormat.dayMonth, "ja-JP")).toBe("1月1日")
  })
})

describe("Tests if prettyTime gives a valid time with correct language format", () => {
  const date = new Date(1000000000)

  it("returns a valid time for different languages", () => {
    expect(prettyTime(date, dateFormat.hourMinuteSecond, "sv-SE")).toBe(
      "14:46:40",
    )
    expect(prettyTime(date, dateFormat.hourMinuteSecond, "en-GB")).toBe(
      "14:46:40",
    )
    expect(prettyTime(date, dateFormat.hourMinuteSecond, "en-US")).toBe(
      "02:46:40 PM",
    )
    expect(prettyTime(date, dateFormat.hourMinuteSecond, "pt-BR")).toBe(
      "14:46:40",
    )
    expect(prettyTime(date, dateFormat.hourMinuteSecond, "pt-PT")).toBe(
      "14:46:40",
    )
    expect(prettyTime(date, dateFormat.hourMinuteSecond, "ja-JP")).toBe(
      "14:46:40",
    )
  })
})
