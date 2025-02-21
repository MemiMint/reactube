import { FC } from "react";
import { Logo } from "../../shared/components/Logo";
import { TextInput } from "../../shared/components/TextInput";
import { Button } from "../../shared/components/Button";
import { useStateHandler } from "../../shared/hooks/useStateHandler";
import { Checkbox } from "../../shared/components/Checkbox";
import { useLoading } from "../../shared/hooks/useLoading";

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
          <p className="font-primary text-sm text-blue-900">Forgot Password?</p>
        </div>
        <div className="mt-4">
          <Button isLoading={isLoading} label="Sign in" />
          <div>
            <p className="font-secondary text-sm text-gray-500 mt-4">
              Don't have an account?{" "}
              <span className="text-blue-900 font-semibold">
                Create an account
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
