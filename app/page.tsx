//"use client";

import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import { OverviewSidebar } from "@/app/libs/shared/ui/sidebars/OverviewSidebar";
import { TopBar } from "@/app/libs/shared/ui/topbar";
import { VideoCard } from "./components/VideoCard";

export default function page() {
  return (
    <Box display='flex' w='100vw'>
      <TopBar />
      <OverviewSidebar />
      <Box ml={6} mt={20} w='100%' height='200vh' p={4}>
        <Wrap spacing={2}>
          <WrapItem>
            <VideoCard />
          </WrapItem>
          <WrapItem>
            <VideoCard />
          </WrapItem>
          <WrapItem>
            <VideoCard />
          </WrapItem>
          <WrapItem>
            <VideoCard />
          </WrapItem>
          <WrapItem>
            <VideoCard />
          </WrapItem>
          <WrapItem>
            <VideoCard />
          </WrapItem>
          <WrapItem>
            <VideoCard />
          </WrapItem>
          <WrapItem>
            <VideoCard />
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
}
