import { FC } from "react";
import { Button } from "../../../shared/components/Button";
import { Logo } from "../../../shared/components/Logo";
import { TextInput } from "../../../shared/components/TextInput";
import { useLoading } from "../../../shared/hooks/useLoading";
import { useStateHandler } from "../../../shared/hooks/useStateHandler";
import { MdEmail, MdOutlineMarkEmailRead } from "react-icons/md";
import { validateEmail } from "../../../shared/utils/validators/email";
import { Toast } from "../../../shared/components/feedback/Toast";

const EmailSentMessage = () => {
  return (
    <div className="text-center p-4 w-full max-w-lg h-auto flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full p-2 border-b-2 border-gray-300 ">
        <h1 className="text-balance leading-relaxed font-primary text-xl font-medium max-w-lg mx-auto">
          We've sent you a Verification code to your email
        </h1>
      </div>
      <div className="mt-4 mb-8 flex flex-col items-center ">
        <MdOutlineMarkEmailRead className="text-6xl text-green-400" />
        <p className="mt-4  text-balance leading-relaxed font-secondary text-gray-500 text-sm font-medium max-w-lg mx-auto">
          We've sent a email to: johndoe@email.com. You may need to check your
          spam folder
        </p>
      </div>
      <Button label="Continue" />
    </div>
  );
};

const RequestEmailForm: FC<{ onSubmit(): void }> = ({ onSubmit }) => {
  const { state, updateState } = useStateHandler<{
    email: string;
    isInvalidEmailAddress: boolean;
    showErrorToast: boolean;
  }>({
    email: "",
    isInvalidEmailAddress: false,
    showErrorToast: false,
  });

  const { isLoading, toggleLoading } = useLoading();

  const handleSubmit = () => {
    toggleLoading();

    if (!validateEmail(state.email)) {
      updateState({ isInvalidEmailAddress: true });
      toggleLoading();

      return;
    }

    if (state.email !== "johndoe@email.com") {
      updateState({ showErrorToast: true });
      toggleLoading();

      return;
    }

    setTimeout(() => {
      onSubmit();
      toggleLoading();
    }, 3000);
  };

  return (
    <div className="text-center p-4 w-full max-w-lg h-auto flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-center mb-6">
        <Logo />
      </div>
      <div>
        <h1 className="font-primary text-2xl font-medium">Forgot Password?</h1>
        <p className="font-secondary text-md font-medium text-gray-600 mt-2">
          No worries, we'll send you an email for reset instructions
        </p>
        {state.isInvalidEmailAddress && (
          <p className="mt-4 font-secondary text-red-500 text-xs">
            Please enter a valid email address
          </p>
        )}
      </div>
      <div className="mt-10">
        <TextInput
          disabled={isLoading}
          label="Email Address"
          placeholder="johndoe@email.com"
          name="email"
          type="email"
          value={state.email}
          onChange={(event) => updateState({ email: event.target.value })}
        />
      </div>
      <div className="mt-8">
        <Button
          onClick={handleSubmit}
          isLoading={isLoading}
          label="Send email"
        />
      </div>
      {state.showErrorToast && (
        <Toast
          icon={<MdEmail size={20} />}
          duration={20000}
          type="error"
          position="bottom-right"
          message="Something went wrong. Please try again later"
          closable
        />
      )}
    </div>
  );
};

export const RequestEmail = () => {
  const { state, updateState } = useStateHandler<{ success: boolean }>({
    success: false,
  });

  return state.success ? (
    <EmailSentMessage />
  ) : (
    <RequestEmailForm onSubmit={() => updateState({ success: true })} />
  );
};
