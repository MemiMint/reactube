import { FC } from "react";
import { Size, Sizes } from "../../types/size";
import { getSize } from "../../utils/get-size";

const SIZE_CLASSES: Sizes = {
  small: "h-4 w-4 border-2",
  medium: "h-8 w-8 border-4",
  large: "h-12 w-12 border-4",
  full: "",
};

type LoadingSpinnerProps = {
  size?: Size;
};

export const Spinner: FC<LoadingSpinnerProps> = ({ size = "medium" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-gray-300 border-t-blue-600 ${getSize(SIZE_CLASSES, size)}`}
      ></div>
    </div>
  );
};
