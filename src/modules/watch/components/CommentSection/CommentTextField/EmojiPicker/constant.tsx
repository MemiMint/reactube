import { FaSmile, FaFutbol, FaPlane, FaHeart, FaFlag } from "react-icons/fa";
import { GiSittingDog, GiFruitBowl } from "react-icons/gi";
import { MdLightbulbOutline, MdAllInclusive } from "react-icons/md";
import { EmojiCategory } from "./types";

const EMOJI_SIZE: number = 18;

export const EMOJI_CATEGORIES: {
  category: EmojiCategory;
  icon: React.ReactNode;
}[] = [
  {
    category: "All",
    icon: <MdAllInclusive size={EMOJI_SIZE} />,
  },
  {
    category: "Smileys & Emotion",
    icon: <FaSmile size={EMOJI_SIZE} />,
  },
  {
    category: "Animals & Nature",
    icon: <GiSittingDog size={EMOJI_SIZE} />,
  },
  {
    category: "Food & Drink",
    icon: <GiFruitBowl size={EMOJI_SIZE} />,
  },
  {
    category: "Activities",
    icon: <FaFutbol size={EMOJI_SIZE} />,
  },
  {
    category: "Travel & Places",
    icon: <FaPlane size={EMOJI_SIZE} />,
  },
  {
    category: "Objects",
    icon: <MdLightbulbOutline size={EMOJI_SIZE} />,
  },
  {
    category: "Symbols",
    icon: <FaHeart size={EMOJI_SIZE} />,
  },
  {
    category: "Flags",
    icon: <FaFlag size={EMOJI_SIZE} />,
  },
];
