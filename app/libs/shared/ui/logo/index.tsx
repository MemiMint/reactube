"use client";

import { FC } from "react";
import Link from "next/link";
import { Flex, Heading } from "@chakra-ui/react";
import { MdVideoLibrary } from "react-icons/md";
import { LogoProps } from "./props";

export const Logo: FC<LogoProps> = ({ title, href }): JSX.Element => {
    return (
        <Flex gap={2}>
            <MdVideoLibrary color="#F8CA15" size={40} />
            { href ? (
                <Link href={href} >
                    <Heading as="h1" size="2xl" >{ title || "" }</Heading>
                </Link>
            ) : <Heading as="h1" size="lg">{ title || "" }</Heading> }
        </Flex>
    )
}