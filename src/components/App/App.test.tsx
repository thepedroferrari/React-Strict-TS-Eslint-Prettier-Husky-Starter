import { render, screen } from "@testing-library/react"
import { App } from "./App"

test("Renders the date text", () => {
  render(<App />)
  const linkElement = screen.getByText(/Today is/i)
  expect(linkElement).toBeInTheDocument()
})
