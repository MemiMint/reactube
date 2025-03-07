import { FC } from "react";
import { Pin } from "../Pin";
import { usePinInput } from "./hook";

export const PinInput: FC<{ length: number }> = ({ length }) => {
  const { currentIndex, pinValues, onChange, onHandleKeyDown } =
    usePinInput(length);

  return (
    <div className="flex items-center justify-center gap-4 mt-10">
      {pinValues.map((value, i) => (
        <Pin
          key={i}
          id={i}
          value={value}
          onChange={(e) => onChange(e, i)}
          onKeyDown={(e) => onHandleKeyDown(e, i)}
          currentIndex={currentIndex}
        />
      ))}
    </div>
  );
};
