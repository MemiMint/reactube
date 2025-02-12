import React, { FC } from "react";

type InputType = "text" | "password" | "email";
type InputSize = "small" | "medium" | "large" | "full";

type InputProps = {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  type?: InputType;
  size?: InputSize;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
};

export const TextInput: FC<InputProps> = ({
  name,
  type = "text",
  size = "medium",
  placeholder,
  label,
  onChange,
  value,
}) => {
  const inputId = name || `input-${Math.random().toString(36).substr(2, 9)}`;

  const sizeClasses = {
    small: "p-1 text-sm",
    medium: "p-2.5 text-base",
    large: "p-4 text-lg",
    full: "w-full p-2.5 text-lg",
  };

  return (
    <div className="">
      {label && (
        <label
          htmlFor={inputId}
          className="font-secondary block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={`font-secondary font-medium bg-white outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ${sizeClasses[size]}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
