"use client";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { Text } from "@chakra-ui/react";
import React from "react";

type UserMenuProps = {
  children?: React.ReactNode;
};

const USER_MENU_ITEMS: Array<string> = ["Your Channel", "Account Settings", "Sign Out"];

export const UserMenu = ({ children }: UserMenuProps) => {
  return (
    <>
      <Menu isLazy>
        <MenuButton>{children}</MenuButton>
        <MenuList>
          {USER_MENU_ITEMS.map((menuItem, index) => {
            return (
              <MenuItem key={index}>
                <Text fontSize={14}>{menuItem}</Text>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};
