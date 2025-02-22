import { ToastType } from "../types";

const TYPES = {
  success: "bg-green-500 text-white",
  warning: "bg-yellow-500 text-white",
  error: "bg-red-500 text-white",
  neutral: "bg-gray-800 text-white",
};

export const getTypeClasses = (type: ToastType): string => {
  return TYPES[type] || TYPES["neutral"];
};
