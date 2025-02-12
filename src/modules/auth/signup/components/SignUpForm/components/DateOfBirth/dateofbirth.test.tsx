import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { DateOfBirth } from "./";

describe("DateOfBirth Component", () => {
  it("renders all dropdowns with initial state values", () => {
    const mockState = { day: "1", month: "January", year: "2000" };

    render(<DateOfBirth state={mockState} updateState={vi.fn()} />);

    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
    expect(screen.getByDisplayValue("January")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2000")).toBeInTheDocument();
  });

  it("calls updateState when day, month, or year changes", async () => {
    const mockUpdateState = vi.fn();
    const mockState = { day: "", month: "", year: "" };

    render(<DateOfBirth state={mockState} updateState={mockUpdateState} />);

    const dropdowns = screen.getAllByRole("combobox"); // Get all dropdowns
    const [dayDropdown, monthDropdown, yearDropdown] = dropdowns; // Destructure them

    await userEvent.selectOptions(dayDropdown, "10");
    expect(mockUpdateState).toHaveBeenCalledWith({ day: "10" });

    await userEvent.selectOptions(monthDropdown, "March");
    expect(mockUpdateState).toHaveBeenCalledWith({ month: "March" });

    await userEvent.selectOptions(yearDropdown, "1995");
    expect(mockUpdateState).toHaveBeenCalledWith({ year: "1995" });
  });
});
