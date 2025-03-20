import { LuTextCursorInput } from "react-icons/lu";
import { useNavigate } from "react-router";
import { PinInput } from "./components/PinInput";
import { Spinner } from "@modules/shared/components/Spinner";
import { useLoading } from "@modules/shared/hooks/useLoading";

const Page = () => {
  const navigate = useNavigate();
  const { isLoading, toggleLoading } = useLoading();

  const onComplete = () => {
    toggleLoading();
    setTimeout(() => {
      navigate(
        "/auth/forgotpassword/1a165ecc-01da-437a-9124-4d23adc396eb/passwordrecovery",
      );
    }, 4000);
  };

  return (
    <main className="p-8 min-h-screen flex items-center justify-center bg-gray-200">
      <div className="relative text-center p-4 w-full max-w-lg h-auto flex-col bg-white rounded-lg shadow-lg overflow-hidden">
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
        <PinInput length={6} onComplete={onComplete} />
        {isLoading && (
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-200"
          >
            <Spinner />
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
