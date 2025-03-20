import { useState } from "react";
import { PasswordResetSuccess } from "./components/PasswordResetSuccess";
import { ResetPasswordForm } from "./components/ResetPasswordForm";

const Page = () => {
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <main className="p-8 min-h-screen flex items-center justify-center bg-gray-200">
      {success ? (
        <PasswordResetSuccess />
      ) : (
        <ResetPasswordForm onSuccess={(didSucceed) => setSuccess(didSucceed)} />
      )}
    </main>
  );
};

export default Page;
