import { FC } from "react";
import { SectionFormProps } from "../../../../types";

type TermsAgreement = {
  didAgree: boolean;
};

export const TermsAgreement: FC<SectionFormProps<TermsAgreement>> = ({
  state,
  updateState,
}) => (
  <div className="mt-4 flex items-start mb-6">
    <input
      id="terms"
      name="didAgree"
      checked={state.didAgree}
      onChange={() => updateState({ didAgree: !state.didAgree })}
      type="checkbox"
      className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
      required
    />
    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">
      I agree with the{" "}
      <a href="#" className="text-blue-600 hover:underline">
        terms and conditions
      </a>
      .
    </label>
  </div>
);
