import { describe, it, expect, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import Topbar from "./Topbar";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: query.includes("dark") ? false : true,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
});


describe("Topbar", () => {
  it("renders the system name", () => {
    render(<Topbar />);
    expect(screen.getByText("Planning Worship")).toBeInTheDocument();
  });

  it("renders the theme toggle button", () => {
    render(<Topbar />);
    const button = screen.getByRole("button", { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
  });
});
