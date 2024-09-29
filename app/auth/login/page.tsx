"use client";

import NextLink from "next/link";
import { observer } from "mobx-react-lite";
import { Logo } from "@/app/libs/shared/ui/logo";
import { Input } from "@/app/libs/shared/ui/input";
import { Box, Text, Heading, VStack, Button } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import loginStore from "./store";
import loadingStore from "@/app/store/loading.store";
import { Link as ChakraLink } from "@chakra-ui/next-js";
import { mockLogin } from "@/app/mock/auth.mock";

const Page = observer(() => {
  const onLogin = async (): Promise<void> => {
    loadingStore.toggleLoading();

    try {
      const mockUser = await mockLogin(loginStore.email, loginStore.password);

      console.log(mockUser);
    } catch (error) {
      console.error(error);
    } finally {
      loadingStore.toggleLoading();
    }
  };

  return (
    <Box width='100vw' height='100vh'>
      <Box
        position='absolute'
        display='flex'
        alignItems='center'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        boxShadow='lg'
        width={800}
        height={450}
        borderRadius={4}
      >
        <Box
          flex={1}
          display='flex'
          alignItems='center'
          justifyContent='center'
          height='100%'
          bgColor='#F8CA15'
          borderRadius={4}
        >
          <Logo layout='vertical' title='Reactube' color='secondary' size={60} />
        </Box>
        <Box
          display='flex'
          flexDir='column'
          alignItems='center'
          flex={1}
          height='100%'
          bgColor='white'
          px={10}
          borderRadius={4}
        >
          <Heading as='h1' size='lg' mt={8}>
            Login
          </Heading>
          <VStack w='100%' mt={10} spacing={4}>
            <Input
              disabled={loadingStore.loading}
              label='Email'
              placeholder='email'
              leftElement={<MdEmail fontSize={18} style={{ color: "rgba(0, 0, 0, .5)" }} />}
              name='email'
              value={loginStore.email}
              type='email'
              onChange={(event) => loginStore.updateEmail(event.target.value)}
            />
            <Box width='100%'>
              <Input
                disabled={loadingStore.loading}
                label='Password'
                placeholder='password'
                showEye
                name='password'
                value={loginStore.password}
                type='password'
                onChange={(event) => loginStore.updatePassword(event.target.value)}
              />
              <Box width='100%' display='flex' justifyContent='flex-end'>
                <ChakraLink
                  mt={2}
                  as={NextLink}
                  href='/fp'
                  fontSize={12}
                  fontWeight='bold'
                  color='#F8CA15'
                >
                  Forgot Password?
                </ChakraLink>
              </Box>
            </Box>
          </VStack>
          <Button
            isLoading={loadingStore.loading}
            mt={8}
            width='100%'
            variant='solid'
            colorScheme='yellow'
            onClick={onLogin}
          >
            Log In
          </Button>
          <Text mt={4} as='b' fontSize={12}>
            Don&apos;t have an account?{" "}
            <span
              style={{
                color: "rgba(0, 0, 0, 0.6)",
                textDecoration: "underline",
              }}
            >
              <ChakraLink href='/auth/signup' as={NextLink}>
                Sign Up Here
              </ChakraLink>
            </span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
});

export default Page;
