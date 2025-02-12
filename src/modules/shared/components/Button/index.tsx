import { FC } from "react";

type ButtonSize = "small" | "medium" | "large";

type ButtonProps = {
  label: string;
  onClick?(): void;
  size?: ButtonSize;
};

export const Button: FC<ButtonProps> = ({
  label,
  size = "medium",
  onClick,
}) => {
  const sizeClasses: Record<ButtonSize, string> = {
    small: "text-xs px-3 py-1.5",
    medium: "text-sm px-5 py-2.5",
    large: "text-base px-7 py-3",
  };

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
      focus:outline-none focus:ring-blue-300 font-medium rounded-md ${sizeClasses[size]}`}
    >
      {label}
    </button>
  );
};
