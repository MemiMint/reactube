import { Button } from "@modules/shared/components/buttons/Button";
import React, { FC, useEffect, useState } from "react";
import { MdExpandCircleDown } from "react-icons/md";
import { useNavigate } from "react-router";

export const PasswordResetSuccess: FC = () => {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer !== 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    if (timer === 0) {
      navigate("/auth/signin");
    }
  }, [timer]);

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full max-w-lg h-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <MdExpandCircleDown size={60} color="green" />
      <h1 className="text-lg font-medium font-primary mt-4">
        Password has been reset successfully
      </h1>
      <p className="text-gray-600 my-4 font-secondary">
        You will be redirected to login in {timer} seconds.
      </p>
      <Button onClick={() => navigate("/auth/signin")} label="Back to login" />
    </div>
  );
};
