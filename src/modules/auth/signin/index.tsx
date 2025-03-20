import { FC } from "react";
import { Logo } from "../../shared/components/Logo";
import { TextInput } from "../../shared/components/TextInput";
import { Button } from "../../shared/components/buttons/Button";
import { useStateHandler } from "../../shared/hooks/useStateHandler";
import { Checkbox } from "../../shared/components/Checkbox";
import { useLoading } from "../../shared/hooks/useLoading";
import { NavLink } from "react-router";
import { useEnterKeyPress } from "../../shared/hooks/useEnterKeyPress";

type LoginState = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Page: FC = () => {
  const { state, updateState } = useStateHandler<LoginState>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const mockHandleSubmit = () => {
    alert("Account logged in");
  };

  useEnterKeyPress(mockHandleSubmit, true);

  const { isLoading } = useLoading();

  return (
    <main className="p-8 min-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-4 w-full max-w-lg h-auto flex-col bg-white rounded-lg shadow-lg overflow-hidden">
        <Logo />
        <div className="mt-2">
          <h3 className="font-primary text-2xl">Get Started Now</h3>
          <p className="font-secondary text-sm text-gray-500">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <TextInput
            onChange={(e) => updateState({ email: e.target.value })}
            value={state.email}
            type="email"
            name="email"
            label="Email"
            size="full"
            placeholder="Email"
          />
          <TextInput
            onChange={(e) => updateState({ password: e.target.value })}
            type="password"
            name="password"
            value={state.password}
            label="Password"
            size="full"
            placeholder="Password"
          />
        </div>
        <div className="mt-4 flex items-center justify-between mb-6">
          <Checkbox
            label="Remember me"
            value={state.rememberMe}
            onCheck={() => updateState({ rememberMe: !state.rememberMe })}
          />
          <NavLink to="/auth/forgotpassword">
            <p className="font-primary text-sm text-blue-900">
              Forgot Password?
            </p>
          </NavLink>
        </div>
        <div className="mt-4">
          <Button
            onClick={mockHandleSubmit}
            isLoading={isLoading}
            label="Sign in"
          />
          <div>
            <p className="font-secondary text-sm text-gray-500 mt-4">
              Don't have an account?{" "}
              <NavLink to="/auth/signup">
                <span className="text-blue-900 font-semibold">
                  Create an account
                </span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
