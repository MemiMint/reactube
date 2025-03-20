import { FC } from "react";
import { Pin } from "../Pin";
import { usePinInput } from "./hook";

type PinInputProps = {
  length: number;
  onComplete(): void;
};

export const PinInput: FC<PinInputProps> = ({ length, onComplete }) => {
  const { currentIndex, pinValues, onChange, onHandleKeyDown } = usePinInput(
    length,
    onComplete,
  );

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
