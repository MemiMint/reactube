import { FC } from "react";

export type DropdownItems = {
  value: string | number;
  description: string;
};

type DropdownSize = "small" | "medium" | "large";

type DropdownProps = {
  label?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  size?: DropdownSize;
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void;
  items?: DropdownItems[];
};

export const Dropdown: FC<DropdownProps> = ({
  label,
  name,
  value,
  placeholder,
  size = "medium",
  items = [],
  onChange,
}) => {
  const dropdownId =
    name || `dropdown-${Math.random().toString(36).substr(2, 9)}`;

  const getSizeClasses = (size: DropdownSize) => {
    switch (size) {
      case "small":
        return "p-1 text-sm w-24";
      case "large":
        return "p-4 text-lg w-40";
      default:
        return "p-2.5 text-base w-32"; // Default to medium
    }
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={dropdownId}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <select
        id={dropdownId}
        name={name}
        value={value}
        onChange={onChange}
        className={`bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block ${getSizeClasses(size)}`}
      >
        {placeholder && (
          <option className="hidden" value="">
            {placeholder}
          </option>
        )}
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.description}
          </option>
        ))}
      </select>
    </div>
  );
};
