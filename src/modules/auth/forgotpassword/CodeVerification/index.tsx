import { LuTextCursorInput } from "react-icons/lu";
import { PinInput } from "./components/PinInput";

const Page = () => {
  return (
    <main className="p-8 min-h-screen flex items-center justify-center bg-gray-200">
      <div className="text-center p-4 w-full max-w-lg h-auto flex-col bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-center">
          <LuTextCursorInput
            className="p-2 bg-red-600 text-white rounded-md"
            size={50}
          />
        </div>
        <h1 className="font-primary text-lg mt-2">Enter the code</h1>
        <p className="font-secondary text-sm text-gray-400 mt-2">
          Enter the 6-digit verification code sent to your email/phone to
          proceed. Make sure to check your spam folder if you don’t see it. This
          code expires in 10 minutes.
        </p>
        <PinInput length={6} />
      </div>
    </main>
  );
};

export default Page;
