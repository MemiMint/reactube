import React, { FC } from "react";
import { Emoji as IEmoji } from "../types";

type EmojiProps = {
  char: string;
  name: string;
  onHover(emoji: IEmoji): void;
  onSelectEmoji(char: string): void;
};

export const Emoji: FC<EmojiProps> = (props) => {
  return (
    <div
      onClick={() => props.onSelectEmoji(props.char)}
      onMouseEnter={() => props.onHover({ char: props.char, name: props.name })}
      className="relative group cursor-pointer text-2xl rounded-sm hover:bg-gray-200 flex items-center justify-center w-8 h-8"
    >
      <span>{props.char}</span>
    </div>
  );
};
