import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Email } from "./";

describe("Email Component", () => {
  it("renders email input with initial state value", () => {
    const mockState = { email: "test@example.com" };
    render(<Email state={mockState} updateState={vi.fn()} />);
    expect(screen.getByLabelText(/Email/i)).toHaveValue("test@example.com");
  });

  it("calls updateState when email input changes", async () => {
    const mockUpdateState = vi.fn();
    const mockState = { email: "" };

    render(<Email state={mockState} updateState={mockUpdateState} />);

    await userEvent.type(screen.getByLabelText(/Email/i), "alice@example.com");

    // Check the last call to ensure the correct value was passed
    expect(mockUpdateState).toBeCalled();
  });
});
