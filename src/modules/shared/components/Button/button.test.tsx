import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./";

describe("Button Component", () => {
  it("renders the button with the correct label", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Button label="Click me" onClick={onClick} />);

    fireEvent.click(screen.getByText("Click me"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
