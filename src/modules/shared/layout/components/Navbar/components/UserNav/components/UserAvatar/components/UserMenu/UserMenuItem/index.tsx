import { SectionItem } from "@modules/shared/layout/types";
import type { FC } from "react";

export const UserMenuItem: FC<{ menuItem: SectionItem }> = (props) => {
  return (
    <div className="cursor-pointer flex items-center p-2 gap-4 rounded-md hover:bg-gray-300">
      {props.menuItem.icon}
      <p className="text-sm font-primary">{props.menuItem.title}</p>
    </div>
  );
};
