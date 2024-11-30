"use client";

import { Box, Flex, Icon } from "@chakra-ui/react";
import { NavItemProps } from "./types";

export const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box as='a' href='#' style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align='center'
        p='2'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        fontSize={14}
        _hover={{
          bg: "#E5E5E5",
          color: "black",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: "black",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};
