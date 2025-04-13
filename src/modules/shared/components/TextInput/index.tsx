import React, { FC, ReactNode, useState } from "react";
import { getSize } from "../../utils/get-size";
import { Size, Sizes } from "../../types/size";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputType = "text" | "password" | "email";

type InputProps = {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  type?: InputType;
  size?: Size;
  disabled?: boolean;
  startIcon?: ReactNode; // New prop for icon at the start
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(event?: React.FocusEvent<HTMLInputElement>): void;
};

const SIZE_CLASSES: Sizes = {
  small: "p-1 text-sm",
  medium: "p-2.5 text-base",
  large: "p-4 text-lg",
  full: "w-full p-2.5 text-lg",
};

export const TextInput: FC<InputProps> = ({
  name,
  type = "text",
  size = "medium",
  disabled = false,
  placeholder,
  label,
  value,
  startIcon,
  onChange,
  onFocus,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = name || `input-${Math.random().toString(36).substr(2, 9)}`;

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="text-start relative">
      {label && (
        <label
          htmlFor={inputId}
          className="font-secondary block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {startIcon && (
          <span className="absolute left-3 text-gray-500">{startIcon}</span>
        )}
        <input
          id={inputId}
          disabled={disabled}
          type={type === "password" && showPassword ? "text" : type}
          className={`font-secondary font-medium bg-white outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-300 block w-full ${
            startIcon ? "pl-10" : "pl-3"
          } pr-10 ${getSize(SIZE_CLASSES, size)}`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-900"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>
    </div>
  );
};
