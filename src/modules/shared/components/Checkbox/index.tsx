import { FC } from "react";

type CheckboxProps = {
  label?: string;
  name?: string;
  value?: boolean;
  onCheck?(): void;
};

export const Checkbox: FC<CheckboxProps> = ({
  label,
  name,
  value,
  onCheck,
}) => {
  return (
    <div className="flex items-center">
      <input
        name={name}
        id={name}
        checked={value}
        onChange={onCheck}
        type="checkbox"
        className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
        required
      />
      <label htmlFor={name} className="ms-2 text-sm font-medium text-gray-900">
        {label}
      </label>
    </div>
  );
};
