import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { PersonalInfo } from "./";

describe("PersonalInfo Component", () => {
  it("renders input fields with initial state values", () => {
    const mockState = {
      firstname: "John",
      lastname: "Doe",
      username: "johndoe",
      password: "password123",
    };

    render(<PersonalInfo state={mockState} updateState={vi.fn()} />);

    expect(screen.getByLabelText(/Firstname/i)).toHaveValue("John");
    expect(screen.getByLabelText(/Lastname/i)).toHaveValue("Doe");
    expect(screen.getByLabelText(/Username/i)).toHaveValue("johndoe");
    expect(screen.getByLabelText(/Password/i)).toHaveValue("password123");
  });
});
