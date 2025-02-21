import { useState } from "react";

type StateHandler<T> = {
  state: T;
  updateState: (propertiesToUpdate: Partial<T>) => void;
  resetState(): void;
};

export function useStateHandler<T extends object>(
  initialState: T,
): StateHandler<T> {
  const [state, setState] = useState<T>(initialState);

  const updateState = (propertiesToUpdate: Partial<T>) => {
    setState((prevState) => ({ ...prevState, ...propertiesToUpdate }));
  };

  const resetState = () => {
    setState(initialState);
  };

  return {
    state,
    updateState,
    resetState,
  };
}
