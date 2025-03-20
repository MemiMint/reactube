import { Button } from "@modules/shared/components/buttons/Button";
import React, { FC } from "react";
import { MdExpandCircleDown } from "react-icons/md";
import { useNavigate } from "react-router";

export const PasswordResetSuccess: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full max-w-lg h-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <MdExpandCircleDown size={60} color="green" />
      <h1 className="text-lg font-medium font-primary mt-4">
        Password has been reset successfully
      </h1>
      <p className="text-gray-600 my-4 font-secondary">
        Your password has been change, click below to login
      </p>
      <Button onClick={() => navigate("/auth/signin")} label="Back to login" />
    </div>
  );
};
