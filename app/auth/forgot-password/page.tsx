"use client";

import React from "react";
import { observer } from "mobx-react-lite";
import { Box, Avatar, Heading, Text, Button, useToast } from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { Input } from "@/app/libs/shared/ui/input";
import forgotPasswordStore from "./store";
import loadingStore from "@/app/store/loading.store";

export const Page = observer(() => {
  const toast = useToast();

  const onClick = async () => {
    loadingStore.toggleLoading();

    try {
      setTimeout(() => {
        toast({
          title: "Email sent",
          status: "success",
          duration: 2000,
        });
        loadingStore.toggleLoading();
      }, 5000);
    } catch {
      toast({
        title: "Could not send Email",
        status: "error",
        duration: 2000,
      });
    }
  };

  return (
    <Box width='100vw' height='100vh'>
      <Box
        position='absolute'
        p={4}
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        bgColor='white'
        boxShadow='lg'
        width={400}
        height={300}
        borderRadius={4}
      >
        <Box display='flex' alignItems='center' justifyContent='flex-start' gap={2}>
          <Avatar size='sm' bg='#F8CA15' icon={<FaLock />} />
          <Heading as='h5' fontSize='lg'>
            Forgot Password?
          </Heading>
        </Box>
        <Box mt={4}>
          <Text size='sm' color='GrayText'>
            Enter your email that you used to register your account, so we can send you a link to
            reset your password
          </Text>
        </Box>
        <Box mt={2}>
          <Input
            name='email'
            type='email'
            placeholder='email'
            label='Email'
            value={forgotPasswordStore.email}
            onChange={(event) => forgotPasswordStore.updateEmail(event.target.value)}
            required
          />
        </Box>
        <Button
          isLoading={loadingStore.loading}
          mt={8}
          width='100%'
          variant='solid'
          colorScheme='yellow'
          onClick={onClick}
        >
          Send Mail
        </Button>
      </Box>
    </Box>
  );
});

export default Page;
