import { render } from "@testing-library/react";
import SignUpPage from "@/app/auth/signup/page";

const setup = () => render(<SignUpPage />);

describe("SignUp page test", () => {
  it("Should Render Sign up Page", () => {
    setup();
  });
});
