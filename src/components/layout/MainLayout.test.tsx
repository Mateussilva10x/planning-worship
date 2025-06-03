import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import MainLayout from "./MainLayout";
import { MemoryRouter } from "react-router-dom";

vi.mock("./Sidebar", () => ({
  default: () => <aside data-testid="sidebar" />,
}));

vi.mock("./Topbar", () => ({
  default: () => <header data-testid="topbar" />,
}));

describe("MainLayout", () => {
  it("renders the sidebar, topbar, and children", () => {
    render(
      <MemoryRouter>
        <MainLayout>
          <p>Test content</p>
        </MainLayout>
      </MemoryRouter>
    );

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("topbar")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });
});
