import { FC } from "react";
import { SignUpForm, SignUpWelcome } from "./components";

const Page: FC = () => {
  return (
    <main className="p-8 min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-4xl min-h-[80vh] flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section (Image/Branding) */}
        <SignUpWelcome />

        {/* Right Section (Sign-Up Form) */}
        <SignUpForm />
      </div>
    </main>
  );
};

export default Page;
