import React, { FC } from "react";
import { MdReplay10, MdForward10 } from "react-icons/md";

type SeekButtonsProps = {
  handleSkip(direction: "backwards" | "forward"): void;
};

export const SeekButtons: FC<SeekButtonsProps> = ({ handleSkip }) => {
  return (
    <div className="flex items-center gap-2">
      <MdReplay10
        size={30}
        color="white"
        className="cursor-pointer"
        onClick={() => handleSkip("backwards")}
      />
      <MdForward10
        size={30}
        color="white"
        className="cursor-pointer"
        onClick={() => handleSkip("forward")}
      />
    </div>
  );
};
