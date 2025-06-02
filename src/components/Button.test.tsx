import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";
import { describe, expect, it, vi } from "vitest";

describe("Button", () => {
  it("renders the label", () => {
    render(<Button label="Clique aqui" />);
    expect(screen.getByText("Clique aqui")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button label="Enviar" onClick={handleClick} />);
    await userEvent.click(screen.getByText("Enviar"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
