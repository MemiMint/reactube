import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeader } from "./index";

describe("SectionHeader Component", () => {
  it("renders the title correctly", () => {
    render(<SectionHeader title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders the description when provided", () => {
    render(<SectionHeader title="Test Title" description="Test Description" />);
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("does not render the description when not provided", () => {
    render(<SectionHeader title="Test Title" />);
    expect(screen.queryByText("Test Description")).not.toBeInTheDocument();
  });

  it("applies custom title class correctly", () => {
    const { container } = render(
      <SectionHeader title="Test Title" titleClass="text-red-500" />,
    );
    const titleElement = container.querySelector("h2");
    expect(titleElement).toHaveClass("text-red-500");
  });

  it("applies custom description class correctly", () => {
    const { container } = render(
      <SectionHeader
        title="Test Title"
        description="Test Description"
        descriptionClass="text-blue-500"
      />,
    );
    const descriptionElement = container.querySelector("p");
    expect(descriptionElement).toHaveClass("text-blue-500");
  });
});
