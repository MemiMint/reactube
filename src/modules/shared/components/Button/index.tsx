import { FC } from "react";
import { Size, Sizes } from "../../types/size";
import { getSize } from "../../utils/get-size";
import { Spinner } from "../Spinner";

type ButtonProps = {
  label: string;
  size?: Size;
  isLoading?: boolean;
  onClick?(): void;
};

const SIZE_CLASSES: Sizes = {
  small: "text-xs px-3 py-1.5",
  medium: "text-sm px-5 py-2.5",
  large: "text-base px-7 py-3",
  full: "w-full",
};

export const Button: FC<ButtonProps> = ({
  label,
  isLoading = false,
  size = "medium",
  onClick,
}) => {
  return (
    <button
      //disabled={isLoading}
      onClick={onClick}
      className={`cursor-pointer font-secondary w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
      focus:outline-none focus:ring-blue-300 disabled:bg-blue-300 font-medium rounded-md ${getSize(SIZE_CLASSES, size)}`}
    >
      {isLoading ? <Spinner size="small" /> : label}
    </button>
  );
};
