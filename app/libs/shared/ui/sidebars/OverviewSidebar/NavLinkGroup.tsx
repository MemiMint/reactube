"use client";

import { Box, Text } from "@chakra-ui/react";
import { NavItem } from "./NavItem";
import { NavLinkGroup as INavLinkGroup } from "./types";

export const NavLinkGroup = ({ label, navLinks }: INavLinkGroup) => {
  return (
    <Box w='100%' py={4} as='div' borderBottom='1px solid #E5E5E5'>
      {label && (
        <Text ml={6} my={2} fontSize={16}>
          {label}
        </Text>
      )}
      {navLinks.map((navLink, index) => {
        return (
          <NavItem key={index} icon={navLink.icon}>
            {navLink.name}
          </NavItem>
        );
      })}
    </Box>
  );
};
