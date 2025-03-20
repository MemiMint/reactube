import { useStateHandler } from "@shared/hooks/useStateHandler";
import { EmailSentMessage } from "./components/EmailSentMessage";
import { RequestEmailForm } from "./components/RequestEmailForm";

type RequestEmailState = {
  success: boolean;
  emailTo: string;
};

const Page = () => {
  const { state, updateState } = useStateHandler<RequestEmailState>({
    emailTo: "",
    success: false,
  });

  return (
    <main className="p-8 min-h-screen flex items-center justify-center bg-gray-200">
      {state.success ? (
        <EmailSentMessage emailTo={state.emailTo} />
      ) : (
        <RequestEmailForm
          onSubmit={(email) => updateState({ emailTo: email, success: true })}
        />
      )}
    </main>
  );
};

export default Page;
