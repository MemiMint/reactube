import { useStateHandler } from "../../../shared/hooks/useStateHandler";
import { EmailSentMessage } from "./components/EmailSentMessage";
import { RequestEmailForm } from "./components/RequestEmailForm";

type RequestEmailState = {
  success: boolean;
  emailTo: string;
};

export const RequestEmail = () => {
  const { state, updateState } = useStateHandler<RequestEmailState>({
    emailTo: "",
    success: false,
  });

  return state.success ? (
    <EmailSentMessage emailTo={state.emailTo} />
  ) : (
    <RequestEmailForm
      onSubmit={(email) => updateState({ success: true, emailTo: email })}
    />
  );
};
