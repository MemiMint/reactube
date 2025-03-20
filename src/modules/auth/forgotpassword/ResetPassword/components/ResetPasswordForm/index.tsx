import React, { FC } from "react";
import { Button } from "@modules/shared/components/buttons/Button";
import { TextInput } from "@modules/shared/components/TextInput";
import { useStateHandler } from "@modules/shared/hooks/useStateHandler";
import { MdLock } from "react-icons/md";

type IState = {
  newPassword: string;
  confirmPassword: string;
  errorMessage: string;
};

export const ResetPasswordForm: FC<{
  onSuccess: (success: boolean) => void;
}> = (props) => {
  const { state, updateState } = useStateHandler<IState>({
    newPassword: "",
    confirmPassword: "",
    errorMessage: "",
  });

  const areEqual = () => {
    const data = {
      newPassword: state.newPassword,
      confirmPassword: state.confirmPassword,
    };

    for (const key in data) {
      const objKey = key as keyof typeof data;

      if (data[objKey] === "") {
        updateState({ errorMessage: "Please fill in all the fields" });

        return;
      }
    }

    if (state.newPassword === state.confirmPassword) {
      props.onSuccess(true);
    }

    updateState({ errorMessage: "Passwords doesnt match" });
  };

  return (
    <div className="p-4 w-full max-w-lg h-auto flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <h1 className="text-lg font-primary font-medium">Reset Password</h1>
      <p className="text-lg text-gray-600">
        Enter a new password to regain access to your account.
      </p>
      <p className="mt-2 text-red-500 font-secondary">{state.errorMessage}</p>
      <div className="my-8 flex flex-col gap-4">
        <TextInput
          startIcon={<MdLock size={20} />}
          name="newPassword"
          value={state.newPassword}
          label="New Password"
          type="password"
          onChange={(event) =>
            updateState({ newPassword: event.target.value, errorMessage: "" })
          }
        />
        <TextInput
          startIcon={<MdLock size={20} />}
          name="confirmPassword"
          value={state.confirmPassword}
          label="Confirm Password"
          type="password"
          onChange={(event) =>
            updateState({
              confirmPassword: event.target.value,
              errorMessage: "",
            })
          }
        />
      </div>
      <Button label="Reset Password" onClick={areEqual} />
    </div>
  );
};
