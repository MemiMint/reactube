import React, { FC } from "react";

type EmojiCategoryButtonProps = {
  icon: React.ReactNode;
  category: string;
  isCategoryActive?: boolean;
  onClick?(): void;
};

export const EmojiCategoryButton: FC<EmojiCategoryButtonProps> = ({
  icon,
  category,
  isCategoryActive = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative group p-2 rounded-sm ${isCategoryActive ? "bg-blue-200 text-blue-500" : "text-gray-500"} cursor-pointer ${isCategoryActive ? "hover:bg-blue-400 hover:text-blue-600" : "hover:bg-gray-300"}`}
    >
      {icon}
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-xs px-2 py-1 text-xs text-white bg-black rounded opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 z-10">
        {category}
      </div>
    </div>
  );
};
