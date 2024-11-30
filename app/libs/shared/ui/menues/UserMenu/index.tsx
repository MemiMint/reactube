"use client";

import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, useMenu } from "@chakra-ui/menu";
import { Avatar } from "@chakra-ui/avatar";
import { Text, Heading } from "@chakra-ui/react";
import React from "react";

//test

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
