import React, { FC } from "react";
import { EmojiCategoryButton } from "../EmojiCategoryButton";
import { EmojiCategory, EmojiPickerCategory } from "../types";

type EmojiCategoryTopBarProps = {
  category: EmojiCategory;
  categories: EmojiPickerCategory[];
  onSelectCategory(category: EmojiCategory): void;
};

export const EmojiCategoryTopBar: FC<EmojiCategoryTopBarProps> = (props) => {
  return (
    <div className="flex items-center w-full justify-around border-b border-gray-200 p-2">
      {props.categories.map((category, index) => {
        return (
          <EmojiCategoryButton
            key={index}
            isCategoryActive={category.category === props.category}
            icon={category.icon}
            category={category.category}
            onClick={() => props.onSelectCategory(category.category)}
          />
        );
      })}
    </div>
  );
};
