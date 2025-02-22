import { ToastPosition } from "../types";

const POSITIONS = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

export const getPositionsClasses = (position: ToastPosition): string => {
  return POSITIONS[position] || POSITIONS["bottom-right"];
};
