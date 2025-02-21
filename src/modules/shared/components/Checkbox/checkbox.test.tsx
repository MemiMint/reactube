import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "./";

describe("Checkbox Component", () => {
  it("renders with label", () => {
    render(<Checkbox label="Accept Terms" name="terms" />);
    expect(screen.getByLabelText("Accept Terms")).toBeInTheDocument();
  });

  it("calls onCheck when clicked", () => {
    const onCheckMock = vi.fn();
    render(
      <Checkbox label="Accept Terms" name="terms" onCheck={onCheckMock} />,
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(onCheckMock).toHaveBeenCalledTimes(1);
  });

  it("should be checked when value is true", () => {
    render(<Checkbox label="Accept Terms" name="terms" value={true} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("should not be checked when value is false", () => {
    render(<Checkbox label="Accept Terms" name="terms" value={false} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("associates label with input", () => {
    render(<Checkbox label="Accept Terms" name="terms" />);
    const label = screen.getByText("Accept Terms");
    const checkbox = screen.getByRole("checkbox");
    expect(label).toHaveAttribute("for", "terms");
    expect(checkbox).toHaveAttribute("name", "terms");
  });
});
