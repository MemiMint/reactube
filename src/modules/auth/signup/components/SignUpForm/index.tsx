import { FC } from "react";
import { DateOfBirth, Email, PersonalInfo, TermsAgreement } from "./components";
import { useStateHandler } from "../../../../shared/components/hooks/useStateHandler";
import { Button } from "../../../../shared/components/Button";

export const SignUpForm: FC = () => {
  const { state, updateState } = useStateHandler({
    personalInfo: {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
    },
    email: {
      email: "",
    },
    dateOfBirth: {
      day: "",
      month: "",
      year: "",
    },
    termsAgreement: {
      didAgree: false,
    },
  });

  return (
    <div className="w-full md:w-3/5 p-8">
      <h2 className="font-primary text-2xl font-medium">Let's get started</h2>
      <PersonalInfo
        state={state.personalInfo}
        updateState={(updates) =>
          updateState({ personalInfo: { ...state.personalInfo, ...updates } })
        }
      />
      <Email
        state={state.email}
        updateState={(updates) =>
          updateState({ email: { ...state.email, ...updates } })
        }
      />
      <DateOfBirth
        state={state.dateOfBirth}
        updateState={(updates) =>
          updateState({ dateOfBirth: { ...state.dateOfBirth, ...updates } })
        }
      />
      <TermsAgreement
        state={state.termsAgreement}
        updateState={(updates) =>
          updateState({
            termsAgreement: { ...state.termsAgreement, ...updates },
          })
        }
      />
      <Button label="Create account" size="medium" />
      <div className="text-center mt-2">
        <p className="font-secondary font-medium text-gray-500 text-sm">
          Have an account?{" "}
          <span className="text-blue-500 font-bold">Sign In</span>
        </p>
      </div>
    </div>
  );
};
