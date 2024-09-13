"use client";

import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { fonts } from "./fonts";

const theme = extendTheme({
    fonts: {
        body: fonts.inter.style.fontFamily,
        heading: fonts.inter.style.fontFamily
    }
});

export function Providers({ children } : { children?: React.ReactNode }): JSX.Element {
    return (
        <ChakraProvider theme={theme} >
            { children }
        </ChakraProvider>
    )
}