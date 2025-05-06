import React from "react";

export type EmojiCategory =
  | "All"
  | "Smileys & Emotion"
  | "Animals & Nature"
  | "Food & Drink"
  | "Activities"
  | "Travel & Places"
  | "Objects"
  | "Symbols"
  | "Flags";

export type EmojiPickerCategory = {
  category: EmojiCategory;
  icon: React.ReactNode;
};

export type Emoji = {
  category?: string;
  char: string;
  name: string;
};
