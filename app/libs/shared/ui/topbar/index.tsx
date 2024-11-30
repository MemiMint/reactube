"use client";

import { Box, Flex, HStack, Avatar, Text, VStack } from "@chakra-ui/react";
import { Input } from "@/app/libs/shared/ui/input";
import { MdOutlineVideoCall } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import { Logo } from "../logo";
import { UserMenu } from "../menues/UserMenu";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const videoHistory: string[] = [
  "Watched 'Introduction to React' tutorial",
  "Added 'JavaScript Frameworks Comparison' to Watch Later",
  "Liked 'Funny Cat Videos' compilation",
  "Shared 'Cooking Recipes' playlist with friends",
  "Commented on 'Music Concert Highlights'",
  "Watched 'Documentary on Space Exploration'",
  "Created 'Workout Motivation' playlist",
  "Paused 'Yoga Practice' video at 10:32",
  "Started 'Beginner's Guide to Python Programming'",
  // Add more video-related historical items as needed
];

export const TopBar = () => {
  const [showHistoryResults, setSHowHistoryResults] = useState<boolean>(false);

  return (
    <Box width='100%' height={16} position='fixed' bgColor='white' zIndex={1}>
      <Flex w='100%' height='100%' justify='space-between' align='center'>
        <Box ml={6}>
          <Logo size={24} title='reactube' />
        </Box>
        <Box
          onBlur={() => setSHowHistoryResults(false)}
          onFocus={() => setSHowHistoryResults(true)}
          width={650}
          position='relative'
        >
          <Input
            name=''
            onChange={() => console.log("")}
            type='text'
            placeholder='Search'
            value=''
          />
          {showHistoryResults && (
            <Box
              width='100%'
              height={200}
              bgColor='white'
              position='absolute'
              top={14}
              boxShadow='2xl'
              borderRadius='lg'
              left={0}
              py={4}
              overflowY='auto'
            >
              <VStack w='100%' align='stretch' px={2}>
                {videoHistory.map((item, index) => {
                  return (
                    <Box
                      _hover={{ bg: "#E5E5E5" }}
                      key={index}
                      display='flex'
                      alignItems='center'
                      py={2}
                    >
                      <CiSearch size={20} />
                      <Text ml={4} fontSize={14}>
                        {item}
                      </Text>
                    </Box>
                  );
                })}
              </VStack>
            </Box>
          )}
        </Box>
        <HStack spacing={6} mx={6}>
          <MdOutlineVideoCall size={26} />
          <TbBell size={26} />
          <UserMenu>
            <Avatar
              size='sm'
              src='https://yt3.ggpht.com/v0b321SlBV1bY0ah_rgzkFPa_Ot0LuDdanK7tXMhSrhM1mhAZd05rn9e17jnbPBcQnCZg7gg=s108-c-k-c0x00ffffff-no-rj'
            />
          </UserMenu>
        </HStack>
      </Flex>
    </Box>
  );
};
