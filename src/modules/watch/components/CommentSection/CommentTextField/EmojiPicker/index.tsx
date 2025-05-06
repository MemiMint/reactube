import React, { FC, useState } from "react";
import EMOJIS from "./emojis.json";
import { EmojiCategoryTopBar } from "./EmojiCategoryTopBar";
import { EMOJI_CATEGORIES } from "./constant";
import { EmojiList } from "./EmojiList";
import { EmojiPickerFooter } from "./EmojiPickerFooter";
import { Emoji, EmojiCategory } from "./types";

type EmojiPickerProps = {
  onChange(emoji: string): void;
};

export const EmojiPicker: FC<EmojiPickerProps> = ({ onChange }) => {
  const [emojiSearch, setEmojiSearch] = useState<string>("");
  const [emojiCategory, setEmojiCategory] = useState<EmojiCategory>("All");
  const [lastEmojiHovered, setLastEmojiHovered] = useState<Emoji | undefined>(
    undefined,
  );

  const selectFilterCategory = (category: EmojiCategory) => {
    setEmojiCategory(category);
  };

  const filteredEmojis = EMOJIS.filter((emoji) => {
    const matchCategory: boolean =
      emojiCategory === "All" || emoji.group === emojiCategory;

    const matchSearch: boolean =
      !emojiSearch ||
      emoji.name.toLowerCase().includes(emojiSearch.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="absolute w-80 h-96 bg-white rounded-md shadow flex flex-col">
      <EmojiCategoryTopBar
        category={emojiCategory}
        categories={EMOJI_CATEGORIES}
        onSelectCategory={selectFilterCategory}
      />
      <div className="w-full px-2 py-2">
        <input
          placeholder="Search..."
          type="text"
          name="emojiSearch"
          value={emojiSearch}
          onChange={(event) => setEmojiSearch(event.target.value)}
          className="rounded-sm bg-gray-200 w-full h-8 outline-none font-primary text-gray-600 text-sm p-2"
        />
      </div>
      <EmojiList
        onSelectEmoji={(emojiChar) => onChange(emojiChar)}
        onHover={(emoji) => setLastEmojiHovered(emoji)}
        emojis={filteredEmojis}
      />
      <EmojiPickerFooter emoji={lastEmojiHovered} />
    </div>
  );
};
