import { FC } from "react";
import { SectionFormProps } from "../../../../types";
import { Checkbox } from "../../../../../../shared/components/Checkbox";

type TermsAgreement = {
  didAgree: boolean;
};

export const TermsAgreement: FC<SectionFormProps<TermsAgreement>> = ({
  state,
  updateState,
}) => (
  <div className="mt-4 flex items-center mb-6">
    <Checkbox
      label=""
      value={state.didAgree}
      name="didAgree"
      onCheck={() => updateState({ didAgree: !state.didAgree })}
    />
    <label
      htmlFor="didAgree"
      className="ms-2 text-sm font-medium text-gray-900"
    >
      I agree with the{" "}
      <a href="#" className="text-blue-600 hover:underline">
        terms and conditions
      </a>
      .
    </label>
  </div>
);
