import { FC } from "react";
import { FiUser, FiVideo, FiTv, FiPlayCircle } from "react-icons/fi";
import { PiThumbsUp } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { UserMenuList } from "./UserMenuList";
import { SectionItem } from "@modules/shared/layout/types";

const MENU_ITEMS: SectionItem[] = [
  {
    icon: <FiUser />,
    title: "Profile",
  },
  {
    icon: <FiTv />,
    title: "Channel",
  },
  {
    icon: <FiVideo />,
    title: "Videos",
  },
  {
    icon: <FiPlayCircle />,
    title: "Subscriptions",
  },
  {
    icon: <MdHistory />,
    title: "Watch history",
  },
  {
    icon: <PiThumbsUp />,
    title: "Liked videos",
  },
  {
    icon: <MdHistory />,
    title: "Watch history",
  },
  {
    title: "Sign Out",
  },
];

export const UserMenu: FC = () => {
  return (
    <div className="z-30 rounded-md bg-white shadow-2xl absolute top-10 bottom-0 right-12 w-60 h-96">
      <div className="mt-4 pb-6 border-b border-gray-200 flex p-2 gap-2">
        <img
          src="https://i.pravatar.cc/150"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="text-sm font-primary font-semibold">
            Yeferson Hidalgo
          </h3>
          <p className="text-xs">@MemiMint</p>
        </div>
      </div>
      <UserMenuList items={MENU_ITEMS} />
    </div>
  );
};
