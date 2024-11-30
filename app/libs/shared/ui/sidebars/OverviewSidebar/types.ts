import type { ReactText } from "react";
import type { FlexProps, BoxProps } from "@chakra-ui/react";
import type { IconType } from "react-icons";

export interface NavLinkGroup {
  label?: string;
  navLinks: LinkItemProps[];
}

export interface LinkItemProps {
  name: string;
  icon: IconType;
}

export interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}

export interface SidebarProps extends BoxProps {
  onClose?: () => void;
}

export interface MobileProps extends FlexProps {
  onOpen: () => void;
}
