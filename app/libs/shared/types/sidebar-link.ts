import { IconType } from "react-icons";

export type SidebarLink = {
  name: string;
  icon: IconType;
  href?: string;
};

export type SidebarLinkGroup = {
  label?: string;
  links: SidebarLink[];
};
