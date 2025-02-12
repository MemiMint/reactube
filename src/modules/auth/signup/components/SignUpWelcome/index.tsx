import { FC } from "react";
import { AltLogo } from "../../../../shared/components/logo";

export const SignUpWelcome: FC = () => {
  return (
    <div className="hidden md:block md:w-2/5 bg-red-500 rounded-tl-lg rounded-bl-lg px-4">
      <AltLogo />
      <div className="mt-6">
        <h2 className="text-balance leading-relaxed font-primary text-4xl font-semibold text-white max-w-lg mx-auto">
          Welcome to Reactube!
        </h2>
        <p className="text-white font-secondary font-medium mt-4 max-w-md mx-auto leading-relaxed whitespace-pre-line mb-6">
          Join us and explore a world of amazing videos. Create an account to
          start your journey.
        </p>
      </div>
    </div>
  );
};
