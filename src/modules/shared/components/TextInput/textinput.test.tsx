import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TextInput } from "./";

describe("TextInput Component", () => {
  it("renders with a label", () => {
    render(
      <TextInput
        label="Username"
        name="username"
        placeholder="Enter your username"
      />,
    );
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });

  it("renders with a placeholder", () => {
    render(<TextInput placeholder="Enter your email" />);
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
  });

  it("calls onChange when typing", () => {
    const onChangeMock = vi.fn();
    render(
      <TextInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        onChange={onChangeMock}
      />,
    );

    const input = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "test@example.com" }),
      }),
    );
  });

  it("renders with default text input type", () => {
    render(<TextInput name="default" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "text");
  });

  it("renders with the specified input type", () => {
    render(<TextInput name="password" type="password" label="Password" />);
    const input = screen.getByLabelText(/password/i);
    expect(input).toHaveAttribute("type", "password");
  });

  it("renders with the provided value", () => {
    render(<TextInput value="Pre-filled value" name="prefilled" />);
    const input = screen.getByDisplayValue("Pre-filled value");
    expect(input).toBeInTheDocument();
  });
});
