import { FC } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useNavigate } from "react-router";
import { TextButton } from "../../../../../shared/components/buttons/TextButton";
import { IoMdReturnLeft } from "react-icons/io";
import { Button } from "../../../../../shared/components/buttons/Button";

export const EmailSentMessage: FC<{ emailTo: string }> = ({ emailTo }) => {
  const navigate = useNavigate();

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
          We've sent a email to: {emailTo}. You may need to check your spam
          folder
        </p>
      </div>
      <Button label="Continue" onClick={() => navigate("/pin")} />
      <div className="mt-2">
        <TextButton
          onClick={() => navigate("/auth/signin")}
          startIcon={<IoMdReturnLeft size={15} />}
          label="Back to Login"
        />
      </div>
    </div>
  );
};
