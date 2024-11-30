import { SidebarLink, SidebarLinkGroup } from "@/app/libs/shared/types/sidebar-link";
import { FiHome } from "react-icons/fi";
import { PiUserRectangleLight } from "react-icons/pi";
import { MdPlaylistPlay } from "react-icons/md";
import { LiaFileVideoSolid } from "react-icons/lia";
import { MdOutlineWatchLater, MdOutlineSettings } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { GoHistory } from "react-icons/go";

const overViewLinks: SidebarLink[] = [
  {
    icon: FiHome,
    name: "Home",
  },
];

const miscellaneousLinks: SidebarLink[] = [
  {
    icon: MdOutlineSettings,
    name: "Settings",
  },
];

const profileLinks: SidebarLink[] = [
  {
    name: "Your channel",
    icon: PiUserRectangleLight,
  },
  {
    name: "History",
    icon: GoHistory,
  },
  {
    name: "Playlists",
    icon: MdPlaylistPlay,
  },
  {
    name: "Your Videos",
    icon: LiaFileVideoSolid,
  },
  {
    name: "Watch Later",
    icon: MdOutlineWatchLater,
  },
  {
    name: "Liked Videos",
    icon: BiLike,
  },
];

export const SIDEBAR_GROUP_LINKS: Array<SidebarLinkGroup> = [
  {
    links: overViewLinks,
  },
  {
    label: "You",
    links: profileLinks,
  },
  {
    label: "Miscellaneous",
    links: miscellaneousLinks,
  },
];
