"use client";

import { FC } from "react";
import { observer } from "mobx-react-lite";
import NextLink from "next/link";
import { Logo } from "@/app/libs/shared/ui/logo";
import { Input } from "@/app/libs/shared/ui/input";
import { Box, Text, Heading, VStack, Button, HStack, useToast, Link as ChakraLink } from "@chakra-ui/react";
import { MdEmail, MdPerson } from "react-icons/md";
import signUpStore from "./store";
import loadingStore from "@/app/store/loading.store";

const Page: FC = observer(() => {

    const toast = useToast();

    const onSignUp = () => {
        loadingStore.toggleLoading();

        setTimeout(() => {
            loadingStore.toggleLoading();
            toast({
                title: "Account has been created",
                description: "Your account has been created successfully",
                status: "success",
                duration: 2000
            });
        }, 5000);
    }

    return (
        <Box width="100vw" height="100vh">
            <Box
                position="absolute"
                display="flex"
                alignItems="center"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                boxShadow="lg"
                width={800}
                height={800}
                borderRadius={4}
            >
                <Box flex={1} display="flex" alignItems="center" justifyContent="center" height="100%" bgColor="#F8CA15" borderRadius={4} >
                    <Logo layout="vertical" title="Reactube" color="secondary" size={60} />
                </Box>
                <Box display="flex" flexDir="column" alignItems="center" flex={1} height="100%" bgColor="white" px={10} borderRadius={4}>
                    <Heading as="h1" size="lg" mt={8}>Sign Up</Heading>
                    <VStack w="100%" mt={10} spacing={4} >
                        <Input
                            disabled={loadingStore.loading}
                            label="Firstname"
                            leftElement={<MdPerson fontSize={18} style={{ color: "rgba(0, 0, 0, 0.5)" }} />}
                            name="firstname"
                            placeholder="firstname"
                            value={signUpStore.firstname}
                            type="text"
                            onChange={(event) => signUpStore.updateFirstname(event.target.value)}
                        />
                        <Input
                            disabled={loadingStore.loading}
                            label="Lastname"
                            placeholder="lastname"
                            leftElement={<MdPerson fontSize={18} style={{ color: "rgba(0, 0, 0, 0.5)" }} />}
                            name="lastname"
                            value={signUpStore.lastname}
                            type="text"
                            onChange={(event) => signUpStore.updateLastname(event.target.value)}
                        />
                        <Input
                            disabled={loadingStore.loading}
                            label="Username"
                            placeholder="username"
                            leftElement={<MdPerson fontSize={18} style={{ color: "rgba(0, 0, 0, 0.5)" }} />}
                            name="username"
                            value={signUpStore.username}
                            type="text"
                            onChange={(event) => signUpStore.updateUsername(event.target.value)}
                        />
                        <Input
                            disabled={loadingStore.loading}
                            label="Email"
                            placeholder="email"
                            leftElement={<MdEmail fontSize={18} style={{ color: "rgba(0, 0, 0, 0.5)" }} />}
                            name="email"
                            value={signUpStore.email}
                            type="email"
                            onChange={(event) => signUpStore.updateEmail(event.target.value)}
                        />
                        <Box width="100%" >
                            <Input
                                disabled={loadingStore.loading}
                                label="Password"
                                placeholder="password"
                                showEye
                                name="password"
                                value={signUpStore.password}
                                type="password"
                                onChange={(event) => {
                                    signUpStore.updatePassword(event.target.value);
                                    signUpStore.evaluatePasswordStrength(signUpStore.password);
                                }}
                            />
                            <HStack opacity={loadingStore.loading ? 0.5 : 1} mt={2} spacing={2} >
                                <Box width={20} height={1} borderRadius={2} bgColor={signUpStore.score >= 1 ? signUpStore.getColorByScore(signUpStore.score) : "gray.300"} />
                                <Box width={20} height={1} borderRadius={2} bgColor={signUpStore.score >= 2 ? signUpStore.getColorByScore(signUpStore.score) : "gray.300"} />
                                <Box width={20} height={1} borderRadius={2} bgColor={signUpStore.score >= 4 ? signUpStore.getColorByScore(signUpStore.score) : "gray.300"} />
                                <Box width={20} height={1} borderRadius={2} bgColor={signUpStore.score > 4 ? signUpStore.getColorByScore(signUpStore.score) : "gray.300"} />
                            </HStack>
                        </Box>
                        <Input
                            disabled={loadingStore.loading}
                            label="Confirm Password"
                            placeholder="confirm password"
                            showEye
                            name="password"
                            value={signUpStore.confirmPassword}
                            type="password"
                            onChange={(event) => signUpStore.updateConfirmPassword(event.target.value)}
                        />
                    </VStack>
                    <Button isLoading={loadingStore.loading} mt={10} width="100%" variant="solid" colorScheme="yellow" onClick={onSignUp}>Sign Up</Button>
                    <Text mt={4} as="b" fontSize={12} >
                        Already have an account? <span style={{ color: "rgba(0, 0, 0, 0.6)", textDecoration: "underline" }} >
                            <ChakraLink href="/auth/login" as={NextLink} >
                                Sign In
                            </ChakraLink>
                        </span>
                    </Text>
                </Box>
            </Box>
        </Box>
    )
});

export default Page;
