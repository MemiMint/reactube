import { useEffect } from "react";

type EnterKeyHandler = () => void;

export const useEnterKeyPress = (
  handler: EnterKeyHandler,
  active: boolean = true,
) => {
  useEffect(() => {
    if (!active) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handler();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handler, active]);
};
