import { FC } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import { Emoji as IEmoji } from "../types";
import { Emoji } from "../Emoji";

type EmojiListProps = {
  emojis: IEmoji[];
  onHover(emoji: IEmoji): void;
  onSelectEmoji(char: string): void;
};

export const EmojiList: FC<EmojiListProps> = (props) => {
  return (
    <VirtuosoGrid
      totalCount={props.emojis.length}
      listClassName="flex flex-wrap gap-2 px-2"
      itemContent={(index) => {
        const emoji = props.emojis[index];

        return (
          <Emoji
            onHover={() => props.onHover(emoji)}
            onSelectEmoji={(emojiChar) => props.onSelectEmoji(emojiChar)}
            char={emoji.char}
            name={emoji.name}
          />
        );
      }}
    />
  );
};
