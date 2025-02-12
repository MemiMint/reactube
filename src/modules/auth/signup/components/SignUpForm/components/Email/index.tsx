import { FC } from "react";
import { TextInput } from "../../../../../../shared/components/TextInput";
import { SectionFormProps } from "../../../../types";

type EmailState = {
  email: string;
};

export const Email: FC<SectionFormProps<EmailState>> = ({
  state,
  updateState,
}) => (
  <div className="mb-6">
    <TextInput
      onChange={(event) => updateState({ email: event.target.value })}
      name="email"
      value={state.email}
      type="email"
      label="Email"
      size="full"
    />
  </div>
);
