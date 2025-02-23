import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TextButton } from "../TextButton";
import { Sizes } from "../../../types/size";
import { getSize } from "../../../utils/get-size";

// Mock icons for testing
const MockIcon = () => <span data-testid="mock-icon">Icon</span>;

describe("TextButton Component", () => {
  it("should render with the correct label", () => {
    render(<TextButton label="Click Me" onClick={() => {}} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<TextButton label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled prop is true", () => {
    render(<TextButton label="Disabled" onClick={() => {}} disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("should apply correct size class", () => {
    const size: keyof Sizes = "large";
    render(<TextButton label="Large Button" onClick={() => {}} size={size} />);
    const button = screen.getByRole("button");
    expect(button.className).toContain(
      getSize(
        {
          small: "text-xs px-3 py-1.5",
          medium: "text-sm px-5 py-2.5",
          large: "text-base px-7 py-3",
          full: "w-full",
        },
        size,
      ),
    );
  });

  it("should render startIcon and endIcon correctly", () => {
    render(
      <TextButton
        label="Icon Button"
        onClick={() => {}}
        startIcon={<MockIcon />}
        endIcon={<MockIcon />}
      />,
    );
    expect(screen.getAllByTestId("mock-icon").length).toBe(2);
  });
});
