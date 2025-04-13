import { SidebarSection } from "./types";
import { FiHome, FiPlayCircle, FiClock } from "react-icons/fi";
import { MdOutlinePlaylistPlay, MdHistory } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { PiThumbsUp } from "react-icons/pi";

const ICON_SIZE: number = 17;

export const SECTIONS: SidebarSection[] = [
  {
    items: [
      {
        icon: <FiHome size={ICON_SIZE} />,
        title: "Home",
      },
      {
        icon: <FiPlayCircle size={ICON_SIZE} />,
        title: "Subscriptions",
      },
    ],
  },
  {
    label: "History",
    items: [
      {
        icon: <MdHistory size={ICON_SIZE} />,
        title: "History",
      },
      {
        icon: <MdOutlinePlaylistPlay size={ICON_SIZE} />,
        title: "Playlist",
      },
      {
        icon: <GoVideo size={ICON_SIZE} />,
        title: "Your videos",
      },
      {
        icon: <FiClock size={ICON_SIZE} />,
        title: "Watch later",
      },
      {
        icon: <PiThumbsUp size={ICON_SIZE} />,
        title: "Liked videos",
      },
    ],
  },
];
