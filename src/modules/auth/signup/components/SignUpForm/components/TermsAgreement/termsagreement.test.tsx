import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { TermsAgreement } from "./";

describe("TermsAgreement Component", () => {
  it("renders the checkbox with the correct initial state", () => {
    render(
      <TermsAgreement state={{ didAgree: false }} updateState={() => {}} />,
    );

    const checkbox = screen.getByRole("checkbox", {
      name: /i agree with the terms and conditions/i,
    });

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("calls updateState when the checkbox is clicked", () => {
    const updateState = vi.fn();
    render(
      <TermsAgreement state={{ didAgree: false }} updateState={updateState} />,
    );

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(updateState).toBeCalled();
  });
});
