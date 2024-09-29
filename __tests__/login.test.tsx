import { render, screen } from "@testing-library/react";
import LoginPage from "@/app/auth/login/page";

const setup = () => render(<LoginPage />);

describe("Login page test", () => {
  it("Should Render Login Page", () => {
    setup();
  });

  it("Should include include 'Login'", () => {
    setup();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
