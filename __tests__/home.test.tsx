import { render, screen } from "@testing-library/react";
import HomePage from "@/app/home/page";

const setup = () => render(<HomePage />);

describe("Home page test", () => {
  it("Should Render Home Page", () => {
    setup();
  });

  it("Should include include 'Entertainment at your fingertips'", () => {
    setup();
    expect(screen.getByText(/Entertainment at your fingertips/i)).toBeInTheDocument();
  });
});
