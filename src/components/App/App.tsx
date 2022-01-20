import { ONE_SECOND_MS } from "constants/time"
import { useEffect, useState } from "react"
import { dateFormat, prettyDate, prettyTime } from "utils/prettyDateTime"

export const App = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, ONE_SECOND_MS)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      style={{
        width: "100vw",
        padding: "calc(50vh - 1.8rem) calc(50vw - 15.5rem)",
        fontSize: "3em",
        overflow: "hidden",
      }}>
      Today is {prettyDate(date, dateFormat.dayMonth)},{" "}
      {prettyTime(date, dateFormat.hourMinuteSecond)}
    </div>
  )
}
