import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import NotFound from "./";

describe("NotFound Component", () => {
  it("should render the 404 heading", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );

    // Check for the heading
    const heading = screen.getByRole("heading", {
      name: /404 - page not found/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("should display the description message", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );

    // Check for the descriptive text
    const description = screen.getByText(
      /sorry, the page you're looking for doesn't exist/i,
    );
    expect(description).toBeInTheDocument();
  });

  it("should have a link to go back to home", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );

    // Check for the link element
    const homeLink = screen.getByRole("link", { name: /go back to home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
