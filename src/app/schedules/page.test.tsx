import { render, screen } from "@testing-library/react";
import SchedulePage from "./page";
import { describe, it, expect, vi } from "vitest";

// Mock da função getSchedules
vi.mock("@/lib/api", () => ({
  getSchedules: async () => [
    {
      id: "1",
      group: { name: "Domingo de Louvor" },
      date: "2025-06-10T00:00:00.000Z",
    },
    {
      id: "2",
      group: { name: "Culto de Quarta" },
      date: "2025-06-12T00:00:00.000Z",
    },
  ],
}));

describe("SchedulePage", () => {
  it("renders the title", async () => {
    render(await SchedulePage());
    expect(await screen.findByText("Schedules")).toBeInTheDocument();
  });

  it("renders all schedules", async () => {
    render(await SchedulePage());

    expect(await screen.findByText("Domingo de Louvor")).toBeInTheDocument();
    expect(await screen.findByText("Culto de Quarta")).toBeInTheDocument();
  });

  it("renders view details buttons", async () => {
    render(await SchedulePage());

    const buttons = await screen.findAllByRole("button", {
      name: /ver detalhes/i,
    });
    expect(buttons).toHaveLength(2);
  });
});
