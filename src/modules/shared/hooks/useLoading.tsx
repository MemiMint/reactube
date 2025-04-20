import { useState } from "react";

type Loading = {
  isLoading: boolean;
  toggleLoading(): void;
};

export const useLoading = (): Loading => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const toggleLoading = () => {
    setIsLoading((prevState) => !prevState);
  };

  return {
    isLoading,
    toggleLoading,
  };
};
