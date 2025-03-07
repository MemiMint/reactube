import React from "react";
import { useStateHandler } from "@shared/hooks/useStateHandler";

type PinInputState = {
  currentIndex: number;
  pinValues: string[];
};

type PinInputHandler = PinInputState & {
  onChange(event: React.ChangeEvent<HTMLInputElement>, index: number): void;
  onHandleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ): void;
};

export const usePinInput = (length: number): PinInputHandler => {
  const { state, updateState } = useStateHandler<PinInputState>({
    currentIndex: 0,
    pinValues: Array.from<string>({ length }).fill(""),
  });

  const moveToNextPin = () => {
    const shouldMoveToNextIndex: number =
      state.currentIndex >= length - 1
        ? state.currentIndex
        : state.currentIndex + 1;

    updateState({
      currentIndex: shouldMoveToNextIndex,
    });
  };

  const moveBackwards = () => {
    const shouldMoveBackwards: number =
      state.currentIndex === 0 ? 0 : state.currentIndex - 1;

    updateState({
      currentIndex: shouldMoveBackwards,
    });
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = event.target.value;
    if (newValue.match(/^[0-9]$/)) {
      const updatedValues = [...state.pinValues];
      updatedValues[index] = newValue;
      updateState({ pinValues: updatedValues });
      moveToNextPin();
    }
  };

  const onHandleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (event.key === "Backspace") {
      const updatedValues = [...state.pinValues];
      updatedValues[index] = "";
      updateState({ pinValues: updatedValues });
      moveBackwards();
    }
  };

  return {
    currentIndex: state.currentIndex,
    pinValues: state.pinValues,
    onChange,
    onHandleKeyDown,
  };
};
