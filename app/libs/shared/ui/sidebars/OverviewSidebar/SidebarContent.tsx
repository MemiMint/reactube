import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { Logo } from "@/app/libs/shared/ui/logo";
import { NavLinkGroup } from "./NavLinkGroup";
import { SIDEBAR_GROUP_LINKS } from "../../../../constants/links";
import { SidebarProps } from "./types";
import { Subscriptions } from "./subscriptions";

export const SidebarContent = ({ ...rest }: SidebarProps) => {
  return (
    <Box
      px={2}
      bg={useColorModeValue("white", "gray.900")}
      w={{ base: "full", md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='4' justifyContent='space-between'>
        <Logo title='Reactube' size={28} />
      </Flex>
      {SIDEBAR_GROUP_LINKS.map((group, index) => {
        return <NavLinkGroup key={index} label={group.label} navLinks={group.links} />;
      })}
      <Subscriptions />
    </Box>
  );
};
