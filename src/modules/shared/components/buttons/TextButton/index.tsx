import { FC } from "react";
import type { ButtonProps } from "../type";
import { Sizes } from "../../../types/size";
import { getSize } from "../../../utils/get-size";

const SIZE_CLASSES: Sizes = {
  small: "text-xs px-3 py-1.5",
  medium: "text-sm px-5 py-2.5",
  large: "text-base px-7 py-3",
  full: "w-full",
};

export const TextButton: FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  startIcon,
  endIcon,
  size = "medium",
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`cursor-pointer w-full font-primary flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 focus:outline-none disabled:text-gray-400 disabled:cursor-not-allowed hover:bg-gray-300 font-medium rounded-md ${getSize(SIZE_CLASSES, size)}`}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      <span>{label}</span>
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};
