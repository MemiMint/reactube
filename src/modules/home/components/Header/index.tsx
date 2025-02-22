import { NavLink } from "react-router";
import { Logo } from "../../../shared/components/Logo";
import { useScrollDetection } from "../../../shared/hooks/useScrollDetection";

export const Header = () => {
  const didUserScrollDown = useScrollDetection();

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-2 bg-white z-50 transition-shadow ${
        didUserScrollDown ? "shadow-md" : ""
      }`}
    >
      <Logo />
      <NavLink to="/auth/signin">
        <button className="cursor-pointer py-2 px-6 rounded-sm text-white outline-none bg-blue-500 font-secondary font-medium hover:bg-blue-600">
          Sign In
        </button>
      </NavLink>
    </header>
  );
};
