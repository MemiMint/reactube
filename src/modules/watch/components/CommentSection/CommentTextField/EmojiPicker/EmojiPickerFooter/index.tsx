import { FC } from "react";
import { Emoji } from "../types";

type EmojiPickerFooterProps = {
  emoji?: Emoji;
};

export const EmojiPickerFooter: FC<EmojiPickerFooterProps> = ({ emoji }) => {
  return (
    <div className="w-full border-t border-gray-200 h-12 bg-white flex items-center gap-2 p-2">
      {emoji && (
        <>
          <div className="text-xl">{emoji.char}</div>
          <p className="text-sm font-primary text-gray-600">{emoji.name}</p>
        </>
      )}
    </div>
  );
};
