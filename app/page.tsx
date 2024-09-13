"use client";

import Link from "next/link";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";
import { Logo } from "./libs/shared/ui/logo";

export default function Home() {
  return (
    <Box>
      <Box width="100vw" p={2}>
        <Flex mt={4} flex={1} alignItems="center" justifyContent="center">
          <Logo title="Reactube" />
        </Flex>
      </Box>
      <Box mt={20} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Heading size="3xl">
          Entertainment at your fingertips
        </Heading>
        <Box textAlign="center" mt={6} px={10} >
          <Text>
            Immerse yourself in a world of limitless entertainment with our cutting-edge video streaming app. Explore, discover, and enjoy a vast library of content right at your fingertips
          </Text>
        </Box>
        <Link href="/auth/login">
          <Button mt={6} size="lg" bgColor="#F8CA15" color="black">Sign In</Button>
        </Link>
      </Box>
    </Box>
  );
}
