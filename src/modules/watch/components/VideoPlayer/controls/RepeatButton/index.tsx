import { FC } from "react";
import { MdLoop } from "react-icons/md";

type RepeatButtonProps = {
  onHandleRepeat(): void;
};

export const RepeatButton: FC<RepeatButtonProps> = ({ onHandleRepeat }) => {
  return (
    <MdLoop
      size={30}
      className="cursor-pointer"
      color="white"
      onClick={onHandleRepeat}
    />
  );
};
