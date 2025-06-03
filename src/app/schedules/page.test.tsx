import { render, screen } from "@testing-library/react"
import SchedulePage from "./page"
import { describe, it, expect } from "vitest"

describe("SchedulePage", () => {
  it("renders the title", () => {
    render(<SchedulePage />)
    expect(screen.getByText("Schedules")).toBeInTheDocument()
  })

  it("renders all schedules", () => {
    render(<SchedulePage />)

    expect(screen.getByText("Domingo de Louvor")).toBeInTheDocument()
    expect(screen.getByText("Culto de Quarta")).toBeInTheDocument()
  })

  it("renders view details buttons", () => {
    render(<SchedulePage />)

    const buttons = screen.getAllByRole("button", { name: /ver detalhes/i })
    expect(buttons).toHaveLength(2)
  })
})
