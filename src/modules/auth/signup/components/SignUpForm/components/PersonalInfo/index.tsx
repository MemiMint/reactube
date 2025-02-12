import { FC } from "react";
import { TextInput } from "../../../../../../shared/components/TextInput";
import { SectionFormProps } from "../../../../types";

type PersonalInfo = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
};

export const PersonalInfo: FC<SectionFormProps<PersonalInfo>> = ({
  state,
  updateState,
}) => {
  return (
    <div className="grid gap-6 my-6 md:grid-cols-2 mt-6">
      <TextInput
        label="Firstname"
        value={state.firstname}
        onChange={(e) => updateState({ firstname: e.target.value })}
      />
      <TextInput
        label="Lastname"
        value={state.lastname}
        onChange={(e) => updateState({ lastname: e.target.value })}
      />
      <TextInput
        label="Username"
        value={state.username}
        onChange={(e) => updateState({ username: e.target.value })}
      />
      <TextInput
        type="password"
        label="Password"
        value={state.password}
        onChange={(e) => updateState({ password: e.target.value })}
      />
    </div>
  );
};
