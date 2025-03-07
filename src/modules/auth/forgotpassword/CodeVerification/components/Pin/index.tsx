import React, { FC, useEffect, useRef } from "react";

type PinProps = {
  id: number;
  currentIndex: number;
  value: string;
  onKeyDown?(event: React.KeyboardEvent<HTMLInputElement>): void;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
};

export const Pin: FC<PinProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (props.currentIndex === props.id) {
      ref.current?.focus();
    }
  }, [props.id, props.currentIndex]);

  return (
    <input
      ref={ref}
      className="text-center text-2xl w-14 h-14 border-2 rounded-md border-gray-300 focus:border-blue-600 outline-none"
      type="text"
      maxLength={1}
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
};
