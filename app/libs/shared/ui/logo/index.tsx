"use client";

import { FC } from "react";
import Link from "next/link";
import { Flex, Heading } from "@chakra-ui/react";
import { MdVideoLibrary } from "react-icons/md";
import { LogoProps } from "./props";

export const Logo: FC<LogoProps> = ({
  title,
  href,
  layout = "horizontal",
  color = "primary",
  size = 40,
}): JSX.Element => {
  return (
    <Flex alignItems='center' flexDir={layout === "horizontal" ? "row" : "column"} gap={2}>
      <MdVideoLibrary color={color === "primary" ? "#F8CA15" : "black"} size={size} />
      {href ? (
        <Link href={href}>
          <Heading as='h1' size='2xl'>
            {title || ""}
          </Heading>
        </Link>
      ) : (
        <Heading as='h1' size='lg'>
          {title || ""}
        </Heading>
      )}
    </Flex>
  );
};
