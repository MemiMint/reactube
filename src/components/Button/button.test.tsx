import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Button from "./index";

test("renders the button with the correct label", () => {
  render(<Button label="Click Me" onClick={() => {}} />);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const handleClick = vi.fn();

  render(<Button label="Click Me" onClick={handleClick} />);

  fireEvent.click(screen.getByText("Click Me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
