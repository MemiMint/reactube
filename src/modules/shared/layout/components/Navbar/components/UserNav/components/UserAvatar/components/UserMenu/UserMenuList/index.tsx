import { SectionItem } from "@modules/shared/layout/types";
import { FC } from "react";
import { UserMenuItem } from "../UserMenuItem";

type UserMenuListProps = {
  items: SectionItem[];
};

export const UserMenuList: FC<UserMenuListProps> = (props) => {
  return (
    <div style={{ overflowY: "auto" }} className="h-70 flex flex-col gap-4 p-2">
      {props.items.map((item, index) => {
        return <UserMenuItem key={index} menuItem={item} />;
      })}
    </div>
  );
};
