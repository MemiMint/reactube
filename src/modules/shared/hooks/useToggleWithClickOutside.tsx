import React, { useEffect } from "react";
import { useStateHandler } from "./useStateHandler";

type State = {
  isOpen: boolean;
};

type HideElementClickOutside = {
  isOpen: boolean;
  handleOpen(): void;
  handleClose(): void;
};

export const useToggleWithClickOutside = (
  elementRef: React.RefObject<HTMLElement | HTMLDivElement | null>,
): HideElementClickOutside => {
  const { state, updateState } = useStateHandler<State>({
    isOpen: false,
  });

  const handleOpen = () => {
    updateState({ isOpen: true });
  };

  const handleClose = () => {
    updateState({ isOpen: false });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    isOpen: state.isOpen,
    handleClose,
    handleOpen,
  };
};
