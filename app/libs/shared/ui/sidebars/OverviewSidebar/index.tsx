"use client";

import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { SidebarContent } from "./SidebarContent";

export const OverviewSidebar = () => {
  return (
    <Box width={250} minH='100vh' bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent />
    </Box>
  );
};
