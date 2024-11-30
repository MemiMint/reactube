"use client";

import { TextWithFormmating } from "@/app/libs/utils/components/TextWithFormatting";
import { Box, Image, Avatar, Text } from "@chakra-ui/react";

export const VideoCard = () => {
  return (
    <Box cursor='pointer' width={320} height='max-content' borderRadius='lg'>
      <Box width={320} height={40} borderRadius='lg'>
        <Image
          borderRadius='lg'
          src='https://i.ytimg.com/vi/Cv7Be37b04E/maxresdefault.jpg'
          alt='lofi'
        />
      </Box>
      <Box display='flex' width='100%' mt={6} gap={4}>
        <Avatar
          size='sm'
          src='https://yt3.ggpht.com/y7k01ui-isjtHB8i0NtSad4S8PREqjYx9acTLCmjeYgNFyoG_DuZ1bZQYCv28E6dZXbE1LA4Uw=s68-c-k-c0x00ffffff-no-rj'
        />
        <Box>
          <TextWithFormmating text="**Playlist** 80's Tokyo Vibes 🎧 / Lofi hiphop mix ( Chill & Study )" />
          <Text mt={1} fontSize='small' color='GrayText'>
            Casual Anime Guy Explains
          </Text>
          <Text fontSize='small' color='GrayText'>
            248K views &bull; 2 years ago
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
