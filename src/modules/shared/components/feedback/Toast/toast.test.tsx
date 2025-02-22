import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Toast } from "../Toast";

describe("Toast Component", () => {
  it("renders the toast with a message", () => {
    render(<Toast message="Test message" />);
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  it("disappears after the specified duration", async () => {
    render(<Toast message="Auto-close toast" duration={1000} />);

    // Verifica que esté presente
    expect(screen.getByText("Auto-close toast")).toBeInTheDocument();

    // Espera a que desaparezca
    await waitFor(
      () => {
        expect(screen.queryByText("Auto-close toast")).not.toBeInTheDocument();
      },
      { timeout: 1500 },
    ); // Le damos margen para evitar falsos negativos
  });

  it("can be closed manually by clicking the close button", () => {
    render(<Toast message="Closable toast" closable={true} />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(screen.queryByText("Closable toast")).not.toBeInTheDocument();
  });
});
