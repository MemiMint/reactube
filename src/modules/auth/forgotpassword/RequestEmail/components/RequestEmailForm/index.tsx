import { FC } from "react";
import { useStateHandler } from "../../../../../shared/hooks/useStateHandler";
import { useLoading } from "../../../../../shared/hooks/useLoading";
import { validateEmail } from "../../../../../shared/utils/validators/email";
import { useEnterKeyPress } from "../../../../../shared/hooks/useEnterKeyPress";
import { Logo } from "../../../../../shared/components/Logo";
import { TextInput } from "../../../../../shared/components/TextInput";
import { Button } from "../../../../../shared/components/buttons/Button";
import { Toast } from "../../../../../shared/components/feedback/Toast";
import { MdEmail } from "react-icons/md";

export const RequestEmailForm: FC<{ onSubmit(email: string): void }> = ({
  onSubmit,
}) => {
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
      onSubmit(state.email);
      toggleLoading();
    }, 3000);
  };

  useEnterKeyPress(handleSubmit, true);

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
